import { useState, useEffect } from "react";
import useContacts from "../hooks/useContacts";
import { useViewport } from "../hooks/useViewport";
import { User } from "../types/user";
import UserCard from "./userCard/UserCard";
import styles from "./UserCardsContainer.module.scss";
import Loader from "./Loader";

const UserCardsContainer = () => {
  const { data, isLoading, error, loadMore } = useContacts(1);
  const { isMobile } = useViewport();
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const isScrolledToBottom = (
      (document.documentElement.offsetHeight - Math.round(window.innerHeight + document.documentElement.scrollTop)) < 10
    );

    if (isScrolledToBottom && !isFetching) {
      setIsFetching(true);
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching, loadMore]);

  useEffect(() => {
    setIsFetching(false);
  }, [data]);

  return (
    <>
      { data && (
        <div className={ styles.cardsContainer }>
          { data.results.map((user: User, index: number) => (
            <UserCard user={ user } key={ index } isMobile={ isMobile } />
          )) }
        </div>
      )}
      { !data && isLoading && <div style={{ height: '30vh' }}></div> }
      { isLoading && <Loader /> }
      { error && <div>{error.message}</div> }
    </>
  );
};

export default UserCardsContainer;

