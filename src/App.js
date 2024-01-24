import { Provider} from 'react-redux';
import store from "./utils/store";
import Body from './components/Body'

function App() {


  return (
    <Provider store={store}>
    <div className="App">
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
