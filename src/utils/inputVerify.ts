export const validatePassword = (value: string): boolean => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,20}$/;
    return regex.test(value);
};

export const validateId = (value: string): boolean => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(value);
};
