import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/selectors";
import css from "./UserMenue.module.css";

export const UserMenue = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUserName);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};
