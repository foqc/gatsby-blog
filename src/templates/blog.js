import React from 'react'
import { graphql } from 'gatsby'

import Parser from 'html-react-parser'
import Layout from '../components/layout'

export const query = graphql`
  query BlogQuery($id: String!) {
    devArticles(article: {slug: {eq: $id}}) {
        article {
            tags
            slug
            title
            cover_image
            description
            published_at(formatString: "MMM DD YYYY")
            edited_at(formatString: "MMM DD YYYY")
            positive_reactions_count
            comments_count
            body_html
            url
        }
      }
  }
`

const Blog = ({ data }) => {
    const blog = data.devArticles.article

    const removeWrappers = html => {
        (['html', 'body']).forEach(tag => {
            html = html.replace(`<${tag}>`, '')
            html = html.replace(`</${tag}>`, '')
        })
        return html
    }
    const Content = Parser(removeWrappers(blog.body_html), {

    })
    return (
        <Layout meta={{ title: blog.title, imageUrl: blog.cover_image, description: blog.description }}>
            <div className="blog-section">
                <img className="w-full" src={blog.cover_image} alt={blog.cover_image} />
                <h1>{blog.title}</h1>
                <div className="blog-reactions">
                    <div className="flex items-center">
                        <svg className="emoticon-reactions hover:text-red-500" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 3c-1.5355 0-3.0784.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.5355 3 7 3z" fill="#e74c3c" /></svg>
                        <p className="font-bold">{blog.positive_reactions_count}</p>
                    </div>
                    <div className="flex items-center">
                        <svg className="emoticon-reactions" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M105.6064 17.89172A65.90911 65.90911 0 0064 3.44709c-34.63472 0-62.71036 25.68876-62.71036 57.37748 0 .15425 0 .31234.00386.46659-.00386.07327-.00386.14267-.00386.21594A48.8561 48.8561 0 003.65338 76.48c.03085.1041.06557.21208.10026.32A55.89918 55.89918 0 0016.3281 98.10451 26.08286 26.08286 0 019.39885 122.247a1.35039 1.35039 0 00.95242 2.30589 40.288 40.288 0 0027.72861-11.20944l.18508-.17739A67.409 67.409 0 0064 118.20591c19.10268 0 36.208-7.81612 47.71045-20.14381a54.36311 54.36311 0 0014.9999-37.23753c.00001-17.08214-8.15935-32.42135-21.10395-42.93285z" fill="#4299e1" /></svg>
                        <p className="font-bold">{blog.comments_count}</p>
                    </div>
                </div>
                <div className="blog-tags">
                    {blog.tags.map((tag, i) => <p key={i} className="blog-tag">{tag}</p>)}
                </div>
                <p className="blog-date">Published at {blog.published_at} Updated on {blog.edited_at}</p>
                <div className="content" >{Content}</div>
                <div className="my-4" >
                    <a href={blog.url} target="_blank" rel="noreferrer">See original post</a>
                </div>
            </div>
        </Layout>
    )
}

export default Blog