import { getRandomPrice, getRandomSupply } from "../helpers/coins";

const getInitialState = () => ({
    beliebers: {
        plural: "Beliebers",
        singular: "Belieber",
        symbol: "B",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
    katycats: {
        plural: "Katy Cats",
        singular: "Katy Cat",
        symbol: "KC",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
    beehive: {
        plural: "Beehive",
        singular: "Beehive",
        symbol: "BH",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
    harmonizers: {
        plural: "Harmonizers",
        singular: "Harmonizer",
        symbol: "H",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
    swifties: {
        plural: "Swifties",
        singular: "Swifty",
        symbol: "SC",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
    guccigang: {
        plural: "Gucci Gang",
        singular: "Gucci Gang",
        symbol: "GG",
        price: getRandomPrice(),
        supply: getRandomSupply(), 
    },
});

const coins = (state = getInitialState(), action) => {
  switch (action.type) {
    case "ADD_COIN":
      return state.concat(action.coin);
    default:
      return state
  }
}

export default coins;
