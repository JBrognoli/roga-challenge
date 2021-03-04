<template>
  <v-container>
    <v-toolbar flat class="mt-6">
      <v-row no-gutters>
        <v-col lg="3" md="4">
          <v-text-field
            v-model="filterText"
            label="Busque por nomes ou emails"
            single-line
            solo
            hide-details
            dense
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <span class="mt-2 mr-4 font-weight-medium">Filtros:</span>
        <v-col lg="2" md="3">
          <v-select
            v-model="selectedFilter"
            :menu-props="{ offsetY: true }"
            :items="filters"
            solo
            dense
          ></v-select>
        </v-col>
        <v-col lg="2" md="3" class="d-flex justify-center">
          <v-btn color="primary" @click="handleOpenCreate">
            <v-icon left color="white">
              mdi-account-plus
            </v-icon>
            Novo Aluno
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-row
      v-if="userCards && userCards.length"
      no-gutters
      class="d-flex-row flex-wrap "
    >
      <v-col
        xl="3"
        lg="4"
        md="6"
        sm="12"
        v-for="userCard in filterByNameCards"
        :key="userCard.email"
        class="pt-8 pr-4"
      >
        <card
          :name="userCard.name"
          :lastAssessment="userCard.lastAssessment"
          :email="userCard.email"
          :age="userCard.age"
          :phone="userCard.phone"
          :active="userCard.active"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="pt-8 text-h5" no-gutters>
      {{ notFoundText }}
    </v-row>
    <user-create />
  </v-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Card from "../components/Card.vue";
import UserCreate from "../components/UserCreate.vue";

export default {
  name: "Home",
  components: {
    Card,
    UserCreate
  },
  data: () => ({
    filterText: "",
    selectedFilter: "Todos",
    filters: ["Todos", "Ativos", "Inativos"],
    editMode: false
  }),
  computed: {
    ...mapState({
      userCards: state => state.user.users
    }),
    notFoundText() {
      if (!this.userCards.length) return "Não há usuários cadastrados.";
      if (this.userCards.length && !this.filterByNameCards.length)
        return "Não há usuários com os critérios de busca utilizado.";
      return "";
    },
    filteredCards() {
      return this.userCards.filter(user => {
        if (this.selectedFilter === "Ativos") return user.active;
        if (this.selectedFilter === "Inativos") return !user.active;
        return user;
      });
    },
    filterByNameCards() {
      return this.filteredCards.filter(user => {
        return (
          user.name.toUpperCase().includes(this.filterText.toUpperCase()) ||
          user.email.toUpperCase().includes(this.filterText.toUpperCase())
        );
      });
    }
  },
  mounted() {
    localStorage.users
      ? this.UPDATE_USERS(JSON.parse(localStorage.getItem("users")))
      : localStorage.setItem("users", JSON.stringify([]));
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USERS", "UPDATE_USER_CREATE"]),
    handleOpenCreate() {
      this.UPDATE_USER_CREATE(true);
    }
  }
};
</script>
