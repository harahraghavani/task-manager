import React, { useState } from "react";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormInput = ({
    type = "text",
    placeholder = "",
    label = "",
    onChangeEvent,
    error = false,
    helperText = "",
    options = [],
    defaultValue = "",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {type === "password" ? (
                <FormControl variant="outlined">
                    <InputLabel error={error} htmlFor="outlined-adornment-password">
                        {label}
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        onChange={onChangeEvent}
                        label={label}
                        placeholder={placeholder}
                        error={error}
                    />
                    {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
                </FormControl>
            ) : type === "select" ? (
                <FormControl fullWidth variant="outlined">
                    <InputLabel id={`${label}-label`} error={error}>
                        {label}
                    </InputLabel>
                    <Select
                        labelId={`${label}-label`}
                        id={`${label}-select`}
                        value={defaultValue}
                        label={label}
                        onChange={onChangeEvent}
                        error={error}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
                </FormControl>
            ) : (
                <TextField
                    type={type}
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    onChange={onChangeEvent}
                    error={error}
                    helperText={error ? helperText : ""}
                />
            )}
        </>
    );
};

export default FormInput;
