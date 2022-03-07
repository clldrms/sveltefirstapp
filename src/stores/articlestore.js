import {writable} from 'svelte/store'

export const articles = writable([])
export const articlesCount = writable(0)
export const article = writable({})

export const fetchArticles = async () => {
    const res = await fetch('https://demo.restback.io/api/articles')
    const data = await res.json()

    articles.set(data.result.items)
    articlesCount.set(data.result.totalCount)
    return data.result.items
}

export const fetchArticleBySlug = async (slug) => {
    const res = await fetch('https://demo.restback.io/api/articles/' + slug)
    const data = await res.json()

    article.set(data.result)
    return data.result
}