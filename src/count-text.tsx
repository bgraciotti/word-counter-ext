import { List, ActionPanel, Action, Icon, Color } from "@raycast/api";
import { useState } from "react";

interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  lines: number;
  sentences: number;
  paragraphs: number;
}

interface StatItem {
  id: string;
  title: string;
  value: number;
  icon: Icon;
  iconColor: Color;
  description: string;
}

function calculateStats(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const lines = text === "" ? 0 : text.split(/\n/).length;

  // Count sentences (rough estimation: split by . ! ?)
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  // Count paragraphs (empty lines separate paragraphs)
  const paragraphs = text.trim() === "" ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

  return {
    characters,
    charactersNoSpaces,
    words,
    lines,
    sentences,
    paragraphs,
  };
}

function formatNumber(num: number): string {
  return num.toLocaleString("pt-BR");
}

export default function CountText() {
  const [text, setText] = useState("");
  const stats = calculateStats(text);

  const statItems: StatItem[] = [
    {
      id: "characters",
      title: "Characters",
      value: stats.characters,
      icon: Icon.Text,
      iconColor: Color.Blue,
      description: "Total characters including spaces",
    },
    {
      id: "characters-no-spaces",
      title: "Characters (no spaces)",
      value: stats.charactersNoSpaces,
      icon: Icon.TextInput,
      iconColor: Color.Purple,
      description: "Characters excluding all whitespace",
    },
    {
      id: "words",
      title: "Words",
      value: stats.words,
      icon: Icon.Pencil,
      iconColor: Color.Green,
      description: "Total words separated by spaces",
    },
    {
      id: "lines",
      title: "Lines",
      value: stats.lines,
      icon: Icon.List,
      iconColor: Color.Orange,
      description: "Total number of lines",
    },
    {
      id: "sentences",
      title: "Sentences",
      value: stats.sentences,
      icon: Icon.Document,
      iconColor: Color.Red,
      description: "Approximate sentence count",
    },
    {
      id: "paragraphs",
      title: "Paragraphs",
      value: stats.paragraphs,
      icon: Icon.Paragraph,
      iconColor: Color.Magenta,
      description: "Paragraphs separated by empty lines",
    },
  ];

  const allStatsText = statItems
    .map((item) => `${item.title}: ${formatNumber(item.value)}`)
    .join("\n");

  return (
    <List
      searchBarPlaceholder="Paste or type your text here..."
      onSearchTextChange={setText}
      searchText={text}
      throttle={false}
    >
      {statItems.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          subtitle={item.description}
          icon={{ source: item.icon, tintColor: item.iconColor }}
          accessories={[
            {
              text: formatNumber(item.value),
              icon: Icon.Hashtag,
            },
          ]}
          actions={
            <ActionPanel>
              <ActionPanel.Section title="Copy">
                <Action.CopyToClipboard
                  title={`Copy ${item.title}`}
                  content={formatNumber(item.value)}
                  icon={Icon.Clipboard}
                />
                <Action.CopyToClipboard
                  title="Copy All Statistics"
                  content={allStatsText}
                  icon={Icon.CopyClipboard}
                  shortcut={{ modifiers: ["ctrl"], key: "c" }}
                />
              </ActionPanel.Section>
              <ActionPanel.Section title="Text">
                <Action
                  title="Clear Text"
                  icon={Icon.Trash}
                  shortcut={{ modifiers: ["ctrl"], key: "x" }}
                  onAction={() => setText("")}
                />
              </ActionPanel.Section>
            </ActionPanel>
          }
        />
      ))}
      {text.trim() === "" && (
        <List.EmptyView
          icon={Icon.TextCursor}
          title="No text to analyze"
          description="Start typing or paste text in the search bar above to see statistics"
        />
      )}
    </List>
  );
}
