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
    <div className='w-full  px-5 py-2.5'>
      <p className='text-3xl font-bold mb-10'>Newly Featured Posts</p>
      <div className='flex  gap-10 justify-center mb-3.5 ' >
      { blogs.map((blog)=>{
      return <div className='w-[350px] h-[250px] px-5 py-5 bg-orange-400 rounded-2xl hover:shadow-amber-700 shadow-2xl duration-300'>
        <h1 className='underline decoration-2 '>{blog.head}</h1>
        <p className='text-center'>{blog.body}</p>
       </div>
      })}
      </div>
      <a href="" className='hover:underline hover:text-blue-500'>Read More</a>
    </div>
  )
}

export default Blogsample