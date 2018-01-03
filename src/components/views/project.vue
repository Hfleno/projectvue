<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: this.$route.params.id
    }
  }
}
</script>
