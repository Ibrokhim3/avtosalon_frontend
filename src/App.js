import { AdminPanel, LoginPage, ModelInfoPage, SignupPage } from "./pages";
import { ModelsPage } from "./pages/models-page";
import { ConfigRoutes } from "./routes/config-routes";

function App() {
  return (
    <div className="App">
      <ConfigRoutes></ConfigRoutes>
    </div>
  );
}

export default App;
