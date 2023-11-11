import { createContext, useEffect, useState } from "react";

import { GetData } from "../api/getApi";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const cargarPhotos = async () => {
    setIsLoading(true);
    const response = await GetData();
    setPhotos(response.data.photos);
    setIsLoading(false);
  };

  useEffect(() => {
    cargarPhotos();
  }, []);

  return (
    <DataContext.Provider
      value={{
        photos,
        setPhotos,
        isLoading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
