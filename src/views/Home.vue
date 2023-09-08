<style lang="scss" scoped>
.item {
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;
  height: 60vh;

  .content {
    padding: 1rem;
  }

  .image {
    background-size: 100% !important;
    height: 30vh;
  }
}
</style>

<template>
  <Banner />

  <div class="categories">
    <div class="container">
      <div
        v-for="(item, index) in categories"
        :key="index"
        @click="handleChangeCategories(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <div class="container">
    <v-row>
      <v-col v-for="(item, index) in produtos" :key="index" cols="12" md="4">
        <a :href="`/${item.id}`" class="item">
          <div
            class="image"
            :style="`background-image: url(${item.images[0]})`"
          ></div>
          <div class="content">
            <v-row>
              <v-col cols="12" md="4">
                <span>{{ item.brand }}</span>
              </v-col>
              <v-col align="right">
                <span>{{ item.category }}</span>
              </v-col>
            </v-row>
            <p>{{ item.description }}</p>
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
