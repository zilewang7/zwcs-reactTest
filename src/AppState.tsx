import React, { useState } from "react";

interface AppStateValue {
    username: string,
    shoppingCart: { items: items[] }
}

class items {
    id: number;
    name: string;
    num: number;

    constructor(id: number, name: string, num: number = 0) {
        this.id = id;
        this.name = name;
        this.num = num;
    }
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