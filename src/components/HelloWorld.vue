<template>
  <div>
    <v-btn :to="{ name: 'GetOne' }">Show One</v-btn>
    <v-divider vertical class="px-2"></v-divider>
    <v-btn :to="{ name: 'GetTen' }">Show Ten</v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
