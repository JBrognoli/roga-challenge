<template>
  <v-card
    class="d-flex flex-column"
    min-width="340"
    max-width="380"
    min-height="200"
    elevation="2"
    :color="active ? 'transparent' : 'red lighten-4'"
  >
    <v-list-item>
      <v-list-item-avatar size="52">
        <img
          alt="User's Avatar"
          src="https://www.opovo.com.br/_midias/jpg/2020/07/28/107567056_1924644521175824_3059926835828455376_n-13132574.jpg"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold text-h6 mb-2">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle class="font-weight-medium text-body-2">
          Última avaliação: {{ lastAssessment }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-container class="my-3">
      <v-row justify="center" align="center">
        <v-col cols="8" class="d-flex flex-column textInfo--text">
          <span>{{ email }}</span>
          <span>{{ age }} anos - {{ phone }}</span>
        </v-col>
        <v-col cols="4">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                elevation="2"
                v-on="on"
                v-bind="attrs"
                @click="emitEdit"
              >
                <v-icon color="secondary">
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-menu offset-y>
            <template v-slot:activator="{ on: menu, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    class="ml-2"
                    icon
                    elevation="1"
                    v-on="{ ...tooltip, ...menu }"
                    v-bind="attrs"
                  >
                    <v-icon color="secondary">
                      mdi-dots-horizontal
                    </v-icon>
                  </v-btn>
                </template>
                <span>Mais opções</span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item v-if="!active" @click="switchActive(email)">
                <v-icon color="secondary" class="mr-3">mdi-check</v-icon>
                <v-list-item-title>Ativar</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="active" @click="switchActive(email)">
                <v-icon color="secondary" class="mr-3">mdi-close</v-icon>
                <v-list-item-title>Desativar</v-list-item-title>
              </v-list-item>
              <v-list-item @click="removeUser(email)">
                <v-icon color="error" class="mr-3">mdi-delete</v-icon>
                <v-list-item-title>Remover</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  data: () => ({}),
  props: {
    name: {
      type: String
    },
    email: {
      type: String
    },
    age: {
      type: String
    },
    phone: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
    },
    lastAssessment: {
      type: String
    }
  },
  methods: {
    ...mapActions("user", ["removeUser", "switchActive"]),
    emitEdit() {
      this.$root.$emit("editUser", { ...this.$props });
    }
  }
};
</script>
