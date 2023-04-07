import { FormControl, MenuItem, Select, SelectChangeEvent, } from "@mui/material"
import { KeyboardArrowDownRounded } from '@mui/icons-material';

// Note this component Inherits its styles from its parent component

interface propType {
    value: string,
    onChange: (e: SelectChangeEvent<string>) => void,
    name: string,
    label?: string,
    children: React.ReactNode
}

function CustomMuiSelectField({ value, name, onChange, label, children }: propType) {

    return (
        <FormControl fullWidth>
            {
                label && <label htmlFor={`"user-${name}-select"`}>{label}</label>
            }
            <Select
                labelId={`user-${name}`}
                id={`"user-${name}-select"`}
                displayEmpty
                name={name}
                value={value}
                IconComponent={(props) => <KeyboardArrowDownRounded {...props} />}
                onChange={onChange}
            >
                <MenuItem disabled value="">
                    <span style={{ opacity: 0.5 }}>Select</span>
                </MenuItem>
                {children}
            </Select>
        </FormControl>
    )
}

export default CustomMuiSelectField