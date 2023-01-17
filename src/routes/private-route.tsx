import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from 'store/auth/selector';

type Props = {
  children: JSX.Element;
};
function PrivateRoute({ children }: Props) {
  const auth = useSelector(selectAuth);
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
