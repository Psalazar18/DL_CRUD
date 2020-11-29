<template>
  <div class="container" v-if="this.$route.params.id">
    <h1 class="display-2 text-center">Edita tu usuario...</h1>      
    <b-form @submit.prevent="editar">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" type="text" required placeholder="Enter name" key=""></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email email:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-button class="mr-2" type="submit" variant="primary">Editar</b-button>     
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Edit',
    data() {
    return {
        form: {
            name: '',
            email: '',
            id: ''
        }
    }
  },
    created() {
        let datos = {};
        datos = this.$store.getters.traerUsuarios.find(resp => resp.id === this.$route.params.id)
        console.log(datos)
        if (datos){
            this.form.name = datos.name;
            this.form.email = datos.email;
            this.form.id = datos.id;
        }else {
            this.$message('Usuario no existe... retornando.');
            setTimeout(()=>{
                this.$router.push('/lista');
            },1000);
        }
    },
    methods: {
        editar(){
            if (this.form.name && this.form.name.length > 2 && this.form.email) {
                let data = {
                    name: this.form.name,
                    email: this.form.email,
                    id: this.form.id,
                }
                this.$message({
                type: 'success',
                message: 'Usuario actualizado:)'
            });
                this.$store.dispatch('actualizarUsusario',data);
            } else {
                console.log("No se puede");
            }
        }
    },
}
</script>

<style>

</style>