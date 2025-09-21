import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";

export class WordsStore {
    root: RootStore;
    words: string[] = [];
    learned: string[] = [];

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this);
    }

    addWord(word: string) {
        if (!this.words.includes(word)) {
            this.words.push(word);
        }
    }

    markAsLearned(word: string) {
        if (this.words.includes(word) && !this.learned.includes(word)) {
            this.learned.push(word);
        }
    }
}
