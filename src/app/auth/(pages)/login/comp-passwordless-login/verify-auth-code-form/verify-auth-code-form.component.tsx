"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./verify-auth-code-form.styles";
import { useState } from "react";
import { useNotifications } from "@/notifications/use-notifications.hook";
import { EVAAuthAdapter } from "@/app/auth/infra/eva-auth.adapter";
import TextInputBase, { TextInputStyles } from "@/components/text-input-base";
import { SpinnerLoader } from "@/components/spinner-loader";
import { StyledButtonBase } from "@/components/button-base.styles";
import { useRouter } from "next/navigation";

type FormInputs = {
  code: string;
};

interface PropTypes {
  color: string;
  color2: string;
  userKey: string;
  onCancel: () => void;
  onCodeVerified: () => void;
}

export const VerifyAuthCodeForm: React.FC<PropTypes> = ({
  color = "black",
  color2,
  onCancel,
  onCodeVerified,
}) => {
  const router = useRouter();
  const [notify] = useNotifications();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<FormInputs>();

  // Handles the allowed inputs to the user
  const inputInterceptor = (event: any) => {
    event.target.value = event.target.value.replace(/\D/g, ""); // Allow just Numbers
    event.target.value = event.target.value.slice(0, 4); // Limit to a maximum of 4 characters
  };

  const onVerifyCode: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    setLoading(true);
    try {
      const codeVerified = await new EVAAuthAdapter().verifyCode(data.code);

      if (codeVerified) {
        const message = "Código válido, ingresando.";
        console.log(message);
        notify([{ type: "success", message }]);
        router.push("/dashboard/chats");
      } else {
        const message = "Código inválido, intentalo de nuevo.";
        console.log(message);
        notify([{ type: "error", message }]);
      }
      onCodeVerified();
    } catch (error) {
      const message =
        "Error al verificar el código, hay un problema con nuestros servicios.";
      console.log(message, error);
      notify([{ type: "error", message }]);
    }
    setLoading(false);
  };

  return (
    <styles.StyledVerifyAuthCodeForm onSubmit={handleSubmit(onVerifyCode)}>
      <styles.PasslessGuideText color={color}>
        Ingresa el código.
      </styles.PasslessGuideText>
      <TextInputBase
        name="code"
        register={register}
        error={formState.errors.code?.message}
        validators={{
          required: "Campo requerido",
          minLength: { value: 4, message: "El código debe ser 4 dígitos" },
        }}
        placeholder="Código: ej:1234"
        styletype={TextInputStyles.outline}
        color={color}
        onInput={inputInterceptor}
        disabled={loading}
      />

      {loading ? (
        <styles.LoaderContainer>
          <SpinnerLoader size={30} lineWidth={5} color={color} />
        </styles.LoaderContainer>
      ) : (
        <styles.ButtonsContainer>
          <StyledButtonBase
            type="button"
            color={color2}
            width="100%"
            onClick={() => onCancel()}
          >
            Volver
          </StyledButtonBase>
          <StyledButtonBase type="submit" color={color} width="100%">
            Verificar código
          </StyledButtonBase>
        </styles.ButtonsContainer>
      )}
    </styles.StyledVerifyAuthCodeForm>
  );
};
