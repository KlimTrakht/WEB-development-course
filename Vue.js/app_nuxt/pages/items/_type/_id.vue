<template>
  <div>
    <p>Type: {{ $route.params.type }}</p>
    <p>Id:  {{ $route.params.id }}</p>
  </div>
    
</template>

<script>
    export default {
        name: "TypeId"
    }
</script>

<style scoped>

</style>
