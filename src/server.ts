import express from 'express';
const { google } = require('googleapis');
const axios = require('axios');
//import express, { Request, Response } from 'express';
//import { google } from 'googleapis';
//import axios from 'axios';
import { scheduleEmailTask } from './taskScheduling';

const app = express();

const CLIENT_ID = '472086118620-st8oafj9u7giirnv7na6q5bs7eg3p688.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:8000/oauth2callback';
const SCOPES = ['https://mail.google.com/'];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

app.get('/auth/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code as string;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    const accessToken = tokens.access_token;

    // Example task data (replace with actual data)
    const taskData = {
      emailService: 'gmail',
      accessToken: accessToken,
      emailContent: 'Sample email content to process',
    };

    // Schedule email task
    await scheduleEmailTask(taskData);

    res.status(200).send('Email task scheduled successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error occurred during authentication');
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
