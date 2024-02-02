import React from "react";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormSelect = ({
    label = "",
    onChangeEvent,
    error = false,
    helperText = "",
    options = [],
    defaultValue = "",
    placeholder = "",
    name = "",
    control,
    rules,
    required
}) => {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormControl fullWidth variant="outlined" error={error}>
                    <InputLabel id={`${label}-label`} error={error}>
                        {label}
                    </InputLabel>
                    <Select
                        {...field}
                        labelId={`${label}-label`}
                        id={`${label}-select`}
                        label={label}
                        onChange={(e) => {
                            field.onChange(e);
                            onChangeEvent(e);
                        }}
                        error={error}
                        placeholder={placeholder}
                        name={name}
                        required
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};

export default FormSelect;