<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();

console.log(router.params);
</script>

<template>
  <div class="container">
    <h1>Produto: {{ router.params.id }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>
