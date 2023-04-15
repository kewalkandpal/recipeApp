import './App.css';
import Home from './component/Home';
import ContextProvider from './component/ContextProvider';
import { reducer,initialVal } from './reducer/reducer';

function App() {
  return (
    <ContextProvider reducer={reducer} initialVal={initialVal}>
    <div className="App">
        <h1 className="w-50 mx-auto text-decoration-underline text-center mt-3 text-info fs-3 fw-bold p-1">Team management app</h1>
        <Home />
    </div>
    </ContextProvider>
  );
}

export default App;

