import React, { MouseEvent, useState } from 'react'
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


function UsersPage() {
  const [filtterAnchorEl, setFiltterAnchorEl] = useState<null | HTMLElement>(null);
  const [tableContentRange, setTableContentRange] = useState("100");

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <section className={styles.sec1}>
        <div className={styles.usersContent}>
          <span>
            <UnisexUserIcon />
          </span>
          <p>Users</p>
          <p>2,456</p>
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
              <UserTableRow styles={styles} />
              <UserTableRow styles={styles} />
              <UserTableRow styles={styles} />
              <UserTableRow styles={styles} />
              <UserTableRow styles={styles} />
              <UserTableRow styles={styles} />

            </tbody>
          </table>
        </div>
        <UserFilterPopMenu anchorEl={filtterAnchorEl} setFiltterAnchorEl={setFiltterAnchorEl} />
        <UserTablePagination
          range={tableContentRange}
          onRangeChange={(e) => setTableContentRange(e.target.value)}
        />
      </section>
    </div>
  )
}

export default UsersPage