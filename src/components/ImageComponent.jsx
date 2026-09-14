import React, {useState, useEffect} from 'react';
import { Blurhash } from 'react-blurhash';

export default function ImageComponent({src}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image()
        img.onLoad = () => {
            setImageLoaded(true)
        }

        img.src = src
    }, [src])

    return (
        
        <>
        {!imageLoaded && (
            <Blurhash
            hash=""
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1} />
        )}
            {imageLoaded && (<img 
                src={src}
                alt=''
            />
            )}     
        </>

    );

}