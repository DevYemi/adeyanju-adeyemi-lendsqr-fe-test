import styles from "@/styles/userTablePagination.module.scss"
import CustomMuiSelectField from './CustomMuiSelectField'
import { MenuItem, Pagination, SelectChangeEvent } from '@mui/material'

interface propTypes {
    range: string,
    onRangeChange: (e: SelectChangeEvent<string>) => void,
}

function UserTablePagination({ range, onRangeChange }: propTypes) {
    return (
        <div className={styles.container}>
            <section className={styles.sec1}>
                <p>Showing</p>
                <CustomMuiSelectField
                    value={range}
                    onChange={onRangeChange}
                    name='userTableRange'
                >
                    <MenuItem value={"100"}>100</MenuItem>
                    <MenuItem value={"50"}>50</MenuItem>
                    <MenuItem value={"30"}>30</MenuItem>
                </CustomMuiSelectField>
                <p>Out of 100</p>
            </section>
            <section className={styles.sec2}>
                <Pagination count={+range} variant="outlined" shape="rounded" />
            </section>
        </div>
    )
}

export default UserTablePagination