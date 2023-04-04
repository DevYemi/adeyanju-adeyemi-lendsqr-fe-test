import React from 'react'
import { Circles } from 'react-loader-spinner'
import styles from "@/styles/loadingSpinner.module.scss"

function LoadingSpinner() {
    return (
        <div className={styles.wrapper} >
            <Circles
                height="50"
                width="50"
                color={"#213f7d"}
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}

export default LoadingSpinner