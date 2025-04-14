import { useParams } from 'react-router-dom';

export default function About() {
  const params = useParams();
  const { id } = params;
  console.log('id====', id);
  return <div className="about"> this is about page </div>;
}
