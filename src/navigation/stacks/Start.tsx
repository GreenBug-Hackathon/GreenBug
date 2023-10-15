import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AuthState } from "../../models";
import Login from "../screens/Login";
import Tab from "./Tab";

const Start = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);

  if (state.loggedIn) {
    return <Tab />;
  } else {
    return <Login />;
  }
};

export default Start;
