# Chatbot React

This is a simple Chatbot application built with React and Vite. It simulates a chat interface where users can send messages and receive mocked responses.

## Purpose

The purpose of this project is to demonstrate a basic chat UI implementation using React components. It includes features like:
- Rendering chat bubbles for both user and system messages.
- Handling user input.
- Managing chat state.
- Simulating a backend response (mocked).

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code.
  - `components/`: Contains React components for the UI.
    - `ChatRoom/`: The main container for the chat interface.
    - `Chats/`: Displays the list of chat messages.
    - `ChatBubbleLeft/`: Displays incoming messages.
    - `ChatBubbleRight/`: Displays outgoing messages.
    - `Inputs/`: The input area for typing messages.
  - `chats/`: Contains initial chat data (`chats.json`).
  - `App.jsx`: The main application component.
  - `main.jsx`: The entry point.

## Setup and Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd chatbot-react
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed.
    ```bash
    npm install
    ```

## Usage

To run the application:

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open in browser:**
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

3.  **Interact:**
    - Type a message in the input box.
    - Press Enter or click the send button to send the message.
    - Observe the chat history updating.

## Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` folder with the optimized assets.

## Previewing the Build

To preview the production build locally:

```bash
npm run preview
```
