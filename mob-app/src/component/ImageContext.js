import React, {createContext, useState} from 'react';

const ImageContext = createContext();

const ImageProvider = ({children}) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{image, setImage}}>
      {children}
    </ImageContext.Provider>
  );
};

export {ImageContext, ImageProvider};
