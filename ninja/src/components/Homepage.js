import React, { useState } from 'react'
import Bloglist from '../props/Bloglist'
const Homepage = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'My old website', body: 'lorem ipsum...', author: ' Yoshi', id: 2},
    {title: 'My friends website', body: 'lorem ipsum...', author: 'mario', id: 3}
  ])
  
  const handleDelete= (id) =>{
    const newBlogs = blogs.filter((blog)=>blog.id !== id)
    setBlogs(newBlogs)
  }
  return (
    <div className='home'>
       <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}></Bloglist>
       {/* <Bloglist blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs" ></Bloglist> */}

    </div>

  )
}

export default Homepage