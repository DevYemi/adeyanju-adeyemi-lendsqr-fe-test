import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import { useAppSelector } from '@/redux-toolkit/hooks';
import styles from "@/styles/dashboardPage.module.scss"
import { Outlet } from "react-router-dom";

function Dashboard() {
    const { isOpen: isSideNavOpen } = useAppSelector(state => state.sideNavVisibility);
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>
                <section className={`${styles.sec1} ${isSideNavOpen ? styles.sec1Open : ""}`}>
                    <SideNav />
                </section>
                <section className={styles.sec2}>
                    <div className={styles.sec2Container}>
                        <Outlet />
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Dashboard