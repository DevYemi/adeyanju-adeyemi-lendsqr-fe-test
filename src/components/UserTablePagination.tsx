import styles from "@/styles/userTablePagination.module.scss"
import CustomMuiSelectField from './CustomMuiSelectField'
import { MenuItem, Pagination, SelectChangeEvent } from '@mui/material'
import { ChangeEvent, useMemo } from "react"
import { useAppSelector } from "@/redux-toolkit/hooks";

interface propTypes {
    totalUsers: number,
    onPaginationUserListPerPageChange: (e: SelectChangeEvent<string>) => void,
    onPaginationChange: (e: ChangeEvent<unknown>, value: number) => void,
}

function UserTablePagination({
    onPaginationUserListPerPageChange,
    totalUsers,
    onPaginationChange
}: propTypes) {

    const { paginationUserListPerPage, paginationInterval, paginationCurrentPage } = useAppSelector(state => state.userPageTablePagination);

    const paginationPageCount = useMemo(() => {
        let value = 1;

        if (totalUsers) {
            value = Math.ceil(totalUsers / (paginationUserListPerPage || 1))
        }
        return value
    }, [paginationUserListPerPage, totalUsers])

    const selectUserListInterval = useMemo(() => {
        const intervalArr = [];
        if (totalUsers) {
            const commonMultiple = totalUsers / paginationInterval;

            for (let i = 0; i < commonMultiple + 1; i++) {
                intervalArr.push(paginationInterval * i)
            }

        }
        return intervalArr;
    }, [totalUsers, paginationInterval])



    return (
        <div className={styles.container}>
            <section className={styles.sec1}>
                <p>Showing</p>
                <CustomMuiSelectField
                    value={paginationUserListPerPage.toString()}
                    onChange={onPaginationUserListPerPageChange}
                    name='userTableRange'
                >
                    {
                        selectUserListInterval.map(item => <MenuItem key={item} value={item.toString()}>{item}</MenuItem>)
                    }
                </CustomMuiSelectField>
                <p>Out of {totalUsers}</p>
            </section>
            <section className={styles.sec2}>
                <Pagination
                    count={paginationPageCount}
                    onChange={onPaginationChange}
                    page={paginationCurrentPage}
                    variant="outlined" shape="rounded"
                />
            </section>
        </div>
    )
}

export default UserTablePagination