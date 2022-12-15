<script setup>
defineProps({
    msg: String,
    ent: String
})

</script>
<template>
    <div class="min-h-fit w-full bg-white pl-5 rounded-t-xl -mt-8 pb-10">
        <h1 class="text-black text-center text-7xl font-serif mt-5 pb-5">{{ msg }}
            <span class="text-black text-4xl  font-bold font-sans">{{ent}}</span> 
        </h1>
        <div class="flex flex-col items-center justify-center">
            <h1 class="uppercase text-black myFont text-center underline">clause de nos responsabilités</h1>
            <p class="text-center w-3/6 my-5 newFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor eveniet maxime officia alias deleniti. Fugiat ipsa sapiente vel tenetur cumque adipisci, reiciendis sequi sit pariatur earum provident eum quia!</p>
        </div>
    </div>
</template>