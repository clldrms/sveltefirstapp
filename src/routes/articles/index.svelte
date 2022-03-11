<script context="module">
  
  /** @type {import('./[slug]').Load} */
  export async function load({ fetch }) {
    const res = await fetch('https://demo.restback.io/api/articles/')
    const data = await res.json()
    console.log(data.result.items);
    return {
      props: {
        articles: data.result.items
      }
    }
  }
</script>

<script>
  export let articles

  import { fetchArticles } from '../../stores/articlestore'

  const testing = async () => {
    let result = await fetchArticles()
    console.log(result);
  }
</script>

<svelte:head>
    <title>Articles</title>
</svelte:head>

<h1>Articles</h1>

{#each articles as article}
<a href="/articles/{ article.slug }">
    <h2>{ article.title }</h2>
</a>
{/each}

<button on:click="{testing}">testing</button>