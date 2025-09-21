import { HeaderStore } from "./headerStore";
import { UserStore } from "./userStore";
import { WordsStore } from "./wordsStore";

export class RootStore {
    header: HeaderStore;
    user: UserStore;
    words: WordsStore;

    constructor() {
        this.header = new HeaderStore(this);
        this.user = new UserStore(this);
        this.words = new WordsStore(this);
    }
}

export const rootStore = new RootStore();
