import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 主布局路由 */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* 独立路由（无布局） */}
        <Route path="/login" element={<Login />} />

        {/* 404 处理 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
