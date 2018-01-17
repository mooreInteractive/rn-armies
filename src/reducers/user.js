import { getRandomWallet } from "../helpers/randoms";

const getInitialState = () => ({
    name: "Bob Belcher",
    wallet: getRandomWallet(),
});

const user = (state = getInitialState(), action) => {
  switch (action.type) {
    case "ADD_COIN":
      return state;
    default:
      return state;
  }
}

export default user;
