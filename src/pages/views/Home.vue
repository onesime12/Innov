<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String
  })

  const count = ref(0)
</script>

<template>
  <h1 class="text-green-700 text-4xl">Home !!</h1>
</template>
