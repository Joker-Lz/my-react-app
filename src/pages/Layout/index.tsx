import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app">
      {/* 导航菜单 */}
      <nav>
        <Link to="/home">首页</Link>
      </nav>

      {/* 页面内容出口 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
