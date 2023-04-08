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


// Note this component Inherits its styles from its parent component

interface propTypes {
    styles: CSSModuleClasses,
    user: userRequestResultTypes
}

function UserTableRow({ styles, user }: propTypes) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const randomStatus = useMemo(() => { // create a random status value cause it wasn't provided by the api
        const statusValues = ["Inactive", "Pending", "Blacklisted"];

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
        <tr>
            <td onClick={onRowClick} className={styles.cellOrganisation}>{user.orgName}</td>
            <td onClick={onRowClick} className={styles.cellUsername}>{user.email}</td>
            <td onClick={onRowClick} className={styles.cellEmail}>{user.email}</td>
            <td onClick={onRowClick} className={styles.cellPhone}>{user.phoneNumber}</td>
            <td onClick={onRowClick} className={styles.cellDate}>{user.createdAt}</td>
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
                        <MenuItem onClick={handleClose}>
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