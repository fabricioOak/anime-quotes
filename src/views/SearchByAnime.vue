<template>
  <div>
    <div v-if="!this.$store.state.quotes.loading">
      <div class="page-scroll">
        <v-row class="pt-8" justify="center">
          <v-col cols="12">
            <v-text-field
              @keydown.enter="GetQuoteByAnime(anime)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pt-4" justify="center">
          <v-col class="px-8" v-for="(item, id) in quotes" :key="id" cols="4">
            <v-card height="240" width="500">
              <v-card-title class="text-subtitle-1">{{
                item.anime
              }}</v-card-title>
              <v-card-subtitle class="pb-0">
                <p class="pr-2 card-scroll text-justify">
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
    </div>
    <div v-else>
      <Loading />
      <div>Anime not found...</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SearchAnime",
  data() {
    return {
      quotes: [],
      anime: "",
      error: "",
    };
  },
  created() {
    this.GetQuoteByAnime();
  },
  methods: {
    GetQuoteByAnime() {
      this.$store
        .dispatch("get_quote_by_anime", { data: this.anime })
        .then((response) => {
          this.quotes = response;
          console.log(this.quotes);
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style>
.card-scroll {
  height: 120px;
  overflow-y: auto;
}
.page-scroll {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.division {
  display: flex;
  justify-content: flex-start;
}
</style>