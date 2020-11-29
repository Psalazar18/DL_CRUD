<template>
  <div>
    <div class="container mt-3 text-center">
      <router-link to="/">Agregar Usuario</router-link> |
      <router-link to="/lista">Lista de Usuarios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('traerData'); 
  },
}
</script>

<style>

</style>
