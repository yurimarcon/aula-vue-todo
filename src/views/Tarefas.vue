<template>
  <div>
    <ListaDeTarefas />
    <div
    v-if="!$store.state.tarefas.length"
    class="mt-16 animate__animated animate__bounceInUp"
    >
      <center>
        <v-icon
        size="100"
        color="primary"
        >
          mdi-check
        </v-icon>

        <div
        class="text-h5 primary--text"
        >
          Nenhuma tarefa
        </div>

      </center>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from '../components/tarefas/ListaDeTarefas.vue';

  export default {
    name: 'Home',
    components: {
      ListaDeTarefas
    },
    created(){
      this.$store.commit('buscaTarefas');
    },
  }
</script>
