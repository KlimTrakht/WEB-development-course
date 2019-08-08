<template>
  <div id="app">
    <h3>Jokes</h3>
    <button
            class="btn btn-primary"
            @click="initJokes">Add ten random jokes</button>

    <button class="btn btn-primary"
            @click="addJoke">Add a Joke</button>

    <br>

    <span v-for="type in types">
      <input
              type="checkbox"
              :value="type"
              v-model="checkedTypes"
              checked
      >
      <label>{{type}}</label>

    </span>


    <br>

    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :key="index"
        :index="index"
      />

    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Joke from './components/Joke'

  export default {
    data(){
      return {
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming']
      }
    },
    components: {
      Joke
    },
    mounted(){
      // this.$store.commit('initJokes', [{test: 'test_joke'}])
    },
    // methods: mapActions([
    //   'initJokes'
    // ]),
    methods:{
      ...mapActions([
        'initJokes',
        'addJoke'
      ]),
      initJokesMethod(){
          this.$store.dispatch('initJokes')
      }
    }
    // methods: {
    //   initJokes(){
    //     this.$store.dispatch('initJokes')
    //   }
    // }
  }

</script>

