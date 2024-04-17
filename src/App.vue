<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("hi");
    // this.$refs['myApp'].style.setProperty('--brand-theme', newValue);
  },
});
</script>
<style lang="scss">
/* variables */
:root {
  --purple: #6200ee;
  --purple-dark: #400088;
  --teal: #04dac6;

  --primary: var(--purple);
  --primary-light: hsl(265, 70%, 95%);
  --primary-dark: #5d3991;
  --secondary: #04dac6;
  --white: #fafafa;
  --off-white: #ffffffcc;
  --black: #1a1a1a;
  --darker-grey: #333;
  --dark-grey: #4e4c4c;
  --grey: #718096;
  --gray-light: #718096;

  /* Dark Theme */
  --bg--dark: #000c1d;
  --text--dark: var(--off-white);
  --link-text--dark: var(--off-white);
  --active-link-text--dark: var(--secondary);
  --shadow--dark: #121212;
  --project-border--light: var(--primary);
  --quote-bg--dark: rgb(2, 55, 81);

  /* Light Theme */
  --bg--light: var(--white);
  --text--light: var(--darker-grey);
  --link-text--light: var(--dark-grey);
  --active-link-text--light: var(--primary);
  --shadow--light: var(--grey);
  --project-border--light: transparent;
  --quote-bg--light: var(--primary-light);

  --background: var(--bg--light);
  --text: var(--text--light);
  --link-text: var(--link-text--light);
  --active-link-text: var(--primary);
  --shadow: var(--shadow--light);
  --project-border: var(--project-border--light);
  --quote-bg: var(--quote-bg--light);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background);
  color: var(--primary);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--primary);
    }
  }
}
</style>
