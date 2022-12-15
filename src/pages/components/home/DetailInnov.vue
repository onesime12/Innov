<script setup>
defineProps({
  msg: String,
  ent:String
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-evenly pl-5 rounded-t-xl -mt-5 rounded-b-md bg-white">
    <h1 class="text-blue-700 text-left text-7xl font-serif mt-5">{{ msg }}
      <span class="text-blue-700 text-4xl  font-bold font-sans">{{ent}}</span> 
    </h1>
    <div class=" flex justify-evenly">
      <div class="p-2 flex justify-between py-10 w-11/12">
        <img width="400" class="" src="ones.png" alt="alt" srcset="">
      </div>
      <div class=" px-5 rounded-xl py-20 mr-5">
        <p class="uppercase text-4xl text-blue-700 pb-6 ">Vue d'ensemble</p>
        <p class="text-md font-serif text-black text-justify">L'objectif global de l'entreprise <strong>* Innov *</strong> (que nous sommes) est de s'assurer  de la pleine satisfaction de toute personne acceptant nos services ou de travailler avec nous. Garder la tête haute dans toutes les epreuves, est le sens de motivation qui nous tient. </p>
        <div class="ml-20 mt-3">
          <p class="text-black font-serif font-bold text-xs py-1"><strong class="text-yellow-500 border-2 border-yellow-500 mr-2 "> > </strong> Infortiser les entreprise en rendant leur gestion automatique</p>
          <p class="text-black font-serif font-bold text-xs py-1"><strong class="text-yellow-500 border-2 border-yellow-500 mr-2 "> > </strong>Appel aux investissements et épargnes pour un interêt en retour</p>
          <p class="text-black font-serif font-bold text-xs py-1"><strong class="text-yellow-500 border-2 border-yellow-500 mr-2 "> > </strong>Distribution des parts de l'entreprise au particuliers</p>
          <p class="text-black font-serif font-bold text-xs py-1"><strong class="text-yellow-500 border-2 border-yellow-500 mr-2 "> > </strong>Concepteur et developpeur de logiciels informatiques des entreprises</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>