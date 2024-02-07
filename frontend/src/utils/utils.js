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