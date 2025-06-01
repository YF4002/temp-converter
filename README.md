Temp Converter – React Native App with Firebase Authentication
Temp Converter is a mobile app built with React Native and Expo that lets users securely register and log in using email/password or Google Sign-In. The main feature is a simple temperature conversion tool (Celsius ↔ Fahrenheit) wrapped in a smooth, user-friendly interface.

🚀 Features
User Authentication

Email/password registration and login via Firebase Authentication

Google OAuth Sign-In integrated using Expo Auth Session

Navigation

React Navigation stack with Login, Register, and Main App screens

Cross-Platform

Works on both Android and iOS using Expo managed workflow

Error Handling

Real-time validation and alerts for login and registration errors

🛠 Technology Stack
Frontend: React Native, Expo, React Navigation

Authentication: Firebase Authentication (Email/Password + Google OAuth)

OAuth Handling: Expo Auth Session, WebBrowser for redirect management

Backend: Firebase (serverless)

📁 Project Setup
Prerequisites
Node.js and npm/yarn

Expo CLI (npm install -g expo-cli)

Firebase project with Authentication enabled (Email/Password + Google)

Google Cloud Console OAuth client IDs configured

Installation
Clone the repo:

bash
Copy
Edit
git clone https://github.com/yourusername/temp-converter.git
cd temp-converter
Install dependencies:

bash
Copy
Edit
npm install
Update firebaseConfig.js with your Firebase credentials.

Replace Google OAuth client IDs in api/user.js with your own.

Start the app:

bash
Copy
Edit
expo start
Use Expo Go or emulator to run the app on your device.

📐 Architecture
API Layer (api/user.js)

Handles Firebase authentication logic (email/password + Google Sign-In)

Manages authentication errors and token handling

Screens

Login.js: Email login form + Google Sign-In button

Register.js: New user registration with password confirmation

TemperatureApp.js: Main app screen (temperature conversion UI)

Navigation

React Navigation stack managing screen flow

Firebase Configuration

firebaseConfig.js sets up Firebase SDK and exports auth instance

📈 Project Status
✅ Completed Features:

Full email/password registration and login with validation

Google OAuth login integration with token handling

Basic temperature conversion app (main screen placeholder)

Smooth navigation flow between login, register, and main app

Error alerts for common authentication failures

🧪 Testing
Manual testing performed on Android and iOS simulators and physical devices. Authentication flows and error states tested extensively.

