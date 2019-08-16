<template>
  <div id="app">
    <h3>Star Wars Router</h3>
    <router-link class="link" to="/about">About us</router-link> |
    <router-link class="link" to="/data/people">Characters</router-link> |
    <router-link class="link" to="/data/planets">Planets</router-link>

    <Modal />
    <Tooltip />

    <router-view></router-view>
  </div>
</template>

<script>
  import Modal from './components/Modal';
  import Tooltip from './components/Tooltip';

export default {
  name: 'app',
  components: {
    Modal,
    Tooltip
  }
}
</script>
