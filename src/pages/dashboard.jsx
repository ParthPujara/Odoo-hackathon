import React from 'react'

const Dashboard = () => {
  const items = Array.from({ length: 4 });
  return (
    <div className="py-3 grid grid-cols-4 gap-4">
      {items.map((_, index) => (
        <div key={index} className='flex flex-col bg-gray-200 rounded-xl px-8 py-6 animate-pulse'>
          <div className="flex justify-between items-center">
            <div className="data">
              <h2 className="font-medium text-lg bg-gray-400 w-32 animate-pulse h-4 mb-3"></h2>
              <p className="text-3xl font-semibold bg-gray-400 w-10 animate-pulse h-10"></p>
            </div>
            <div className="icons">
              <div className="container p-4 rounded-[10px] bg-gray-300 w-16 h-16 animate-pulse"></div>
            </div>
          </div>
          <div className='mt-4 bg-gray-300 h-6 w-14'></div>
        </div>
      ))}
      
    </div>
  )
}

export default Dashboard
