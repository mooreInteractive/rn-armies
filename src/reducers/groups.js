const getInitialState = () => ['beliebers', 'harmonizers'];

const groups = (state = getInitialState(), action) => {
  switch (action.type) {
    case "ADD_GROUP":
      return state.concat(action.group);
    default:
      return state
  }
}

export default groups;
