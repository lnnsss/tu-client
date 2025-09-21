import styles from "./LearnPage.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";

const LearnPage = observer(() => {
    const { words } = useStores();

    return (
        <div className={styles.container}>
            <h1>Изучение слов</h1>
            <button onClick={() => words.addWord("китап")}>Добавить слово</button>
            <ul>
                {words.words.map((w) => (
                    <li key={w}>{w}</li>
                ))}
            </ul>
        </div>
    );
});

export default LearnPage;
