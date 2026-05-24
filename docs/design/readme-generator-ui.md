# UX/UI Design Spec: README Generator

**Versão:** 1.0.0
**Status:** Design Approved
**Designer:** Uma (UX Design Expert)

---

## 1. Conceito Visual: "Dev-Centric Clean"

A interface foi projetada para ser uma ferramenta de produtividade minimalista. O foco é reduzir a carga cognitiva, separando claramente a entrada de dados da visualização final.

### Atributos da Marca
- **Eficiência:** Feedback instantâneo.
- **Clareza:** Tipografia legível e contraste otimizado.
- **Modernidade:** Estética Dark Mode com acentos vibrantes.

---

## 2. Design Tokens (Atoms)

### Cores (Dark Mode)
| Token | Valor Hex | Uso |
| :--- | :--- | :--- |
| `--bg-base` | `#0D1117` | Fundo principal da página |
| `--bg-surface` | `#161B22` | Cards, inputs e painéis secundários |
| `--border-dim` | `#30363D` | Bordas sutis e divisores |
| `--text-main` | `#E6EDF3` | Títulos e texto primário |
| `--text-muted` | `#8B949E` | Placeholders e labels secundários |
| `--accent-cyan` | `#2FB5F7` | Ações principais e estados de focus |
| `--accent-green` | `#238636` | Botões de sucesso (ex: "Copiar") |

### Tipografia
- **Interface:** `Inter`, sans-serif (Font-weight: 400, 500, 600)
- **Code/Markdown:** `JetBrains Mono` ou `Fira Code` (Mono)

---

## 3. Layout & Estrutura (Templates)

### Split-Pane Layout
- **Painel Esquerdo (Formulário):** 40% de largura. Rolagem independente.
- **Painel Direito (Preview):** 60% de largura. Fundo levemente mais escuro para simular um editor.
- **Breakpoint (768px):** Transição para layout em coluna única (Formulário no topo, Preview abaixo).

---

## 4. Componentes Chave (Molecules & Organisms)

### A. Inputs Modernos
- Fundo: `var(--bg-base)`
- Borda: `1px solid var(--border-dim)`
- Focus: `border-color: var(--accent-cyan); box-shadow: 0 0 0 2px rgba(47, 181, 247, 0.2)`

### B. Seletor de Tecnologias (Tech Chips)
- Chips com fundo `var(--border-dim)` e texto `var(--text-main)`.
- Botão "x" para remover com hover em vermelho sutil.

### C. Botões de Ação
- **Primary:** Background Cyan, Texto Escuro (Alto Contraste).
- **Secondary:** Outline, Transparente.
- **Floating Copy:** No canto superior direito do Preview, fixo.

---

## 5. Micro-interações (Sally's Touch)
- **Real-time Sync:** Conforme o usuário digita, o Preview "pulsa" levemente ou atualiza sem flicker.
- **Copy Success:** Ao clicar em copiar, o botão muda temporariamente para um ícone de "check" verde e volta ao estado original após 2 segundos.
- **Hover States:** Transições suaves (200ms) em todos os elementos interativos.

---

## 6. Próximos Passos (Para @dev)

1. **Global Styles:** Implementar os tokens em um arquivo `variables.css`.
2. **Layout Setup:** Criar o container principal com `display: grid` (split-pane).
3. **Markdown Styles:** Estilizar as tags HTML geradas (h1, h2, code, ul) para que o preview seja fiel ao GitHub.

---
_Uma, desenhando com empatia e precisão 🎨💝_
