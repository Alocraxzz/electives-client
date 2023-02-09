import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessonsTypes } from "../../features/redux/rtk/lessonTypeSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";

export const LessonTypeSelect = ({ initialValue, transferLessonType }) => {
    const { lessonsTypes, status, isUpdateRequired } = useSelector(state => state.lessonsTypes);

    const [selected, setSelected] = useState(initialValue._id ?? "");
    const dispatch                = useDispatch();

    useEffect(() => {
        dispatch(fetchLessonsTypes());
    }, [isUpdateRequired]);

    const handleChange = (event) => {
        transferLessonType(lessonsTypes.find(lessonType => lessonType._id === event.target.value));
        setSelected(event.target.value);
    };

    return (
        <Box sx={{ mt: "10px", minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Lesson type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Lesson type"
                    onChange={handleChange}
                >
                    {lessonsTypes.map((lessonType) => (
                        <MenuItem key={lessonType._id} value={lessonType._id}>{lessonType.type}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};