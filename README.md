# Electron-Typescript-React-Redux Skeleton

This project can be used as a starting point for building an Electron or web application with Typescript, React, and Redux. A lot of common setup has already been taken care of, including configuration of linting & IntelliSense for VS Code (See your-name-here.code-workspace for recommended extensions and other config). Get started by clicking "Use this template" above, or copying files as needed.

Included are basic examples of core functionalities often used in React-Redux apps, as well as an example of using Redux middleware to interface over the network or IPC, and an example of accessing the filesystem with Electron.

Other tools involved include:
* [Vite](https://vitejs.dev/): Used as a starting point for the app folder.
* [Redux DevTools](https://github.com/reduxjs/redux-devtools): Provides inspection and testing tools for Redux, in an interface integrated with the Electron/Chrome Developer Tools.
* [Reselect Devtools](https://github.com/skortchmark9/reselect-tools): A less official, but still useful extension for inspecting Reselect selectors and visualizing the computed/derived state tree.
* [Tailwind CSS](https://tailwindcss.com/): Provides lots of CSS classes to make it easier to style HTML using the class attribute, along with other powerful styling tools.
* [VechaiUI](https://www.vechaiui.com/): Plug-n-play component library built on top of Tailwind CSS. It makes it super easy to add pretty components such as buttons, and generally makes things look nice. It also allows configuring a global theme.

Additionally, GitHub Actions is used to automatically create releases with the packaged Electron app (at https://github.com/uas-at-ucla/electron-typescript-react-redux-skeleton/releases) and deploy the web app to GitHub Pages (at https://uas-at-ucla.github.io/electron-typescript-react-redux-skeleton/).

You can remove/add anything in order to meet your goals.
