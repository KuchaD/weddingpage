import React from 'react';
import { useCallback, useState } from 'react'

interface ImageProp{
    src : string
}

export const Image: React.FC<ImageProp> = ({ src }) => {
    const [classNames, setclassNames] = useState("image-zoom");

    const onmouseenter = useCallback(() => {
         if (classNames === "image-zoom"){
            setclassNames("image-zoom-out");
         }else{
            setclassNames("image-zoom");
         }
        },[classNames]);

    return (
      <div className="image-overflow">
           <img className={classNames} src={src} width="100%" onClick={onmouseenter}/>
           </div>
        );
}