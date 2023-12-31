import React, { memo } from 'react'
import './Nav.css'

const Nav = memo(() => {
  return (
    <div>


<nav class="" dir='rtl'>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kasuka</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white rounded  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 border-active">شروع</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
      <li>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4  text-black rounded active" aria-current="page">خانه</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 md:text-white  text-black rounded hover:bg-gray-100 md:hover:bg-transparent ">درباره ما</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 md:text-white text-black rounded hover:bg-gray-100 md:hover:bg-transparent ">خدمات</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 md:text-white text-black rounded hover:bg-gray-100 md:hover:bg-transparent ">تماس باما</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


    </div>
  )
})

export default Nav