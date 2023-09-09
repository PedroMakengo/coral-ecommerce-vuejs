<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { axiosInstance } from "@/services/api";

const router = useRoute();

const idProduct = router.params.id;
const product = ref<any>([]);

const searchProductFromId = async () => {
  const response = await axiosInstance.get(`/products/${idProduct}`);
  product.value = response.data;
};

onMounted(() => {
  searchProductFromId();
});
</script>

<template>
  <div class="container mt-4 pt-4">
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <img :src="product.thumbnail" alt="" />
        </v-card>
      </v-col>
    </v-row>
    {{ product }}
    <h1>Produto:</h1>
  </div>
</template>

<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>
