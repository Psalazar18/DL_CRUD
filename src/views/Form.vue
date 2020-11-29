<template>
  <div class="home">
    <Formulario />
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '@/components/Formulario.vue'

export default {
  name: 'Home',
  components: {
    Formulario
  }
}
</script>
