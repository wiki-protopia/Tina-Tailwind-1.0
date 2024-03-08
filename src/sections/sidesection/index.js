import React from 'react'

const Sidesection = () => {
    return (
        <div class="w-64 bg-gray-800">
              
            <div class="py-4 px-6 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Admin Panel</span>
            </div>
                  
                  
            <nav class="mt-5">
                <a href="#" class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Dashboard</a>
                <a href="#" class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Users</a>
                <a href="#" class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                      
            </nav>
        </div>
    )
}

export default Sidesection