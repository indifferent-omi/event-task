
import { Route, Routes } from 'react-router-dom';
import CreateEvent from './pages/Create';
import EventPage from './pages/Events';
import Homepage from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
}

export default App;
