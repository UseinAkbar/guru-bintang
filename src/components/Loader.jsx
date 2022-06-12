import React from "react";
import Lottie from 'react-lottie';
import loading from '../asset/icon/loader.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="loader">
            <div className="lottie">
                <Lottie 
                    options={defaultOptions}
                    height={'100%'}
                    width={'100%'}
                />
            </div>
        </div>
    )
}

export default Loader