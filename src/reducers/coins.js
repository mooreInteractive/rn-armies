import { coins } from "../constants/coins";
import { getRandomPrice, getRandomSupply } from "../helpers/coins";

const getInitialState = () => {
    return coins.reduce((state, coin) => {
        state[coin.key] = {
            ...coin,
            price: getRandomPrice(),
            supply: getRandomSupply(),
            rewards: {},
        };
        return state;
    }, {});
};

const coinsState = (state = getInitialState(), action) => {
  switch (action.type) {
    case "ADD_COIN":
      return state.concat(action.coin);
    default:
      return state
  }
}

console.log(JSON.stringify(coinsState(undefined, {type: 'lol'}), null, 2));

export default coinsState;
