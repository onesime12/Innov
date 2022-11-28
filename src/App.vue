<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen flex justify-center items-start">
    <div class="flex-1 max-w-full mx-auto p-1">
      <div class="grid grid-cols-6 grid-rows-5 min-h-full gap-1 grid-flow-row-dense shadow-sm">
        <div class="bg-slate-300 row-span-5 rounded-t-md hidden md:block">
          <div class="grig grid-rows-4">
            <div class="flex justify-start border-b-2 border-gray-400 items-center bg-slate-300 rounded-md rounded-b-sm  pb-1">
              <img class="max-h-10 lg:max-h-12 mx-2" src="Group 1.svg" alt="Logo" srcset="">
              <div class="mx-2">
                <p class="font-extrabold lg:text-xl font-sans md:font-serif py-0 px-0">Innov <br></p>
                <p class="py-0 px-0 font-mono font-medium text-gray-400 text-base text-center">For you </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 bg-slate-300 p-1 rounded-t-md flex justify-between items-center">
          <button class="p-2 text-blue-800 font-semibolder hover:text-blue-900 hover:border-2 hover:bg-slate-400 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </button>
          
          <div class="flex justify-end items-center">
            <div class="grid grid-cols-3 gap-4">
              <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'/'"> Home </router-link>
              <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'about'"> About </router-link>
              <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'error'"> Error </router-link>
            </div>
            <a href="#" class="p-0 ml-3">
              <img width="40" class="rounded-full" src="IMG_9514.jpg" alt="">
            </a>
          </div>
        </div>
        
        <div class="bg-green-100  rounded-rt-xl col-span-5 row-span-4">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>


