const addUser = ({ commit, state }, userInfo) => {
  let newUserArray = [...state.users, userInfo];
  commit("UPDATE_USERS", newUserArray);
};

const editUser = ({ commit, state }, editedUser) => {
  let newUserArray = state.users.map(user =>
    user.email == editedUser.email ? editedUser : user
  );
  commit("UPDATE_USERS", newUserArray);
};

const switchActive = ({ commit, state }, userEmail) => {
  const newUserArray = state.users.map(user =>
    user.email == userEmail ? { ...user, active: !user.active } : user
  );
  commit("UPDATE_USERS", newUserArray);
};

const removeUser = ({ commit, state }, userEmail) => {
  let newUserArray = state.users.filter(user => user.email != userEmail);
  commit("UPDATE_USERS", newUserArray);
};

export { addUser, editUser, switchActive, removeUser };
