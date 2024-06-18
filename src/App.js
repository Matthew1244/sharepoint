import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriveMain from './components/DriveMain';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<DriveMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

