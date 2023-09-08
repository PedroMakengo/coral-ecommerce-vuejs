<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  button {
    background: #f0f0f0;
    width: 100%;
    padding: 1rem;
  }
}

.item {
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;
  height: 50vh;

  .content {
    padding: 1rem;
  }
  &:hover {
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    /* object-position: bottom; */
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
}
</style>

<template>
  <!-- <HelloWorld /> -->
  <v-container>
    <v-responsive>
      <div class="categories">
        <button
          v-for="(item, index) in categories"
          :key="index"
          @click="handleChangeCategories(item)"
        >
          {{ item }}
        </button>
      </div>
      <v-row>
        <v-col v-for="(item, index) in produtos" :key="index" cols="12" md="4">
          <a :href="`/${item.id}`" class="item">
            <img :src="item.images[0]" alt="" />
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
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { axiosInstance } from "@/services/api";

import HelloWorld from "@/components/HelloWorld.vue";

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
