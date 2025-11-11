# sFx Dashboard

A modern React-based financial dashboard application built with TypeScript, Vite, and Tailwind CSS. This project showcases a user interface for monitoring earnings, success rates, and payment issues through interactive charts and components.

## Features

- **Dashboard Layout**: Responsive sidebar navigation with main content area
- **Earnings Tracking**: Bar chart displaying earnings over the last 30 days
- **Success Rate Visualization**: Donut chart showing transaction success metrics
- **Payment Issues Monitoring**: Chart highlighting payment-related issues
- **User Profile**: Header with user information, notifications, and search functionality
- **Theme Support**: Built-in support for light/dark themes (via next-themes)
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sfx-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Libraries Used

### Core Framework
- **React 18.2.0**: UI library for building the user interface
- **TypeScript 5.x**: Type-safe JavaScript for better development experience
- **Vite 5.x**: Fast build tool and development server

### UI Components & Styling
- **Tailwind CSS 4.x**: Utility-first CSS framework for styling
- **shadcn/ui**: Collection of reusable UI components built on Radix UI primitives
  - Includes components like Accordion, Dialog, Dropdown Menu, Tabs, etc.
- **Radix UI**: Unstyled, accessible UI primitives (multiple packages)
- **Lucide React**: Icon library for consistent iconography
- **next-themes**: Theme switching functionality

### Charts & Data Visualization
- **Recharts 2.15.4**: Composable charting library (available for future enhancements)
- Custom chart implementations using CSS and React for bar charts, donut charts, and payment issue visualizations

### Forms & Validation
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing conditional className strings
- **class-variance-authority**: For creating variant-based component styles
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **sonner**: Toast notification library

### Development Tools
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting
- **@vitejs/plugin-react**: Vite plugin for React

## Assumptions Made

1. **Static Data**: All chart data and user information is hardcoded for demonstration purposes. In a real application, this would be replaced with API calls to fetch live data.

2. **Currency**: The application uses Nigerian Naira (NGN) as the primary currency, as indicated by the earnings display.

3. **User Context**: The dashboard is personalized for a user named "Martins Chidume" with ID 123456. User avatars are generated using the DiceBear API.

4. **Chart Implementation**: Charts are implemented using custom CSS and React components rather than fully leveraging the Recharts library, allowing for more control over styling and behavior.

5. **Responsive Design**: The application is designed to work on both desktop and mobile devices, with collapsible sidebars and adaptive layouts.

6. **No Backend Integration**: This is a frontend-only application with no server-side logic or database connections.

7. **Browser Compatibility**: The application assumes modern browser support for CSS Grid, Flexbox, and ES6+ features.
