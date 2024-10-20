# SKN Svelte Kit (Svelte 5) Type Extension Library

<img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F15-TypeScript-SST.svg?alt=media&token=517135b2-0b95-4472-8549-c5973cf092fc" alt="svelte" />

> TypeScript Svelte

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Fsvelte-types)](https://www.npmjs.com/package/@best-skn/svelte-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for Svelte Kit (Svelte 5)

### I made this library so that I can use it in all of my Svelte Kit (Svelte 5) projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`SveltePageDataProps` Type**

- Provides page server data type for svelte rune `$props()`
- This type is intended to be used only in `+page.svelte`
- For usage instruction, see `Usage` section

### **`SveltePageLayoutProps` Type**

- Provides page layout data type for svelte rune `$props()`
- This type is intended to be used only in `+layout.svelte`
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- Svelte Kit

&nbsp;

## **_Requirements:_**

### This library has peer dependency for Svelte of minimum 5.0.2. It may or may not work on 6.x

### This library is intended to be used in Svelte Kit of minimum 2.7.2. It may or may not work on 3.x

- 💀 Minimum [svelte](https://www.npmjs.com/package/svelte) Version: `5.0.2`
- 💀 Minimum [@sveltejs/kit](https://www.npmjs.com/package/@sveltejs/kit) Version: `2.7.2`

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add -D @best-skn/svelte-types
> #or
> yarn add -D @best-skn/svelte-types
> #or
> pnpm add -D @best-skn/svelte-types
> #or
> bun add -D @best-skn/svelte-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `svelte.d.ts`, then do this

> ```typescript
> import "@best-skn/svelte-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts`, `**/*.tsx`, `**/*.svelte` otherwise the type definition file may not work

### Now Inside your Svelte Kit (Svelte 5) Project, use the package like this (Just an example)

#### **_`SveltePageDataProps` Type:_**

##### Import & use `SveltePageDataProps` inside `+page.svelte` like this

> ```svelte
> //* `+page.svelte`
> <script lang="ts">
>  import type { SveltePageDataProps } from "@sveltejs/kit";
>  import type { PageServerData } from "./$types";
>
>  let { data }: SveltePageDataProps<PageServerData> = $props();
> </script>
> ```

#### **_`SveltePageLayoutProps` Type:_**

##### Import & use `SveltePageLayoutProps` inside `+layout.svelte` like this

> ```svelte
> //* `+layout.svelte`
> <script lang="ts">
>  import type { SveltePageLayoutProps } from "@sveltejs/kit";
>
>  let { children, data, row }: SveltePageLayoutProps<unknown> = $props();
> </script>
>
> <div>
>  <main>
>    {@render children()}
>  </main>
> </div>
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍⚕️`Tanjila Hasan Trina`: The long lost love of my life. The course of nature separated us from our paths and put us in separate places far away from each other. But no matter how separated we are right now, each and every moment of mine is only dedicated to you. We may not see each other in this lifetime as it seems but I will find you again in the next life. I just want to say: `世界は残酷だ それでも君を愛すよ`
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
