import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: { ...state.actions }
                })
        }));
        
        useEffect(() => {
            state.actions.getPersonsApi()
            state.actions.getPlanetsApi()
            state.actions.getVehiclesApi()
            state.actions.getLocalStorage()
            
        }, []);
        return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
    };
    return StoreWrapper;
};

export default injectContext;