import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/blogs"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          allDevArticles {
            edges {
              node {
                id
                article {
                  tags
                  slug
                  title
                  cover_image
                  description
                  published_at(formatString: "MMM DD YYYY")
                  readable_publish_date
                  positive_reactions_count
                  comments_count
                }
              }
            }
          }
        }
      `}
      render={data => {
        return <>
          <Banner image={data.file.childImageSharp.fixed} />
          <div className="py-6">
            <h2 className="py-6">Articles</h2>
            <ArticlesComponent blogs={data?.allDevArticles?.edges || []} />
          </div>
        </>
      }}
    />
  </Layout>
)

export default IndexPage