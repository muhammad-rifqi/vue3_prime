<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
const router = useRouter();

const email = localStorage.getItem('email');
const roles = localStorage.getItem('roles');
const bagian = localStorage.getItem('bagian');

const goToLogout = () => {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('email');
      localStorage.removeItem('roles');
      localStorage.removeItem('bagian');
      router.push('/login');
    }
</script>
<template>
<div>
    <h2>Welcome {{ email }} , Anda Sebagai {{ roles }} - {{ bagian }}</h2>
    <Button label="Go to Logout" @click="goToLogout">Go to Logout</Button>
  </div>
</template>