import { Header } from './Components/Header';
import { ResultPage } from './Components/ResultPage';

import './App.css';
import { useSelector} from 'react-redux';

function App() {
const quantityBooks=useSelector(state=>state.search.books.totalItems)

  return (
    <div className="App">
     <Header/>
     <h4 className='quantity_books'>Found {quantityBooks} results</h4>
     <ResultPage/>
     <button className='load_more'>load more</button>
    </div>
  );
}

export default App;
