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
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom"

function SideNav() {
    return (
        <div className={styles.container}>
            <ul className={styles.list1}>
                <li>
                    <NavLink to={"/organization"} className={({ isActive }) => isActive ? styles.active : ""}>
                        <BriefCaseIcon />
                        <span>Switch Organization</span>
                        <ChevronDownIcon width={16} height={16} />
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
                        <NavLink to={"/guarantors"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <UserFriendsIcon />
                            <span>Guarantors</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/loans"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <SacksIcon />
                            <span>Loans</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/decision-model"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <HandShakeIcon />
                            <span>Decision Models</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/savings"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <PiggyBankIcon />
                            <span>Savings</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/loan-request"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <LoanIcon />
                            <span>Loan Requests</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/whitelist"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <UserCheckIcon />
                            <span>Whitelist</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/karma"} className={({ isActive }) => isActive ? styles.active : ""}>
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
                        <NavLink to={"/organisation"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <BriefCaseIcon />
                            <span>Organization</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/loan-product"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <LoanIcon />
                            <span>Loan Products</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/savings-product"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <SavingHouseIcon />
                            <span>Savings Products</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/fees"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <CoinsIcon />
                            <span>Fees and Charges</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/transactions"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <TransactionIcon />
                            <span>Transactions</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <GalaxyIcon />
                            <span>Services</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/service-account"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <UserSettingsIcon />
                            <span>Service Account</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/settlements"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <ScrolIcon />
                            <span>Settlements</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/reports"} className={({ isActive }) => isActive ? styles.active : ""}>
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
                        <NavLink to={"/preferences"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <SliderIcon />
                            <span>Preferences</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/fees-and-pricing"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <BadgePercentIcon />
                            <span>Fees and Pricing</span>
                        </ NavLink>
                    </li>
                    <li>
                        <NavLink to={"/audit-logs"} className={({ isActive }) => isActive ? styles.active : ""}>
                            <ClipboardListIcon />
                            <span>Audit Logs</span>
                        </ NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav