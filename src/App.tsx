import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import WraperRoutes from './routes';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <WraperRoutes></WraperRoutes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
