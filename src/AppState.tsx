import React, { useState } from "react";

interface AppStateValue {
    username: string,
    shoppingCart: { items: { id: number, name: string }[] }
}

const defaultContextValue: AppStateValue = {
    username: "fressia",
    shoppingCart: { items: [] }
};
export const appContext = React.createContext(defaultContextValue);

interface Props {
    children: any,
}

export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC<Props> = (props: Props) => {
    const [state, setState] = useState<AppStateValue>(defaultContextValue);
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>);
}