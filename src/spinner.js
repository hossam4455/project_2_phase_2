import React from 'react';
import { Audio } from 'react-loader-spinner'
import { SpinnerCircular } from 'spinners-react';
import styles from './spinneer.module.css'
const Spinner = () => {
    return (
        <div className={styles.spin}>
            <SpinnerCircular size={1000} thickness={138} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
}

export default Spinner;
