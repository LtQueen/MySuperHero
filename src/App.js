import { SearchContextProvider } from "./Context/SearchContext";
import HeroRouter from './Components/HeroRouter';

function App() {
  return (
    <SearchContextProvider>
      <div className="App container-fluid">
        <HeroRouter />
      </div>
    </SearchContextProvider>
  );
}

export default App;
