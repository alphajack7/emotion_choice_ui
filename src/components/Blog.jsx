import React from 'react'

const Blog = () => {
    const blogs=[
  { head:"Atul",
    body:"woieejfowi weeokfnnooif okwnfow"
  },
  { head:"Atul",
    body:"woieejfowi weeokfnnooif okwnfow"
  },
  { head:"Atul",
    body:"woieejfowi weeokfnnooif okwnfow"
  },
  { head:"Atul",
    body:"woieejfowi weeokfnnooif okwnfow"
  },
]
  return (
    <div
    className='w-full h-full grid grid-cols-12 gap-10 px-2.5 py-5'>
    <div className='h-full col-start-1 col-end-3 border'>

    </div>
    <div className=' h-full  col-start-3 col-end-11 flex flex-col gap-5 items-center'>
        {blogs.map((blog)=>{
       return <div  className='w-[80%]  bg-purple-200 rounded-2xl px-5 py-5'>
        <p className='text-2xl underline mb-1'>{blog.head}</p>
        <span className='rounded-2xl text-xs bg-white px-1 py-0.5  '>Motivation</span>
        <div className='flex gap-5 mt-2.5'>
            <img src="main.jpg" className='w-[300px] h-[200px]' alt="" />
            <p>{blog.body}</p>
        </div>
       </div>
        })}
    </div>
    <div className='col-start-11 col-end-13 border h-full'></div>
    </div>
  )
}

export default Blog