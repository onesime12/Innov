<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <!-- <h1>About !!</h1> -->
  <div class="bg-gray-50 p-5 w-full rounded-tl-2xl">
    
    <h2 class="uppercase font-black" style="font-family: Arial">arial</h2>
    <h2 class="uppercase font-black" style="font-family: Verdana">verdana</h2>
    <h2 class="uppercase font-black" style="font-family: 'Lucida Sans'">lucida</h2>
    <h2 class="uppercase font-black" style="font-family: Georgia">georgia</h2>
    <h2 class="uppercase font-black" style="font-family: 'Franklin Gothic Medium'">franklin</h2>
    <h2 class="uppercase font-black" style="font-family: 'Segoe UI'">segoe</h2>
  </div>
</template>
