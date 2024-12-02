<script setup>
 import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToLogin = ()=> {
    router.push('/login');
}
</script>

<template>
    <div style="text-align: center;">
      <h1>Approval Web Apps</h1>
      <hr />
      <Button label="Go to Login" @click="goToLogin">Go to Login </Button>
      <h2>Aplikasi Dikembangkan dengan teknologi</h2>
        <h3>Backend : Node.js</h3>
        <h3>Frontend : PrimeVue-3 (Vue-3)</h3>
        <h3>Database : Postgre - SQL</h3>    
    </div>
  </template>
  