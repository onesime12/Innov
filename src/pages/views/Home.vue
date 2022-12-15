<script setup>
  import HelloInnov from '../components/home/HelloInnov.vue';
  import DetailInnov from "../components/home/DetailInnov.vue";
  import DevInnov from "../components/home/DevInnov.vue";
  import InvestInnov from "../components/home/InvestInnov.vue";
  import FootInnov from "../components/home/FootInnov.vue"
</script>

<template>
  <div style="" class="h-100 overflow-y-scroll rounded-tl-2xl w-full bg-blue-700">
    <HelloInnov msg="I" ent="Innov"/>
    <DetailInnov msg="I" ent="Innov"/>
    <InvestInnov msg="I" ent="Innov"/>
    <DevInnov msg="I" ent="Innov"/>
    <FootInnov msg="I" ent="Innov"/>
  </div>
    
</template>
