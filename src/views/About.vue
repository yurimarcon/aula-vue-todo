<template>
  <div class="pa-3">
    <h1>Sobre</h1>
      <p>
        Essa é uma lista de tarefas desenvolvida para fins didáticos
        com Vue.js. Você pode acompanhar o passo a passo para a criação desse 
        projeto em uma playlist gratúita que está no YouTube:
      </p>
      <center>
        <iframe 
        min-width="100%"
        max-height="315"
        
        style="border-radius: 10px"
        src="https://www.youtube.com/embed/fL2BAYzCIZs" 
        title="Playlist do YouTube" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </center>
      <p>  
        Utilizamos diversas ferramentas
        atuais(contexto de 2021) e muito utilizadas no mercado de trabalho.

        Algumas ferramentas utilizadas aqui foram:
      </p>
      <v-list>
      <template v-for="(item) in tacnologias">

        <v-list-item
          :key="item.titulo"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr>
    <section>
      <p>
        <v-card-title>Obrigado por prestigiar o projeto!!!</v-card-title>
        <v-card-subtitle >Contato:</v-card-subtitle>
        <v-card-text>
        <strong>📨E-mail:</strong> yuri.erik.oliveira@gmail.com<br>
        <strong>🧑‍💻 Yuri Marcon</strong><br>
        <img src="../assets/octocat.png" height="20px" alt="imagem octocat" /> <a href="https://github.com/yurimarcon">/yurimarcon</a>
        </v-card-text>
      </p>
    </section>
      
  </div>
</template>

<script>

export default {
  data() {
    return{
      tacnologias:[
        {
          titulo: "HTML",
          icon: "mdi-language-html5"
        },
        {
          titulo: "Vue.js",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify"
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs"
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database"
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition"
        },
        {
          titulo: "Drag and Drop",
          icon: "mdi-drag-variant"
        },
        {
          titulo: "Git",
          icon: "mdi-git"
        },
        {
          titulo: "GitHub",
          icon: "mdi-github"
        },
        {
          titulo: "Netlify",
          icon: "mdi-web"
        },
      ]
    }
  }
}
</script>

