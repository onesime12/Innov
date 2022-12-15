<script setup>
defineProps({
  msg: String,
  ent:String
})
    
let activities={
    motar:"X-Motart",
    pay:"XPay",
    restau:"Caf-restau",
    station:"Carburant",
    food:"T-food",
    boucherie:"Meal-bouch",
    autre:"..."
} 

</script>

<template>
    <div class="min-h-screen flex flex-col justify-evenly -mt-5 px-1 rounded-t-xl rounded-b-md bg-gray-200">
        
        <h1 class="text-blue-700 text-7xl font-serif mt-5 text-right mr-5">{{ msg }}
            <span class="text-blue-700 text-4xl font-bold font-sans">{{ent}}</span> 
        </h1>
        <div class="h-full bg-gray-200 mb-10">
            <h1 class="uppercase font-bold text-white font-sans px-3 bg-blue-800 text-center rounded-t-md py-3">Travailler avec Innov Enterprise</h1>
            <div class="grid grid-cols-7 mt-1">
                <div class="col-span-4 flex flex-col items-center justify-start">
                    <h1 class="font-extrabold text-blue-700 text-4xl py-5">Avec Innov Enterprise</h1>
                    <h1 class="font-semibold text-gray-700 text-xl py-5 mb-5">Tu t'adresse à la lumière</h1>
                    <ul class="list-decimal ml-5">
                        <li class="text-left text-neutral-700"> <span class="font-semibold font-sans text-sm">Devenez membre Innov en <router-link :to="'apprendreCode'" class="inv">X-motar</router-link> Profitez de ses services</span></li>
                        <li class="text-left text-neutral-700"> <span class="font-semibold font-sans text-sm">Vous pouver faire des  <router-link :to="'apprendreCode'" class="inv">investissements en court terme</router-link> en profit partiel</span></li>
                        <li class="text-left text-neutral-700"> <span class="font-semibold font-sans text-sm">Faites aussi des <router-link :to="'apprendreCode'" class="inv">investissements en long terme</router-link> en profit integral</span></li>
                        <li class="text-left text-neutral-700"> <span class="font-semibold font-sans text-sm">Apportez des projets en caractere informatique et plus d'autres </span></li>
                        <li class="text-left text-neutral-700"> <span class="font-semibold font-sans text-sm"> ... </span></li>
                    </ul>
                </div>
                <img src="/shut.png" class="col-span-3 h-96  rounded-sm mr-1" alt="" srcset="">
            </div>
            <div class="grid grid-cols-5 gap-1 mt-10">
                <div class="bg-blue-100 col-span-4 flex flex-col items-start">
                    <h1 class="w-full bg-gray-00 uppercase rounded-t-md py-2 text-sm text-center text-gray-700 font-bold ">X-Motar</h1>
                    <div class="grid h-fit grid-cols-5 w-full gap-1 outline-dashed outline-white outline-1">
                        <div class="col-span-1 py-2 bg-slate-300 flex flex-col justify-start items-center">
                            <h1 class="font-sans text-center myFont">Devenez Membre</h1>
                            <!-- <p class="uppercase font-sans text-center myFont"> à</p> -->
                            <p class="w-fit p-3 my-2 bg-blue-300 bg-opacity-50 text-blue-900 rounded-full font-black text-2xl">5$</p>
                            <p class=" px-2 text-center font-extralight">Achat journalier du carburant</p>
                            <p class="w-fit bg-blue-300 bg-opacity-50 text-blue-900 rounded-full p-4 font-black text-md my-2">3 litres</p>
                            <p class=" font-bold text-orange-700">Bénéficie de : ===></p>
                        </div>
                        <div class="col-span-4  bg-slate-300">
                            <h1 class="py-2 text-center myFont bg-opacity-20 bg-red-100 rounded-t-md">Tout ce que vous bénéficiez</h1> 
                            <div class="mt-4 grid grid-rows-3 gap-2">
                                <div class="bg-slate-300 flex "> 
                                    <div class="font-bold w-90">Emprunt journalier : </div>
                                    <div class="text-sm font-normal font-sans w-full">Vous vous empruntez au maximum 3 litres que vous payer à la fin de la journée. En condition Avoir acheté en 90 jours ouvrables et régulier</div>
                                </div>
                                <div class="bg-slate-300  flex"> 
                                    <div class="font-bold w-90">Emprunt circonstatiel : </div>
                                    <div class="text-sm font-normal font-sans w-full">Vous vous empruntez au maximum 20$ suite à une circonstance innattendue de l'enjeux du travail. Même condition que le précédent</div>
                                </div>
                                <div class="bg-slate-300 flex"> 
                                    <div class="font-bold w-90">Assistance événementielle : </div>
                                    <div class="text-sm font-normal font-sans w-full">Innov Enterprise vous tient en soutenance dans presque certaines de vos circonstances familiales. Mêmes conditons que ci-hautes</div>
                                </div>
                            </div>
                            <h1 class="py-3 text-blue-800 text-opacity-50 pr-4 mt-5 text-right font-bold text-xs rounded-t-md">N'hésite surtout pas. Qui arrive tôt à la source boit l'eau pure </h1> 
                        </div>
                    </div>
                </div>
                <div class=" col-span-1 flex flex-col items-start">
                    <h1 class="w-full bg-blue-800 uppercase rounded-t-md py-2 text-sm text-center text-white font-bold ">Nos activités à la une</h1>
                    <div class="w-full flex flex-col justify-center items-center" v-for="item in activities" :key="item">
                        <button class="border-2 border-opacity-10 w-32 border-blue-400 hover:text-white hover:bg-teal-800 rounded-sm py-1 px-3 mt-1 font-bold font-sans text-xs">{{item}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>