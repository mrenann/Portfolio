# Portfolio

This is a portfolio app showcasing my Android development skills. It includes various features and
functionalities implemented using modern Android libraries and frameworks.

## Features

- **Kotlin Multiplatform**: Utilizes Kotlin Multiplatform to develop for Android,iOS, Web, Desktop
- **UI Design**: Utilizes Jetpack Compose for building modern and responsive UI.
- **Navigation**: Implements navigation between different screens using Voyager Navigator and
  Voyager Tab Navigator.
- **Image Loading**: Utilizes Compose Image Loader for efficient image loading and caching.
- **Asynchronous Programming**: Utilizes Kotlin Coroutines for asynchronous programming to handle
  background tasks efficiently.
- **Iconography**: Utilizes Feather Icons and Simple Icons libraries for displaying icons in the
  app.
- **JSON Serialization**: Uses Kotlinx Serialization library for JSON serialization and
  deserialization.
- **Date and Time Handling**: Utilizes Kotlinx DateTime library for handling date and time
  operations.
- **Multiplatform Support**: Provides multiplatform support with Material3 Window Size class for
  compatibility across different platforms.

## Libraries Used

- [AppCompat](https://developer.android.com/jetpack/androidx/releases/appcompat)
- [Compose Activity](https://developer.android.com/jetpack/androidx/releases/activity-compose)
- [Compose UI Tooling](https://developer.android.com/jetpack/androidx/releases/compose-ui-tooling)
- [Voyager Navigator](https://github.com/AdrielCafe/Voyager)
- [Voyager Tab Navigator](https://github.com/AdrielCafe/Voyager)
- [Voyager Transitions](https://github.com/AdrielCafe/Voyager)
- [Compose Image Loader](https://github.com/qdsfdhvh/compose-image-loader)
- [Kotlin Coroutines Core](https://github.com/Kotlin/kotlinx.coroutines)
- [Kotlin Coroutines Android](https://github.com/Kotlin/kotlinx.coroutines)
- [Kotlin Coroutines Swing](https://github.com/Kotlin/kotlinx.coroutines)
- [Compose Icons Feather](https://github.com/devsrsouza/compose-icons)
- [Compose Icons Simple](https://github.com/devsrsouza/compose-icons)
- [Kotlinx Serialization JSON](https://github.com/Kotlin/kotlinx.serialization)
- [Kotlinx DateTime](https://github.com/Kotlin/kotlinx-datetime)
- [Lyricist](https://github.com/AdrielCafe/Lyricist)

## Images

| <img src="https://github.com/user-attachments/assets/39c2a342-2ea5-49c7-a788-fdeef00964e9" width="250" /> | <img src="https://github.com/user-attachments/assets/08177c95-695c-4b44-b74c-ccbdc8758cba" width="500" /> |
|-------------------------------------------------|---------------------------------------------------|
| Screen displayed on an Android smartphone       | Screen displayed on a Desktop                     |


| <img src="https://github.com/user-attachments/assets/07fbe275-db43-487f-9fa8-7761f345fa19" width="500" /> | <img src="https://github.com/user-attachments/assets/0c6c0b4a-5642-4d7f-a668-495442ab79ae" width="500" /> |
|-----------------------------------------------|-----------------------------------------------|
| Screen showing the website                    | Screen showing all platforms                  |
|                                               |                                               |

## How to Run:

### Before running!

- check your system with [KDoctor](https://github.com/Kotlin/kdoctor)
- install JDK 17 on your machine
- add `local.properties` file to the project root and set a path to Android SDK there

#### Android

To run the application on android device/emulator:

- open project in Android Studio and run imported android run configuration

To build the application bundle:

- run `./gradlew :composeApp:assembleDebug`
- find `.apk` file in `composeApp/build/outputs/apk/debug/composeApp-debug.apk`

#### Desktop

Run the desktop application: `./gradlew :composeApp:run`

#### iOS

To run the application on iPhone device/simulator:

- Open `iosApp/iosApp.xcproject` in Xcode and run standard configuration
- Or
  use [Kotlin Multiplatform Mobile plugin](https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile)
  for Android Studio

#### Browser

Run the browser application: `./gradlew :composeApp:jsBrowserDevelopmentRun`
