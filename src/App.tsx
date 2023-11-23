import styles from './App.module.scss';
import UserCardsContainer from './components/UserCardsContainer';

function App() {

  return (
    <section className={ styles.app }>
      <UserCardsContainer />
    </section>
  );
}

export default App;
