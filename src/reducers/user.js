import { getRandomWallet } from "../helpers/randoms";
import { ADD_CASH } from "../actions/user";

const getInitialState = () => ({
    name: "Bob Belcher",
    wallet: getRandomWallet(),
});

const user = (state = getInitialState(), action) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars + action.dollars
                }
            };
        default:
            return state;
    }
}

export default user;
