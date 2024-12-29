import RouterLinks from "./Routes";
import { GlobalStateProvider } from "./contexts/GlobalContext";

function App() {

  return (
    <GlobalStateProvider>
      <RouterLinks />
    </GlobalStateProvider>
  )
}

export default App;
