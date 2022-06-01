import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
 import { APP_ROUTES } from './consts';
 import {HomePage} from './pages/Homepage/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOMEPAGE.PATH} element={<HomePage/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
