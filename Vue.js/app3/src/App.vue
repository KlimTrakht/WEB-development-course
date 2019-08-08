<template>
  <div id="app">
    <h3>Star Wars Router</h3>
    <router-link class="link" to="/about">About us</router-link> |
    <router-link class="link" to="/data/people">Characters</router-link> |
    <router-link class="link" to="/data/planets">Planets</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>
