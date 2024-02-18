import { RESPONSE_OK } from "../constants/appConstants";

export const checkMultiplePetternValidationRegex = ({ value, validations }) => {
    if (value) {
        for (const validation of validations) {
            if (!validation.rule.test(value)) {
                return validation.message;
            }
        }
        return true;
    };
}


export const convertObjToQueryString = (obj) => {
    return "?" + new URLSearchParams(obj).toString();
};

export const checkSuccessResponse = (res) => {
    return res.status === RESPONSE_OK;
};