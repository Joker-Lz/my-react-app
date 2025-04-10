import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <button onClick={() => navigate('/about')}>跳转</button>
      this is home page
    </div>
  );
}
