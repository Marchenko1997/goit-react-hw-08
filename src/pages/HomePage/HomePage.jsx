import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";
import { Loader }  from "../../components/Loader/Loader";
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [ setLoading ])
  
  return (
    <>
      {loading && <Loader />}
      <DocumentTitle>Phonebook</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.description}> This app is designed to help your brain not remember numbers, but write them down.</p>
      </div>
    </>
  );
}
