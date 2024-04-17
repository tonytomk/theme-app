<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit, amet consectetur</p>
    <button @click="toggleTheme()">Toggle</button>
  </div>
</template>

<script lang="ts">
import useTheme from "@/composables/useTheme";
import { useTodoListStore } from "@/store";
import { defineComponent, defineEmits } from "vue";

export default defineComponent({
  name: "HelloWorld",
  emits: ["toggleClicked"],
  props: {
    msg: String,
  },

  setup(props, { emit }) {
    const store = useTodoListStore();
    const { toggleTheme } = useTheme();
    function toggle() {
      emit("toggleClicked", "white");
      store.$state.background = "black";
    }
    return { toggle, toggleTheme };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--primary);
}
</style>
