import { Navigation } from "../Navigation/Navigation";
import { UserMenue } from "../UserMenue/UserMenue";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const AppBar = () => {
    const {isLoggedIn} = useSelector(selectIsLoggedIn);
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenue /> : <AuthNav />}
        </header>
    );
}