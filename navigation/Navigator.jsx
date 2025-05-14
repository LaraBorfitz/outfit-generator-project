import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/Header";
import UserCloset from "../pages/UserCloset";
import { useAppContext } from "../contexts/FunctionContext";
import LoadingPage from "../pages/LoadingPage";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';

const Navigator = () => {
  const { token, closet } = useAppContext();
  const { isLoading } = useAppContext();
  console.log("token es: ", token);
  console.log("closet es: ", closet);

  if (isLoading) return <LoadingPage />;

  if (!token)
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/closet"
          element={
            <ProtectedRoute>
              <UserCloset />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();
  return token ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default Navigator;
