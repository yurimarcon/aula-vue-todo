export default {
    adicionaTarefa(state, titulo) {
        if (titulo) {
            state.tarefas.push({
                id: new Date().getTime(),
                titulo,
                concluido: false
            })
        }
    },
    removeTarefa(state, id) {
        state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
}