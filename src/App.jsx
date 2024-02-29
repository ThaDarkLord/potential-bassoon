// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL from main.jsx lines 23, 27, 31, 35
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
