# Proactively App
A health score tracker app prototype built with React Native.

## Tech Stack
- TypeScript
- React Native
- Nativewind
- Expo Prebuild
- Firebase Cloud Messaging
- React Native AsyncStorage
- [React Native Bootspalsh](https://github.com/zoontek/react-native-bootsplash)
- [React Native Bottomsheet](https://github.com/gorhom/react-native-bottom-sheet)


## Setup
- Clone the repo
`git clone https://github.com/AzeemIdrisi/Proactively`

- Install dependencies
`npm install`

- Connect your Android device/emulator via ADB.
- Run the project
`npx expo run:android`

## Test Credentials
- Email: `ethan@gmail.com`
- Password: `proactively`

# Firebase Cloud Notification using REST
- Send a POST request using Postman or equivalent in the following format
```
POST https://fcm.googleapis.com/v1/projects/proactively-35ac6/messages:send

Content-Type: application/json
Authorization: Bearer YOUR-SERVICE-JWT-HERE

{
  "message": {
    "token": "TARGET-DEVICE-FCM-HERE",
    "notification": {
      "title": "You have an upcoming appointment",
      "body": "Click to view more."
    },
    "data": {
    "screen": "appointment",
    "params": "{\"doctor\":\"Azeem Idrisi\", \"doctorImg\":\"https://avatars.githubusercontent.com/u/112647789?v=4\", \"dataTime\":\"Fri, February 19, 2025 | 05:00 PM IST\", \"meetingLink\":\"https://meet.google.com/abcd-efg-hij\", \"doctorSpec\":\"MD, Physio\"}"
  }
  }
}

```
