# fallout-jdr-helper

Fr:
Utilitaires pour le JDR Fallout (2D20)

En:
RPG Utilities for Fallout (2D20)

# How to build the android APK

Prerequisites : NPM, Android Studio with proper setup

First, build the web application using your IDE or any terminal :

`ionic build`

Then, synchronise all the build files :

`npx cap sync`

And finally, open the project in Studio :

`npx cap open`
(select "android")

Finally, in Studio, once everything is loaded

1) Go to "Build > Generate signed bundle /APK"
2) Select "APK", click "next"
3) Create your own new key, or select an existing one _(this is not enough to send it to the Playstore , but should
   enough to install it on your own mobile device_
4) Click "next", and select "release", then click on "finish"
5) A popup will display where you'll be able to locate and open the folder containing the APK
