<script setup>
import { ref, onMounted } from 'vue';
import Header from './layout/Header.vue';
import Top from './layout/Top.vue';
import Button from 'primevue/button';
import Api from '@/api/api';

const rows = ref(null);
const roles = localStorage.getItem('roles');

Api.fetchDataTransaction().then((data)=>{
    rows.value = data;
});

const approval1 = async (arr1) => {
  Api.app1(arr1[0],arr1[1],'/transaction');
}
 
const rejected1 = async (arr1) => {
  Api.rejc1(arr1[0],arr1[1],'/transaction');
} 
  
const approval2 = async (arr2) => {
 Api.app2(arr2[0],arr2[1],'/transaction');
}

const rejected2 = async (arr2) => {
 Api.rejc2(arr2[0],arr2[1],'/transaction');
} 

const approval3 = async (arr3) => {
  Api.app3(arr3[0],arr3[1],'/transaction');
}

const rejected3 = async (arr3) => {
  Api.rejc3(arr3[0],arr3[1],'/transaction');
} 

const approval4 = async (arr4) => {
  Api.app4(arr4[0],arr4[1],'/transaction');
}

const rejected4 = async (arr4) => {
  Api.rejc4(arr4[0],arr4[1],'/transaction');
  } 


</script>

<template>
<div>
    <h1>Transactions Page</h1>
    <div>
        <Top></Top>
    </div>
    <hr />
    <div>
        <Header></Header>
    </div>
    <hr />
</div>

 <div>
    <!--  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  -->
    <table width="100%" v-if="roles == 'asdepubi'">
        <thead>
          <tr align="left">
              <th>ID</th>
              <th>PLACEMENT DATE</th>
              <th>PLACEMENT AMOUNT</th>
              <th>PLACEMENT RATE</th>
              <th>ASDEP(unit bisnis investasi)</th>
          </tr>
        </thead>
        <tbody v-if="rows">
            <tr v-for="item in rows" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.placement_date}}</td>
                <td>{{item.placement_amount}}</td>
                <td>{{item.placement_rate}}</td>
                <td>{{item.approve1 == 2 ? 'Approve' : 'Rejected'}} | 
                  <Button v-if="item.approve1 == 1" @click="approval1([item.id,item.approve1])">Approve</Button> 
                  <Button v-if="item.approve1 == 2" @click="rejected1([item.id,item.approve1])">Rejected</Button>
                </td>
            </tr>
        </tbody>
    </table>
    <!--  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  -->
    <table width="100%" v-if="roles == 'deputiubi'">
        <thead>
          <tr align="left">
              <th>ID</th>
              <th>PLACEMENT DATE</th>
              <th>PLACEMENT AMOUNT</th>
              <th>PLACEMENT RATE</th>
              <th>ASDEP(unit bisnis investasi)</th>
              <th>DEPUTI(unit bisnis investasi)</th>
          </tr>
        </thead>
        <tbody v-if="rows">
            <tr v-for="item in rows" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.placement_date}}</td>
                <td>{{item.placement_amount}}</td>
                <td>{{item.placement_rate}}</td>
                <td>{{item.approve1 == 2 ? 'Approve' : 'Rejected'}}</td>
                <td>{{item.approve2 == 2 ? 'Approve' : 'Rejected'}} 
                  | <Button v-if="item.approve2 == 1" @click="approval2([item.id,item.approve2])">Approve</Button>
                    <Button v-if="item.approve2 == 2" @click="rejected2([item.id,item.approve2])">Rejected</Button>
                </td>
            </tr>
        </tbody>
    </table>
 <!--  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  -->
 <table width="100%" v-if="roles == 'deputiubs'">
        <thead>
          <tr align="left">
              <th>ID</th>
              <th>PLACEMENT DATE</th>
              <th>PLACEMENT AMOUNT</th>
              <th>PLACEMENT RATE</th>
              <th>ASDEP(unit bisnis investasi)</th>
              <th>DEPUTI(unit bisnis investasi)</th>
              <th>ASDEP(unit bisnis investasi)</th>
              <th>DEPUTI(unit bisnis settlement)</th>
          </tr>
        </thead>
        <tbody v-if="rows">
            <tr v-for="item in rows" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.placement_date}}</td>
                <td>{{item.placement_amount}}</td>
                <td>{{item.placement_rate}}</td>
                <td>{{item.approve1 == 2 ? 'Approve' : 'Rejected'}} </td>
                <td>{{item.approve2 == 2 ? 'Approve' : 'Rejected'}} </td>
                <td>{{item.approve3 == 2 ? 'Approve' : 'Rejected'}} </td>
                <td>{{item.approve4 == 2 ? 'Approve' : 'Rejected'}} 
                  | <Button v-if="item.approve4 == 1" @click="approval4([item.id,item.approve4])">Approve</Button>
                    <!-- <Button v-if="item.approve4 == 2" @click="rejected4([item.id,item.approve4])">Rejected</Button> -->
                    <Button v-if="item.approve4 == 2">Done</Button>
                
                </td>
            </tr>
        </tbody>
    </table>
 <!--  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  -->
 <table width="100%" v-if="roles == 'asdepubs'">
        <thead>
          <tr align="left">
              <th>ID</th>
              <th>PLACEMENT DATE</th>
              <th>PLACEMENT AMOUNT</th>
              <th>PLACEMENT RATE</th>
              <th>ASDEP(unit bisnis investasi)</th>
              <th>DEPUTI(unit bisnis investasi)</th>
              <th>ASDEP(unit bisnis investasi)</th>
          </tr>
        </thead>
        <tbody v-if="rows">
            <tr v-for="item in rows" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.placement_date}}</td>
                <td>{{item.placement_amount}}</td>
                <td>{{item.placement_rate}}</td>
                <td>{{item.approve1 == 2 ? 'Approve' : 'Rejected'}} </td>
                <td>{{item.approve2 == 2 ? 'Approve' : 'Rejected'}} </td>
                <td>{{item.approve3 == 2 ? 'Approve' : 'Rejected'}} 
                  | <Button v-if="item.approve3 == 1 " @click="approval3([item.id,item.approve3])">Approve</Button>
                    <Button v-if="item.approve3 == 2 " @click="rejected3([item.id,item.approve3])">Rejected</Button>
                </td>
            </tr>
        </tbody>
    </table>
    <!--  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  -->
  </div>
  <br />
  <hr />
</template>