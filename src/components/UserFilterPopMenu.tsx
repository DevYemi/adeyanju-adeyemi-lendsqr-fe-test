import { Button, FormControl, MenuItem, Popover, TextField } from "@mui/material"
import { useMemo, useState } from "react";
import styles from "@/styles/userFilterPopMenu.module.scss"
import { CloseRounded, CalendarMonthRounded } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomMuiSelectField from "./CustomMuiSelectField";
import { userRequestResultTypes } from "@/redux-toolkit/api/types";
import { userStatusType } from "./UserTableRow";
import { userListFilterObject } from "@/utils/filterUserList";
import dayjs from "dayjs";
import { useTheme } from '@mui/material/styles';

interface propTypes {
    anchorEl: HTMLElement | null,
    setFiltterAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
    userList: userRequestResultTypes[],
    handleFilterValuesChanges: (obj: userListFilterObject | null) => void
}

function UserFilterPopMenu({
    anchorEl,
    setFiltterAnchorEl,
    userList,
    handleFilterValuesChanges
}: propTypes) {
    const theme = useTheme()
    const [formValues, setFormValues] = useState<Record<keyof userListFilterObject, string>>({
        organisation: "",
        userName: "",
        email: "",
        phoneNumber: "",
        date: "",
        status: ""
    })

    const popUpOpen = Boolean(anchorEl);
    const statusSelectItems: userStatusType = ["Inactive", "Pending", "Blacklisted", "Active"]

    const closePopUp = () => setFiltterAnchorEl(null);

    const handleFormValuChanges = (name: keyof userListFilterObject, value: any) => {
        setFormValues({ ...formValues, [name]: name === "date" ? dayjs(value).toISOString() : value })
    }

    const handleResetButton = () => {
        handleFilterValuesChanges(null);
        setFormValues({
            organisation: "",
            userName: "",
            email: "",
            phoneNumber: "",
            date: "",
            status: ""
        })
    }

    const handleFilterButton = () => {
        if (
            formValues.date ||
            formValues.email ||
            formValues.organisation ||
            formValues.phoneNumber ||
            // formValues.status ||
            formValues.userName
        ) {
            handleFilterValuesChanges(formValues);
        }

        closePopUp()
    }


    const organisationSelectItems = useMemo(() => {
        const store: string[] = [];
        if (userList) {
            for (let i = 0; i < userList.length; i++) {
                const user = userList[i];
                if (!store.includes(user.orgName)) {
                    store.push(user.orgName)
                }
            }
        }
        return store
    }, [userList])



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
                    value={formValues?.organisation || ""}
                    label={"Organisation"}
                    name={"organisation"}
                    onChange={(e) => handleFormValuChanges("organisation", e.target.value)}
                >
                    {organisationSelectItems.map(orgName => (<MenuItem key={orgName} value={orgName}>{orgName}</MenuItem>))}
                </CustomMuiSelectField>

                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Username</label>
                    <TextField
                        value={formValues?.userName || ""}
                        onChange={(e) => handleFormValuChanges("userName", e.target.value)}
                        name="userName"
                        id="username-outlined-basic"
                        placeholder="Username" variant="outlined"
                    />
                </FormControl>

                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Email</label>
                    <TextField
                        value={formValues?.email || ""}
                        onChange={(e) => handleFormValuChanges("email", e.target.value)}
                        name="email"
                        id="email-outlined-basic"
                        placeholder="Email"
                        variant="outlined"
                    />
                </FormControl>

                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Date</label>
                    <DatePicker

                        value={formValues.date || null}
                        onChange={(value) => handleFormValuChanges("date", value)}
                        slots={{
                            openPickerIcon: (props) => (<CalendarMonthRounded sx={{ color: theme.palette.primary.dark }} {...props} />),
                            textField: (props) =>
                            (<FormControl fullWidth>
                                <TextField name="date" value={""} placeholder="" {...props} />
                            </FormControl>)
                        }}

                    />
                </FormControl>

                <FormControl fullWidth>
                    <label htmlFor="user-organisation-select">Phone Number</label>
                    <TextField
                        value={formValues?.phoneNumber || ""}
                        onChange={(e) => handleFormValuChanges("phoneNumber", e.target.value)}
                        name="phoneNumber"
                        id="phoneNumber-outlined-basic"
                        placeholder="Phone Number"
                        variant="outlined"
                    />
                </FormControl>

                <CustomMuiSelectField
                    value={formValues?.status || ""}
                    label={"Status"}
                    name="status"
                    onChange={(e) => handleFormValuChanges("status", e.target.value)}
                >
                    {
                        statusSelectItems.map(status => (<MenuItem key={status} value={status}>{status}</MenuItem>))
                    }
                </CustomMuiSelectField>

                <div className={styles.filterContentBtnGroup}>
                    <Button
                        onClick={handleResetButton}
                        variant="outlined"
                        sx={{ color: theme.palette.primary.dark }}>Reset</Button>
                    <Button
                        onClick={handleFilterButton}
                        variant="contained"
                        color="secondary">Filter</Button>
                </div>
            </div>

        </Popover>
    )
}

export default UserFilterPopMenu