// replyGeneration.ts
import  OpenAI  from 'openai-api';

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const openai = new OpenAI('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');

export const generateReply = async (context: string) => {
  try {
    // Use GPT-3 model to generate a reply based on the provided context
    const response = await openai.complete({
      engine: 'text-davinci-003', // Use the Davinci model
      prompt: context,
      maxTokens: 100 // Limit the output tokens
    });
    return response.data.choices[0].text.trim(); // Extract and return the generated reply
  } catch (error) {
    console.error('Error generating reply with OpenAI:', error);
    throw error;
  }
};
