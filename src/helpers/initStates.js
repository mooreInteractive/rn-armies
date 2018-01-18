import { coins } from "../constants/coins";
import * as STATES from "../constants/states";
import * as Random from "../helpers/randomGenerators";

// Private
const _getInitialUserState = () => ({
    name: "Bob Belcher",
    wallet: Random.generateWallet()
});

const _getInitialCoinsState = () => {
    return coins.reduce((state, coin) => {
        state[coin.key] = {
            ...coin,
            price: Random.generatePrice(),
            supply: Random.generateSupply(),
            rewards: {},
        };
        return state;
    }, {});
};

// Public
 const getInitialState = state => {
    switch (state) {
        case STATES.user:
            return _getInitialUserState();
        case STATES.coins:
            return _getInitialCoinsState();
        default:
            return {
                [STATES.user]: _getInitialUserState(),
                [STATES.coins]: _getInitialCoinsState()
            };
    }
};

export default getInitialState;
