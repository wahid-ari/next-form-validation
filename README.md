This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Playwright
```
yarn create playwright
success Installed "create-playwright@1.17.120" with binaries:
      - create-playwright
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · e2e
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

add package.json script :
```
"test-e2e": "playwright test"
"test-report": "playwright show-report",
"test-trace": "playwright show-trace trace.zip",
"test-generator": "playwright codegen http://localhost:3000"
```

Install Browser
```
npx playwright install
```

### add playwright-test extension in VS Code
- **Record New** to generate test code using browser
- **Pick Selector** to select element using browser
- check **Show Browser** if want to open browser while running a tests using playwright-test VSCode Extension

docs :
- https://playwright.dev/docs/selectors
- https://playwright.dev/docs/locators
- https://playwright.dev/docs/next/testing-library
- https://playwright.dev/docs/next/test-assertions
- https://playwright.dev/docs/next/selectors
- https://playwright.dev/docs/next/locators
- https://playwright.dev/docs/next/api/class-locator
- https://playwright.dev/docs/next/api/class-page

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
