import styles from "./App.module.css";
import PersonalityPage from "./pages/PersonalityPage";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.heading}>Find Your Personality</header>
      <main className={styles.main}>
        <PersonalityPage />
      </main>
      <footer className={styles.footer}>&#169; Developed by Rupak Lama</footer>
    </div>
  );
};

export default App;
