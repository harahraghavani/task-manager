import React from "react";
import { useForm } from "react-hook-form";
import { Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";
import useShowToast from "../../hooks/useShowToast";
import FormInput from "../../components/commmon/FormInput";
import CommonButton from "../../components/commmon/CommonButton";
import { EmailRqRules, NameRequiredRules, PasswordRules } from "../../constants/rules";

const Auth = ({ isSignup }) => {
    const showToast = useShowToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data);
        showToast({ message: "Login Successful", closeBtn: true });
    };

    return (
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Card minW={"330px"} p={4} rounded={"xl"} boxShadow={"2xl"}>
                <CardHeader py={4} px={0} textAlign="center">
                    <Heading size="lg">{isSignup ? "Sign Up" : "Login"}</Heading>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        id="name"
                        type="text"
                        name="name"
                        label="Name"
                        register={register}
                        errors={errors}
                        rules={NameRequiredRules}
                    />
                    <Box pt={4}>
                        <FormInput
                            id="email"
                            type="text"
                            name="email"
                            label="Email"
                            register={register}
                            errors={errors}
                            rules={EmailRqRules}
                        />
                    </Box>
                    <Box pt={4}>
                        <FormInput
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            register={register}
                            errors={errors}
                            rules={PasswordRules}
                        />
                    </Box>
                    <Box py={4} textAlign="center">
                        <CommonButton btnText={isSignup ? "Sign Up" : "Login"} type="submit" />
                    </Box>
                </form>
            </Card>
        </Flex>
    );
};

export default Auth;
