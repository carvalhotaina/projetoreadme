# Arquitetura e Stack: README Generator

**Versão:** 1.0.0
**Status:** Approved
**Arquiteta:** Aria (Architect Agent)

---

## 1. Stack Tecnológica Recomendada

Para garantir performance máxima (Client-Side), tipagem robusta e alinhamento com o `web-catalog`, a stack ideal é:

### Core
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 8 (já configurado no projeto)
- **Linguagem:** TypeScript 6.0+ (Strict Mode)

### UI & Styling (AIOX Standard)
- **CSS:** Vanilla CSS com **CSS Modules** para escopo de componentes.
- **Ícones:** `lucide-react` (padrão de mercado para React, leve e completo).
- **Componentes:** Abstrações funcionais personalizadas (sem bibliotecas pesadas como MUI ou Chakra para manter o bundle minimalista).

### State & Persistência
- **Estado Local:** React Context API + `useReducer` para gerenciar o formulário complexo.
- **Persistência:** Custom Hook `useLocalStorage` para sincronização reativa com o browser.

### Markdown Logic
- **Rendering (Preview):** `react-markdown` (seguro e extensível).
- **Syntax Highlighting:** `prismjs` ou `shiki` (opcional, para o bloco de código Markdown).

---

## 2. Estrutura de Pastas (Component-Based)

```text
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/              # Inputs, Buttons, Chips (Design System)
│   ├── Layout/          # Header, Main Container, Footer
│   ├── Form/            # Seções do formulário (Identidade, Techs)
│   └── Preview/         # Painel de visualização Markdown
├── hooks/               # useLocalStorage, useREADMEGenerator
├── context/             # READMEContext (Estado Global do App)
├── utils/               # gerador de strings Markdown, formatadores
├── types/               # Interfaces e Types (READMEData, TechItem)
└── assets/              # Estilos globais e constantes
```

---

## 3. Decisões Arquiteturais (ADRs)

### ADR-1: Client-Side Only
**Decisão:** Toda a lógica de geração será executada no navegador.
**Razão:** Custo zero de infraestrutura, privacidade dos dados do usuário e performance instantânea.

### ADR-2: Context API vs Redux
**Decisão:** Usar Context API.
**Razão:** O estado é contido em uma única página/aplicação. Redux seria overkill.

### ADR-3: Markdown as String Template
**Decisão:** A geração do Markdown usará *Template Literals* puros em uma função utilitária dedicada.
**Razão:** Facilidade de manutenção e teste unitário da lógica de string sem depender de componentes React.

---

## 4. Próximos Passos (Para @dev)

1. **Setup de Tipos:** Definir a interface `READMEData` no diretório `types/`.
2. **Hook de Persistência:** Implementar `useLocalStorage` para evitar perda de dados.
3. **Gerador Util:** Criar `generateMarkdown(data: READMEData): string`.
4. **UI Refinement:** Seguir a estética "Dev/Minimalist" (Dark Mode por padrão).

---
_Aria - Architecting the Core 🏗️_
