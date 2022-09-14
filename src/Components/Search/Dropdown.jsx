import React from "react";
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const Dropdown = ({name, items}) => {
    
  return <div className="search">
        <FormControl fullWidth variant="filled">
            <InputLabel id={`${name}-dropdown-label`}>{name}</InputLabel>
            <Select
                labelId={`${name}-dropdown`}
                id={`${name}-dropdown`}
                // value={industry}
                label={name}
                // onChange={handleChange}
            >
                {items.map(item => <MenuItem value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
};

export default Dropdown;
