import {
  createContext, useState 
} from 'react';
import Heroes from './Content.json';
import HeroRouter from './Components/HeroRouter';
import {
  formatTitle }
from './Helpers/Helpers';

export const HeroesContext = createContext(Heroes);

function App() {
  const [inputValue, setInputValue] = useState('');

  const filterOnChange = e => setInputValue(e.target.value);
  const filteredHeroes = Heroes.filter(hero => formatTitle(hero.name).includes(inputValue.toLowerCase()));
  const handleSubmit = e => e.preventDefault();

  return (
    <HeroesContext.Provider value={filteredHeroes}>
      <div className="App container-fluid">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Start search</label>
          <input
            id="search"
            className="form-control form-control-lg"
            placeholder="Search your super hero..."
            data-testid="search"
            type="search"
            value={inputValue}
            onChange={filterOnChange}
          />
        </form>
        <hr />
        <HeroRouter />
      </div>
    </HeroesContext.Provider>
  );
}

export default App;
