import React from 'react'

const Navsection = () => {
    return (
        <header class="bg-[#111317] text-[#FFFFFF] shadow py-4 px-6">
            <div class="flex justify-between items-center">
                <button class="text-gray-600 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <span class="text-lg font-semibold">Welcome, Admin!</span>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Navsection