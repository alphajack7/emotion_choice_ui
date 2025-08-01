import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection,addDoc,deleteDoc,doc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPost } from '../../slice/postSlice'
const Dashboard = () => {
const [imageLink,setImageLink]=useState('');
const [head,setHead]=useState('');
const [body,setBody]=useState('');
const [error,setError]=useState('')
const [submit,setSubmit]=useState(false)
const {data,is_loading,is_error}=useSelector((state)=>state.post)
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchPost())
    console.log("hello dashboard");
    
  },[])

  const addPost=async(e)=>{
    e.preventDefault()
   try {
    const dataRef=await addDoc(collection(db,'posts'),{
    imageLink,
    head,
    body,
    createdAt:serverTimestamp()
   })
   setSubmit(false)
   window.location.reload()
   } catch (error) {
    console.log(error.message);
    
    setError(error.message)
   }
   
  }
  const deletePost=async(id)=>{

  await deleteDoc(doc(db,'posts',id))
  window.location.reload();
  }
  
  return (
    <div className='w-full h-full'>
        <p className='text-center text-3xl mb-5'>Admin's Editorial Page</p>
        <div className=' w-full h-full flex justify-around items-center flex-wrap m-auto gap-10'>
            <div>
             <form className="flex flex-col gap-5" onSubmit={(e)=>{addPost(e) 
              setSubmit(true)}}>
          <input
            type="text"
            placeholder="Enter the image link"
            className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
            required
            value={submit?"":imageLink}
            onChange={(e)=>setImageLink(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter post heading"
            className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
            required
            value={submit?"":head}
            onChange={(e)=>setHead(e.target.value)}
          />
          <textarea name="" id=""
          placeholder="Enter post body"
            className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4 min-h-[200px]"
            required
            value={submit?"":body}
            onChange={(e)=>setBody(e.target.value)}></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
            </div>

            <div className='w-[500px] h-[550px] border border-black rounded-2xl overflow-y-hidden'>
             <p className='text-center text-4xl mb-10 '>All your Posts </p>
             <div className='w-full h-full flex flex-col items-center  overflow-y-auto gap-5 '>
              {data?data.map((post)=>{
                return <div key={post.id} className='w-[50%] border border-black rounded-2xl px-1.5 py-1 '>
                <img src={post.imageLink} className='rounded-2xl' alt="" />
                <p className='font-semibold'>{post.head}</p>
                <p>{post.body}</p>
                <p>{post.createdAt
                      ? new Date(post.createdAt).toLocaleString()
                      : 'Unknown date'}</p>
                      <p className='text-red-600 hover:underline cursor-pointer' onClick={()=>{
                        deletePost(post.id)
                      }}>delete</p>
              </div>
              }):"No posts"}
              
             </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard