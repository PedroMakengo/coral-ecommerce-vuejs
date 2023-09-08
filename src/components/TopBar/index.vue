<script lang="ts" setup>
import { ref } from "vue";

const categories = ref(["smartphones", "laptops", "fragrances"]);
</script>

<template>
  <v-toolbar elevation="1" color="white" class="header">
    <div class="container">
      <v-row>
        <v-col cols="12" md="4">
          <div class="logo">
            <h2>Logo</h2>
            <form @submit.prevent="">
              <v-icon icon="mdi mdi-magnify"></v-icon>
              <input
                type="search"
                v-model="query"
                placeholder="Procurar produto"
              />
            </form>
          </div>
        </v-col>
        <v-col cols="12" md="8" align="right">
          <div class="nav">
            <div class="categories">
              <a href="/" v-for="(item, index) in categories" :key="index">
                {{ item }}
              </a>
            </div>
            <div class="login"></div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-toolbar>
</template>

<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>
