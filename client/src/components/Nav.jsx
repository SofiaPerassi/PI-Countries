import { React, useState } from "react";
import { useDispatch } from "react-redux";
//import { useParams, useHistory } from 'react-router'
import { getByName } from "../actions";
import styles from './Nav.module.css'

export default function Nav() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  console.log(name);

  //const history = useHistory();
  // const handleInputChange = (event) => {
  //     event.preventDefault();
  //     setName(event.target.value)
  // }

  //const searchText = useState('')

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     history.push("/?search=" + searchText);
  // }

  const handleClick = (event) => {
    event.preventDefault();
    // Name es mi estado local
    dispatch(getByName(name));
    setName('')
  };
  return (
    <form className={styles.searchContainer} onSubmit={(event) => handleClick(event)}>
      <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Buscar pais..."
        onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.searchButton} type="submit">Buscar</button>
      </div>
    </form>
  );
}
