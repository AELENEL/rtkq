import { Route, Routes } from "react-router-dom";
import { links } from "./constants/Links";

const App = () => {
  return (
    <Routes>
      {links.map((link) => (
        <Route path={link.link} element={link.el} />
      ))}
    </Routes>
  );
};

export default App;
