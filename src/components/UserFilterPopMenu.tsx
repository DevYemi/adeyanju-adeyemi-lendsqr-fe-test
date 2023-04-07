import { Button, FormControl, InputLabel, MenuItem, Popover, Select, TextField } from "@mui/material"
import { useState } from "react";
import styles from "@/styles/userFilterPopMenu.module.scss"
import { KeyboardArrowDownRounded, CloseRounded, CalendarMonthRounded } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomMuiSelectField from "./CustomMuiSelectField";

interface propTypes {
    anchorEl: HTMLElement | null,
    setFiltterAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

function UserFilterPopMenu({ anchorEl, setFiltterAnchorEl }: propTypes) {
    const popUpOpen = Boolean(anchorEl);
    const [organisation, setOrganisation] = useState("");
    const [status, setStatus] = useState("");

    const closePopUp = () => setFiltterAnchorEl(null)
    return (
        <Popover
            open={popUpOpen}
            anchorEl={anchorEl}
            className={styles.filterWrapper}
            onClose={closePopUp}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <div className={styles.filterContent}>
                <div onClick={closePopUp} className={styles.filterCloseButton}>
                    <CloseRounded />
                </div>
                <CustomMuiSelectField
                    value={organisation}
                    label={"Organisation"}
                    name={"Organisation"}
                    onChange={(e) => setOrganisation(e.target.value)}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </CustomMuiSelectField>
                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Username</label>
                    <TextField id="outlined-basic" placeholder="Username" variant="outlined" />
                </FormControl>
                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Email</label>
                    <TextField id="outlined-basic" placeholder="Email" variant="outlined" />
                </FormControl>
                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Date</label>
                    <DatePicker
                        slots={{
                            openPickerIcon: (props) => (<CalendarMonthRounded {...props} />),
                            textField: (props) =>
                            (<FormControl fullWidth>
                                <TextField value={""} placeholder="" {...props} />
                            </FormControl>)
                        }}

                    />
                </FormControl>
                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Phone Number</label>
                    <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" />
                </FormControl>
                <CustomMuiSelectField
                    value={status}
                    label={"Status"}
                    name={"Status"}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </CustomMuiSelectField>
                <div className={styles.filterContentBtnGroup}>
                    <Button variant="outlined" color="primary">Reset</Button>
                    <Button variant="contained" color="secondary">Filter</Button>
                </div>
            </div>

        </Popover>
    )
}

export default UserFilterPopMenu