import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import store from '../store';

const AuthenticatedApp = React.lazy(() => import('./AuthorisedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnAuthorisedApp'));
toast.configure();

const App = () => {
  const user = useAuth();
  return (
    <Suspense fallback={<h2>loading....</h2>}>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {user?.isloggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

const globalStore = store();

const AppWithProvider = () => {
  return (
    <Router>
      <Provider store={globalStore}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </Router>
  );
};

export default AppWithProvider;
