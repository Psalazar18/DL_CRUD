<template>
  <div class="container">
    <h1 class="display-2 text-center">Agrega tus datos</h1>
    <b-form @submit.prevent="Agregar" @reset="onReset">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" type="text" required placeholder="Enter name" key=""></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-button class="mr-2" type="submit" variant="success">Agregar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    Agregar(){
      if(this.form.name && this.form.email != ''){
        this.$router.push('/lista')
        this.$store.dispatch('agregandoUsuarios',this.form);
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.name = ''
      this.form.email = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
