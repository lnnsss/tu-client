import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "../src/hooks/useStores";
import { rootStore } from "../src/stores/rootStore";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StoreProvider value={rootStore}>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
