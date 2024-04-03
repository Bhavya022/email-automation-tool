// taskScheduling.ts
import { Queue, Worker, Job } from 'bullmq'; // Import Job from bullmq

import { fetchGmailEmails, fetchOutlookEmails } from './emailFetching';
import { analyzeEmailContent } from './openAIIntegration';
import { generateReply } from './replyGeneration';

const queue = new Queue('emailTasks');

export const scheduleEmailTask = async (taskData: any) => {
  await queue.add('processEmail', taskData);
};

// Create a Worker to process the tasks
const worker = new Worker('emailTasks', async (job: Job<any>) => { // Specify the type of the 'job' parameter
  try {
    const { emailService, accessToken, emailContent } = job.data;

    let emails;
    if (emailService === 'gmail') {
      emails = await fetchGmailEmails(accessToken);
    } else if (emailService === 'outlook') {
      emails = await fetchOutlookEmails(accessToken);
    } else {
      throw new Error('Invalid email service specified');
    }

    // Process each email
    for (const email of emails) {
      const analyzedData = await analyzeEmailContent(emailContent);
      const reply = await generateReply(analyzedData);
      // Send the reply to the sender or perform other actions based on the context
      console.log('Generated reply:', reply);
    }

    return job.data;
  } catch (error) {
    console.error('Error processing email task:', error);
    throw error;
  }
});

// Log worker errors
worker.on('error', (error) => {
  console.error('Worker error:', error);
});

// Log worker completed jobs
worker.on('completed', (job) => {
  console.log('Job completed:', job.data);
});
