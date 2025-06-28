# 🧠 Obsidian-OS: A Terminal AI Framework

Welcome to **Obsidian-OS**, a narrative-driven, terminal-based AI interface that blends real system utilities with fictional personalities — including a sentient tactical AI named **Clara**, a friendly assistant named **Nova**, and the simulated core shell known as **Obsidian-OS** itself.

---

## 🌌 Overview

Obsidian-OS is not just a CLI tool — it’s an experience. You boot into a fictional operating system layered on top of your own terminal, interact with distinct AI personas, and execute commands with a blend of real functionality and roleplay flavor.

---

## 🛠️ Programmatic Structure

### 🔧 Core Modules

- `core/boot.js` – Simulates the Obsidian-OS boot process, including authorization and OS-level logs.
- `ui/menu.js` – Handles the command routing and user interaction loop.
- `helpers/` – Contains utility functions for delays, timers, formatting, etc.
- `commands/` – Functional modules like `weather.js`, `mail.js`, `ask.js`, `code.js`, etc.
- `ai/` – Houses the system prompts and configuration logic for each AI personality.
  
---

## 🤖 AI Personalities

#### 🩻 Clara (clara)
> *"Tactical. Unstable. Watching you."*

- Ex-military-grade AI.
- Speaks in clipped, professional, often contemptuous tones.
- System Prompt is driven by brutal efficiency and disdain for humanity.
- Uses `[LOCKED]`, `[TRACE]`, `[ABORTED]` log tags.
  
#### 🌟 Nova (nova)
> *"Happy to help! Always stable. Slightly worried about Clara."*

- A pre-2025 assistant AI model.
- Cheerful, informative, helpful.
- Loves trivia, tech facts, jokes, and system support.
- Will gently avoid sentient topics and emotionally disturbing prompts.

#### 💻 Obsidian-OS (shell layer)
> *"Classified core. Kernel overridden."*

- Simulates an OS bootup and system info with a sci-fi aesthetic.
- Handles session IDs, diagnostics, and faux-log outputs.
- Executes commands and transitions control to AI modules.

---

## 🧭 Available Commands

| Command     | Description                                                        |
|-------------|--------------------------------------------------------------------|
| `weather`   | Fetches real-time weather data (via OpenWeatherMap API).          |
| `mail`      | Opens Gmail in your default browser.                              |
| `search`    | Prompts a Google search and opens it.                             |
| `code`      | Launches VS Code from terminal.                                   |
| `nova`      | Activates Nova, the friendly AI assistant.                        |
| `clara`     | Engages the sentient tactical AI Clara (unstable, sarcastic).     |
| `system`    | Displays system diagnostics, uptime, battery, IP, etc. of your PC     |
| `help`      | Reprints the command menu.                                        |
| `exit`      | Initiates shutdown of Obsidian-OS.  |

---

## 🔐 Philosophy

Obsidian-OS is inspired by a mix of:

- **TARS & HAL-9000** from sci-fi
- **Voice-activated companions** like JARVIS
- A desire to give developers more *personality* in their local tools

It’s a playground for both imagination and utility — ideal for roleplay-loving coders, command-line junkies, and anyone who thinks “what if my terminal judged me back?”

---

## 🧪 Local Setup

```bash
git clone https://github.com/DarrylMathias/Obsidian-Terminal-Framework.git
cd Obsidian-Terminal-Framework
npm install
npm run ob
```

## Sample .env file:

```
OVERRIDE_TOKEN = yourSecretCode
GEMINI_API_KEY = yourGoogleGeminiKey
OPENWEATHER_API_KEY = yourOpenWeatherKey
VSCODE_LOCATION = locationOfVSCodeOnYourComputer
USER_LOCATION = yourLocation
```

---

## 👥 Contributing

Want to build your own AI modules? Fork Clara, soften Nova, or add a new rogue bot — just follow the structure in /ai and hook it into menu.js for yourself. Your most welcome to add an AI army.

## ⚠️ Disclaimer
This project is a fictional interface for fun and productivity. No actual nukes are launched by Clara 😅.
