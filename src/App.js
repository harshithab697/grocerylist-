import './App.css';
import ConnetedAddInput from './components/addItem/addItem';
import ConnetedItemList from './components/itemList/itemList';
import ConnetedDeleteItem from './components/deleteItem/deleteItem';


function App() {
  return (
    <div className="app-background">
      <div className="main-container">
        <ConnetedAddInput />
        <ConnetedItemList />
        <ConnetedDeleteItem />
      </div>
    </div>
  );
}

export default App;
