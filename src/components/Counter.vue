<template>
  <h1>Vue - pinia counter</h1>

  <h2>{{ counter }}</h2>

  <div>
    <button @click="increment()" class="btn btn-success">+1</button>
    <button @click="decrement()" class="btn btn-info">-1</button>
    <button @click="reset()" class="btn btn-danger">Reset</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counterStore";

export default {
  name: "Counter",
  data() {
    return {
      store: useCounterStore(),
    };
  },
  methods: {
    increment() {
      this.store.increment();
    },
    decrement() {
      this.store.decrement();
    },
    reset() {
      this.store.reset();
    },
  },
  computed: {
    counter() {
      return this.store.counter;
    },
  },
};
</script>

<style></style>
