"use client";

import React, { useState } from "react";
import * as styles from "./password-login.styles";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserModel } from "../../../core/models/user.model";
import { EVAAuthAdapter } from "../../../infra/eva-auth.adapter";
import { useNotifications } from "@/notifications/use-notifications.hook";
import TextInputBase, { TextInputStyles } from "@/components/text-input-base";
import { SpinnerLoader } from "@/components/spinner-loader";

type LoginInputs = {
  userKey: string;
  email: string;
  password: string;
};

interface PropTypes {
  color: string;
}

export const PasswordLogin: React.FC<PropTypes> = ({ color = "black" }) => {
  const router = useRouter();
  const [notify] = useNotifications();

  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onPasswordLogin: SubmitHandler<LoginInputs> = async (
    data: LoginInputs
  ) => {
    setLoading(true);

    try {
      const userLogin: UserModel = {
        userKey: data.userKey,
        password: data.password,
      };
      const login = await new EVAAuthAdapter().login(userLogin);

      if (login) {
        const message = "Inicio de sesión exitoso.";
        console.log(message);
        notify([{ type: "success", message: message }]);
        router.push("/dashboard/chats");
      } else {
        const message = "Error al iniciar sesion, intentalo nuevamente.";
        console.log(message);
        notify([{ type: "error", message: message }]);
      }
    } catch (error) {
      const message =
        "Error al iniciar sesion, hay un problema con nuestros servicios.";
      console.log(message, error);
      notify([{ type: "error", message: message }]);
    }

    setLoading(false);
  };

  return (
    <styles.LoginForm onSubmit={handleSubmit(onPasswordLogin)}>
      <TextInputBase
        name="userKey"
        register={register}
        error={errors.userKey?.message}
        validators={{ required: "Campo requerido" }}
        placeholder="Nombre:"
        styletype={TextInputStyles.outline}
        disabled={loading}
      />
      <TextInputBase
        name="email"
        register={register}
        error={errors.email?.message}
        validators={{ required: "Campo requerido" }}
        placeholder="Correo:"
        styletype={TextInputStyles.outline}
        disabled={loading}
      />
      <TextInputBase
        name="password"
        register={register}
        error={errors.password?.message}
        validators={{ required: "Campo requerido" }}
        placeholder="Contraseña:"
        styletype={TextInputStyles.outline}
        type="password"
        disabled={loading}
      />

      {loading ? (
        <styles.LoaderContainer>
          <SpinnerLoader size={30} lineWidth={5} color={color} />
        </styles.LoaderContainer>
      ) : (
        <styles.LoginSubmitBtn type="submit" color={color}>
          Ingresar
        </styles.LoginSubmitBtn>
      )}
    </styles.LoginForm>
  );
};
