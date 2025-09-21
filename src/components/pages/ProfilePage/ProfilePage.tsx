import styles from "./ProfilePage.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";

const ProfilePage = observer(() => {
    const { user } = useStores();

    return (
        <div className={styles.container}>
            <h1>Профиль</h1>
            {user.username ? (
                <p>Привет, {user.username}!</p>
            ) : (
                <button onClick={() => user.setUsername("Айдар")}>Установить имя</button>
            )}
        </div>
    );
});

export default ProfilePage;
