<template>
  <v-app-bar app color="darker" class="elevation-0">
    <v-card class="fill-height mx-10" min-width="90vw" color="primary" tile>
      <v-row no-gutters class="fill-height">
        <v-spacer />
        <v-card class="fill-height" min-width="20vw" color="lighter" tile>
          <v-row no-gutters align="center" class="fill-height">
            <v-col cols="10" class="fill-height">
              <v-list-item class="fill-height pr-0">
                <v-list-item-avatar>
                  <v-img
                    alt="Profile Image"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="white--text">
                    Jonas Doe
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Último login: {{ lastLogin }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-divider vertical />
              </v-list-item>
            </v-col>
            <v-col cols="2">
              <v-row no-gutters justify="center">
                <v-icon color="white">mdi-chevron-down</v-icon>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-card>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheToolbar",
  components: {},
  data() {
    return {
      lastLogin: "04/03/2021"
    };
  }
};
</script>

<style>
.v-avatar {
  border: 1px solid white;
}

.v-card {
  box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.07),
    0 0px 15px 0px rgba(0, 0, 0, 0.06), 0 0px 15px 0px rgba(0, 0, 0, 0.1) !important;
}
</style>
