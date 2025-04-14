import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.sessionStorage.setItem('IS_LOGIN', '1');
    //跳转首页
    navigate('/home');
  };
  return (
    <div className="login">
      <button onClick={() => handleLogin()}>登录</button>
      this is login page
    </div>
  );
}
