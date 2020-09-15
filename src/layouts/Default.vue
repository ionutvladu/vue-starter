<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item link to="/home">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link  to="/charts">
          <v-list-item-action>
            <v-icon>fas fa-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Charts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link  to="/lists">
          <v-list-item-action>
            <v-icon>fas fa-list-alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lists</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>fas fa-info-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row        >
          <v-col>
         <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      app
      class="justify-end"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-overlay :value="loading" z-index="99999">
      <v-progress-circular :size="70" :width="7" color="red" indeterminate></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    source: String
  },
  computed: {
    ...mapState(['loading'])
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    logout () {
      this.$services.logout().then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style lang="scss">

</style>
