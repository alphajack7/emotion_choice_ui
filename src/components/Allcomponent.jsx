import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './usercomponent/Navbar';
import Homepage from './usercomponent/Homepage';
import Blogsample from './usercomponent/Blogsample';
import Email from './usercomponent/Email';
import Auth from './admincomponent/Auth';
import Home from './usercomponent/Home';
// Lazy loaded components
const Blog = lazy(() => import('./usercomponent/Blog'));
const Login = lazy(() => import('./admincomponent/Login'));
const Dashboard = lazy(() => import('./admincomponent/Dashboard'));

const Allcomponent = () => {
  return (
    <div className='w-screen '>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path='/'
              element={
                <div className='w-screen   relative'>
                  <Navbar />
                  {/* <Home /> */}
                  <Homepage />
                  <Blogsample />
                  <Email />
                </div>
              }
            />
            <Route
              path='/blogs'
              element={
                <div className='w-screen min-h-screen md:h-screen'>
                  <Navbar />
                  <Blog />
                </div>
              }
            />
            <Route
              path='/admin/login'
              element={
                <div className='w-screen min-h-screen md:h-screen'>
                  <Login />
                </div>
              }
            />
            <Route
              path='/admin'
              element={
                <div className='w-screen min-h-screen md:h-screen'>
                  <Auth>
                    <Dashboard />
                  </Auth>
                </div>
              }
            />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Allcomponent;
