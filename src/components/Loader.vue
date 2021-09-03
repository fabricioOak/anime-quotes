<template>
  <v-row justify="center" align="center">
    <v-col cols="4" offset="4">
      <div class="loader"></div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #726c6c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "Loading",
};
</script>