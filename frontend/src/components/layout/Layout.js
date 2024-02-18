import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

// Icons
import { FiMenu } from "react-icons/fi";
import { GrPlan } from "react-icons/gr";
import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

// Components
import LinkButton from "../commmon/LinkButton";
import { Link, useNavigate } from "react-router-dom";


import { api } from "../../api/index"
import { LOGOUT_USER_API } from "../../api/apiURL";
import { checkSuccessResponse } from "../../utils/utils";
import useShowToast from "../../hooks/useShowToast"
export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 80 }} p={8}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onOpen, btnRef, onClose, ...rest }) => {
    const navigate = useNavigate()
    const showToast = useShowToast()
    const handleLogout = async () => {
        const response = await api({
            endpoint: LOGOUT_USER_API
        })
        if (checkSuccessResponse(response)) {
            localStorage.removeItem("token");
            navigate("/login")
            showToast({
                message: "Logout Successful",
                closeBtn: true
            })
        }
    };

    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 80 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Link to={"/"}>
                    <Text
                        fontSize="lg"
                        fontFamily="monospace"
                        fontWeight="bold"
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={onClose}
                    >
                        Task Manager
                    </Text>
                </Link>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            <Flex
                direction={"column"}
                mx={2}
                justifyContent={"space-between"}
                // h={{ base: "0", md: "90vh" }}
                minH="calc(100vh - 80px)"
                gap={{ base: 3, md: 0 }}
                p={2}
            >
                <Flex direction={"column"} gap={2}>
                    <LinkButton
                        to={"/"}
                        leftIcon={<LuLayoutDashboard />}
                        text={"Tasks"}
                        onClick={() => onClose()}
                    />
                    {/* <LinkButton
                        to={"/user"}
                        leftIcon={<LuUsers />}
                        text={"User"}
                        onClick={() => onClose()}
                    /> */}
                    {/* <LinkButton
                        to={"/package"}
                        leftIcon={<GrPlan />}
                        text={"Package"}
                        onClick={() => onClose()}
                    /> */}
                </Flex>
                <Button p={4} leftIcon={<BiLogOut />} onClick={handleLogout}>
                    Logout
                </Button>
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, onClose, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 10, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="space-between"
            {...rest}
        >
            <Link to={"/"}>
                <Text
                    fontSize="lg"
                    fontFamily="monospace"
                    fontWeight="bold"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={onClose}
                >
                    Task Manager
                </Text>
            </Link>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
        </Flex>
    );
};
