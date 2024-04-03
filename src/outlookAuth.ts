// outlookAuth.ts
import { ConfidentialClientApplication } from '@azure/msal-node';

const CLIENT_ID = 'c72551ea-278e-4a56-8a81-c398b7b80bdc';
const CLIENT_SECRET = '_lO8Q~KLIzpk3zOEx6e6Y0F0HPhiF7Rkf8JoOc64'; 

// Create MSAL client instance
const msalClient = new ConfidentialClientApplication({
  auth: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  }
});

/**
 * Get access token for Outlook
 * @returns {Promise<string>} Access token
 */
export const getOutlookAccessToken = async () => {
  try {
    const authResult = await msalClient.acquireTokenByClientCredential({
      scopes: ['https://outlook.office.com/mail.read']
    });
    return authResult.accessToken;
  } catch (error) {
    console.error('Error getting Outlook access token:', error);
    throw error;
  }
};
