import React from 'react'
import styles from "@/styles/sideNav.module.scss"
import {
    BadgePercentIcon,
    BriefCaseIcon,
    ChartBarIcon,
    ClipboardListIcon,
    CoinsIcon,
    GalaxyIcon,
    HandShakeIcon,
    HomeIcon, LoanIcon,
    PiggyBankIcon,
    RightBucketArrowIcon,
    SacksIcon,
    SavingHouseIcon,
    ScrolIcon,
    SliderIcon,
    TransactionIcon,
    UserCheckIcon,
    UserFriendsIcon,
    UserIcon,
    UserSettingsIcon,
    UserTimesIcon
} from './icons'
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import { NavLink } from "react-router-dom"

function SideNav() {
    return (
        <div className={styles.container}>
            <ul className={styles.list1}>
                <li>
                    <NavLink to={"/"}>
                        <BriefCaseIcon />
                        <span>Switch Organization</span>
                        <KeyboardArrowDownRounded width={16} height={16} />
                    </NavLink>

                </li>
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? styles.active : ""}>
                        <HomeIcon />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
            </ul>
            <div className={styles.customer}>
                <p>customers</p>
                <ul className={styles.list2}>
                    <li>
                        <NavLink to={"/users"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <UserIcon />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <UserFriendsIcon />
                            <span>Guarantors</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <SacksIcon />
                            <span>Loans</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <HandShakeIcon />
                            <span>Decision Models</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <PiggyBankIcon />
                            <span>Savings</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <LoanIcon />
                            <span>Loan Requests</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <UserCheckIcon />
                            <span>Whitelist</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <UserTimesIcon />
                            <span>Karma</span>
                        </ NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.business}>
                <p>business</p>
                <ul className={styles.list3}>
                    <li>
                        <NavLink to={"/"}>
                            <BriefCaseIcon />
                            <span>Organization</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <LoanIcon />
                            <span>Loan Products</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <SavingHouseIcon />
                            <span>Savings Products</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <CoinsIcon />
                            <span>Fees and Charges</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <TransactionIcon />
                            <span>Transactions</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <GalaxyIcon />
                            <span>Services</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <UserSettingsIcon />
                            <span>Service Account</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <ScrolIcon />
                            <span>Settlements</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <ChartBarIcon />
                            <span>Reports</span>
                        </ NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.settings}>
                <p>settings</p>
                <ul className={styles.list4}>
                    <li>
                        <NavLink to={"/"}>
                            <SliderIcon />
                            <span>Preferences</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <BadgePercentIcon />
                            <span>Fees and Pricing</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <ClipboardListIcon />
                            <span>Audit Logs</span>
                        </ NavLink>
                    </li>
                </ul>
            </div>

            <p className={styles.logOut}>
                <RightBucketArrowIcon />
                <span>Log Out</span>
            </p>
            <p className={styles.appVersion}>v1.2.0</p>

        </div>
    )
}

export default SideNav