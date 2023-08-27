import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
        <div class="bg-white  ">
  <div class="mx-auto  px-4 md:px-8">
    

    <section class="flex flex-col items-center">
      
      <div class="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-20">
        <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <h1 class="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">Buy and trade crypto like never before.</h1>

        <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <button  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Download App</button>

          <Link to="/Coincard"><button class="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">View Pricing</button></Link>
        </div>
      </div>
    </section>
  </div>
</div>
    </div>
  )
}

export default Hero