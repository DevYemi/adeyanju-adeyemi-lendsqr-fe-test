import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import styles from "@/styles/dashboardPage.module.scss"
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>
                <section className={styles.sec1}>
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