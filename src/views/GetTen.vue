<template>
  <div class="division">
    <div style="width: 30%">
      <SideMenu />
    </div>

    <div v-if="!this.$store.state.quotes.loading">
      <div class="page-scroll">
        <v-row class="pt-8" justify="center">
          <v-btn @click="getTenQuotes()">Update</v-btn>
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
    </div>
  </div>
</template>


<script>
export default {
  name: "GetTen",
  data() {
    return {
      quotes: [],
      error: "",
    };
  },
  created() {
    this.getTenQuotes();
  },
  methods: {
    getTenQuotes() {
      this.$store
        .dispatch("get_ten_quotes")
        .then((resp) => {
          this.quotes = resp;
        })
        .catch((err) => {
          this.error = err.message;
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