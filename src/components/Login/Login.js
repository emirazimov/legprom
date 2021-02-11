import React, { useCallback, useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
//
import TextField from '@material-ui/core/TextField';
import './login.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import app from '../../base';
import { AuthContext } from '../../auth';
import firebase from '../../Firebase';

const Login = ({ history }) => {
  // const dispatch = useDispatch()
  // const error = useSelector((state) => state.data.login.failed)
  // const loading = useSelector((state) => state.data.login.loading)
  // const validationSchema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .required('Обязательное поле')
  //     .email('Введите верный формат email'),
  //   password: yup
  //     .string()
  //     .required('Обязательное поле')
  //     .min(9, 'Минимальное количество букв 9'),
  // });

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/admin');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  // const [inputValueEmail, setInputValueEmail] = React.useState("")
  // const [inputValuePassword, setInputValuePassword] = React.useState("")

  // const handleChangeEmail = (e) => {
  // 	setInputValueEmail({ inputValueEmail: e.currentTarget.value })
  // }
  // const handleChangePassword = (e) => {
  // 	setInputValuePassword({ inputValuePassword: e.currentTarget.value })
  // }
  // export const onSubmit = () => {
  // 	return (
  // 		inputValueEmail, inputValuePassword
  // 	)
  // }
  return (
    <div className="login-body">
      <Card className="login-container">
        <Box>
          <h1 className="login-title">Войти</h1>
        </Box>
        <form onSubmit={handleLogin}>
          <div>
            <Box pt={2} pb={2}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Пароль"
                name="password"
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box pb={2}>
              <Button variant="contained" color="primary" type="submit">
                Войти
              </Button>
            </Box>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default withRouter(Login);
