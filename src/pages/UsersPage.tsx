import { ChangeEvent, useEffect, useMemo, useState } from 'react'
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
import { useAppSelector } from '@/redux-toolkit/hooks';
import { useDispatch } from 'react-redux';
import { updateCurrentPage, updateUserListPerPage } from '@/redux-toolkit/features/userPageTablePagination';
import filterUserListBy, { userListFilterObject } from '@/utils/filterUserList';


function UsersPage() {
  const dispatch = useDispatch()
  const { paginationUserListPerPage, paginationCurrentPage } = useAppSelector(state => state.userPageTablePagination);
  const [filtterAnchorEl, setFiltterAnchorEl] = useState<null | HTMLElement>(null);
  const [userFilterByValues, setUserFilterByValues] = useState<userListFilterObject | null>(null);



  const { data: userList, isLoading: userListIsLoading, error: userListError } = useGetUsersQuery("");

  const onPaginationChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(updateCurrentPage(value))
  }

  const onPaginationUserListPerPageChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateUserListPerPage(+e.target.value))
    dispatch(updateCurrentPage(1))
  }

  const handleFilterValuesChanges = (obj: userListFilterObject | null) => {
    setUserFilterByValues(obj)
  }


  const currentPaginationUserList = useMemo(() => {
    let listArray: userRequestResultTypes[] = [];

    if (userList?.length && paginationUserListPerPage) {
      listArray = [...userList];

      if (userFilterByValues) { // filter userList
        listArray = filterUserListBy(listArray, userFilterByValues);
      }

      const start = 0 + ((paginationCurrentPage - 1) * paginationUserListPerPage)
      const end = Math.min(paginationCurrentPage * paginationUserListPerPage, listArray?.length + 1)


      listArray = listArray.slice(start, end)
    }

    return listArray;
  }, [userList, paginationUserListPerPage, paginationCurrentPage, userFilterByValues])


  useEffect(() => {
    localStorage.removeItem("LendsqrUserDetails")
  }, [])


  if (userListIsLoading) {
    return <LoadingSpinner />
  } else if (userListError) {
    return (
      <DisplayRequestErrorMessage error={userListError} />
    )
  } else {
    return (
      userList?.length ?
        <div data-testid="usersPageWrapper" className={styles.container}>
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
            <UserFilterPopMenu
              anchorEl={filtterAnchorEl}
              setFiltterAnchorEl={setFiltterAnchorEl}
              userList={userList}
              handleFilterValuesChanges={handleFilterValuesChanges}
            />
            <UserTablePagination
              totalUsers={userFilterByValues ? currentPaginationUserList.length : userList.length}
              onPaginationUserListPerPageChange={onPaginationUserListPerPageChange}
              onPaginationChange={onPaginationChange}
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