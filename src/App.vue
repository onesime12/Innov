<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen flex justify-center items-start ">
    <div class="flex-1 max-w-full mx-auto p-1 ">
      <div class="grid grid-cols-6 grid-flow-row-dense shadow-sm">
        <div class="bg-slate-300 col-span-1 rounded-tl-md hidden md:block ">
          <div>
            <div class="flex justify-center items-center bg-slate-300 rounded-tl-md  pb-1">
              <img class="w-40 h-40 m-2 border-b-2 pb-1 border-gray-400" src="/public/Group1.svg" alt="Logo" srcset="">
            </div>
          </div>
          salut
        </div>
        <div class="col-span-6 md:col-span-5 relative pt-13">
          <div class="w-full bg-slate-300 p-1 absolute top-0 right-0 rounded-tr-md flex justify-between items-center ">
            <button class="p-2 text-blue-800 font-semibolder hover:text-blue-900 hover:border-2 hover:bg-slate-400 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>
            <div class="flex justify-end items-center bg-slate-300">
              <div class="grid grid-cols-3 gap-4">
                <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'/'"> Home </router-link>
                <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'about'"> About </router-link>
                <router-link class="btn bg-blue-400 rounded-md px-5 py-1 font-medium text-center" :to="'error'"> Error </router-link>
              </div>
              <a href="#" class="p-0 ml-3">
                <img width="40" class="rounded-full" src="/public/IMG_9514.jpg" alt="">
              </a>
            </div>
          </div>
          <div class="rounded-rt-xl w-full bg-slate-300">
            <router-view class=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>