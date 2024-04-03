// gmailAuth.ts
import { google } from 'googleapis';

const CLIENT_ID = '472086118620-kvclvv71jgaf3ah2otmhlq52tjdrh0go.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:8000/oauth2callback';

// Create OAuth2 client instance
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

/**
 * Get the authorization URL for OAuth flow
 * @returns {string} Authorization URL
 */
export const getGmailAuthUrl = () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://mail.google.com/']
  });
};

/**
 * Exchange authorization code for access token
 * @param {string} authorizationCode Authorization code obtained from OAuth flow
 * @returns {Promise<string>} Access token
 */
export const getGmailAccessToken = async (authorizationCode: string) => {
  try {
    const { tokens } = await oauth2Client.getToken(authorizationCode);
    return tokens.access_token;
  } catch (error) {
    console.error('Error getting Gmail access token:', error);
    throw error;
  }
};
