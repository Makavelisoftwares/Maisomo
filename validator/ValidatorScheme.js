import * as yup from "yup";

export const SignInValidator=yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(4).required()
})

export const SignUp=yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    email:yup.string().email(),
    password:yup.string().min(4)
})