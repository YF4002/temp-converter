# Temp Converter – React Native App with Firebase Authentication

**Temp Converter** is a React Native mobile application built using Expo that allows users to register and sign in securely via Firebase Authentication. It supports both email/password and Google OAuth login methods. The app features a simple temperature conversion tool (Celsius ↔ Fahrenheit) wrapped in a smooth, user-friendly interface.

---

## 🚀 Project Highlights

- 🔐 **Secure User Authentication**  
  Supports email/password registration and login, as well as Google Sign-In via OAuth.

- 📱 **Cross-Platform Mobile App**  
  Built with Expo to run seamlessly on Android and iOS devices.

- 🔄 **Smooth Navigation Flow**  
  Uses React Navigation to switch between Login, Register, and Main App screens.

- ⚠️ **Robust Error Handling**  
  Provides real-time feedback and validation for authentication errors.

---

## 🛠 Tech Stack

| Technology           | Purpose                              |
| -------------------- | ---------------------------------- |
| **React Native**     | Framework for building mobile apps  |
| **Expo**             | Development environment and tooling |
| **Firebase Auth**    | User authentication backend         |
| **Expo Auth Session**| OAuth integration for Google Sign-In|
| **React Navigation** | Screen navigation and routing       |

---

## 💡 Features

- 🔑 **Email/Password Authentication**  
  Users can register and sign in securely with email and password.

- 🟢 **Google Sign-In Integration**  
  Seamless login using Google accounts, with OAuth handled via Expo Auth Session.

- 🧭 **Navigation Stack**  
  Intuitive navigation between Login, Registration, and Main App screens.

- 🚨 **Error and Input Validation**  
  Alerts for invalid credentials, password mismatches, and authentication failures.

- 🌡️ **Temperature Converter UI**  
  Placeholder for main functionality converting temperatures between Celsius and Fahrenheit.

---

## 📦 Getting Started

This project uses the Expo managed workflow for React Native.

### ✅ Prerequisites

- Node.js (v14+ recommended)  
- Expo CLI (`npm install -g expo-cli`)  
- Firebase project with Authentication enabled (Email/Password & Google)  
- Google OAuth Client IDs (Web and Android) configured in Firebase and Google Cloud Console  

### 🧪 Run Locally

```bash
git clone https://github.com/yourusername/temp-converter.git
cd temp-converter
npm install
expo start
