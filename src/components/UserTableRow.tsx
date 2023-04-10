import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import {
    UserCheckOutlineIcon,
    UserTimesOutlineIcon,
    VisibilityIcon
} from '@/components/icons'
import { MouseEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRequestResultTypes } from '@/redux-toolkit/api/types';
import dayjs from "dayjs";


// Note this component Inherits its styles from its parent component

interface propTypes {
    styles: CSSModuleClasses,
    user: userRequestResultTypes
}

export type userStatusType = ["Inactive", "Pending", "Blacklisted", "Active"]

function UserTableRow({ styles, user }: propTypes) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const randomStatus = useMemo(() => { // create a random status value cause it wasn't provided by the api
        const statusValues: userStatusType = ["Inactive", "Pending", "Blacklisted", "Active"];

        const randomIndex = Math.floor(Math.random() * statusValues.length);
        return statusValues[randomIndex]
    }, [])

    const handleClick = (event: MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onRowClick = () => {
        localStorage.setItem("LendsqrUserDetails", JSON.stringify(user));
        navigate(`${user.id}`)
    }
    return (
        <tr data-testid="tableRowContent">
            <td className={styles.cellOrganisation}>{user.orgName}</td>
            <td className={styles.cellUsername}>{user.userName}</td>
            <td className={styles.cellEmail}>{user.email}</td>
            <td className={styles.cellPhone}>{user.phoneNumber}</td>
            <td className={styles.cellDate}>{dayjs(user.createdAt).format("lll")}</td>
            <td className={styles.cellStatus}><span className={styles[`status${randomStatus}`]}>{randomStatus}</span></td>
            <td className={styles.cellMore}>
                <div>
                    <MoreVert onClick={handleClick} width={24} height={24} />

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className={styles.cellMoreDropMenu}
                    >
                        <MenuItem data-testid="tableRowContentTd" onClick={() => { handleClose(); onRowClick() }}>
                            <VisibilityIcon />
                            <span>View Details</span>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <UserTimesOutlineIcon />
                            <span>Blacklist User</span>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <UserCheckOutlineIcon />
                            <span>Activate User</span>
                        </MenuItem>
                    </Menu>
                </div>

            </td>
        </tr>
    )
}

export default UserTableRow