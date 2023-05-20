import React from 'react'

const Bloglist = ({blogs, title, handleDelete}) => {
  return (
    <div className='bloglist'>
        <h2>{title}</h2>
        {blogs.map((blog) =>{
        return (
            <div className="blog-preview" key = {blog.id}>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author} </p>
                <button onClick={()=>{
                  handleDelete(blog.id)
                }}>delete</button>
            </div>
        ) 
        })} 
    </div>
    
  )
}

export default Bloglist