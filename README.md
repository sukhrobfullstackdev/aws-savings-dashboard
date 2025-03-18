AWS Savings Dashboard

This project is a frontend dashboard built using SvelteKit, Tailwind CSS, and @carbon/charts-svelte to visualize AWS savings data.

📌 Features

Interactive charts for AWS cost savings visualization

Built with SvelteKit for a fast and reactive UI

Styled using Tailwind CSS

Uses @carbon/charts-svelte for data visualization

Mock data used due to CORS restrictions on the API

🚀 Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (LTS recommended)

pnpm (or npm/yarn)

Installation

Clone the repository and install dependencies:

# Clone the repository
git clone <repo_url>
cd aws-savings-dashboard

# Install dependencies
pnpm install  # or npm install / yarn install

Running the Project

Start the development server:

pnpm dev  # or npm run dev / yarn dev

The app will be available at http://localhost:5173 (default Vite port).

Building for Production

To generate a production build:

pnpm build  # or npm run build / yarn build

To preview the production build:

pnpm preview  # or npm run preview / yarn preview

🎨 Figma Design: https://www.figma.com/design/oxiNJQEtFgPhEmliBQEED1/NorthKit?node-id=13-3&t=ITnwDH5jS7XXf4TP-0

📊 Data Handling

Since the API was throwing CORS errors, the data is currently being represented as a mock object instead of fetching it from an API.

Once the API allows CORS or a proxy is set up, you can replace the mock data with actual API requests.
