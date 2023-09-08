<style lang="scss" scoped>
.text {
  background: red;
}
</style>

<template>
  <v-main>
    <!-- Header -->
    <TopHeader />
    <!-- Header -->
    <router-view />
    <!--  -->
  </v-main>
</template>

<script lang="ts" setup>
import TopHeader from "@/components/TopBar/index.vue";
</script>
