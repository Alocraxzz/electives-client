import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../features/redux/rtk/subjectSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";

export const SubjectSelect = ({ initialValue, transferSubject }) => {
    const { subjects, status, isUpdateRequired } = useSelector(state => state.subjects);

    const [selected, setSelected] = useState(initialValue._id ?? "");
    const dispatch                = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [isUpdateRequired]);

    const handleChange = (event) => {
        transferSubject(subjects.find(subject => subject._id === event.target.value));
        setSelected(event.target.value);
    };

    return (
        <Box sx={{ mt: "10px", minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Age"
                    onChange={handleChange}
                >
                    {subjects.map((subject) => (
                        <MenuItem key={subject._id} value={subject._id}>{subject.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};