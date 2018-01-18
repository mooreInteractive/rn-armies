import reducer from "../user";
import { USER } from "../../constants/types";
import * as STATES from "../../constants/states";
import init from "../../helpers/initStates";

let state = init(STATES.user);

describe("User reducer", () => {
    describe("ADD_CASH", () => {
        it("add cash to user's wallet", () => {
            const dollars = 1337;
            const action = {
                type: USER.ADD_CASH,
                dollars
            };
            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars + dollars
                }
            }

            expect(reducer(state, action)).toEqual(expectedState);
        })
    })

    describe("SUBTRACT_CASH", () => {
        it("subtract cash from user's wallet", () => {
            const dollars = 101;
            const action = {
                type: USER.SUBTRACT_CASH,
                dollars
            };
            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars - dollars
                }
            }

            expect(reducer(state, action)).toEqual(expectedState);
        })
    })
})
