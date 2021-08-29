<template>
  <div>
    <v-list-item
    :class="{'blue lighten-4':tarefa.concluido}"
    @click="$store.dispatch('concluiTarefa', tarefa)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
          :class="{'text-decoration-line-through': tarefa.concluido}"
          >{{tarefa.titulo}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <TarefaMenu 
          :tarefa="tarefa"
          />
        </v-list-item-action>

      </template>
      
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue" 

export default {
  components:{TarefaMenu},
  props:['tarefa'],
  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)
    }
  }
}
</script>

<style>

</style>