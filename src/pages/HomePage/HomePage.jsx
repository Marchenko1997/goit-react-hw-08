import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.description}> This app is designed to help your brain not remember numbers, but write them down.</p>
      </div>
    </>
  );
}
