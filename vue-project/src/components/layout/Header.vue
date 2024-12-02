<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToAbout = ()=> {
    router.push('/about');
}

const goToHome = ()=> {
    router.push('/dashboard');
}

const goToUser = ()=> {
    router.push('/users');
}

const goToTransaction = ()=>{
    router.push('/transaction');
}

</script>

<template>
<p> <Button @click="goToHome"> Home </Button> | <Button @click="goToUser">  User </Button> | <Button @click="goToTransaction"> Transaksi </Button> | <Button @click="goToAbout"> About </Button> | </p>
</template>


<style>
p{
    padding: 5px;
}
</style>