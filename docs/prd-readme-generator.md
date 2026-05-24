# PRD: README Generator

**Versão:** 1.0.0
**Data:** 2026-05-24
**Status:** Draft
**Autor:** Morgan (PM Agent)

---

## 1. Visão Geral (Overview)

O **README Generator** é uma ferramenta web projetada para simplificar a criação de arquivos de documentação (README.md) para projetos de software. Através de um formulário intuitivo, os desenvolvedores podem inserir informações essenciais e gerar instantaneamente um arquivo Markdown profissional e padronizado.

---

## 2. Objetivos (Goals)

- Reduzir o tempo gasto na criação manual de READMEs.
- Padronizar a estrutura de documentação em projetos de desenvolvimento.
- Oferecer uma experiência de usuário fluida com feedback em tempo real.

---

## 3. Requisitos Funcionais (FR)

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **FR-1** | **Input de Identidade** | Campos para inserir o nome do projeto e uma descrição detalhada. |
| **FR-2** | **Seleção de Tecnologias** | Lista de tecnologias (ex: React, Node.js, Python) para seleção múltipla. |
| **FR-3** | **Geração de Markdown** | Motor lógico que transforma os inputs em sintaxe Markdown válida. |
| **FR-4** | **Visualização em Tempo Real** | Painel de preview que mostra como o README ficará após renderizado. |
| **FR-5** | **Cópia para Clipboard** | Botão para copiar o código Markdown gerado com um clique. |
| **FR-6** | **Persistência Local** | Salvamento automático dos dados do formulário no `localStorage` do navegador. |
| **FR-7** | **Limpeza de Formulário** | Opção para resetar todos os campos e começar do zero. |

---

## 4. Requisitos Não-Funcionais (NFR)

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **NFR-1** | **Performance** | A geração e o preview devem ser instantâneos (client-side). |
| **NFR-2** | **Usabilidade** | Interface minimalista, focada na produtividade do desenvolvedor. |
| **NFR-3** | **Portabilidade** | Aplicação web funcional em navegadores modernos sem necessidade de backend. |
| **NFR-4** | **Estética Dev** | Suporte a Dark Mode ou tema focado em editores de código. |

---

## 5. Premissas Técnicas

- **Framework:** React 19 (TypeScript) - para consistência com o ecossistema `web-catalog`.
- **Estilização:** Vanilla CSS (CSS Modules ou Global CSS) seguindo o padrão AIOX.
- **Estado:** React Hooks (`useState`, `useEffect`).
- **Persistência:** `localStorage` API para manter o estado entre recarregamentos de página.

---

## 6. Lista de Épicos e Histórias (Draft)

### Épico 1: Fundação e Estrutura do Formulário
- **Story 1.1:** Setup do projeto React com TypeScript.
- **Story 1.2:** Criação dos campos básicos (Nome e Descrição) com validação.

### Épico 2: Motor de Geração e Tecnologias
- **Story 2.1:** Implementação do seletor de tecnologias (chips ou checkboxes).
- **Story 2.2:** Desenvolvimento da lógica de transformação de objeto de estado em string Markdown.

### Épico 3: Preview e Utilidades
- **Story 3.1:** Implementação do painel de Preview (renderização básica de Markdown).
- **Story 3.2:** Integração com a API de Clipboard para cópia rápida.

### Épico 4: Persistência e Refinamento
- **Story 4.1:** Sincronização automática com `localStorage`.
- **Story 4.2:** Refinamento de UI/UX (Estilização final e Dark Mode).

---

## 7. Próximos Passos

1. Validar este PRD com o stakeholder.
2. Acionar `@architect` para definir a estrutura de componentes.
3. Iniciar o desenvolvimento do Épico 1.

---
_Gerado por Morgan, a Strategist PM - 2026-05-24_
