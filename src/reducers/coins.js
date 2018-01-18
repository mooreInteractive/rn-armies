import init from "../helpers/initStates.js"
import * as STATE from "../constants/states";

const coins = (state = init(STATE.coins), action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default coins;
