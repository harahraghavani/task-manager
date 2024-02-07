import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormInput from "../commmon/FormInput";
import FormSelect from "../commmon/FormSelect";
import CommonButton from "../commmon/CommonButton";

const TaskDrawer = ({ isOpen, onClose, btnRef }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const optionsPriority = [
        {
            label: "Low",
            value: "low",
        },
        {
            label: "Medium",
            value: "medium",
        },
        {
            label: "High",
            value: "high",
        },
    ];

    const onTaskSubmit = (data) => {
        if (data) {
            console.log(data);
            onClose();
        }
    };

    const handleCloseDrawer = () => {
        reset();
        onClose();
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={handleCloseDrawer}
            finalFocusRef={btnRef}
            size="md"
        >
            <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <form onSubmit={handleSubmit(onTaskSubmit)}>
                <DrawerContent p={5}>
                    <DrawerCloseButton />
                    <DrawerHeader>Add New Task</DrawerHeader>
                    <DrawerBody>
                        <FormInput
                            label="Task Name"
                            id="taskName"
                            name="taskName"
                            type="text"
                            register={register}
                            errors={errors}
                            rules={{
                                required: "Task Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Task Name must be at least 3 characters",
                                },
                            }}
                        />
                        <Box pt={4}>
                            <FormSelect
                                label="Priority"
                                options={optionsPriority}
                                id={"priority"}
                                name={"priority"}
                                register={register}
                                errors={errors}
                                placeholder={"Select Priority"}
                                rules={{
                                    required: "Priority is required",
                                }}
                            />
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Box mr={3}>
                            <CommonButton
                                variant="outline"
                                onClick={handleCloseDrawer}
                                btnText={"Cancel"}
                            />
                        </Box>
                        <CommonButton btnText="Save" type={"submit"} />
                    </DrawerFooter>
                </DrawerContent>
            </form>
        </Drawer>
    );
};

export default TaskDrawer;
