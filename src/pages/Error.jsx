import { useRouteError } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
