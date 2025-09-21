import styles from "./HomePage.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";

const HomePage = observer(() => {
    const { header } = useStores();

    return (
        <div className={styles.container}>
            <h1>Добро пожаловать в MyTatarApp</h1>
            <button onClick={() => header.toggle()}>
                {header.isOpen ? "Закрыть меню" : "Открыть меню"}
            </button>
        </div>
    );
});

export default HomePage;
