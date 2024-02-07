import React from "react";
import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const LinkButton = ({ to, leftIcon, text, onClick }) => {
    const location = useLocation();

    return (
        <Link to={to}>
            <Button
                leftIcon={leftIcon}
                w={"full"}
                gap={2}
                justifyContent={"start"}
                alignItems={"center"}
                variant="ghost"
                cursor="pointer"
                _hover={{
                    background: `${location.pathname === to ? "blue.400" : "none"}`,
                }}
                bg={location.pathname === to ? "blue.400" : "white"}
                color={location.pathname === to ? "white" : "black"}
                onClick={onClick}
            >
                {text}
            </Button>
        </Link>
    );
};

export default LinkButton;
