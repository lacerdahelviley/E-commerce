import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home";

const Way = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} to="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Way;
