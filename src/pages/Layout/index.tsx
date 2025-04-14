import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app">
      {/* 页面内容出口 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
