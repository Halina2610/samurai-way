import React, { ReactNode } from "react";
import { StoreType } from "../store";

export const StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
    store: StoreType;
    children: ReactNode;
};

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
};

/*
export type ConsumerType = {
    children: (value: StoreType) => ReactNode;
};

export const Consumer = (props: ConsumerType) => {
    return (
        <StoreContext.Consumer>
            {(value: StoreType) => props.children(value)}
        </StoreContext.Consumer>
    );
};*/
