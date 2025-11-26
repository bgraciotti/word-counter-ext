# Word Counter Extension

Uma extensão simples e rápida para Raycast que conta caracteres, palavras, linhas e muito mais em qualquer texto.

## Funcionalidades

- **Contagem de caracteres** - Total de caracteres incluindo espaços
- **Contagem de caracteres sem espaços** - Total excluindo todos os espaços
- **Contagem de palavras** - Total de palavras separadas por espaços
- **Contagem de linhas** - Total de linhas no texto
- **Contagem de sentenças** - Estimativa aproximada de sentenças
- **Contagem de parágrafos** - Parágrafos separados por linhas vazias

## Como usar

1. Abra o Raycast e busque por "Count Words and Characters"
2. Cole ou digite seu texto **diretamente no campo de busca** do Raycast
3. As estatísticas aparecem em **tempo real** em linhas separadas
4. Cada métrica tem sua própria linha com ícone colorido e valor formatado
5. Clique em qualquer métrica para copiar apenas aquele valor
6. Use `Ctrl+C` para copiar todas as estatísticas de uma vez

## Interface

A extensão usa o campo de busca nativo do Raycast (igual ao Shapes Library), com cada estatística exibida em uma linha separada:

- **Ícones coloridos** para cada tipo de métrica
- **Valores formatados** em português (ex: 1.234 ao invés de 1234)
- **Descrição** de cada métrica
- **Empty view** quando não há texto

## Atalhos de teclado

- `Enter` - Copiar valor da métrica selecionada
- `Ctrl+C` - Copiar todas as estatísticas
- `Ctrl+X` - Limpar todo o texto

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (auto-reload)
npm run dev

# Build para produção
npm run build

# Lint
npm run lint
npm run fix-lint
```

## Requisitos

- Raycast para Windows
- Node.js 18.18.4 ou superior

## Licença

MIT
