import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../main";
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    traerUsuarios(state){
      return state.usuarios;
    }
  },
  mutations: {
    mutarUsuarios(state,array){
      state.usuarios = array;
    }
  },
  actions: {
    traerData({commit}){
      db.collection("usuarios").onSnapshot(respuesta => {
        let array = [];
        respuesta.forEach(element =>{
          array.push({
            id: element.id,
            name: element.data().name,
            email: element.data().email,
          })
        });
        commit('mutarUsuarios',array);
      });
    },
    agregandoUsuarios(context,data){
      db.collection("usuarios").add({
        name: data.name,
        email: data.email,
      }).then(resp=>{
        console.log(resp);
      })
    },
    eliminarUsuario(context,id){
      db.collection('usuarios').doc(id).delete().then(()=>{
      }).catch(error=>{
        console.log(error);
      })
    },
    actualizarUsusario(context,data){
      db.collection("usuarios").doc(data.id).update({
        name: data.name,
        email: data.email,
      }).then(()=>{
        setTimeout(()=>{
          router.push('/lista');
        },1000);
      })
    }

  }
})
