<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: { Navbar, Footer },
  name: "App",
  data() {
    return {};
  },
  methods: {

  }
};
</script>
<style>
html {
  overflow: auto;
}
</style>