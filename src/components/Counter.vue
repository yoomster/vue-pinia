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
export default {
  name: "Counter",
  data() {
    counter = 0;
  },
};
</script>

<style></style>
