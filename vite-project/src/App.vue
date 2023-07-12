<script setup>
 import { data, images, card } from './data/data.js';
</script>

<template>
  <div class="container mx-auto flex items-center justify-center min-h-screen flex-col">
    <h1 class="text-4xl text-black">{{ data.message }}</h1>
    <h1 class="mt-10 text-xl text-gray-700">Today is <span>{{ data.gateCurrentDate() }}</span></h1>
    <h1 class="mt-10 text-2xl text-black-700">You have <span class="bg-slate-400 text-orange-600 p-1 rounded-lg">{{ data.task[6]}}</span> task for today.</h1>
    
    <section class="container mx-auto p-10">
      <h1 class="text-4xl mb-10 text-left">Data Project</h1>
        <section class="main flex space-x-4">
          <div class="flex space-y-4 flex-col w-1/2">
            <img title="Water surrounded by trees and mountains" src="//images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="">
            <h2 class="text-xl text-left">{{ images[0].title }}</h2>
            <a target="_blank" href="https://unsplash.com/photos/NRQV-hBF10M" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-40 text-center">
              Image Source
            </a>
          </div>
        </section>
    </section>
  </div>

  
</template>


<style scoped>

</style>
