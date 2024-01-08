<template>
    <div class="buscar-cep">
      <h2>Buscar CEP</h2>
  
      <form @submit.prevent="searchCEP">
        <div class="single">
          <input v-model="cep" type="text" name="nome" id="nome" class="input" required autocomplete="off" @blur="handleCep">
          <label :for="address.cep">Digite o CEP: (somente números)</label>
        </div>
        <button type="submit" id="btn" @click="searchCEP">Buscar</button>
      </form>
  
      <div v-if="isShowModalAddress" class="endereco">
        <p>Endereço</p>
  
        <div class="form-group">
          <label for="logradouro">Logradouro:</label>
          <input id="logradouro" name="logradouro" v-model="address.logradouro">
          <input id="bairro" name="bairro" v-model="address.bairro">
          <input id="cidade" name="cidade" v-model="address.cidade">
          <input id="uf" name="uf" v-model="address.uf">
        </div>
  
        <button @click="clearAddress">Limpar</button>
        <router-link to="/HomeView"><button>Voltar</button></router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { vue } from 'vue';
  
  vue.createApp({
    data() {
      return {
        isShowModalAddress: false,
        cep: '',
        address: {
          cep: '',
          logradouro: '',
        },
      };
    },
    methods: {
      async searchCEP() {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
          const data = await response.json();
  
          this.address.logradouro = data.logradouro;
          this.address.bairro = data.bairro;
          this.address.cidade = data.cidade;
          this.address.uf = data.uf;
          this.isShowModalAddress = true;
        } catch (error) {
          console.error(error);
        }
      },
      clearAddress() {
        this.address.logradouro = '';
        this.isShowModalAddress = false;
      },
    },
  }).mount('#app');
  </script>
  
  <style>
  form {
  background-color: white;
  max-width: 250px;
  height: 50px;
  padding: 40px;
  border-radius: 20px;
  margin: 0 auto;
  }

  h2 {
  text-align: center;
  font-size: 30px;
  color: cornflowerblue;
  margin: 30px;
  }

  .single {
  position: relative;
  margin: 30px 0;
  }

  .single label{
  position: absolute;
  left: 0;
  bottom: 5px;
  transition: all 0.2s;
  cursor: text;
  }

  .input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #ccc;
  padding: 5px;
  font-size: 17px;
  outline: none;
  }

  form .single .input:focus ~ label,
  form .single .input:valid ~ label{
  transform: translateY(-24px);
  font-size: 12px;
  color: cornflowerblue;
  }

  button {
  padding: 10px 40px;
  margin: 30px;
      font-size: 18px;
      font-weight: 600;
      background-color: #00ffff;
      border-radius: 30px;
      border: 0;
      cursor: pointer;
  }
</style>
  