import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route path="/profile" element={<span>user profile </span>} />
      </Routes>
    </>
  );
};

export default AppRouter;
