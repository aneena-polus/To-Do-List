import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function LimitDropDown(props) {

    const [limit, setLimit] = useState("");

    const handleValueChange = (event) => {
        setLimit(event.target.value);
        props.handleChange(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="secondary">
                <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={limit}
                    onChange={handleValueChange}
                    label="Status"
                >
                    <MenuItem value=""><em>Default</em></MenuItem>
                    <MenuItem value={1}>Done</MenuItem>
                    <MenuItem value={2}>Pending</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default LimitDropDown