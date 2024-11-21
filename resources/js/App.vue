<template>
    <div id="app">
      <h1>Welcome to Vue 3 with Vite in Laravel 10!</h1>
      <p>Count: {{ count }}</p>
      <button @click="incrementCount">Increment Count</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const count = ref(0);
  
  onMounted(() => {
    console.log('Component mounted!');
  });
  
  const incrementCount = () => {
    count.value++;
  };
  </script>