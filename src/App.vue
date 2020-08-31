<template>
  <component :is="layout" />
</template>

<script>
const defaultLayout = 'default-layout'
export default {
  name: 'App',
  computed: {
    layout () {
      return this.$route.meta.layout || defaultLayout
    }
  }
}
</script>

<style lang="scss">
  // import global scss
</style>
