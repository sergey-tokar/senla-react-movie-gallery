import React, {useEffect, useState} from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {tryLogIn} from '../store/actions/authorization-actions';
import {Link, Redirect} from "react-router-dom";

export default function LogInForm() {
    const dispatch = useDispatch();
    const {isAuthorized} = useSelector(state => state.authorization);
    const [loginError, changeLoginError] = useState(false);
    const [isSubmited, changeSubmited] = useState(false);

    useEffect(() => {
        if (isAuthorized && isSubmited) {
            changeLoginError(false);
        } else changeLoginError(true);
    }, [isAuthorized, isSubmited]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Ошибка в email').required('Введите email (обязательно)'),
            password: Yup.string().min(6, 'Минимальная длина пароля - 6 символов').required('Введите пароль (обязательно)'),
        }),
        onSubmit: loginData => {
            dispatch(tryLogIn(loginData));
            changeSubmited(true);
        },
    });

    if (isAuthorized) {
        return (
            <Redirect to="/"/>
        );
    }

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
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

                <button className="form__button basic-button" type="submit">LogIn</button>
                {loginError && isSubmited ? (
                    <div className="login-form-error form-error">Пользователь с такими данными не найден</div>
                ) : null}
            </form>
            <Link to={"/registration"} className="registration__button sign-in-button basic-button">Registration</Link>
        </div>
    );
}
