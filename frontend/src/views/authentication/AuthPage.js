import React from "react";
import { useForm } from "react-hook-form";
import { Card, Center, Flex, Square } from "@chakra-ui/react";
import FormInput from "../../components/commmon/FormInput";
import CommonButton from "../../components/commmon/CommonButton";

const AuthPage = ({ isSignup }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Card minW={"300px"} p={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        type="text"
                        fieldName="name" // Unique name for name input  
                        label="Name"
                        register={register}
                        control={control}
                        errors={errors}
                        rules={{
                            required: "Name is required",
                        }}
                    />

                    <FormInput
                        type="text"
                        fieldName="emailValue" // Unique name for email input
                        label="Email"
                        register={register}
                        control={control}
                        errors={errors}
                        required={false}
                    />

                    <FormInput
                        type="password"
                        fieldName="password" // Unique name for password input
                        label="Password"
                        register={register}
                        control={control}
                        errors={errors}
                        required={false}
                    />

                    <CommonButton type="submit" btnText={isSignup ? "Signup" : "Login"} />
                </form>
            </Card>
        </Flex >
    );
};

export default AuthPage;
