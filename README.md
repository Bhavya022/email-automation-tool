# email-automation-tool
# Email Automation Tool

This Email Automation Tool allows users to automate email-related tasks using the Gmail API.

## Features

- **OAuth 2.0 Authorization:** Users can authorize the application to access their Gmail account using OAuth 2.0.
- **Email Task Scheduling:** Users can schedule tasks to be performed on their emails, such as analyzing email content or generating replies.
- **Integration with Gmail API:** The tool integrates with the Gmail API to fetch emails, analyze content, and generate replies.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/email-automation-tool.git
    ```

2. Install dependencies:

    ```bash
    cd email-automation-tool
    npm install
    ```

3. Set up Google OAuth 2.0 credentials:
   - Create a project in the Google Cloud Console.
   - Enable the Gmail API for the project.
   - Set up OAuth consent screen with necessary details.
   - Create OAuth 2.0 client credentials and configure redirect URIs.

4. Create a `.env` file in the project root and add your OAuth 2.0 client credentials:

    ```plaintext
    CLIENT_ID=your_client_id
    CLIENT_SECRET=your_client_secret
    REDIRECT_URI=http://localhost:8000/oauth2callback
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. Access the application in your browser at `http://localhost:8000`.

## Usage

1. Click on the "Authorize with Google" button to authenticate the application with your Gmail account.
2. Grant necessary permissions to the application.
3. Once authenticated, you can schedule email tasks using the provided features.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
