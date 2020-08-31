<template>
  <v-app id="inspire">
    <v-main>
     <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col class="content"> <router-view /></v-col>
  </v-row>
</v-container>

    </v-main>

  </v-app>
</template>

<script>

export default {
  props: {
    source: String
  }
}
</script>
<style lang="scss" scoped>
.content{
  max-width: 500px;
}
</style>
