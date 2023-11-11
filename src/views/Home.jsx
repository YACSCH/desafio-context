import { useContext } from "react";
import { DataContext } from '../context/DataContext';

import Gallery from "../components/Gallery";

import Spinner from 'react-bootstrap/Spinner';

const Home = () => {

  const { isLoading } = useContext(DataContext)

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      { isLoading ? ( <Spinner animation="border" variant="primary" /> ) : ( <Gallery /> )  }
    </div>
  );
};
export default Home;
