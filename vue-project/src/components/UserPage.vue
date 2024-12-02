<script setup>
import { ref, onMounted } from 'vue';
import Header from './layout/Header.vue';
import Top from './layout/Top.vue';
import Api from '@/api/api';

const rows = ref(null);
Api.fetchDataUser().then((data)=>{
    rows.value = data;
});

</script>

<template>
<div>
    <h1>User Page</h1>
    <div>
        <Top></Top>
    </div>
    <hr />
    <div>
        <Header></Header>
    </div>
    <hr />
</div>
<h1>Data User</h1>
 <div>
    <ul v-if="rows">
        <li v-for="item in rows" :key="item.id">{{ item.id }} | {{ item.email }} | {{ item.roles }} <hr> </li> 
    </ul>
  </div>
  <br>
  <hr />
</template>