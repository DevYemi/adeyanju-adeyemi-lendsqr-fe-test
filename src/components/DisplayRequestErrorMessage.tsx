
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import style from "@/styles/displayRequestErrorMessage.module.scss"




function DisplayRequestErrorMessage({ error }: { error: any }) {
    console.log(error)
    return (
        <div className={style.container}>
            <SentimentVeryDissatisfiedIcon />
            <p>Ooops an error occured while trying to make your request</p>
            <p>Response code: <span>{error?.status}</span></p>
            <p>Response message: <span>{error?.data}</span></p>
            <p>Please try again later</p>
        </div>
    )
}

export default DisplayRequestErrorMessage