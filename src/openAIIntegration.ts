// openAIIntegration.ts
import OpenAI from 'openai-api';

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const openai = new OpenAI('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');

// export const analyzeEmailContent = async (emailContent: string) => {
//   try {
//     // Use OpenAI API to analyze email content and return contextual information
//     const analysisResult = await openai.analyze(emailContent);
//     return analysisResult;
//   } catch (error) {
//     console.error('Error analyzing email content with OpenAI:', error);
//     throw error;
//   }
// };

export const analyzeEmailContent = async (emailContent: string) => {
    try {
      // Use GPT-3 model to generate contextual information based on the email content
      const response = await openai.complete({
        engine: 'text-davinci-003', // Use the Davinci model
        prompt: emailContent,
        maxTokens: 50 // Limit the output tokens
      });
      return response.data.choices[0].text.trim(); // Extract and return the generated contextual information
    } catch (error) {
      console.error('Error analyzing email content with OpenAI:', error);
      throw error;
    }
  };