import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Todos from './components/todos/Todos';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Counter</Link> |  <Link to="/todos">Todos</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
