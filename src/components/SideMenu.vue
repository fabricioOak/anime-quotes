<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      expand-on-hover
      permanent-drawer
    >
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
        <v-list-item
          v-for="item in this.items"
          :key="item.text"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        {
          icon: "mdi-image",
          text: "Show me one",
          link: { name: "GetOne" },
        },
        {
          icon: "mdi-image-multiple",
          text: "Show me multiples",
          link: { name: "GetTen" },
        },
        {
          icon: "mdi-star",
          text: "Anime",
          link: { name: "SearchAnime" },
        },
        {
          icon: "mdi-account",
          text: "Character",
          link: "",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>