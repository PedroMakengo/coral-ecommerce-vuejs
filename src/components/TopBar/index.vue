<script lang="ts" setup>
import { ref } from "vue";

const categories = ref(["smartphones", "laptops", "fragrances"]);

const query = ref("");
</script>

<template>
  <v-toolbar color="white" class="header">
    <div class="container">
      <v-row>
        <v-col cols="12" md="5">
          <div class="logo">
            <a href="/" class="logo-site">
              <img src="@/assets/logo.png" alt="" />
            </a>
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
        <v-col cols="12" md="7" align="right">
          <div class="nav">
            <div class="categories">
              <a href="/" v-for="(item, index) in categories" :key="index">
                {{ item }}
              </a>
            </div>
            <div class="login">
              <a href="/">
                <v-icon icon="mdi mdi-account"></v-icon>
                Iniciar Sessão
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-toolbar>
</template>

<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>
