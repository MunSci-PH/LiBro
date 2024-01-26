# MunSci LiBro App

An app used by the library and students for easy borrowing/returning of books.

## Setting Up

### NodeJS installation

First, install Node.js by downloading it [here](https://nodejs.org/en) and running the executable.

You should now be able to run `node -v` in your commmand prompt/terminal.

### Git Installation

Download Git [here](https://git-scm.com/downloads).

Run the executable and follow the instructions.

### Visual Studio Code Installation

Download Visual Studio Code [here](https://code.visualstudio.com/download)

Run the executable and follow the instructions.

Install the following extensions:

- [Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Intellicode API Usage Examples](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.intellicode-api-usage-examples)
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Getting Started with the Repository

#### Cloning the repository

Run a new command prompt/terminal window and run the following commands:

```bash
git clone https://github.com/MunSci-PH/LiBro
cd LiBro
npm i
code .
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Montserrat, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com/docs/) - learn about TailwindCSS
