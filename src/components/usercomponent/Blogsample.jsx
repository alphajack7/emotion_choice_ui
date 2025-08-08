import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from '../../slice/postSlice'

const Blogsample = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch]) // ✅ add dependency array

  const { data, is_error, is_loading } = useSelector((state) => state.post)

  return (
    <div className="w-full h-[94vh] border px-2.5 py-5 bg-gray-100">
      <div>
        <p className="text-3xl mb-10 text-[#9530fb]">New Post</p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
          {data ? data.slice(0, 6).map((post, index) => (
            <div key={post.id} className='w-[300px] h-[400px] flex flex-col  items-center overflow-hidden'>
            <img src={post.imageLink} className='w-[250px] h-[200px]' alt="" />
             <div className='text-[#9530fb] text-center px-2.5'>
             <span className='  font-semibold text-xl px-1.5'>{post.category} |</span>
             <p className='underline underline-offset-2 font-bold text-2xl'>{post.head}</p>
             <p className='break-words'>{post.body}</p>
             <a href="" className='hover: underline text-blue-300'>Read more</a>
             </div>
           </div>
          )) : "No post"}
        </div>
      </div>
    </div>
  )
}

export default Blogsample
