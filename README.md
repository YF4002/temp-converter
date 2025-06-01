🌡️ Temp Converter App with Firebase Authentication
A React Native mobile app that provides a simple temperature conversion tool with secure authentication features. This project uses Firebase for email/password and Google OAuth login, and is built with Expo and React Navigation.

🚀 Features
🔐 Firebase Authentication

Email/password registration and login

Google Sign-In via Expo Auth Session (OAuth)

📱 React Native UI

Clean, responsive interface

Navigation stack with Login, Register, and Main App screens

🌐 Cross-platform Support

Works seamlessly on both Android and iOS (Expo-managed workflow)

📂 Project Structure
bash
Copy
Edit
.
├── api/
│   └── user.js         # Firebase authentication logic
├── screens/
│   ├── Login.js        # Login screen with email and Google sign-in
│   ├── Register.js     # User registration screen
│   └── TemperatureApp.js # Main app screen (not shown in this snippet)
├── firebaseConfig.js   # Firebase initialization and config
├── App.js              # Navigation setup
└── ...
🔧 Tech Stack
React Native (Expo)

Firebase Authentication

Google OAuth via Expo Auth Session

React Navigation (Native Stack)

📝 Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/temp-converter-app.git
cd temp-converter-app
Install dependencies

bash
Copy
Edit
npm install
Start Expo server

bash
Copy
Edit
npx expo start
Firebase Configuration

Make sure you have a Firebase project set up. Update firebaseConfig.js with your Firebase credentials.

🔐 Authentication Details
Uses Firebase SDK for authentication

Google Sign-In handled using expo-auth-session

Automatically redirects and handles tokens using WebBrowser.maybeCompleteAuthSession()

📱 Screens Overview
🔑 Login Screen
Email/password form

Google Sign-In button

Link to Register

📝 Register Screen
Email/password form with confirmation

Validation and error handling

🌡️ Temperature App
Placeholder for your main app logic (e.g., convert temperatures between Celsius and Fahrenheit)

⚠️ Notes
Replace Google OAuth client IDs in user.js with your own from Google Cloud Console.

For production, disable useProxy: true in makeRedirectUri() and set proper redirect URIs in Firebase and Google developer console.
