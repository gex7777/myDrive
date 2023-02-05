import { useRoutes } from "hookrouter";
import { routes } from "./routes";

function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <>not found</>;
}

export default App;
