<script setup>
defineProps({
  msg: String,
  ent:String
})
</script>

<template>
    <div class="min-h-screen flex flex-col justify-evenly -mt-5 rounded-t-xl bg-gray-100">
        
        <h1 class="text-blue-700 text-7xl font-serif mt-5 text-right pr-5">{{ msg }}
            <span class="text-blue-700 text-4xl font-bold font-sans">{{ent}}</span> 
        </h1>

        <div class="flex justify-around h-80 items-center  mb-20">
            <h2 class="capitalize text-right text-xl text-blue-700 font-bold font-sans">à comprendre</h2>
            <div class="h-full w-4/5 bg-blue-200 bg-opacity-30">
                <h1 class="uppercase font-bold text-white font-mono px-3 bg-blue-700 rounded-t-md py-3">Concepteur et developpeur de logiciels</h1>
                <div class="grid grid-cols-4 h-4/6">
                    <div class="col-span-1 flex justify-center items-center">
                        <h1 class="font-black font-sans text-blue-600">Performance</h1>
                    </div>
                    <div class="col-span-3 flex items-center">
                        <ul class="list-disc">
                            <li>configuration des materiels digitaux à système embarqué</li>
                            <li>Création de logiciels pour l'automatisation de vos quotidiens</li>
                            <li>Déscription et résolution informatiques de problemes réels de la société</li>
                            <li>Guide et Accompagement dans l'<router-link :to="'apprendreCode'" class="inv font-franklin underline italic">apprentissage de la programmation</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="h-96 mb-10 mx-auto w-full flex items-start justify-start p-5">
           <img class="h-full w-2/5 mr-5" src="code.png" alt="Codeur">
           <div class="w-3/5 flex flex-col h-full  items-center">
                <h1 class="font-bold text-4xl font-sans text-blue-500 text-center mb-5">Congrétisez votre rêve avec Innov</h1>
                <p class="font-normal text-md font-serif mb-2">Vous pouvz devenir un concepteur-programmeur et en même temps codeur trop facilement avec les langage de programmation ci après:</p>
                <ul class="list-none">
                    <li class="flex text-sm pb-1"><p class="font-bold text-orange-600 w-20">HTML</p><strong class="pr-2">:</strong> Concevez vos sites applictions web avec une connaissnace accentuée.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-blue-600 w-20">CSS</p><strong class="pr-2">:</strong> Devenez un designer de plus haute performance et expertise.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-yellow-500 w-20">JavaScript</p><strong class="pr-2">:</strong>  Dynamisez vos sites web grâce au langage JavaScript. perplexe atout.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-gray-700 w-20">NodeJs</p><strong class="pr-2">:</strong> Pour le Back-end sofestiqué plus rapide dans l'exécution des requêtes.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-green-600 w-20">MongoBD</p><strong class="pr-2">:</strong> Une base des données non SQL orientée document et Objet.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-emerald-500 w-20">VueJs</p><strong class="pr-2">:</strong> Concevez rapidement le front-end de vos application web.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-blue-800 w-20">Flutter</p><strong class="pr-2">:</strong> Créez des applications Android et IOS, voici le Langage d'actualité.</li>
                    <li class="flex text-sm pb-1"><p class="font-bold text-cyan-400 w-20">ReactJs</p><strong class="pr-2">:</strong> se rapportant au VueJs dans la réalisation rapide de front-end</li>
                </ul>
           </div>
        </div>
        <div class="-mt-5">
            <div class="grid grid-cols-8 gap-1 mb-20 w-4/6 ml-auto">
                <a href="#" class="col-span-1 h-10">
                    <img src="html.png" alt="logo Html" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-orange-600 text-opacity-85 font-bold">HTML</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="css.png" alt="logo Css" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-blue-600 font-bold">CSS</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="js.png" alt="logo JavaScript" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-yellow-500 font-bold">JavaScript</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="node.png" alt="logo NodeJs" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-gray-700 font-bold">NodeJs</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="mongo.jpg" alt="logo MongoDb" class="w-2/5 mx-auto h-full">
                    <p class="font-sans text-center text-green-600 font-bold">MongoDb</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="vue.png" alt="logo VueJs" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-emerald-500 text-opacity-95 font-bold">VueJs</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="flutter.png" alt="logo Flutter" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-blue-800 font-bold">Flutter</p>
                </a>
                <a href="#" class="col-span-1 h-10">
                    <img src="react.png" alt="logo React" class="w-3/5 mx-auto h-full">
                    <p class="font-sans text-center text-cyan-400 font-bold">ReactJs</p>
                </a>
            </div>
        </div>
        
    </div>
    
</template>