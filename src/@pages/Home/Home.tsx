import { useNavigate } from 'react-router-dom';
import { SIGNUP } from 'router/path-name.route';

export default function Home() {
  const navigator = useNavigate();
  return (
    <div>
      welcome to our site <br />
      <button className="btn btn-sm btn-primary" onClick={() => navigator(SIGNUP)}>
        signup
      </button>
    </div>
  );
}
