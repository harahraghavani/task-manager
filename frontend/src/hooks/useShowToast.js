import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
    const toast = useToast();

    const showToast = ({
        message,
        description = "",
        toastType = "success",
        duration = 5000,
        closeBtn = false,
        position = "top-right",
    }) =>
        toast({
            title: message,
            description: description,
            status: toastType,
            duration: duration,
            isClosable: closeBtn,
            position: position,
        });

    return showToast;
};

export default useShowToast;
