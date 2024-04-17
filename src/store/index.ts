import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    background: "",
  }),
  actions: {
    toggleCompleted(idToFind: any) {
      console.log("hi");
    },
  },
});
