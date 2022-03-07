<script context="module">
  //import { fetchArticleBySlug } from '../../stores/articlestore'

  /** @type {import('./[slug]').Load} */
  export async function load({ params, fetch }) {
    const res = await fetch('https://demo.restback.io/api/articles/' + params.slug)
    const data = await res.json()
    console.log(data.result);
    //let article = await fetchArticleBySlug(params.slug)
    return {
      props: {
        article: data.result
      }
    }
  }
</script>

<script>
  export let article
</script>

<svelte:head>
  <title>Article Detay - { article.title }</title>
</svelte:head>

<h1>Article Detay - { article.title }</h1>

<div>{ @html article.htmlContent }</div>