import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div>
      <img
        src="/images/loader.gif"
        alt="loading"
        className={ styles.loader }
      />
    </div>
  );
}

export default Loader;