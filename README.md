# Next.js GitHub Pages Deployment

This is a Next.js application configured for automated deployment to GitHub Pages using GitHub Actions.

## Running Locally

To run this application locally on your machine, follow these steps:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **View the app**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Local Development Notes
- The `next.config.mjs` has been specially configured so that the `basePath` is only applied during the GitHub Actions build. This ensures that you can test locally at the root URL (`/`) without encountering 404 errors.
- External images (e.g., from `images.unsplash.com`) are explicitly allowed in `next.config.mjs` using `remotePatterns` so they render properly both locally and in production.

## Deployment

This project uses GitHub Actions to automatically build and deploy the Next.js static export to GitHub Pages.

### How it works:
1. When changes are pushed to the `main` branch, the `.github/workflows/deploy.yml` workflow is triggered automatically.
2. The workflow installs dependencies, runs `next build` (which creates a static HTML/CSS/JS export in the `out` directory), and applies the correct `basePath` for your repository (`/Github_Page_CI-CD`).
3. It then uploads this built artifact and deploys it directly to GitHub Pages.

### Requirements for GitHub Pages:
Ensure your GitHub repository is configured to deploy from GitHub Actions:
1. Go to your repository **Settings**.
2. Navigate to **Pages** on the left sidebar.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

Once configured, pushing code to the `main` branch will seamlessly update your live website!
