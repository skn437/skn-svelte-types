import type { Snippet } from "svelte";

/**
 * SKN Svelte 5 Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.1
 * @since 2024-09-25
 * */
declare module "@sveltejs/kit" {
  /**
   * Provides page server data type for svelte rune `$props()`
   *
   * This type is intended to be used only in `+page.svelte`
   *
   * Example:
   *
   * ```svelte
   * //* `+page.svelte`
   * <script lang="ts">
   *  import type { SveltePageDataProps } from "@sveltejs/kit";
   *  import type { PageServerData } from "./$types";
   *
   *  let { data }: SveltePageDataProps<PageServerData> = $props();
   * </script>
   * ```
   * @since v1.0.0
   * */
  interface SveltePageDataProps<T> {
    data: T;
  }

  /**
   * Provides page layout data type for svelte rune `$props()`
   *
   * This type is intended to be used only in `+layout.svelte`
   *
   * Example:
   *
   * ```svelte
   * //* `+layout.svelte`
   * <script lang="ts">
   *  import type { SveltePageLayoutProps } from "@sveltejs/kit";
   *
   *  let { children, data, row }: SveltePageLayoutProps<unknown> = $props();
   * </script>
   *
   * <div>
   *  <main>
   *    {@render children()}
   *  </main>
   * </div>
   * ```
   * @since v1.0.0
   * */
  interface SveltePageLayoutProps<T> {
    children: Snippet;
    data: T[];
    row: Snippet<[T]>;
  }
}
