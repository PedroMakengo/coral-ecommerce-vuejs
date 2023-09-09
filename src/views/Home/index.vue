<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>

<template>
  <Banner />

  <div class="categories">
    <div class="container">
      <Splide
        :options="{
          rewind: true,
          arrows: false,
          perPage: 5,
          pagination: false,
        }"
        aria-label="My Favorite Images"
      >
        <SplideSlide
          v-for="(item, index) in categories"
          :key="index"
          @click="handleChangeCategories(item)"
          class="item-categoria"
        >
          {{ item }}
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <div class="container mt-4 pt-4">
    <v-row>
      <v-col cols="12" md="12" class="title">
        <h2>Produtos <span>recomendados</span></h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(item, index) in produtos" :key="index" cols="12" md="4">
        <a :href="`/product/${item.id}`" class="item">
          <div
            class="image"
            :style="`background-image: linear-gradient(#00000083, #000), url(${item.images[0]})`"
          >
            <v-col align="left">
              <span class="category">{{ item.category }}</span>
            </v-col>
          </div>
          <div class="content">
            <v-row>
              <v-col cols="12" md="12">
                <span>{{ item.brand }}</span>
              </v-col>
            </v-row>
            <h2>{{ item.description.substring(40, "") }}</h2>
          </div>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import Banner from "@/components/Banner/index.vue";
import { onMounted, ref } from "vue";
import { axiosInstance } from "@/services/api";

import { Splide, SplideSlide } from "@splidejs/vue-splide";

// Default theme
import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";

// or only core styles
import "@splidejs/vue-splide/css/core";

const produtos = ref<any>([]);
const categories = ref<any>([]);

const buscarListaProdutos = async () => {
  const { data } = await axiosInstance.get("/products");
  produtos.value = data.products;
  console.log(produtos.value);
};

const buscarListaCategorias = async () => {
  const { data } = await axiosInstance.get("/products/categories");
  categories.value = data;
};

const handleChangeCategories = async (item: string) => {
  const { data } = await axiosInstance.get(`/products/category/${item}`);
  console.log(data.products);
  produtos.value = data.products;
};

onMounted(() => {
  buscarListaProdutos();
  buscarListaCategorias();
});
</script>
