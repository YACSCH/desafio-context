import { Route, Routes } from "react-router-dom";

import  DataProvider  from "./context/DataContext";

import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";





const App = () => {
  return (
    <DataProvider>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </DataProvider>
  );
};
export default App;
