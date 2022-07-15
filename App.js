import './App.css';
import { Switch, Routes, Route} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Planetas from './components/Planetas';
import People from './components/People';



function App() {
  return (
    <div className="App">
      <SearchForm />
      <Routes>
      {/* /*<Route  path="/" element={< SearchForm />} /> {element grabing the component it its always needed*/} */}
        <Route  path="/planetas/:id" element={< Planetas />} />
        <Route  path="/people/:id" element={< People />} />
      </Routes>
      

    </div>
  );
}

export default App;