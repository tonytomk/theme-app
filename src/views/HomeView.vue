<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      @toggleClicked="toggle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup(props, ctx) {
    console.log("'hi'");
    function toggle(event: any) {
      console.log(event);
    }
    return { toggle };
  },
});
</script>
