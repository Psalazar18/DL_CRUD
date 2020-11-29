<template>
  <div class="container">
        <h1 class="display-2 text-center">Usuarios creados</h1>
        <div class="text-center" v-if="traerUsuarios == ''">
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
        </div>     
        <el-table :data= traerUsuarios style="width: 100%" v-show="traerUsuarios != ''">
            <el-table-column label="Nombre" prop="name"></el-table-column>
            <el-table-column label="Email" prop="email"></el-table-column>
            <el-table-column align="right">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row.id)">Edit</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">Delete</el-button>
            </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:'Lista',
    computed: {
        ...mapGetters(['traerUsuarios'])
    },
    created() {
        
    },
    methods: {
        handleDelete(id){
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: 'Elemento borrado'
            });
            this.$store.dispatch('eliminarUsuario',id);
            }).catch(() => {
            this.$message({
                type: 'info',
                message: 'No se pudo borrar...'
            });          
        });
      },
        handleEdit(id){
            this.$router.push({name: 'Editar', params:{id:id}});
        }
    }
}
</script>

<style>

</style>