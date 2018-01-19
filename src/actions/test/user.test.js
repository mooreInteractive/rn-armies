import * as actions from "../user.js";
import { USER } from "../../constants/actionTypes";

describe("user actions", () => {
    describe("addCoinToWallet", () => {
        it("should create action to add coin to wallet", () => {
            const coin = { key: "belieber", amount: 100 }
            const expectedAction = {
                type: USER.ADD_COIN,
                key: coin.key,
                amount: coin.amount
            }
            const resultAction = actions.addCoinToWallet(coin.key, coin.amount);
            expect(resultAction).toEqual(expectedAction);
        })
    })

    describe("subtractCoinFromWallet", () => {
        it("should create action to subtract coin to wallet", () => {
            const coin = { key: "belieber", amount: 100 }
            const expectedAction = {
                type: USER.SUBTRACT_COIN,
                key: coin.key,
                amount: coin.amount
            }
            const resultAction = actions.subtractCoinFromWallet(coin.key, coin.amount);
            expect(resultAction).toEqual(expectedAction);
        })
    })

    describe("addCashToWallet", () => {
        it("should create action to add cash to wallet", () => {
            const expectedAction = {
                type: USER.ADD_CASH,
                dollars: 100
            }
            const resultAction = actions.addCashToWallet(100);
            expect(resultAction).toEqual(expectedAction);
        })
    })

    describe("subtractCashFromWallet", () => {
        it("should create action to subtract cash from wallet", () => {
            const expectedAction = {
                type: USER.SUBTRACT_CASH,
                dollars: 100
            }
            const resultAction = actions.subtractCashFromWallet(100);
            expect(resultAction).toEqual(expectedAction);
        })
    })
})
