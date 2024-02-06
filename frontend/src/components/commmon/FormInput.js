import {
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, InputGroup } from "@chakra-ui/react";

// const FormInput = ({
//     id,
//     label,
//     name,
//     rules,
//     register,
//     type = "text",
//     control,
//     errors,
//     required = true
// }) => {

//     const { ref: ref, ...rest } = register(name, rules);
//     const [showPassword, setShowPassword] = useState(false);
//     return type === "password" ? (
//         <FormControl id={id} isInvalid={errors.name}>
//             <FormLabel htmlFor={name}>{label}</FormLabel>
//             <InputGroup>
//                 <Input
//                     {...register(name, rules)}
//                     {...rest}
//                     type={showPassword ? "text" : "password"}
//                     control={control}
//                     required={required}
//                 />
//                 <InputRightElement width="4.5rem">
//                     <IconButton
//                         h="1.75rem"
//                         size="sm"
//                         onClick={() => setShowPassword(!showPassword)}
//                         icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
//                         bgColor={"transparent"}
//                         _hover={{ bgColor: "transparent" }}
//                     />
//                 </InputRightElement>
//             </InputGroup>
//             <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
//         </FormControl>
//     ) : (
//         <FormControl id={id} isInvalid={errors.name}>
//             <FormLabel htmlFor={name}>{label}</FormLabel>
//             <Input
//                 {...register(name, rules)}
//                 {...rest}
//                 type={type}
//                 control={control}
//                 required={required}
//             />
//             <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
//         </FormControl>
//     );
// }

const FormInput = ({
    id,
    label,
    fieldName, // Use fieldName prop as the name attribute
    rules,
    register,
    type = "text",
    control,
    errors,
    required = true
}) => {

    const { ref: ref, ...rest } = register(fieldName, rules); // Use fieldName for registration
    const [showPassword, setShowPassword] = useState(false);

    return type === "password" ? (
        <FormControl id={id} isInvalid={errors[fieldName]}>
            <FormLabel htmlFor={fieldName}>{label}</FormLabel>
            <InputGroup>
                <Input
                    {...rest}
                    type={showPassword ? "text" : "password"}
                    control={control}
                    required={required}
                />
                <InputRightElement width="4.5rem">
                    <IconButton
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "transparent" }}
                    />
                </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors[fieldName]?.message}</FormErrorMessage>
        </FormControl>
    ) : (
        <FormControl id={id} isInvalid={errors[fieldName]}>
            <FormLabel htmlFor={fieldName}>{label}</FormLabel>
            <Input
                {...rest}
                type={type}
                control={control}
                required={required}
            />
            <FormErrorMessage>{errors[fieldName]?.message}</FormErrorMessage>
        </FormControl>
    );
};


export default FormInput;
