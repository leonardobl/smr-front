import { Route } from "react-router-dom";
import { Home } from "../../Components/Pages/Home";

export const useProtectedRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />;
    </>
  );
};
