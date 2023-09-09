<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { axiosInstance } from "@/services/api";

const router = useRoute();

const idProduct = router.params.id;
const product = ref<any>([]);

const searchProductFromId = async () => {
  const response = await axiosInstance.get(`/products/${idProduct}`);
  product.value = response;
};

onMounted(() => {
  searchProductFromId();
});
</script>

<template>
  <div class="container">
    <h1>Produto:</h1>
    {{ product }}
  </div>
</template>

<style lang="scss" scoped>
@import url(./styles.module.scss);
</style>
