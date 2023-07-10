<script setup>
  const message = 'Welcome. Get ready to master Vue.js 3!'
  const date = '30th june, 2023'
  // Display current date with function
  function getDate(){
    const date = new Date();
    return date.toDateString()
  }

  // Display current date with object
  const data = {
    message: 'Welcome. Get ready to master Vue.js 3!',
    date: '30th june, 2023',
    task: [1,2,3,4,5,6,'No']
    }
</script>

<template>
  <div class="container mx-auto flex items-center justify-center min-h-screen flex-col">
    <h1 class="text-4xl text-black">{{ data.message }}</h1>
    <h1 class="mt-10 text-xl text-gray-700">Today is <span>{{ data.date }}</span></h1>
    <h1 class="mt-10 text-2xl text-black-700">You have <span class="bg-slate-400 text-orange-600 p-1 rounded-lg">{{ data.task[6]}}</span> task for today.</h1>
  </div>
</template>

<style scoped>

</style>
