// types.ts
export interface FormData {
    [key: string]: any; // Define the structure of your form data here if known
    name: string;
    email: string;
    password: string;
}
export interface IFormInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface OnSubmitProps {
    formData: FormData;
    e: React.FormEvent<HTMLFormElement>;
    newUser: boolean;
    creator: string;
    loginator: string;
    handleClickOpen: () => void;
    setNewUser: (value: boolean) => void;
    setMsg: (msg: string) => void;
}

