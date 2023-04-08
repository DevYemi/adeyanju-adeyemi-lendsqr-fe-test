import { userRequestResultTypes } from '@/redux-toolkit/api/types'
import React from 'react'

// Note this component Inherits its styles from its parent component

interface propTypes {
    styles: CSSModuleClasses,
    userData: userRequestResultTypes
}
function UserDetailsGeneral({ styles, userData }: propTypes) {
    return (
        <div className={styles.generalDetails}>
            <div className={styles.row}>
                <h3>Personal Information</h3>
                <div className={styles.rowContent}>
                    <div>
                        <p>full Name</p>
                        <p>{`${userData.profile.firstName} ${userData.profile.lastName}`}</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>{userData.profile.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <p>{userData.email}</p>
                    </div>
                    <div>
                        <p>Bvn</p>
                        <p>{userData.profile.bvn}</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>{userData.profile.gender}</p>
                    </div>
                    <div>
                        <p>Marital status</p>
                        <p>Unknown</p>
                    </div>
                    <div>
                        <p>Children</p>
                        <p>Unknown</p>
                    </div>
                    <div>
                        <p>Type of residence</p>
                        <p>{userData.profile.address}</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <h3>Education and Employment</h3>
                <div className={styles.rowContent}>
                    <div>
                        <p>level of education</p>
                        <p>{userData.education.level}</p>
                    </div>
                    <div>
                        <p>employment status</p>
                        <p>{userData.education.employmentStatus}</p>
                    </div>
                    <div>
                        <p>sector of employment</p>
                        <p>{userData.education.sector}</p>
                    </div>
                    <div>
                        <p>Duration of employment</p>
                        <p>{userData.education.duration}</p>
                    </div>
                    <div>
                        <p>office email</p>
                        <p>{userData.education.officeEmail}</p>
                    </div>
                    <div>
                        <p>Monthly income</p>
                        <p>{`₦${userData.education.monthlyIncome[1]} - ₦${userData.education.monthlyIncome[0]}`}</p>
                    </div>
                    <div>
                        <p>loan repayment</p>
                        <p>{userData.education.loanRepayment}</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <h3>Socials</h3>
                <div className={styles.rowContent}>
                    <div>
                        <p>Twitter</p>
                        <p>{userData.socials.twitter}</p>
                    </div>
                    <div>
                        <p>Facebook</p>
                        <p>{userData.socials.facebook}</p>
                    </div>
                    <div>
                        <p>Instagram</p>
                        <p>{userData.socials.instagram}</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <h3>Guarantor</h3>
                <div className={styles.rowContent}>
                    <div>
                        <p>full Name</p>
                        <p>{`${userData.guarantor.firstName} ${userData.guarantor.lastName}`}</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>{userData.guarantor.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <p>{userData.guarantor.address}</p>
                    </div>
                    <div>
                        <p>Relationship</p>
                        <p>Unknown</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsGeneral