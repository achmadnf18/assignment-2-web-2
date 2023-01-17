/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMsal } from '@azure/msal-react';
import { Icon } from '@iconify/react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { loginRequest } from 'authConfig';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { loginSocial } from 'store/auth/slice';
import { callMsGraph } from 'utils/graph';

export function SocialAuth() {
  const [searchParams] = useSearchParams();
  const { instance, accounts } = useMsal();
  const dispatch = useDispatch();

  const loginHint = searchParams.get('login_hint');

  useEffect(() => {
    if (loginHint) {
      loginRequest.extraQueryParameters = {
        login_hint: loginHint,
      };
      instance.loginRedirect(loginRequest).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }
  }, [loginHint]);

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((res) => dispatch(loginSocial(res)));
        });
    }
  }, [accounts]);

  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        sx={{
          border: '2px solid #ccc',
          borderRadius: '5px',
          padding: '0.5675rem',
          flex: 1,
        }}
        onClick={() => {
          instance.loginRedirect(loginRequest).catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Icon icon="vscode-icons:file-type-azure" color="#DF3E30" width={33} height={33} />
          <Typography>Azure</Typography>
        </Box>
      </IconButton>
    </Stack>
  );
}
