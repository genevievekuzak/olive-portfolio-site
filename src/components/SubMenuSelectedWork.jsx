import React, { useEffect, useState } from 'react';
import '../style.css';


export function SubMenuSelectedWork ({items}) {
    
    const [activeMedium, setcurrentMedium] = useState("weavings");
    const [imageToShow, setImageToShow] = useState('');
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);


    function handleClick(e) {
        const className = e.target.className;
        setcurrentMedium(className);
        console.log(filteredUrls);
    }

    const filteredUrls = items.filter((item) => item.includes(activeMedium));
    const sortedUrls = filteredUrls.sort((a, b) => a - b);

    const showImage = (item) => {
    setImageToShow(item);
    setLightBoxDisplay(true);
    };

    
    const hideLightBox = () => {
    setLightBoxDisplay(false);
    };

    


    return (
        <>
        <nav className="selected-work-submenu" id="selected-work">
         <ul>
            <li onClick={handleClick} className='weavings'>Weavings</li>
            <li onClick={handleClick} className='sculpture'>Sculpture</li>
            <li onClick={handleClick} className='drawings'>Drawings</li>
            <li onClick={handleClick} className='performance'>Performance Art</li>
         </ul>
        </nav>
        <div className="img-grid">     
            {sortedUrls.map((item, index) => <figure key={index}><img src={item} alt={item.substring(item.lastIndexOf("/") + 1).replaceAll(/.jpg/gi, ' ').slice(2)} key={index} onClick={() => showImage(item)} loading='lazy'></img><figcaption>{item.substring(item.lastIndexOf("/") + 1).replaceAll(/.jpg/gi, ' ').slice(2)}</figcaption></figure>)}   
        </div>

        {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
            
          <img id="lightbox-img" src={imageToShow}></img>
          <h5 className='caption'>{imageToShow.substring(imageToShow.lastIndexOf("/") + 1).replaceAll(/.jpg/gi, ' ').slice(2)}</h5>
        </div>
       : ""
      }
        </>
      

        
    
    );

};

export default SubMenuSelectedWork;







