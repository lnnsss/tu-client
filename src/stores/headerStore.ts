import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";

export class HeaderStore {
    root: RootStore;
    isOpen = false;

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this);
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    close() {
        this.isOpen = false;
    }
}
