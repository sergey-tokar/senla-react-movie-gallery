import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {tryRegister} from "../store/actions/authorization-actions";
import {Redirect} from "react-router-dom";

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const {isAuthorized} = useSelector(state => state.authorization);
    const [registrationError, changeRegistrationError] = useState(false);
    const [isSubmited, changeSubmited] = useState(false);

    useEffect(() => {
        if (isAuthorized && isSubmited) {
            changeRegistrationError(false);
        } else changeRegistrationError(true);
    }, [isAuthorized, isSubmited]);

    const formik = useFormik({
        initialValues: {
            login: '',
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirm:'',
        },
        validationSchema: Yup.object({
            login: Yup.string().min(4, 'Минимальная длина логина - 4 символа').required('Введите пароль (обязательно)'),
            name: Yup.string().min(6, 'Минимальная длина имени - 6 символов').required('Введите имя (обязательно)'),
            surname: Yup.string().min(6, 'Минимальная длина фамилии - 6 символов').required('Введите фамилию (обязательно)'),
            email: Yup.string().email('Ошибка в email').required('Введите email (обязательно)'),
            password: Yup.string().min(6, 'Минимальная длина пароля - 6 символов').required('Введите пароль (обязательно)'),
            passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Введите пароль (обязательно)'),
        }),

        onSubmit: registerData => {
            dispatch(tryRegister(registerData));
            changeSubmited(true);
        },
    });

    if (isAuthorized) {
        return (
            <Redirect to="/"/>
        );
    }

    return (
            <form className="form" onSubmit={formik.handleSubmit}>
                <label className="form__label" htmlFor="login">Логин</label>
                <input
                    className="form__item"
                    id="login"
                    name="login"
                    type="login"
                    placeholder="login"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                />
                {formik.touched.login && formik.errors.login ? (
                    <div className="form-error">{formik.errors.password}</div>
                ) : null}

                <label className="form__label" htmlFor="name">Имя</label>
                <input
                    className="form__item"
                    id="name"
                    name="name"
                    type="name"
                    placeholder="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="form-error">{formik.errors.name}</div>
                ) : null}

                <label className="form__label" htmlFor="surname">Фамилия</label>
                <input
                    className="form__item"
                    id="surname"
                    name="surname"
                    type="surname"
                    placeholder="surname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                />
                {formik.touched.surname && formik.errors.surname ? (
                    <div className="form-error">{formik.errors.surname}</div>
                ) : null}

                <label className="form__label" htmlFor="email">Email</label>
                <input
                    className="form__item"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="form-error">{formik.errors.email}</div>
                ) : null}

                <label className="form__label" htmlFor="password">Пароль</label>
                <input
                    className="form__item"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="form-error">{formik.errors.password}</div>
                ) : null}

                <label className="form__label" htmlFor="passwordConfirm">Подтверждение пароля (введите еще раз Ваш пароль)</label>
                <input
                    className="form__item"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                />
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                    <div className="form-error">{formik.errors.passwordConfirm}</div>
                ) : null}

                <button className="form__button basic-button" type="submit">Registration</button>
                {registrationError && isSubmited ? (
                    <div className="login-form-error form-error">Пользователь с таким email уже существует</div>
                ) : null}
            </form>
    );
}
