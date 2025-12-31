
# WordHack 🔓💻

**WordHack** is a high-stakes, cyberpunk-themed word puzzle game where you play as a hacker breaching secure systems. Decrypt passwords, defeat security protocols, and avoid detection before the timer runs out.

![WordHack Banner](public/scaffold-desktop.png)

## 🎮 Gameplay

Your objective is to guess the hidden tech-related word before your time runs out or your lives reach zero.

### Core Mechanics
*   **Decrypt:** Guess letters to reveal the password (Hangman style).
*   **Lives:** You have limited attempts (default 6). Wrong guesses deplete lives.
*   **Timer:** Each level has a countdown. If it hits 0, the system locks you out.
*   **Boss Battles:** Every 5 levels, face a multi-layered security boss that requires solving 3 words in sequence.

### Game Modes
*   **Normal:** The standard campaign. 10 levels of increasing difficulty.
*   **Daily Hack:** A unique seed generated daily. Compete for the best score on the same words as everyone else.
*   **Sudden Death:** 1 Life. Double Points. One mistake and it's game over.
*   **Hardcore:** Letters are hidden on the keyboard. Rely on memory and instinct.
*   **Zen Mode:** No timer. Relax and hack at your own pace.
*   **Time Attack:** Hack as many words as possible in 60 seconds.

### Power-Ups & Tools
Use your credits and score to utilize hacking tools:
*   **Hint:** Reveals a clue about the word.
*   **Hack (Mini-game):** A timing-based mini-game to get a free hint.
*   **Reveal:** Instantly reveals a random letter in the password.
*   **Freeze:** Pauses the timer temporarily.
*   **Double:** Activates a 2x score multiplier for a short duration.
*   **Skip:** Bypasses the current level (costs score).

### Progression
*   **Shop:** Spend credits earned from hacks to buy permanent upgrades (Extra Lives, Cheaper Hints, Longer Freeze).
*   **Prestige:** Reset your upgrades to gain a permanent score multiplier and rank up.
*   **Achievements:** Unlock trophies for specific feats (e.g., Speed Demon, Perfect Hack).
*   **Stats:** Track your high scores, total games played, and words hacked.

## 🛠️ Technologies Used

This project is built using the **Solana dApp Scaffold Next** and utilizes:

*   **Framework:** Next.js & React
*   **Styling:** Tailwind CSS & DaisyUI
*   **State Management:** Zustand
*   **Animations:** CSS Keyframes & Canvas API (Matrix rain, particles)

## 🚀 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Play:**
    Open http://localhost:3000 in your browser.

## 📦 Key Dependencies

```bash
next: ^13.1.5
react: ^18.2.0
tailwindcss: ^3.2.4
zustand: ^3.6.9
```

## Build and Run

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Features

Each Scaffold will contain at least the following features:

```
Wallet Integration with Auto Connec / Refresh

State Management

Components: One or more components demonstrating state management

Web3 Js: Examples of one or more uses of web3 js including a transaction with a connection provider

Sample navigation and page changing to demonstate state

Clean Simple Styling 

Notifications (optional): Example of using a notification system

```

A Solana Components Repo will be released in the near future to house a common components library.


### Structure

The scaffold project structure may vary based on the front end framework being utilized. The below is an example structure for the Next js Scaffold.
 
```
├── public : publically hosted files
├── src : primary code folders and files 
│   ├── components : should house anything considered a resuable UI component
│   ├── contexts` : any context considered reusable and useuful to many compoennts that can be passed down through a component tree
│   ├── hooks` : any functions that let you 'hook' into react state or lifecycle features from function components
│   ├── models` : any data structure that may be reused throughout the project
│   ├── pages` : the pages that host meta data and the intended `View` for the page
│   ├── stores` : stores used in state management
│   ├── styles` : contain any global and reusable styles
│   ├── utils` : any other functionality considered reusable code that can be referenced
│   ├── views` : contains the actual views of the project that include the main content and components within
style, package, configuration, and other project files

```

