// index.ts
import { scheduleEmailTask } from './taskScheduling';

// Example task data (replace with actual data)
const taskData = {
  emailService: 'gmail',
  accessToken: 'YOUR_GMAIL_ACCESS_TOKEN',
  emailContent: 'Sample email content to process'
};

// Schedule email task
scheduleEmailTask(taskData)
  .then(() => {
    console.log('Email task scheduled successfully');
  })
  .catch((error) => {
    console.error('Error scheduling email task:', error);
  });
