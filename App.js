import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigators/AppNavigator";
import appReducer from "./src/reducers";

const store = createStore(appReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default App;
