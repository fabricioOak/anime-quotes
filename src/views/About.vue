<template>
  <div class="about">
    <v-row justify="center">
      <v-col cols="4">
        <h1>Showing one quote</h1>
        <v-card>
          <v-card-title>{{ this.quotes.anime }}</v-card-title>
          <v-card-subtitle>{{ this.quotes.quote }}</v-card-subtitle>
          <v-card-subtitle>
            <p>{{ this.quotes.character }}</p>
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