<template>
  <v-app>
    <the-toolbar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheToolbar from "./components/TheToolbar.vue";

export default {
  name: "App",
  components: {
    TheToolbar
  },
  data: () => ({})
};
</script>

<style>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px;
}
</style>
