import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../slice/postSlice';

const Blog = () => {
  const posts = useSelector((state) => state.post.data);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = posts?.length ? Math.ceil(posts.length / postsPerPage) : 0;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = posts?.slice(startIndex, endIndex) || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-[10vh] px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        {/* Left Ad — always on the left for desktop, top for mobile */}
        <aside className="col-span-12 lg:col-span-2 order-1 lg:order-none">
          <div className="sticky lg:top-[10vh] h-[200px] lg:h-[80vh] bg-gray-200 rounded-md shadow-md flex items-center justify-center">
            <span className="text-center p-4">Left Ad</span>
          </div>
        </aside>

        {/* Blog Content */}
        <main className="col-span-12 lg:col-span-10 order-2 overflow-y-auto max-h-[80vh] pr-2 flex flex-col">
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visiblePosts.map((post) => (
                <a key={post.id} href={`/post/${post.id}`} className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-200 flex flex-col items-center">
                    {/* Centered & Responsive Image */}
                    <img
                      src={post.imageLink}
                      alt={post.head}
                      className="max-w-full h-[200px] object-contain mb-4"
                    />
                    <h2 className="text-xl font-bold mb-2 text-purple-700 text-center">
                      {post.head}
                    </h2>
                    <p className="text-gray-600 text-center">{post.body}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-8">Loading posts...</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(totalPages).keys()].map((num) => {
                const page = num + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </main>

        {/* Right Ad — moved to bottom */}
        <aside className="col-span-12 order-3">
          <div className="h-[200px] bg-gray-200 rounded-md shadow-md flex items-center justify-center mt-4">
            <span className="text-center p-4">Right Ad</span>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Blog;
