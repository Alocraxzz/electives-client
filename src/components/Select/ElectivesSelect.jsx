import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import { fetchElectives } from "../../features/redux/rtk/electiveSlice";

const ITEM_HEIGHT      = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps        = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function ElectivesSelect ({ initialValues, transferElectives }) {
    const { electives, isUpdateRequired } = useSelector(state => state.electives);
    const [selected, setSelected] = useState([]);
    const dispatch                = useDispatch();

    useEffect(() => {
        dispatch(fetchElectives());
    }, [isUpdateRequired]);

    useEffect(() => {
        if (initialValues) {
            if (typeof initialValues[0] == "object") {
                setSelected(
                    initialValues.map(elective => elective._id)
                );
            } else {
                setSelected(initialValues);
            }
        }
    }, []);

    useEffect(() => {
        selected && transferElectives(selected);
    }, [selected]);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ my: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Electives</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
                    renderValue={(actual) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {actual?.map((value) => {
                                const subject = electives.find((elective) => elective._id === value)?.subject.name;

                                return (
                                    <Chip key={value} label={subject}/>
                                );
                            })}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {electives?.map((elective) => (
                        <MenuItem
                            key={elective._id}
                            value={elective._id}
                        >
                            {elective?.subject?.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
