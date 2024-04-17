import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
      </div>
    </>
  );
}
