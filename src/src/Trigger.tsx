import React from 'react';

export const Trigger: React.FC = () => {
   
  
   
    return(
      <>
      <div class="scrollDist"></div>
      <div class="main">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g class="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
            </g>
          </mask>
      
          <!-- <image class="sky" xlink:href="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" /> -->
          <!-- <image class="mountBg"  xlink:href="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>     -->
          <image class="mountBg" href="FOTO-25.jpg" width="1200" height="800"/>    
          <!-- <image class="mountMg" xlink:href="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>     -->
          <image class="cloud2" xlink:href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
          <!-- <image class="mountFg" xlink:href="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/> -->
          <image class="cloud1" xlink:href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
          <image class="cloud3" xlink:href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
          <text fill="#fff" x="350" y="200">Kuchař </text>
          <text fill="#fff" x="400" y="300">& Štiková </text>
          <polyline class="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
      
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="350" y="200" fill="#162a43">Kuchařovi</text>
          </g>
      
          <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style="cursor:pointer"/>
        </svg>
      </div>
    </>
    );
  };
  