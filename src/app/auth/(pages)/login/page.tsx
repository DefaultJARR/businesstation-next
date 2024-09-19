'use client';

import { useState } from 'react';
import * as styles from './login.styles';
import { PasswordLogin } from './comp-password-login/password-login.component';
import { PasswordlessLogin } from './comp-passwordless-login/passwordless-login.component';

// Restaurant configuration service required
import LoginBGImage from '@/assets/img/background.png';
import LoginBGRight from '@/assets/logo/bs-logo-azul.png';
import { useTheme } from 'styled-components';

enum LoginMethods {
  Password = 'Password',
  Passwordless = 'Passwordless',
}

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState(LoginMethods.Password);
  const theme = useTheme();

  return (
    <styles.StyledLoginPage>
      {/* Background */}
      <styles.LoginBackgroundImage
        src={LoginBGImage}
        className="hidden md:block"
        alt="Login background image"
      />
      <styles.LoginBackgroundGlass />

      <styles.LoginCard>
        {/* Left Side */}
        <styles.LeftSide>
          <styles.LoginTitle color={theme.Primary.Color}>
            ¡Bienvenido!
          </styles.LoginTitle>
          <p>Ingresa tu información de Inicio de Sesión.</p>

          {/* Password */}
          {loginMethod === LoginMethods.Password && (
            <>
              <PasswordLogin color={theme.Primary.Color} />
              <styles.LoginChangeMethod
                color={theme.Primary.Color}
                onClick={() => setLoginMethod(LoginMethods.Passwordless)}
              >
                Ingresa sin contraseña
              </styles.LoginChangeMethod>
            </>
          )}

          {/* Passwordless */}
          {loginMethod === LoginMethods.Passwordless && (
            <>
              <PasswordlessLogin />
              <styles.LoginChangeMethod
                color={theme.Primary.Color}
                onClick={() => setLoginMethod(LoginMethods.Password)}
              >
                Ingresa con contraseña
              </styles.LoginChangeMethod>
            </>
          )}

          <styles.LoginRecoverText>
            Si no puedes ingresar, comunicate con un administrador de tu
            organización.
          </styles.LoginRecoverText>
        </styles.LeftSide>

        {/* Right Side */}
        <styles.RightSide color={theme.Primary.Color}>
          <img src={LoginBGRight.src} alt="Login background image" />
          Business Station
        </styles.RightSide>
      </styles.LoginCard>

      {/* Footer */}
      <styles.LoginFooterMark>
        <a href="https://mkeitez.com" target="_blank">
          Powered by Make IT Easy.
        </a>
      </styles.LoginFooterMark>
    </styles.StyledLoginPage>
  );
}
