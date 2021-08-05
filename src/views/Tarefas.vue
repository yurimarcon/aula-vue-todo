<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >
      <div
      v-for="tarefa, index in tarefas"
      :key="index"
      >
        <Tarefa
        :tarefa="tarefa"
        />
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import Tarefa from '../components/tarefas/Tarefa.vue'
  import { mapState, mapMutations } from 'vuex';
  const todoStore = "todoStore";
  export default {
    name: 'Tarefas',
    components: {
      Tarefa
    },
    computed: {
      ...mapState(todoStore, ["tarefas"])
    },
    data() {
      return {
        campoInput: null,
      }
    },
    methods:{
      ...mapMutations(todoStore, ["adicionaTarefa"]),
      handleAddTarefa(){
        this.adicionaTarefa(this.campoInput);
        this.campoInput = null;
      }
    }
  }
</script>
