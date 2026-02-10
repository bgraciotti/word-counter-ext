# Word Counter - Raycast Extension for Windows

Count characters, words, lines, sentences, and paragraphs in any text with real-time statistics.

## Features

- **Character count** - Total characters including spaces
- **Character count (no spaces)** - Total characters excluding spaces
- **Word count** - Total words separated by spaces
- **Line count** - Total lines in text
- **Sentence count** - Approximate sentence estimation
- **Paragraph count** - Paragraphs separated by blank lines
- **Real-time updates** - Statistics update instantly as you type
- **Color-coded icons** - Visual distinction for each metric
- **Formatted numbers** - Numbers formatted with locale separators
- **Copy individual values** - Click any metric to copy its value
- **Copy all statistics** - Copy all stats at once with `Ctrl+C`

## How to Install

1. Install Node.js (`winget install -e --id OpenJS.NodeJS`)
2. Clone the repository
3. Run: `npm install` then `npm run dev`

## Usage

1. Open Raycast and search for "Count Words and Characters"
2. Paste or type your text **directly in the search bar**
3. Statistics appear **in real-time** as separate list items
4. Each metric shows a colored icon and formatted value
5. Click any metric to copy just that value
6. Use `Ctrl+C` to copy all statistics at once

## Keyboard Shortcuts

- **Enter**: Copy selected metric value
- **Ctrl+C**: Copy all statistics
- **Ctrl+X**: Clear all text

## Changelog

### Version 1.0.0
- 🚀 **Initial release**: Word Counter extension for Raycast Windows
- 📊 **Real-time statistics**: Character, word, line, sentence, and paragraph counts
- 🎨 **Color-coded icons**: Visual distinction for each metric type
- 📋 **Copy actions**: Copy individual values or all statistics at once
- 🔢 **Formatted numbers**: Brazilian Portuguese locale formatting (1.234 instead of 1234)
- ⌨️ **Keyboard shortcuts**: Ctrl+C for copy all, Ctrl+X for clear text

## License

MIT
