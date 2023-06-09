## Step by step

1. Bootstrap app

- https://docs.expo.dev/get-started/create-a-project/

```bash
$ npx create-expo-app
```

2. Create a native module

- https://docs.expo.dev/modules/get-started/

```bash
$ npx create-expo-module@latest --local
```

3. Eject app

```bash
$ npx expo prebuild --clean
```

4, Open the project in XCode and edit the module from there

- Pods -> Development Pods -> Your module

<img src="/assets/xcode.png" style="width: 60%;"/>
