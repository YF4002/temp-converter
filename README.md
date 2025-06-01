Temp Converter – React Native App with Firebase Authentication
Temp Converter is a React Native mobile application built using Expo that allows users to register and sign in securely via Firebase Authentication. It supports both email/password and Google OAuth login methods. The app features a simple temperature conversion tool (Celsius ↔ Fahrenheit) wrapped in a smooth, user-friendly interface.

🚀 Project Highlights
🔐 Secure User Authentication
Supports email/password registration and login, as well as Google Sign-In via OAuth.

📱 Cross-Platform Mobile App
Built with Expo to run seamlessly on Android and iOS devices.

🔄 Smooth Navigation Flow
Uses React Navigation to switch between Login, Register, and Main App screens.

⚠️ Robust Error Handling
Provides real-time feedback and validation for authentication errors.

🛠 Tech Stack
Technology	Purpose
React Native	Mobile app UI
Expo	Development and build environment
Firebase Auth	User authentication backend
Expo Auth Session	Google OAuth integration
React Navigation	Screen navigation

💡 Features
🔑 Email/Password Authentication
Users can register and sign in securely with email and password.

🟢 Google Sign-In Integration
Seamless login using Google accounts, with OAuth handled via Expo Auth Session.

🧭 Navigation Stack
Intuitive navigation between Login, Registration, and Main App screens.

🚨 Error and Input Validation
Alerts for invalid credentials, password mismatches, and authentication failures.

🌡️ Temperature Converter UI
Placeholder for main functionality converting temperatures between Celsius and Fahrenheit.

📦 Getting Started
This project uses the Expo managed workflow for React Native.

✅ Prerequisites
Node.js (v14+ recommended)

Expo CLI (npm install -g expo-cli)

Firebase project with Authentication enabled (Email/Password & Google)

Google OAuth Client IDs (Web and Android) configured in Firebase and Google Cloud Console

🧪 Run Locally
bash
Copy
Edit
git clone https://github.com/yourusername/temp-converter.git
cd temp-converter
npm install
expo start
Open the app with Expo Go on your device or emulator.

🔧 Configuration
Update firebaseConfig.js with your Firebase credentials.

Replace Google OAuth client IDs in api/user.js with your own.

✨ Usage Walkthrough
Login Screen
Enter email and password or tap “Sign in with Google” to authenticate.

Register Screen
New users create an account by entering email, password, and confirming password.

Main App Screen
Access the temperature conversion tool upon successful login.

Authentication Flow
Smooth redirection between screens with error handling and user feedback.

🌐 Deployment
Can be published as a standalone app via Expo’s build services or deployed with services like Expo Application Services (EAS) for production-ready Android and iOS apps.

📘 Learn More
React Native Docs

Expo Docs

Firebase Authentication

Expo Auth Session

React Navigation

