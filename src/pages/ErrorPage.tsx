import { useRouteError } from "react-router-dom";
import styles from "@/styles/errorPage.module.scss"

export default function ErrorPage() {
    const error: any = useRouteError();

    return (

        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error.message}</i>
            </p>
        </div>
    );
}