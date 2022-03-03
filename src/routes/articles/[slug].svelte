<script context="module">
  export const router = false;
  export const hydrate = false;
  export const prerender = true;

  import { article, fetchArticleBySlug } from '../../stores/articlestore'

  export async function load({ params }) {
    await fetchArticleBySlug(params.slug)
    return {

    }
  }
</script>

<script>
  console.log($article)
</script>

<svelte:head>
  <title>Article Detay - { $article.title }</title>
</svelte:head>

<h1>Article Detay - { $article.title }</h1>

<div>{ @html $article.htmlContent }</div>