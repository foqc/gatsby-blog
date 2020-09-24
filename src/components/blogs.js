import React from "react"
import Card from "./card"

const Blogs = ({ blogs }) => {
    const leftBlogsCount = Math.ceil(blogs.length / 3)
    const leftBlogs = blogs.slice(0, leftBlogsCount)
    const rightBlogs = blogs.slice(leftBlogsCount, blogs.length)

    return (
        <div className="layout-grid">
            <div className="col-half">
                {leftBlogs.map((blog, i) => {
                    return (
                        <Card blog={blog.node} key={`blog__${blog.node.id}`} />
                    )
                })}
            </div>
            <div className="col-2-half">
                {rightBlogs.map((blog, i) => {
                    return (
                        <Card blog={blog.node} key={`blog__${blog.node.id}`} className="card-height"/>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs