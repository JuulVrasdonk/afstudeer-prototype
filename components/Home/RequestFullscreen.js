import React, { useState } from 'react';
import styled from 'styled-components';

const FullScreenButton = styled.button`
    position: absolute;
    top: 5px; 
    left: 5px;
    padding: 9px 15px 10px;
    border: none;
    outline: none;
    z-index: 10000;
    text-transform: uppercase;
    cursor: pointer;
`

const RequestFullscreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Enter full screen mode
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => setIsFullScreen(true)).catch(error => {
          console.log('Failed to enter full screen mode:', error);
        });
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen().then(() => setIsFullScreen(true)).catch(error => {
          console.log('Failed to enter full screen mode:', error);
        });
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen().then(() => setIsFullScreen(true)).catch(error => {
          console.log('Failed to enter full screen mode:', error);
        });
      }
    } else {
      // Exit full screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullScreen(false)).catch(error => {
          console.log('Failed to exit full screen mode:', error);
        });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen().then(() => setIsFullScreen(false)).catch(error => {
          console.log('Failed to exit full screen mode:', error);
        });
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen().then(() => setIsFullScreen(false)).catch(error => {
          console.log('Failed to exit full screen mode:', error);
        });
      }
    }
  }

  return (
    <FullScreenButton onClick={toggleFullScreen}>
      {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
    </FullScreenButton>
  );
}

export default RequestFullscreen;
