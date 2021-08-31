<template>
  <div class="division">
    <div style="width: 30%">
      <SideMenu />
    </div>
    <div>
      <v-row class="pt-8" justify="center">
        <v-btn @click="getTenQuotes()">Update</v-btn>
      </v-row>
      <v-row class="pt-4" justify="center">
        <v-col class="px-8" v-for="(item, id) in quotes" :key="id" cols="4">
          <v-card height="240" width="500">
            <v-card-title>{{ item.anime }}</v-card-title>
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
  </div>
</template>


<script>
import SideMenu from "../components/SideMenu.vue";
export default {
  name: "GetTen",
  components: {
    SideMenu,
  },
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
.scroll {
  height: 120px;
  overflow-y: auto;
}
.division {
  display: flex;
  justify-content: flex-start;
}
</style>