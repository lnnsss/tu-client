import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";

export class UserStore {
    root: RootStore;
    username: string | null = null;

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this);
    }

    setUsername(name: string) {
        this.username = name;
    }
}
