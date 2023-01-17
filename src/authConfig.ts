/* eslint-disable no-console */
import { Configuration, LogLevel, PublicClientApplication } from '@azure/msal-browser';

// Msal Configurations
const config: Configuration = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID || '',
    redirectUri: 'http://localhost:4000/login',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
          default:
        }
      },
    },
  },
};

// Authentication Parameters
export const loginRequest = {
  scopes: ['User.Read'],
  extraQueryParameters: {},
};

export const authConfig = new PublicClientApplication(config);
