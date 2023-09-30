import React from 'react';
import { Link } from 'react-router-dom'; // Import this if you want to add a link back to the homepage

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-400'>
      <h1 className='text-5xl font-bold text-red-500'>404 - Page Not Found</h1>
      <p className='mt-4 text-xl text-gray-600'>Oops! The page you are looking for doesn't exist.</p>
      {/* You can add a link back to the homepage or another relevant page */}
      <Link to='/' className='mt-8 text-blue-500 hover:underline'>Go back to the Homepage</Link>
    </div>
  );
}
