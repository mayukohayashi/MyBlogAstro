---
layout: "../../layouts/BlogPost.astro"
title: "Astro勉強中Note"
description: "Astro勉強中、見たリンクとか、ノート代わりに。"
pubDate: "Feb 06 2023"
updatedDate: "Mar 12 2023"
tags: [Tech, note, Astro, updated]
---

## CSS Variables

<https://docs.astro.build/en/guides/styling/#css-variables>

```astro
---
const foregroundColor = "rgb(221 243 228)";
const backgroundColor = "rgb(24 121 78)";
---
<style define:vars={{ foregroundColor, backgroundColor }}>
  h1 {
    background-color: var(--backgroundColor);
    color: var(--foregroundColor);
  }
</style>
<h1>Hello</h1>
```

## URL

- `define:vars`
  - <https://docs.astro.build/en/reference/directives-reference/#definevars>

---

## Component Structure

<https://docs.astro.build/en/core-concepts/astro-components/#component-structure>

---

## Client-Side Scripts

<https://docs.astro.build/en/core-concepts/astro-components/#client-side-scripts>

---

## island component

<https://docs.astro.build/en/concepts/islands/>

<https://zenn.dev/morinokami/articles/islands-architecture-with-astro>

---

## Layouts

<https://docs.astro.build/en/core-concepts/layouts/>

---

## Component (slots)

<https://docs.astro.build/en/core-concepts/astro-components/#slots>

---

## Frontmatter `lauout`

<https://docs.astro.build/en/guides/markdown-content/#frontmatter-layout>

---

## Markdown Layout Props

<https://docs.astro.build/en/core-concepts/layouts/#markdown-layout-props>

---

## Introduction to YAML

<https://dev.to/paulasantamaria/introduction-to-yaml-125f>

---

## Nesting Layout

<https://docs.astro.build/en/core-concepts/layouts/#nesting-layouts>

---

## `Astro.glob()`

<https://docs.astro.build/en/reference/api-reference/#astroglob>

## Dynamic routes

<https://docs.astro.build/en/core-concepts/routing/#dynamic-routes>

---

## `getStaticPaths()`

<https://docs.astro.build/en/reference/api-reference/#getstaticpaths>

---

## Staric Routes

<https://docs.astro.build/en/core-concepts/routing/#static-routes>

---

## RSS item generation in Astro

<https://docs.astro.build/en/guides/rss/#using-glob-imports>

---

## Client-Side Scripts

<https://docs.astro.build/en/core-concepts/astro-components/#client-side-scripts>

---

## 番外編

### 時間有る時にみる、いれる

- コードブロックの見た目かえたい
  - <https://prismjs.com/#basic-usage>

### Houston AI

<https://houston.astro.build>
