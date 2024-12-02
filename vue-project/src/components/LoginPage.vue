<template>
    <div class="p-d-flex p-jc-center p-ai-top p-min-vh-300" style="text-align: center;">
      <div class="p-card p-shadow-4" style="width: 100%;">
        <div class="p-card-header">
          <h2 class="p-text-center">Login Approval Apps</h2>
        </div>
        <div class="p-card-body">
          <form @submit.prevent="handleSubmit">
            <div class="p-field">
              <label for="email">Email : </label>
              <InputText
                id="email"
                v-model="form.email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div class="p-field">
              <label for="password">Password : </label>
              <Password
                id="password"
                v-model="form.password"
                toggleMask
                placeholder="Enter your password"
                required
              />
            </div>
            <Button label="Login" class="p-button-lg p-button-primary p-mt-2" type="submit">Login</Button>
          </form>
        </div>
      </div>
      <hr>
      <h1>Flow Aplikasi :</h1>
      <p>Login User : </p>
      <p>Login Asisten Deputi, dengan roles sebagai Asdep Unit Bisnis Investasi</p>
      <p>Login Deputi, dengan roles sebagai Deputi Unit Bisnis Investasi</p>
      <p>Login Asisten Deputi, dengan roles sebagai Asdep Unit Bisnis Settlement</p>
      <p>Login Deputi, dengan roles sebagai Asdep Unit Bisnis Settlement</p>
      <hr>
      <p>Approve User : </p>
      <p>Approval Asisten Deputi, dengan roles sebagai Asdep Unit Bisnis Investasi</p>
      <p>Approval Deputi, dengan roles sebagai Deputi Unit Bisnis Investasi</p>
      <p>Approval Asisten Deputi, dengan roles sebagai Asdep Unit Bisnis Settlement</p>
      <p>Approval Deputi, dengan roles sebagai Asdep Unit Bisnis Settlement</p>
      <hr>
    </div>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Button from 'primevue/button';

  export default {
    components: {
      InputText,
      Password,
      Button,
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async handleSubmit() {
        try {
          await fetch("http://localhost:3009/act_login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"email" : this.form.email, "password" : this.form.password}),
          })
          .then(res => res.json())
          .then((rows)=> { 
              if(rows?.data.length > 0) {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('roles', rows?.data[0]?.roles);
                localStorage.setItem('email', rows?.data[0]?.email);
                localStorage.setItem('bagian', rows?.data[0]?.bagian);
                this.$router.push('/dashboard');
              }else{
                alert("Login Failed"); return false;
              }
            
          })
        } catch (error) {
           alert(error); return false;
        }
      },
    },
  };
  </script>

  <style scoped>
  .p-card {
    border-radius: 8px;
    padding: 2rem;
  }
  #password{
    padding: 5px;
  }
  </style>