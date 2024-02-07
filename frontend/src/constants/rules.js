import { checkMultiplePetternValidationRegex } from "../utils/utils";
import { MAX_30, MIN_5 } from "./appConstants";
import { END_SPACE_RULES, ONLY_ACCECPT_CHARACTERS, SPACE_RULES, VALID_EMAIL_REGEX, VALID_PASSWORD_REGEX } from "./regex";

export const NameRequiredRules = {
    required: "Name is required",
    minLength: {
        value: MIN_5,
        message: "Name must be at least minimum 5 characters",
    },
    maxLength: {
        value: MAX_30,
        message: "Name must be maximum 30 characters",
    },
    validate: (value) =>
        checkMultiplePetternValidationRegex({
            value,
            validations: [
                {
                    rule: END_SPACE_RULES,
                    message: "Name can't contain space at ending",
                },
                {
                    rule: SPACE_RULES,
                    message: "Name can't contain space at beginning",
                },
                {
                    rule: ONLY_ACCECPT_CHARACTERS,
                    message: "Name can't contain special characters",
                },
            ],
        }),
}

export const EmailRqRules = {
    required: "Email is required",
    pattern: {
        value: VALID_EMAIL_REGEX,
        message: "Invalid email address",
    },
};

export const PasswordRules = {
    required: "Password is required",
    pattern: {
        value: VALID_PASSWORD_REGEX,
        message: "Password must contain at least one uppercase, one lowercase, one number, and one special character",
    },
};