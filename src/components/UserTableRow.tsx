import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import {
    UserCheckOutlineIcon,
    UserTimesOutlineIcon,
    VisibilityIcon
} from '@/components/icons'
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Note this component Inherits its styles from its parent component

interface propTypes {
    styles: CSSModuleClasses
}

function UserTableRow({ styles }: propTypes) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <tr>
            <td onClick={() => navigate(`${"1"}`)} className={styles.cellOrganisation}>Lendsqr</td>
            <td onClick={() => navigate(`${"1"}`)} className={styles.cellUsername}>Debby Ogana</td>
            <td onClick={() => navigate(`${"1"}`)} className={styles.cellEmail}>adedeji@lendsqr.com</td>
            <td onClick={() => navigate(`${"1"}`)} className={styles.cellPhone}>08141996643</td>
            <td onClick={() => navigate(`${"1"}`)} className={styles.cellDate}>May 15, 2020 10:00 AM</td>
            <td className={styles.cellStatus}><span className={styles.statusInactive}>inactive </span></td>
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