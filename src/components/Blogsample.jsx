import React from 'react'

const Blogsample = () => {
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
   <div className='w-full h-full '>
     <div className='w-full h-full  px-5 py-2.5  gap-5 bg-white flex flex-wrap md:grid grid-cols-12 justify-center items-center '>
      <div className='w-full md:h-[90%] col-start-1 col-end-10  rounded-2xl  bg-purple-100 px-5 py-2.5'>
        <p className='text-2xl font-semibold underline mb-5'>Newly Featured Posts</p>
       <div className=' flex flex-wrap justify-center items-center gap-5 '>
        {blogs.map((blog)=>{
         return <div className='w-[300px] h-[250px] border border-black rounded-2xl '>
          <div className='border-b h-[60%] p-2.5 bg-[url("main.jpg")] bg-cover bg-center rounded-t-2xl'>
            <p className='underline'>{blog.head}</p>

          </div>
          <div
          className='w-full md:h-[40%] p-2.5'>
            {blog.body} <span><a href="" className='underline'>Read more</a></span>
          </div>
         </div>
        })}
       </div>
      </div>
      <div className=' h-[70%] col-span-3 col-end-[-1] bg-purple-100 rounded-2xl'>
      <p className='text-center text-2xl font-semibold underline'>Most Liked Posts</p>
      </div>
    </div>
   </div>
  )
}

export default Blogsample