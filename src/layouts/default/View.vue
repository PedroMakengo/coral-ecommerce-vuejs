<style lang="scss" scoped>
.text {
  background: red;
}
</style>

<template>
  <v-main>
    <v-container>
      <v-responsive>
        <v-toolbar elevation="24" size="x-large">
          <v-container>
            <v-row>
              <v-col cols="12" md="4"> Logo </v-col>
              <v-col cols="12" md="8" align="right"> Logo </v-col>
            </v-row>
          </v-container>
        </v-toolbar>
      </v-responsive>
    </v-container>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
//
</script>
