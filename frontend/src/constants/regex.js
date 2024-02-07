export const SPACE_RULES = /^[^ ]/;
export const END_SPACE_RULES = /^(?!.*\s$).*$/;
export const ONLY_ACCECPT_CHARACTERS = /^[A-Za-z\s]*$/;
export const VALID_EMAIL_REGEX =
    /^[a-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
export const VALID_PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;