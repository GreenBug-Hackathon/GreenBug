import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AuthState } from "../../models";
import Login from "../screens/Login";
import Home from "../screens/Home";

const Start = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);

  if (state.loggedIn) {
    return <Home />;
  } else {
    return <Login />;
  }
};

export default Start;
