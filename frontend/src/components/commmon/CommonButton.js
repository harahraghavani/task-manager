import React from "react";
import { Button } from "@chakra-ui/react";

const CommonButton = ({
    btnText,
    type,
    disabled,
    variant,
    onClick,
    colorScheme,
}) => {
    return (
        <Button
            type={type ? type : "button"}
            disabled={disabled}
            colorScheme={colorScheme ? colorScheme : "blue"}
            onClick={onClick ? onClick : null}
            variant={variant ? variant : "solid"}
            _hover={{ shadow: "2xl" }}
        >
            {btnText}
        </Button>
    );
};

export default CommonButton;
