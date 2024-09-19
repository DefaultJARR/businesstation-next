import { useState } from "react";
import * as styles from "./request-auth-code-form.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNotifications } from "@/notifications/use-notifications.hook";
import { EVAAuthAdapter } from "@/app/auth/infra/eva-auth.adapter";
import TextInputBase, { TextInputStyles } from "@/components/text-input-base";
import { SpinnerLoader } from "@/components/spinner-loader";
import { StyledButtonBase } from "@/components/button-base.styles";

type LoginInputs = {
  user: string;
};

interface PropTypes {
  color: string;
  userKey: string;
  onCodeRequested: (user: string) => void;
}

export const RequestAuthCodeForm: React.FC<PropTypes> = ({
  color = "black",
  userKey,
  onCodeRequested,
}) => {
  const [notify] = useNotifications();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ defaultValues: { user: userKey } });

  const onReuestCode: SubmitHandler<LoginInputs> = async (
    data: LoginInputs
  ) => {
    setLoading(true);
    try {
      const codeSent = await new EVAAuthAdapter().requestCode(data.user);
      if (codeSent) {
        const message = "Código enviado.";
        console.log(message);
        notify([{ type: "success", message }]);
      } else {
        const message = "Error al envíar el código, intentalo nuevamente.";
        console.log(message);
        notify([{ type: "error", message }]);
      }
      onCodeRequested(data.user);
    } catch (error) {
      const message =
        "Error al envíar el código, hay un problema con nuestros servicios.";
      console.log(message, error);
      notify([{ type: "success", message }]);
    }
    setLoading(false);
  };

  return (
    <styles.StyledRequestAuthCodeForm onSubmit={handleSubmit(onReuestCode)}>
      <styles.PasslessGuideText color={color}>
        Recibiras un código de acceso.
      </styles.PasslessGuideText>
      <TextInputBase
        name="user"
        register={register}
        error={errors.user?.message}
        validators={{ required: "Campo requerido" }}
        placeholder="Email / Teléfono"
        styletype={TextInputStyles.outline}
        color={color}
        disabled={loading}
      />

      {loading ? (
        <styles.LoaderContainer>
          <SpinnerLoader size={30} lineWidth={5} color={color} />
        </styles.LoaderContainer>
      ) : (
        <StyledButtonBase type="submit" color={color} width="100%">
          Solicitar código
        </StyledButtonBase>
      )}
    </styles.StyledRequestAuthCodeForm>
  );
};
