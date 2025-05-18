import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counter: 0,
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.countert--;
    },
    reset() {
      this.counter = 0;
    },
  },
  getters: {},
});
