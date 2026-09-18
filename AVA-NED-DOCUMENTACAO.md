# 📘 Documentação do Projeto AVA NED — NossaEscolaDigital

## Índice

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Estrutura do Arquivo Figma](#2-estrutura-do-arquivo-figma)
3. [Fluxos Identificados](#3-fluxos-identificados)
4. [Componentes](#4-componentes)
5. [Design System](#5-design-system)
6. [Padrões de Layout](#6-padrões-de-layout)
7. [Funcionalidades Encontradas](#7-funcionalidades-encontradas)
8. [Arquitetura da Informação](#8-arquitetura-da-informação)
9. [Oportunidades Identificadas](#9-oportunidades-identificadas)
10. [Próximas Etapas Sugeridas](#10-próximas-etapas-sugeridas)

---

## 1. Visão Geral do Projeto

### Objetivo da Plataforma

O AVA NED (Nossa Escola Digital) é um Ambiente Virtual de Aprendizagem corporativo baseado em Moodle/IOMAD. Sua finalidade é permitir que empresas disponibilizem treinamentos obrigatórios e opcionais para seus colaboradores de forma organizada, rastreável e escalável.

### Usuários

| Perfil | Descrição |
|--------|-----------|
| **Estudante** | Colaborador que consome cursos, trilhas, atividades e certificações |
| **Gestor/Administrador** | Responsável pela gestão de empresas, usuários, cursos, relatórios e configurações |

### Problemas que Resolve

- Centralização de treinamentos corporativos em uma única plataforma
- Controle de progresso e conclusão de cursos por colaborador
- Gestão multi-empresa (modelo IOMAD/multi-tenant)
- Emissão e gestão de certificados
- Comunicação entre instrutores e alunos
- Relatórios gerenciais de desempenho

### Diferenciais

- **White Label**: interface neutra personalizável por marca/cliente
- **Multi-tema**: suporte a múltiplos temas (White Label, Cellus, SenaiRS, NossaEscola, Senaiplay)
- **Design System robusto**: 385 variáveis, 6 coleções de tokens, 1641 componentes, 135 component sets
- **Foco em usabilidade**: arquitetura de informação clara, navegação consistente
- **Suporte a múltiplos modos**: Light Mode, Dark Mode, temas por cliente


---

## 2. Estrutura do Arquivo Figma

O arquivo `NossaEscolaDigital` contém **26 páginas** organizadas por seções temáticas, separadas por divisores visuais (`---`).

### Páginas de Documentação e Projeto

| Página | Objetivo |
|--------|----------|
| 🖼️ THUMBNAIL | Capa do arquivo no Figma (1920×960) |
| 📝 DOCUMENTAÇÃO | Informações gerais do projeto |
| ↳ Dev? Leia-me | Documentação técnica para desenvolvedores |
| ↳ Apresentação | Apresentação visual do projeto |
| ↳ Sitemap | Sitemaps do Estudante, Gestor e Jornadas de Usuário |

### Páginas de Interface — Perfil Estudante

| Página | Objetivo |
|--------|----------|
| ✅ Perfil: Usuários/Estudantes | Separador de seção |
| ↳ Desktop White Label | **Página principal** — todas as telas desktop do estudante em tema neutro |
| ↳ Desktop Cellus | Variação temática Cellus do fluxo do estudante |
| ↳ Desktop Senaiplay | Variação temática Senaiplay do fluxo do estudante |
| ↳ Responsiva | Versões responsivas/mobile das telas do estudante |

### Páginas de Interface — Perfil Gestor

| Página | Objetivo |
|--------|----------|
| ✅ Perfil: Gestores | Separador de seção |
| ↳ Desktop | Telas desktop do gestor (White Label) |
| ↳ Desktop Cellus | Variação temática Cellus do gestor |
| ↳ Desktop SenaiRS | Variação temática SenaiRS do gestor |
| ↳ Desktop NossaEscola | Variação temática NossaEscola do gestor |
| ↳ Responsiva | Versões responsivas do gestor (vazia atualmente) |

### Páginas de Outros Artefatos

| Página | Objetivo |
|--------|----------|
| 📧 Outros | Separador de seção |
| ↳ Certificados | Templates de certificados e propostas visuais |
| ↳ Logo | Propostas e variações do logotipo NossaEscolaDigital |
| ↳ E-mail | Templates de e-mail transacional |
| 📧 Demandas | Separador de seção |
| ↳ Relatórios Ned atual | Referências de relatórios do sistema atual |


### Páginas do Design System (Foundations)

| Página | Objetivo |
|--------|----------|
| 🧱 FOUNDATIONS | Separador de seção |
| ↳ Typography | Escalas tipográficas, hierarquia de textos |
| ↳ Color Styles | Paleta de cores e estilos de cor |
| ↳ Grids | Sistemas de grid (colunas, margens) |
| ↳ Holographic Gradients | Gradientes holográficos decorativos |
| ↳ Glassmorphism | Estilos de vidro fosco |
| ↳ Grids Widgets | Grids específicos para widgets do dashboard |
| ↳ Spacing | Escala de espaçamentos |
| ↳ Icons | Biblioteca de ícones |
| ↳ Elevation | Sombras e elevações |
| ↳ Empty State Ilustration | Ilustrações para estados vazios |
| ↳ Utilities | Componentes utilitários (identificação) |

### Páginas de Componentes

| Página | Objetivo |
|--------|----------|
| 💎 COMPONENTS | Separador de seção |
| ↳ Alert Box | Caixas de alerta (info, warning, danger, success) |
| ↳ Avatar | Componentes de avatar com variações de tamanho |
| ↳ Badges | Badges e indicadores numéricos |
| ↳ Breadcrumbs | Navegação por migalhas de pão |
| ↳ Button | Botões (primário, secundário, outline, ghost, etc.) |
| ↳ Number button | Botões numéricos |
| ↳ Calendar | Componente de calendário completo |
| ↳ Card | Cards genéricos e de curso |
| ↳ Chat | Chat com busca, voz e mensagens |
| ↳ Checkbox + Radio button | Controles de seleção |
| ↳ Collapse | Componentes colapsáveis/accordion |
| ↳ Cropper | Recorte de imagem |
| ↳ Color Picker | Seletor de cor |
| ↳ Date Picker | Seletor de data e hora |
| ↳ Data Viz | Gráficos e visualização de dados |
| ↳ Empty State | Estados vazios com ilustrações |
| ↳ Footer | Rodapé da plataforma |
| ↳ Guided Tour | Tour guiado/onboarding |
| ↳ Header | Cabeçalho/barra de navegação |
| ↳ List Section Item | Itens de lista/seção |
| ↳ Modal | Modais e sheets |
| ↳ Pagination | Paginação |
| ↳ Progress Bar | Barras de progresso |
| ↳ Rich Text Editor | Editor de texto rico |
| ↳ Scroll Bars | Barras de rolagem |
| ↳ Segmented | Controles segmentados |
| ↳ Select | Dropdowns e selects |
| ↳ Skeleton | Placeholders de carregamento |
| ↳ Snackbar | Notificações temporárias |
| ↳ Stepper | Passos/wizard |
| ↳ Tab | Abas de navegação |
| ↳ Table | Tabelas de dados |
| ↳ Tags | Tags e etiquetas |
| ↳ Textfield | Campos de entrada de texto |
| ↳ Time Picker | Seletor de horário |
| ↳ Toggle | Switches/toggles |
| ↳ Tooltip | Dicas de contexto |
| ↳ Upload file modal | Modal de upload de arquivo |

### Páginas de Assets

| Página | Objetivo |
|--------|----------|
| 📁 ASSETS | Separador de seção |
| ↳ Moodboard | Referências visuais e inspirações |
| ↳ Logo 2 | Exploração visual do logotipo |
| ↳ Playground | Área de experimentação |


---

## 3. Fluxos Identificados

### 3.1 Fluxo Principal do Estudante (Desktop White Label)

```
Login
  ↓
Home (Dashboard)
  ↓
├── Meus Cursos → Página do Curso → Aulas → Conclusão → Certificado
├── Minhas Trilhas → Trilha Específica → Cursos da Trilha
├── Cursos Disponíveis → Inscrição → Início do Curso
├── Vitrine → Visualização de Cursos → Inscrição
├── Calendário → Eventos e Prazos
├── Mensagens → Conversas com Instrutores
├── Anotações → Notas Pessoais
├── Notificações → Alertas do Sistema
├── Notas → Desempenho Acadêmico
├── Central de Ajuda → FAQ / Suporte
├── Perfil → Informações Pessoais
└── Preferências → Configurações de Conta
```

### 3.2 Fluxo de Login

```
Tela de Login
  ↓
├── Login com credenciais
├── Recuperação de senha
├── Primeiro acesso
└── Login social (se configurado)
```

### 3.3 Fluxo de Aprendizagem

```
Meus Cursos
  ↓
Página do Curso (informações, módulos, progresso)
  ↓
Aula (conteúdo: vídeo, SCORM, texto, PDF)
  ↓
Atividade (quiz, exercício, tarefa)
  ↓
Avaliação / Feedback
  ↓
Conclusão do Módulo
  ↓
Certificado (emissão e download)
```

### 3.4 Fluxo de Trilhas de Aprendizagem

```
Minhas Trilhas
  ↓
Trilha Específica (visão geral, cursos obrigatórios/opcionais)
  ↓
Curso da Trilha
  ↓
Aula → Atividade → Conclusão
  ↓
Próximo Curso da Trilha
  ↓
Conclusão da Trilha
```

### 3.5 Fluxo do Gestor

```
Login (Gestor)
  ↓
Home (Dashboard Administrativo)
  ↓
├── Gestão de Empresas → CRUD de Empresas
├── Gestão de Usuários → CRUD de Colaboradores
├── Gestão de Cursos → Criação e Configuração
├── Relatórios → Conclusão, Desempenho, Acessos
├── Calendário → Gestão de Eventos
├── Mensagens → Comunicação
├── Notificações → Alertas Administrativos
├── Perfil → Dados do Gestor
└── Central de Ajuda → Suporte
```

### 3.6 Fluxo de Mensagens

```
Mensagens
  ↓
├── Lista de Conversas
├── Nova Mensagem → Selecionar Destinatário → Enviar
├── Conversa Aberta → Responder / Anexar
└── Drawer de Mensagens (overlay sobre outras telas)
```

### 3.7 Fluxo de Calendário

```
Calendário
  ↓
├── Visão Mensal → Eventos por dia
├── Visão Semanal → Detalhes por semana
└── Evento → Detalhes → Acessar Curso/Atividade
```


---

## 4. Componentes

O arquivo contém **1641 componentes** organizados em **135 component sets**. Abaixo, a categorização por tipo:

### Navigation

- Header/Navbar
- Sidebar/Menu lateral
- Breadcrumbs
- Tab navigation
- Pagination
- Navigation items (7 variantes)
- Footer

### Buttons & Actions

- Button (primário, secundário, outline, ghost, danger, disabled, loading)
- Number button
- Toggle/Switch
- Float button (FAB)

### Cards

- Card genérico
- Card de Curso (com thumbnail, progresso, status)
- Card Components (7 variantes para temas)

### Forms & Inputs

- Textfield (default, error, disabled, focused, com ícone)
- Select/Dropdown
- Checkbox
- Radio button
- Date Picker
- Time Picker
- Color Picker
- Rich Text Editor
- Upload file modal

### Data Display

- Table (com sorting, pagination, filters)
- Data Viz (gráficos de barras, linhas, pizza)
- Progress Bar
- Badges
- Tags
- List Section Item
- Avatar

### Feedback & Overlays

- Alert Box (info, success, warning, danger)
- Snackbar/Toast
- Modal/Dialog
- Tooltip
- Guided Tour
- Empty State (com ilustrações)
- Skeleton loading

### Calendar & Time

- Calendar (visão mensal, semanal)
- Calendar Header Item (2 variantes)
- Date Picker
- Time Picker

### Communication

- Chat (busca, mensagens, voz)
- Voice Chat (component set)

### Layout & Structure

- Collapse/Accordion
- Stepper
- Segmented control
- Scroll Bars
- Cropper

### Utility

- Identification (component set)
- Scorm player (5 variantes)
- Icons (library_books, insert_chart, bookmark, schedule, chat_bubble, mail, alarm)

### Componentes Locais por Tela

Cada página de tela (White Label, Cellus, Senaiplay, etc.) possui uma seção "Componentes locais" com elementos específicos daquele contexto:
- Barra de Progresso (instance)
- Card de Curso (instance)
- Lista de Cursos (instance)
- Item de Aula (instance)
- Item de Atividade (instance)


---

## 5. Design System

### 5.1 Variáveis e Tokens

O sistema possui **385 variáveis** distribuídas em **6 coleções**:

#### Coleções de Tokens

| Coleção | Variáveis | Modos |
|---------|-----------|-------|
| Color Primitives | 152 | Mode (padrão), Cellus, SenaiRS |
| Color (semântico) | 119 | Light Mode, Dark Mode, Cellus |
| Typescale | 60 | Baseline |
| Typeface | 26 | Desktop, Mobile |
| Size | 20 | Mode 1 |
| Gestão de Usuários | 8 | Mode 1 |

#### Distribuição por Tipo

| Tipo | Quantidade |
|------|-----------|
| COLOR | 270 |
| FLOAT | 94 |
| STRING | 20 |
| BOOLEAN | 1 |

### 5.2 Cores

#### Color Primitives (escalas de 50 a 900)

- **Primary**: Azul principal (escala completa 50–900)
- **Secondary**: Cor secundária (escala completa 50–900)
- **Danger**: Vermelho para erros (escala 50–900)
- **Success**: Verde para sucesso (escala 50–900)
- **Warning**: Amarelo/laranja para alertas (escala 50–900)
- **Info**: Azul informativo (escala 50–900)
- **Neutral**: Cinzas neutros (escala 50–900, White, Black)

#### Overlay (transparências)

- Overlays para cada cor semântica (escalas 50–900)
- Overlay/Dark (escala 50–900)
- Overlay/Light (escala 50–900)

#### Tokens Semânticos (Coleção "Color")

Organizados por **função**:

- **Background**: Neutral, Primary, Secondary, Semantic (Danger/Success/Info/Warning), Overlays
- **Text**: Neutral (50–950), Primary (600–800), Semantic
- **Stroke**: Neutral, Primary, Semantic, Overlays
- **Icon**: Neutral, Primary, Secondary, Semantic, Áreas (Eixo 01–10)
- **Shadow**: Neutral Overlay, Primary Overlay, Secondary Overlay, Semantic Overlay
- **Dashboard**: Primary, Semantic Overlay
- **Brand**: Text, Accent

### 5.3 Tipografia

#### Famílias

| Token | Descrição |
|-------|-----------|
| Family/Brand | Fonte da marca |
| Family/Plain | Fonte de corpo |

#### Escala Tipográfica (Typeface — Desktop/Mobile)

| Nível | Uso |
|-------|-----|
| Headline 4XL | Títulos hero/destaque |
| Headline XXXL | Títulos de seção principal |
| Headline XXL | Títulos de bloco |
| Title XL | Títulos de card/módulo |
| Title L | Subtítulos |
| Body M | Texto de corpo principal |
| Body S | Texto secundário |
| Body XS | Texto auxiliar |
| Body XXS | Texto mínimo |
| Caption XXXS | Legendas e labels |

Cada nível possui:
- Font Family
- Size
- Line Height
- Weight (Regular, Medium, Semibold, Bold)

#### Pesos Disponíveis

- Regular
- Medium
- Semibold
- Bold

### 5.4 Espaçamentos (Spacing)

| Token | Descrição |
|-------|-----------|
| Spacing/None | 0 |
| Spacing/4XS | Extra extra extra small |
| Spacing/XXXS | Extra extra small |
| Spacing/XXS | Extra small |
| Spacing/XS | Small |
| Spacing/S | Padrão pequeno |
| Spacing/M | Médio |
| Spacing/L | Large |
| Spacing/XL | Extra large |
| Spacing/XXL | Extra extra large |
| Spacing/XXXL | Extra extra extra large |
| Spacing/4XL | Máximo |

### 5.5 Tamanhos (Size)

| Token | Descrição |
|-------|-----------|
| Size/XXXS → Size/4XL | Escala completa de tamanhos |

### 5.6 Corner Radius

| Token | Uso |
|-------|-----|
| Corner/None | Sem arredondamento |
| Corner/4XS | Mínimo |
| Corner/XXXS | Muito pequeno |
| Corner/XXS | Pequeno |
| Corner/XS | Padrão pequeno |
| Corner/S | Padrão |
| Corner/M | Médio |
| Corner/Full | Totalmente arredondado (pill) |

### 5.7 Sombras (Elevation)

Tokens de sombra definidos em:
- Shadow/Neutral Overlay (100–500): 5 níveis de elevação neutra
- Shadow/Primary Overlay: Sombra com cor primária
- Shadow/Secondary Overlay: Sombra com cor secundária
- Shadow/Semantic Overlay: Danger, Success, Info, Warning (300)

### 5.8 Ícones

Biblioteca de ícones organizada em uma página dedicada, incluindo:
- Material Symbols / Material Icons
- Ícones customizados para navegação
- Ícones de status (insert_chart, bookmark, schedule, chat_bubble, mail, alarm)
- Ícone `brand_family` para identidade
- Ícone `library_books` para cursos

### 5.9 Grids

Documentados na página "Grids" e "Grids Widgets":
- Grids para layout de página padrão
- Grids específicos para widgets do dashboard
- Dois conjuntos de grids documentados (versão visível e alternativa)


---

## 6. Padrões de Layout

### Estrutura de Página Padrão

```
┌─────────────────────────────────────────────────┐
│ Header (Navbar fixa no topo)                    │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │  Content Area                        │
│ (Menu)   │  ┌──────────────────────────────┐    │
│          │  │ Page Title + Breadcrumbs      │    │
│          │  ├──────────────────────────────┤    │
│          │  │ Main Content                  │    │
│          │  │                               │    │
│          │  │                               │    │
│          │  └──────────────────────────────┘    │
│          │                                      │
├──────────┴──────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘
```

### Dimensões Base

- **Desktop**: 1440px de largura (telas padrão de design)
- **Responsivo**: Breakpoints detectados em 390px (mobile), com telas intermediárias
- **Content area**: Variável conforme sidebar expandida/colapsada

### Organização no Figma

Cada página de telas usa **Sections** do Figma para agrupar telas por funcionalidade:
- Cada section é nomeada pela funcionalidade (ex: "Home", "Meus cursos", "Aulas")
- Dentro de cada section: frames de 1440px para as variações de estado da tela
- Seção "Componentes locais" agrupa componentes específicos daquele tema

### Padrões de Seções (Desktop White Label)

As seções seguem uma disposição horizontal com espaçamento consistente:
- Login → Home → Meus Cursos → Minhas Trilhas → Cursos Disponíveis → Aulas → Certificado → Calendário → Mensagens → Anotações → Notificações → Notas → Central de Ajuda → Perfil → Preferências → Vitrine

### Convenções Visuais

- Fundo de sections: cinza escuro (#444444) para contraste com frames brancos
- Frames de tela: fundo branco ou cinza muito claro (#F6F7F9)
- Cards e containers: fundo branco com sombra sutil
- Sidebar: fundo claro com itens de navegação vertical

### Responsividade

A página "↳ Responsiva" do perfil Estudante contém adaptações para:
- Home (mobile)
- Meus Cursos (mobile)
- Minhas Trilhas (mobile — 2 variações)
- Aula/Página do Curso (390px mobile — referência)
- Certificados (390px mobile — referência)
- Calendário mês (390px mobile — referência)
- Mensagens (mobile)


---

## 7. Funcionalidades Encontradas

### Login

- Login com email/senha
- Recuperação de senha
- Primeiro acesso
- Tela de boas-vindas
- Múltiplas variações visuais por tema

### Home (Dashboard do Estudante)

- Visão geral de progresso
- Cursos ativos/em andamento
- Atividades pendentes
- Calendário resumido
- Recomendações de cursos
- Notificações recentes
- Widgets de métricas (gráficos)
- Mensagens não lidas (drawer overlay)

### Meus Cursos

- Lista de cursos matriculados
- Filtros por status (em andamento, concluídos, não iniciados)
- Cards com thumbnail, título, progresso percentual
- Barra de progresso visual

### Minhas Trilhas

- Trilhas de aprendizagem agrupando cursos
- Visualização do progresso geral da trilha
- Cursos obrigatórios e opcionais dentro da trilha

### Cursos Disponíveis

- Catálogo de cursos para inscrição
- Filtros por categoria, área, tipo
- Busca por nome
- Cards de apresentação de curso

### Vitrine

- Exposição de cursos destacados
- Possivelmente um catálogo público ou curado

### Aulas

- Player de conteúdo (vídeo, SCORM, PDF, texto)
- Menu lateral de módulos/aulas
- Progresso do módulo
- Navegação entre aulas (anterior/próxima)
- Área de atividades e exercícios
- Componente SCORM (5 variantes)
- Múltiplas variações de layout de conteúdo

### Certificado

- Visualização do certificado emitido
- Download em PDF
- Histórico de certificados obtidos

### Calendário

- Visão mensal com eventos
- Visão semanal
- Detalhes de eventos (data, curso, tipo)
- Filtros por tipo de evento

### Mensagens

- Lista de conversas
- Composição de nova mensagem
- Conversa individual com histórico
- Drawer overlay de mensagens (acessível de qualquer tela)
- Indicador de não lidas

### Anotações

- Notas pessoais do estudante
- Vinculadas a cursos/aulas (possível)
- CRUD de anotações

### Notificações

- Lista de notificações do sistema
- Categorização por tipo
- Marcar como lida/não lida
- Ações rápidas

### Notas

- Visualização de notas/pontuações
- Por curso e atividade
- Histórico de desempenho

### Central de Ajuda

- FAQ categorizado
- Busca por tópicos
- Possível chat de suporte
- Artigos de ajuda

### Perfil

- Dados pessoais
- Foto de perfil (com cropper)
- Informações de contato
- Histórico de cursos

### Preferências

- Configurações de conta
- Notificações (ativar/desativar)
- Idioma
- Tema visual
- Privacidade

### Gestão (Perfil Gestor)

Seção robusta com:
- Dashboard administrativo
- Gestão de empresas
- Gestão de usuários/colaboradores
- Gestão de cursos e trilhas
- Relatórios (conclusão, desempenho, acessos)
- Configurações da plataforma
- Atribuição de perfis e permissões


---

## 8. Arquitetura da Informação

### Sitemap — Perfil Estudante

```
AVA NED — Estudante
│
├── Login
│   ├── Credenciais
│   ├── Recuperar senha
│   └── Primeiro acesso
│
├── Home (Dashboard)
│   ├── Cursos em andamento
│   ├── Atividades pendentes
│   ├── Calendário resumido
│   ├── Recomendações
│   └── Notificações recentes
│
├── Aprendizagem
│   ├── Meus Cursos
│   │   ├── Em andamento
│   │   ├── Concluídos
│   │   └── Não iniciados
│   ├── Minhas Trilhas
│   │   ├── Trilha ativa
│   │   └── Trilha concluída
│   ├── Cursos Disponíveis
│   │   ├── Catálogo
│   │   └── Filtros
│   └── Vitrine
│
├── Conteúdo
│   ├── Página do Curso
│   │   ├── Informações
│   │   ├── Módulos
│   │   └── Progresso
│   ├── Aula
│   │   ├── Player (vídeo/SCORM/texto)
│   │   ├── Menu de navegação
│   │   └── Atividades
│   └── Certificado
│       ├── Visualização
│       └── Download
│
├── Comunicação
│   ├── Mensagens
│   │   ├── Inbox
│   │   ├── Nova mensagem
│   │   └── Conversa
│   ├── Notificações
│   └── Anotações
│
├── Acadêmico
│   ├── Notas
│   └── Calendário
│       ├── Visão mensal
│       └── Visão semanal
│
├── Suporte
│   └── Central de Ajuda
│       ├── FAQ
│       └── Busca
│
└── Conta
    ├── Perfil
    └── Preferências
```

### Sitemap — Perfil Gestor

```
AVA NED — Gestor/Administrador
│
├── Login
│
├── Home (Dashboard Administrativo)
│   ├── KPIs (usuários, cursos, conclusões)
│   ├── Gráficos de desempenho
│   └── Alertas
│
├── Gestão
│   ├── Empresas
│   │   ├── Listar
│   │   ├── Criar/Editar
│   │   └── Detalhes
│   ├── Usuários
│   │   ├── Listar
│   │   ├── Criar/Editar
│   │   ├── Importar
│   │   └── Perfis/Permissões
│   ├── Cursos
│   │   ├── Listar
│   │   ├── Criar/Editar
│   │   └── Configurar
│   └── Trilhas
│       ├── Listar
│       └── Criar/Editar
│
├── Relatórios
│   ├── Conclusão
│   ├── Desempenho
│   └── Acessos
│
├── Comunicação
│   ├── Mensagens
│   ├── Notificações
│   └── Calendário
│
├── Suporte
│   └── Central de Ajuda
│
└── Conta
    └── Perfil
```


---

## 9. Oportunidades Identificadas

> ⚠️ Nenhuma alteração deve ser feita neste momento. Estas são observações para futuras iterações.

### Organização do Arquivo

1. **Duplicação entre temas**: As páginas Desktop Cellus, Senaiplay, SenaiRS e NossaEscola replicam toda a estrutura de telas. Considerar o uso de variáveis/modes de forma mais eficiente para reduzir duplicação.
2. **Frames soltos**: Algumas páginas possuem frames residuais (ex: "Text" com 0×15px, "Frame" sem conteúdo aparente) que podem ser limpados.
3. **Instâncias fora de sections**: Componentes soltos na página Desktop Cellus (ex: "Float btn", "Barra de Progresso") fora das sections organizacionais.
4. **Elementos de referência misturados**: Imagens de referência (image 16, 18, 19, 20, 21) misturadas com telas finais nas páginas temáticas.

### Design System

5. **Overlay vs Primitives**: Existe uma coleção "Overlay" dentro de Color Primitives que poderia ser uma coleção separada para maior clareza.
6. **Coleção "Gestão de Usuários"**: Parece ser uma coleção utilitária com variáveis do tipo STRING (Estudante, Docente, Administrador, etc.) que poderiam ser melhor nomeadas ou documentadas.
7. **Modo "Dark Mode"**: Existe na coleção Color mas não há evidência de telas em dark mode. Validar se está completo.
8. **Estilos locais vazios**: O arquivo retornou 0 estilos publicados, embora use 385 variáveis. Considerar publicar estilos para facilitar o uso.

### Componentização

9. **Componentes locais por tela**: Cada tema possui uma seção "Componentes locais" com instances de componentes base. Isso sugere que componentes poderiam ser melhor centralizados.
10. **Nomenclatura inconsistente**: Alguns component sets possuem nomes genéricos (ex: "Component 1", "Frame 351") que deveriam ser renomeados.
11. **Hierarquia de componentes**: Os 135 component sets e 1641 componentes indicam bom nível de componentização, mas a categorização pode ser melhorada.

### Responsividade

12. **Cobertura mobile limitada**: A página responsiva cobre apenas parte das telas (Home, Meus Cursos, Trilhas, Aulas, Certificados, Calendário, Mensagens). Faltam: Login, Notas, Notificações, Perfil, Preferências, Central de Ajuda.
13. **Breakpoints intermediários**: Não foram identificados breakpoints tablet (768px, 1024px). Apenas desktop (1440px) e mobile (390px).
14. **Responsiva do Gestor**: Página vazia — nenhuma adaptação mobile foi feita para a área administrativa.

### Funcional

15. **Acessibilidade**: Não foram identificados tokens de foco, estados :focus-visible, ou indicadores de acessibilidade no design system.
16. **Estados de loading**: Skeleton screens existem como componente, mas sua aplicação nas telas não é evidente.
17. **Error states**: Poucos estados de erro visíveis nas telas (campos de formulário com erro, páginas de erro 404/500, etc.)
18. **Internacionalização**: O design não prevê variação de comprimento de texto para diferentes idiomas.

### Visual

19. **Gradientes holográficos**: Existem como assets mas não são aplicados nas telas do produto — podem ser depreciados ou melhor integrados.
20. **Glassmorphism**: Existente como foundation mas sem aplicação evidente nas telas.
21. **Empty State Illustrations**: Definidas como foundation, confirmar aplicação consistente em todas as telas de estado vazio.


---

## 10. Próximas Etapas Sugeridas

### Fase 1 — Organização e Limpeza (Foundation)

1. **Documentação** ✅ (este documento)
2. **Limpeza do arquivo**: Remover frames residuais, imagens soltas, elementos sem função
3. **Renomeação de componentes**: Padronizar nomes genéricos (Component 1, Frame 351, etc.)
4. **Reorganização de pages**: Consolidar separadores, limpar páginas vazias
5. **Auditoria de variáveis**: Validar Dark Mode, revisar Overlays, documentar "Gestão de Usuários"

### Fase 2 — Fortalecimento do Design System

6. **Componentização avançada**: Revisar e documentar todos os 135 component sets
7. **Auto Layout completo**: Garantir que todos os componentes usam Auto Layout corretamente
8. **Estados interativos**: Adicionar hover, active, focus, disabled a todos os componentes relevantes
9. **Tokens de acessibilidade**: Criar tokens para foco, contraste, target size
10. **Publicação de estilos**: Publicar biblioteca de componentes e estilos

### Fase 3 — Completude de Telas

11. **Estados de erro**: Criar telas para cenários de erro (formulários, conexão, 404, 500)
12. **Loading states**: Aplicar skeleton screens em todas as telas
13. **Empty states**: Garantir ilustrações e CTAs em todos os estados vazios
14. **Feedback visual**: Snackbars, toasts e confirmações em todos os fluxos

### Fase 4 — Responsividade

15. **Breakpoints intermediários**: Criar variações tablet (768px, 1024px)
16. **Mobile completo (Estudante)**: Completar telas faltantes (Login, Notas, Notificações, etc.)
17. **Mobile Gestor**: Iniciar adaptação responsiva da área administrativa
18. **Testes de usabilidade mobile**: Validar navegação e touch targets

### Fase 5 — Área Administrativa (Expansão)

19. **Redesign do painel de gestão**: Modernizar telas administrativas
20. **Novos fluxos de gestão**: Relatórios avançados, bulk actions, importação
21. **Dashboards inteligentes**: KPIs, gráficos interativos, filtros avançados

### Fase 6 — Protótipos e Validação

22. **Prototipagem interativa**: Criar protótipos navegáveis dos fluxos principais
23. **Handoff para desenvolvimento**: Preparar especificações técnicas
24. **Documentação de componentes**: Criar guia de uso de cada componente
25. **Testes com usuários**: Validar usabilidade com Estudantes e Gestores reais

### Fase 7 — Evolução Contínua

26. **Design tokens para código**: Exportar tokens para CSS/Tailwind
27. **Storybook/Component library**: Alinhar Design System com código
28. **Versionamento**: Estabelecer processo de versionamento do design
29. **Governance**: Definir processos de revisão e aprovação de mudanças

---

## Metadados do Arquivo

| Propriedade | Valor |
|-------------|-------|
| Nome do arquivo | NossaEscolaDigital |
| File Key | YYG8DElOmUqG7ygfdtG04t |
| Última modificação | 2026-07-24T12:34:25Z |
| Versão | 2379766054663101188 |
| Total de páginas | 26 |
| Total de componentes | 1641 |
| Total de component sets | 135 |
| Total de variáveis | 385 |
| Total de coleções | 6 |
| Modos de cor | Light, Dark, Cellus, SenaiRS |
| Resolução base | 1440×1024 (Desktop), 390px (Mobile) |

---

*Documentação gerada em 27/07/2026 como base para evolução do projeto AVA NED.*
*Este documento deve ser atualizado conforme o projeto evolui.*
