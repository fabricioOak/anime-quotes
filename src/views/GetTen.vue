<template>
  <div class="about">
    <v-row class="pt-4" justify="center">
      <v-col class="px-8" v-for="(item, id) in quotes" :key="id" cols="4">
        <v-card height="230" width="500">
          <v-card-title :color="color">{{ item.anime }}</v-card-title>
          <v-card-subtitle class="pb-0">
            <p class="pr-2 scroll text-justify">
              {{ item.quote }}
            </p>
          </v-card-subtitle>
          <v-card-subtitle class="pt-0">
            {{ item.character }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "About",
  data() {
    return {
      quotes: [],
      error: "",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  },
  created() {
    this.getOneQuote();
  },
  methods: {
    getOneQuote() {
      this.$store
        .dispatch("get_ten_quotes")
        .then((resp) => {
          this.quotes = resp;
          console.log(resp);
        })
        .catch((err) => {
          this.error = err.message;
        });
      console.log(this.color);
    },
  },
};
</script>

<style>
.scroll {
  height: 120px;
  overflow-y: auto;
}
.about {
  height: 100vh;
}
</style>