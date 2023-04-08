import { ChangeEvent, useMemo, useState } from 'react'
import styles from "@/styles/userPage.module.scss"
import {
  FilterIcon,
  MultipleUsersIcon,
  UnisexUserIcon,
  UserLoanIcon,
  UserWithSavingsIcon,
} from '@/components/icons'
import UserTableRow from '@/components/UserTableRow';
import UserFilterPopMenu from '@/components/UserFilterPopMenu';
import UserTablePagination from '@/components/UserTablePagination';
import { useGetUsersQuery } from '@/redux-toolkit/api/userSlice';
import LoadingSpinner from '@/components/LoadingSpinner';
import DisplayRequestErrorMessage from '@/components/DisplayRequestErrorMessage';
import { SentimentVeryDissatisfied } from '@mui/icons-material';
import { userRequestResultTypes } from '@/redux-toolkit/api/types';
import { SelectChangeEvent } from '@mui/material';


function UsersPage() {
  const paginationInterval = 5;
  const [filtterAnchorEl, setFiltterAnchorEl] = useState<null | HTMLElement>(null);
  const [paginationUserListPerPage, setPaginationUserListPerPage] = useState(paginationInterval);
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);


  const { data: userList, isLoading: userListIsLoading, error: userListError } = useGetUsersQuery("");

  const onPaginationChange = (e: ChangeEvent<unknown>, value: number) => {
    setPaginationCurrentPage(value);
  }

  const onPaginationUserListPerPageChange = (e: SelectChangeEvent<string>) => {
    setPaginationUserListPerPage(+e.target.value);
    setPaginationCurrentPage(1)
  }


  const currentPaginationUserList = useMemo(() => {
    let returnValue: userRequestResultTypes[] = [];

    if (userList?.length && paginationUserListPerPage) {
      const start = 0 + ((paginationCurrentPage - 1) * paginationUserListPerPage)
      const end = Math.min(paginationCurrentPage * paginationUserListPerPage, userList?.length + 1)


      returnValue = userList.slice(start, end)
    }

    return returnValue
  }, [userList, paginationUserListPerPage, paginationCurrentPage])


  if (userListIsLoading) {
    return <LoadingSpinner />
  } else if (userListError) {
    return (
      <DisplayRequestErrorMessage error={userListError} />
    )
  } else {
    return (
      userList?.length ?
        <div className={styles.container}>
          <h1>Users</h1>
          <section className={styles.sec1}>
            <div className={styles.usersContent}>
              <span>
                <UnisexUserIcon />
              </span>
              <p>Users</p>
              <p>{userList.length}</p>
            </div>
            <div className={styles.activeUsersContent}>
              <span>
                <MultipleUsersIcon />
              </span>
              <p>Active Users</p>
              <p>2,456</p>
            </div>
            <div className={styles.usersLoanContent}>
              <span>
                <UserLoanIcon />
              </span>
              <p>Users with Loans</p>
              <p>12,453</p>
            </div>
            <div className={styles.usersSavingsContent}>
              <span>
                <UserWithSavingsIcon />
              </span>
              <p>Users with Savings</p>
              <p>102,453</p>
            </div>
          </section>
          <section className={styles.sec2}>
            <div className={styles.tableWrapper}>
              <table>
                <thead onClick={(e) => setFiltterAnchorEl(e.currentTarget)}>
                  <tr>
                    <th>
                      <div>
                        <span>organization</span>
                        <FilterIcon />
                      </ div>
                    </th>
                    <th>
                      <div>
                        <span>Username</span>
                        <FilterIcon />
                      </ div>
                    </th>
                    <th>
                      <div>
                        <span>Email</span>
                        <FilterIcon />
                      </ div>
                    </th>
                    <th>
                      <div>
                        <span>Phone number</span>
                        <FilterIcon />
                      </ div>
                    </th>
                    <th>
                      <div>
                        <span>Date joined</span>
                        <FilterIcon />
                      </ div>
                    </th>
                    <th>
                      <div>
                        <span>Status</span>
                        <FilterIcon />
                      </ div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentPaginationUserList.map((user) => (<UserTableRow key={user.id} user={user} styles={styles} />))
                  }
                </tbody>
              </table>
            </div>
            <UserFilterPopMenu anchorEl={filtterAnchorEl} setFiltterAnchorEl={setFiltterAnchorEl} />
            <UserTablePagination
              paginationUserListPerPage={paginationUserListPerPage}
              totalUsers={userList.length}
              paginationInterval={paginationInterval}
              onPaginationUserListPerPageChange={onPaginationUserListPerPageChange}
              onPaginationChange={onPaginationChange}
              paginationCurrentPage={paginationCurrentPage}
            />
          </section>
        </div>
        :
        <div className={styles.emptyUser}>
          <SentimentVeryDissatisfied />
          <span>
            We currently don't have any user in our record
          </span>
        </div>
    )
  }


}

export default UsersPage