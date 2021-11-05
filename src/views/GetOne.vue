<template>
  <v-container v-if="!this.$store.state.quotes.loading">
    <div class="division">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <div class="pt-12">
            <v-card height="250" width="500">
              <v-card-title>{{ this.quotes.anime }}</v-card-title>
              <v-card-subtitle>
                <p class="pr-2 scroll text-justify">
                  {{ this.quotes.quote }}
                </p>
              </v-card-subtitle>
              <v-card-subtitle class="pt-0">
                {{ this.quotes.character }}
              </v-card-subtitle>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <div v-else>
    <Loading />
  </div>
</template>


<script>
export default {
  name: "About",
  data() {
    return {
      quotes: "",
      error: "",
    };
  },
  created() {
    this.getOneQuote();
  },
  methods: {
    getOneQuote() {
      this.$store
        .dispatch("get_one_quote")
        .then((resp) => {
          this.quotes = resp;
          console.log(resp);
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style>
.scroll {
  height: 120px;
  overflow-y: auto;
}

.division {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
}
</style>