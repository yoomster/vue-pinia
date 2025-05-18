<template>
  <h2>2nd counter = also {{ counter }}</h2>
</template>

<script>
import { useCounterStore } from "@/stores/counterStore";
export default {
  name: "AnotherCounter",
  data() {
    return {
      store: useCounterStore(),
    };
  },
  computed: {
    counter() {
      return this.store.counter;
    },
  },
};
</script>
