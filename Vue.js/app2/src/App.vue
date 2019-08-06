<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <button class="btn btn-primary"
            @click="fetchCharacter">Test</button>

    <Character
            v-for="(id, index) in initial_ids"
            :id="id"
            :key="index"
    />

  </div>
</template>

<script>

  import Character from './components/Character'

export default {
  name: 'app',
  data(){
    return {
      title: 'Star Wars Team',
      initial_ids: [1, 13, 14],
      url: process.env.VUE_APP_URL
    }
  },
  methods: {
    fetchCharacter() {
      fetch(`${this.url}people/`, {
        method: 'GET'
      })
        .then(response => response.json())
              .then(json => console.log(json))
    }
  },
  components: {
    Character
  }
}
</script>

