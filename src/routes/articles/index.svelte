<script context="module">
  import { articles, fetchArticles } from '../../stores/articlestore'

  export async function load() {
    await fetchArticles()
    return {

    }
  }
</script>

<script>
  console.log($articles)
</script>

<svelte:head>
    <title>Articles</title>
</svelte:head>

<h1>Articles</h1>

{#each $articles as article}
<a href="/articles/{ article.slug }">
    <h2>{ article.title }</h2>
</a>
{/each}