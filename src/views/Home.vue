<template>
  <v-main>
    <SideMenu></SideMenu>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Home",
};
</script>
