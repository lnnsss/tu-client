import { createContext, useContext } from "react";
import { rootStore, RootStore } from "../stores/rootStore";

const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider = StoreContext.Provider;

export function useStores() {
    return useContext(StoreContext);
}
