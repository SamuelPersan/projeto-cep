<template>

  <div id="img">
    <img src="../assets/CEP.png" alt="">
  </div>

  <div>
    <h1>Ola, seja bem-vindo!</h1> 
    <img src="#" alt="" />
    <p>Vamos consultar o endereço completo pelo CEP.</p> <!--Descrição da pagina inicial-->
    <router-link to="/buscar-cep"><button>Pesquisar CEP</button></router-link>
   
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};

</script>

<style scoped>
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
