<template>
  <div>
    <v-navigation-drawer height="100vh" expand-on-hover permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://i.pinimg.com/736x/a6/60/a5/a660a51eac30c2d625d7983aeb06f454.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Anime Quotes</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item @click="toggleTheme()">
          <v-list-item-icon v-if="this.$vuetify.theme.dark">
            <v-icon>mdi-brightness-5</v-icon>
          </v-list-item-icon>
          <v-list-item-icon v-else>
            <v-icon>mdi-brightness-2</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Toggle Theme</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'GetOne' }">
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Show me one</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'GetTen' }">
          <v-list-item-icon>
            <v-icon>mdi-image-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Show me more!!!</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Anime</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Character</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>