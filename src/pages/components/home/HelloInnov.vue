<script setup>
defineProps({
  msg: String,
  ent:String
})

const img={
  ones:"/ones.png",
}
</script>

<template>
  <h1>{{ msg }}</h1>
    <div class="h-screen flex flex-col justify-between pl-20  rounded-t-none bg-blue-700">
      <h1 class="text-white text-7xl font-serif mt-5">{{msg}} 
        <span class="text-white text-4xl font-bold font-sans">{{ent}}</span> 
      </h1>
      <div class="mt-10">
        <p class="uppercase text-lg text-white pb-6">multi-project for societies developpement</p>
        <p class="capitalize text-5xl font-thin text-white ml-10">Join the world of investiment <br>with mult-Sectors be <strong>winner</strong></p>
      </div>
      <div class="p-2">
        <img width="200" class="rounded-t-3xl rounded-b-md ml-auto mr-20" :src="img.ones" alt="alt" srcset="">
      </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
