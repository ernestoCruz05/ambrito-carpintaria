# Portfolio - Guia de Gestão

Este guia explica como adicionar, editar ou remover projetos do portfólio sem alterar código.

## Estrutura de Pastas

```
public/
└── portfolio/
    ├── cozinha-alfama/
    │   ├── cover.jpg       ← Imagem principal (obrigatório)
    │   ├── 01.jpg          ← Imagens da galeria
    │   ├── 02.jpg
    │   └── 03.jpg
    ├── roupeiro-foz/
    │   ├── cover.jpg
    │   ├── 01.jpg
    │   └── 02.jpg
    └── [novo-projeto]/
        └── ...
```

## Como Adicionar um Novo Projeto

### 1. Criar a pasta do projeto

Crie uma nova pasta em `public/portfolio/` com um nome identificativo (sem espaços, usar hífens):

```bash
mkdir public/portfolio/cozinha-cascais
```

### 2. Adicionar as imagens

- **cover.jpg** - Imagem de capa (obrigatória). Recomendado: 1200x800px ou superior
- **01.jpg, 02.jpg, etc.** - Imagens da galeria

**Formatos suportados:** JPG, PNG, WebP

### 3. Registar no ficheiro JSON

Abra `src/app/portfolio/data/projects.json` e adicione o novo projeto:

```json
{
  "id": "cozinha-cascais",           // ← Deve corresponder ao nome da pasta
  "title": "Cozinha Cascais",        // ← Nome de exibição
  "category": "cozinhas",            // ← Ver categorias disponíveis abaixo
  "location": "Cascais",             // ← Localização do projeto
  "year": 2024,                      // ← Ano de conclusão
  "description": "Descrição detalhada do projeto...",
  "featured": false,                 // ← true = destaque na grelha
  "cover": "cover.jpg",              // ← Nome do ficheiro de capa
  "images": ["01.jpg", "02.jpg"]     // ← Lista de imagens da galeria
}
```

## Categorias Disponíveis

| ID           | Etiqueta        |
|--------------|-----------------|
| `cozinhas`   | Cozinhas        |
| `roupeiros`  | Roupeiros       |
| `wc`         | Casas de Banho  |
| `salas`      | Salas           |
| `escritorios`| Escritórios     |
| `comercial`  | Comercial       |

### Adicionar Nova Categoria

No mesmo ficheiro JSON, adicione à secção `categories`:

```json
{
  "id": "exteriores",
  "label": "Exteriores"
}
```

## Como Remover um Projeto

1. Remova a entrada do ficheiro `projects.json`
2. (Opcional) Apague a pasta do projeto em `public/portfolio/`

## Dicas de Otimização de Imagens

- **Tamanho máximo recomendado:** 2000px no lado maior
- **Formato preferido:** WebP (menor tamanho) ou JPG
- **Compressão:** Use ferramentas como [Squoosh](https://squoosh.app/) ou [TinyPNG](https://tinypng.com/)
- **Qualidade:** 80-85% é suficiente para web

## Projetos em Destaque

Marque `"featured": true` para que o projeto apareça maior na grelha principal. 
Recomenda-se ter 2-4 projetos em destaque no máximo.
