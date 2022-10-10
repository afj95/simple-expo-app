import 'react-native-gesture-handler';
import React from "react";
// Dependencies
import { SafeAreaProvider } from "react-native-safe-area-context";
// Redux
import { persistor, store } from "./src/redux";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
// Components
import MainNavigator from "./src/navigation/MainNavigator";
import Loader from "./src/components/Loader";

export default function App() {
    return (
        <SafeAreaProvider>
            <ReduxProvider store={store}>
                <PersistGate loading={<Loader />} persistor={persistor}>
                    <MainNavigator />
                </PersistGate>
            </ReduxProvider>
        </SafeAreaProvider>
    )
}