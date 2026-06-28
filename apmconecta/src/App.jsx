import { memo } from "react";
import AppRoutes from "./routes/AppRoutes";

/**
 * Componente raiz da aplicação — renderiza as rotas.
 */
const App = memo(() => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
});

export { App };
export default App;
