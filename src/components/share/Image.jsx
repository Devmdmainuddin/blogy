import React from 'react';

const Image = ({src,alt,className}) => {
    return (
        <img src={src} alt={alt}  className={`w-full h-full object-cover ${className}`}/>
    );
};

export default Image;