export interface ArticleCategoryItem {
  id: number,
  name: string,
  sort: number
}

/**
 * 文章
 * **/
export interface ArticleItem {
  id: number
  title: string
  createAt: string
  updateAt: string
  sort: number
  intro: string
  thumbUrl: string
  category: ArticleCategoryItem[]
}
