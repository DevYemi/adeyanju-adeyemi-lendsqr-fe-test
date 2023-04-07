import styles from "@/styles/userDetailsPage.module.scss"
import { useNavigate } from "react-router-dom"
import { WestRounded, StarOutlineOutlined, Star } from '@mui/icons-material';
import { Button, Avatar } from "@mui/material";
import { UserSkeletonIcon } from "@/components/icons";
import gsap from "gsap"
import { useEffect } from "react";
import { createDebounceFunc } from "@/utils/createDebounceFunc";
import UserDetailsGeneral from "@/components/UserDetailsGeneral";

function UserDetailsPage() {
    const navigate = useNavigate();


    const slideUserDetails = (clickedNav: HTMLElement) => {
        // get relevant elements
        let index = clickedNav.getAttribute("data-user-details-nav") as number | string;
        const userDetailsNavList = Array.from(document.querySelectorAll(`[data-user-details-nav]`))
        const userDetailsInfo = document.querySelector(`.${styles.userDetailsInfo}`) as HTMLElement;
        const offset = window.getComputedStyle(userDetailsInfo).getPropertyValue("column-gap").replace("px", "");

        const destination = Number(index) * (userDetailsInfo.clientWidth + Number(offset));

        // toggle active element
        userDetailsNavList.forEach(nav => nav.classList.remove(styles.activeNav));
        clickedNav.classList.add(styles.activeNav)

        // animate
        gsap.to(userDetailsInfo,
            {
                translateX: -destination,
                duration: 0.5,
            })
    }


    useEffect(() => {
        // adds a resize callback on first render to correct slider offsets
        const resizeCallback = createDebounceFunc(() => {
            const activeNav = document.querySelector(`.${styles.activeNav}`) as HTMLElement;
            slideUserDetails(activeNav);
        }, 250);

        window.addEventListener("resize", resizeCallback)

        return () => window.removeEventListener("resize", resizeCallback)
    }, [])


    return (
        <div className={styles.container}>
            <section onClick={() => navigate(-1)} className={styles.sec1}>
                <WestRounded />
                <p>Back to Users</p>
            </section>
            <section className={styles.sec2}>
                <h2>User Details</h2>
                <div>
                    <Button variant="outlined" color="secondary">BLACKLIST USER</Button>
                    <Button variant="outlined" color="secondary">ACTIVATE USER</Button>
                </div>
            </section>
            <section className={styles.sec3}>
                <div className={styles.userDetailsPreview}>
                    <div className={styles.userDetailsPreviewInfo}>
                        <Avatar sx={{ width: 100, height: 100 }}>
                            <UserSkeletonIcon />
                        </Avatar>
                        <div>
                            <p>Grace Effiom</p>
                            <p>LSQFf587g90</p>
                        </div>
                        <div className={styles.userTier}>
                            <p>{`User’s Tier`}</p>
                            <p>
                                <Star sx={{ color: "#E9B200" }} />
                                <Star sx={{ color: "#E9B200" }} />
                                <StarOutlineOutlined sx={{ color: "#E9B200" }} />
                            </p>
                        </div>
                        <div>
                            <p>₦200,000.00</p>
                            <p>9912345678/Providus Bank</p>
                        </div>
                    </div>
                    <nav className={styles.userDetailsPreviewNav}>
                        <ul>
                            <li data-user-details-nav={0} onClick={(e) => slideUserDetails(e.currentTarget)} className={styles.activeNav}>General Details</li>
                            <li data-user-details-nav={1} onClick={(e) => slideUserDetails(e.currentTarget)}>Documents</li>
                            <li data-user-details-nav={2} onClick={(e) => slideUserDetails(e.currentTarget)}>Bank Details</li>
                            <li data-user-details-nav={3} onClick={(e) => slideUserDetails(e.currentTarget)}>Loans</li>
                            <li data-user-details-nav={4} onClick={(e) => slideUserDetails(e.currentTarget)}>Savings</li>
                            <li data-user-details-nav={5} onClick={(e) => slideUserDetails(e.currentTarget)}>App and System</li>
                        </ul>
                    </nav>

                </div>
                <div className={styles.userDetailsInfoWrapper}>
                    <div className={styles.userDetailsInfo}>
                        <UserDetailsGeneral styles={styles} />
                        <div className={styles.documents}>
                            USER DOCUMENTS INFO GOES HERE
                        </div>
                        <div className={styles.bankDetails}>
                            USER Bank Details INFO GOES HERE
                        </div>
                        <div className={styles.loans}>
                            USER LOANS INFO GOES HERE
                        </div>
                        <div className={styles.savings}>
                            USER SAVINGS INFO GOES HERE
                        </div>
                        <div className={styles.appAndSettings}>
                            USER APP AND SETTINGS INFO GOES HERE
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserDetailsPage