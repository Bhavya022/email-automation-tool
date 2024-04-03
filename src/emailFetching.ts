// emailFetching.ts
import { google } from 'googleapis';
import axios from 'axios';

export const fetchGmailEmails = async (accessToken: string) => {
  try {
    const gmail = google.gmail({ version: 'v1', auth: accessToken });
    const res = await gmail.users.messages.list({ userId: 'me' });
    return res.data.messages;
  } catch (error) {
    console.error('Error fetching Gmail emails:', error);
    throw error;
  }
};

export const fetchOutlookEmails = async (accessToken: string) => {
  try {
    const response = await axios.get('https://graph.microsoft.com/v1.0/me/messages', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data.value;
  } catch (error) {
    console.error('Error fetching Outlook emails:', error);
    throw error;
  }
};
