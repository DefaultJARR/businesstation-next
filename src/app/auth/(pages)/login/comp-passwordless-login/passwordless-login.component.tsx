import { useState } from 'react';
import * as styles from './passwordless-login.styles';
import { RequestAuthCodeForm } from './request-auth-code-form/request-auth-code-form.component';
import { VerifyAuthCodeForm } from './verify-auth-code-form/verify-auth-code-form.component';
import { useRouter } from 'next/navigation';
import { useTheme } from 'styled-components';

interface PropTypes {
  color?: string;
  color2?: string;
}

export const PasswordlessLogin: React.FC<PropTypes> = ({ color, color2 }) => {
  const router = useRouter();
  const theme = useTheme();
  const [userKey, setUserKey] = useState<string>('');
  const [codeRequested, setCodeRequested] = useState<boolean>(false);
  const [codeVerified, setCodeVerified] = useState<boolean>(false);

  const onCodeRequestedHandler = (userKey: string) => {
    setUserKey(userKey);
    setCodeRequested(true);
  };

  const onCancelHandler = () => setCodeRequested(false);

  const onCodeVerifiedHandler = () => {
    setCodeVerified(true);
    router.push('/dashboard');
  };

  return (
    <styles.StyledPasswordlessLogin>
      {!codeRequested && !codeVerified && (
        <RequestAuthCodeForm
          color={color || theme.Primary.Color}
          userKey={userKey}
          onCodeRequested={onCodeRequestedHandler}
        />
      )}

      {codeRequested && !codeVerified && (
        <VerifyAuthCodeForm
          color={color || theme.Primary.Color}
          color2={color2 || theme.Secondary.Color}
          userKey={userKey}
          onCancel={onCancelHandler}
          onCodeVerified={onCodeVerifiedHandler}
        />
      )}

      {codeRequested && codeVerified && 'Ingresando...'}
    </styles.StyledPasswordlessLogin>
  );
};
