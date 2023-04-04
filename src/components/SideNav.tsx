import React from 'react'
import styles from "@/styles/sideNav.module.scss"
import { BriefCaseIcon, ArrowDownIcon } from './icons'

function SideNav() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <span className=''>
                            <BriefCaseIcon />
                        </span>
                        <p>Switch Organization</p>
                        <span>
                            <ArrowDownIcon />
                        </span>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav