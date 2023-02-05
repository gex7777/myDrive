import { useRoutes } from "hookrouter";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";

export const routes = {
  "/": () => <Homepage />,
  "/login": () => <Loginpage />,
  "/register": () => <Registerpage />,
};
