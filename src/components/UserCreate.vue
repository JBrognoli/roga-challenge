<template>
  <v-row justify="center">
    <v-dialog v-model="userCreate" persistent width="600px">
      <v-card>
        <v-toolbar color="secondary">
          <v-toolbar-title class="white--text ml-6">
            {{ editMode ? "Editar" : "Cadastrar" }} Aluno
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="handleClose()" class="mr-2">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-6">
          <v-form ref="form" v-model="valid">
            <v-container>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.name"
                    filled
                    label="Nome"
                    required
                    color="secondary"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.email"
                    filled
                    label="E-mail"
                    required
                    :rules="[rules.required, rules.email]"
                    color="secondary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.age"
                    filled
                    label="Idade"
                    required
                    type="number"
                    color="secondary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.phone"
                    filled
                    v-mask="mask"
                    label="Telefone"
                    required
                    color="secondary"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-8 pb-6">
          <v-btn color="secondary" text @click="handleClose">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="!editMode" color="primary" @click="handleCreate">
            <span class="px-5">Salvar</span>
          </v-btn>
          <v-btn v-if="editMode" color="primary" @click="handleEdit">
            <span class="px-5">Confirmar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { mask } from "vue-the-mask";

export default {
  name: "UserCreate",
  components: {},
  directives: {
    mask
  },
  data: () => ({
    user: {
      name: "",
      email: "",
      age: "",
      phone: "",
      active: true,
      lastAssessment: ""
    },
    mask: "(##) #####-####",
    valid: false,
    editMode: false,
    rules: {
      required: value => !!value || "Campo obrigatório.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail inválido.";
      }
    }
  }),
  computed: {
    ...mapState("user", ["userCreate"])
  },
  mounted() {
    this.$root.$on("editUser", user => {
      this.UPDATE_USER_CREATE(true);
      this.user = user;
      this.editMode = true;
    });
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USER_CREATE"]),
    ...mapActions("user", ["addUser", "editUser"]),
    handleCreate() {
      this.user.lastAssessment = new Date().toLocaleDateString("pt-BR");
      this.addUser({ ...this.user });
      this.handleClose();
    },
    handleEdit() {
      this.editUser({ ...this.user });
      this.handleClose();
    },
    handleClose() {
      this.UPDATE_USER_CREATE(false);
      this.editMode = false;
      this.$refs.form.reset();
    }
  }
};
</script>

<style></style>
