const UPDATE_USER_CREATE = (state, payload) => {
  state.userCreate = payload;
};

const UPDATE_USERS = (state, payload) => {
  state.users = payload;
};

export { UPDATE_USER_CREATE, UPDATE_USERS };
