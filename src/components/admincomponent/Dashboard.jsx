import React, { useEffect, useState } from 'react';
import { db } from '../../config/Firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../../slice/postSlice';

const Dashboard = () => {
  const [imageLink, setImageLink] = useState('');
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);
  const [editingId, setEditingId] = useState(null); // Track post being edited

  const { data, is_loading, is_error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const addOrUpdatePost = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // UPDATE existing post
        const postRef = doc(db, 'posts', editingId);
        await updateDoc(postRef, {
          imageLink,
          category,
          head,
          body,
        });
      } else {
        // ADD new post
        await addDoc(collection(db, 'posts'), {
          imageLink,
          category,
          head,
          body,
          createdAt: serverTimestamp(),
        });
      }

      setSubmit(false);
      setImageLink('');
      setCategory('');
      setHead('');
      setBody('');
      setEditingId(null); // Reset editing mode
      dispatch(fetchPost()); // Refresh posts
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const deletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    dispatch(fetchPost());
  };

  const startEditing = (post) => {
    setImageLink(post.imageLink);
    setCategory(post.category);
    setHead(post.head);
    setBody(post.body);
    setEditingId(post.id);
  };

  return (
    <div className="w-full h-full overflow-y-hidden">
      <p className="text-center text-3xl mb-5">Admin's Editorial Page</p>
      <div className="w-full h-full flex justify-around items-center flex-wrap m-auto gap-10">
        {/* Form */}
        <div>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              addOrUpdatePost(e);
              setSubmit(true);
            }}
          >
            <input
              type="text"
              placeholder="Enter the image link"
              className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
              required
              value={submit && !editingId ? '' : imageLink}
              onChange={(e) => setImageLink(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter category"
              className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
              required
              value={submit && !editingId ? '' : category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter post heading"
              className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
              required
              value={submit && !editingId ? '' : head}
              onChange={(e) => setHead(e.target.value)}
            />
            <textarea
              placeholder="Enter post body"
              className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4 min-h-[200px]"
              required
              value={submit && !editingId ? '' : body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              {editingId ? 'Update' : 'Add'}
            </button>
          </form>
        </div>

        {/* Posts List */}
        <div className="w-[500px] h-[550px] border border-black rounded-2xl overflow-y-scroll">
          <p className="text-center text-4xl mb-10">All your Posts</p>
          <div className="w-full h-full flex flex-col items-center overflow-y-scroll gap-5">
            {data && data.length > 0 ? (
              data.map((post) => (
                <div key={post.id} className="w-[50%] border border-black rounded-2xl px-1.5 py-1">
                  <img src={post.imageLink} className="rounded-2xl" alt="" />
                  <p className="font-semibold">{post.head}</p>
                  <span className="bg-purple-400 rounded-2xl py-0.5 px-1.5">{post.category}</span>
                  <p className="break-words">{post.body}</p>
                  <p>
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleString()
                      : 'Unknown date'}
                  </p>
                  <div className="flex justify-between mt-2">
                    <p
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={() => startEditing(post)}
                    >
                      edit
                    </p>
                    <p
                      className="text-red-600 hover:underline cursor-pointer"
                      onClick={() => deletePost(post.id)}
                    >
                      delete
                    </p>
                  </div>
                </div>
              ))
            ) : (
              'No posts'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
