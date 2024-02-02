import React, { useState } from "react";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller } from "react-hook-form";

const FormInput = ({
    type = "text",
    placeholder = "",
    label = "",
    // onChangeEvent,
    error = false,
    helperText = "",
    rules,
    name,
    control,
    defaultValue,
    required
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
                    <Controller
                        name={name}
                        control={control}
                        defaultValue={defaultValue}
                        rules={rules}
                        render={({ field }) => (
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
                                // onChange={onChangeEvent}
                                label={label}
                                placeholder={placeholder}
                                error={error}
                                required={required}
                                {...field}
                            />
                        )}
                    />
                    {rules && <FormHelperText error={error}>{rules}</FormHelperText>}
                </FormControl>
            ) : (
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={rules}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type={type}
                            id="outlined-basic"
                            label={label}
                            variant="outlined"
                            placeholder={placeholder}
                            // onChange={onChangeEvent}
                            error={error}
                            required={required}
                            helperText={error ? helperText : ""}
                        />
                    )}
                />
            )}
        </>
    );
};

export default FormInput;
