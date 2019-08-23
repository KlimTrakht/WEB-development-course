<template>
  <div>User {{ $route.params.id}}</div>
</template>

<script>
  export default {
    name: "id",
    validate({params}) {
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style scoped>

</style>
