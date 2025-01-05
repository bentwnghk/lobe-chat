# Directory Structure

The directory structure of Mr.🆖 AI is as follows:

```bash
src
├── app        # Main logic and state management related code for the application
├── components # Reusable UI components
├── config     # Application configuration files, including client-side and server-side environment variables
├── const      # Used to define constants, such as action types, route names, etc.
├── features   # Function modules related to business functions, such as agent settings, plugin development pop-ups, etc.
├── hooks      # Custom utility hooks reused throughout the application
├── layout     # Application layout components, such as navigation bars, sidebars, etc.
├── locales    # Internationalization language files
├── services   # Encapsulated backend service interfaces, such as HTTP requests
├── store      # Zustand store for state management
├── types      # TypeScript type definition files
└── utils      # Common utility functions
```

## app

In the `app` folder, we organize each route page according to the app router's [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to separately handle the implementation of desktop and mobile code. Taking the file structure of the `welcome` page as an example:

```bash
welcome
├── (desktop)               # Desktop implementation
│   ├── features            # Desktop-specific features
│   ├── index.tsx           # Main entry file for desktop
│   └── layout.desktop.tsx  # Desktop layout component
├── (mobile)                # Mobile implementation
│   ├── features            # Mobile-specific features
│   ├── index.tsx           # Main entry file for mobile
│   └── layout.mobile.tsx   # Mobile layout component
├── features                # This folder contains features code shared by both desktop and mobile, such as the Banner component
│   └── Banner
└── page.tsx                # This is the main entry file for the page, used to load desktop or mobile code based on the device type
```

In this way, we can clearly distinguish and manage desktop and mobile code, while also easily reusing code required on both devices, thereby improving development efficiency and maintaining code cleanliness and maintainability.
