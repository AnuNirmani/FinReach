# FinReach

A modern, responsive financial services website built with React and Vite. FinReach provides comprehensive information about accounting, auditing, bookkeeping, and financial consulting services.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and optimized with the React Compiler
- **Fast Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)
- **Client-side Routing**: Seamless navigation using React Router DOM
- **Blog Management**: Dynamic blog system with category-based article organization
- **SEO Optimized**: Helmet integration for meta tags and SEO management
- **Responsive Design**: Mobile-first approach with Bootstrap styling
- **Multiple Service Categories**:
  - Bookkeeping & Cash Flow Management
  - Assurance & Funding
  - Audit Readiness
  - Fractional CFO Insights

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite with Rolldown
- **Routing**: React Router DOM 7.9.6
- **SEO**: React Helmet Async 2.0.5
- **Styling**: Bootstrap (CSS)
- **Linting**: ESLint 9.39.1
- **Node Version**: 18+

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FinReach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   - Update API endpoints in component files (currently configured for `http://localhost:8000`)

## 🚀 Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Check for code quality issues:

```bash
npm run lint
```

## 📝 Configuration Files

- **vite.config.js**: Vite configuration with React plugin and Babel compiler
- **eslint.config.js**: ESLint rules for code quality
- **index.html**: HTML entry point
- **package.json**: Project dependencies and scripts

## 🔌 API Integration

The application connects to a backend API (currently configured for `http://localhost:8000`) for:

- **Articles API**: `/api/assurance`, `/api/auditing`, etc.
- Dynamic content loading for blog posts and articles

### Example API Usage

```javascript
const response = await fetch('http://localhost:8000/api/assurance');
const data = await response.json();
```

**Note**: Update the API endpoints in component files for production deployment.

## 📱 Key Components

### Dashboard
- Landing page with hero section
- Service overview and benefits
- Call-to-action sections
- Booking form integration

### Blog
- Dynamic article loading from API
- Category-based filtering
- Article preview with truncated descriptions
- Full article view with detailed content

### Service Categories
- Dedicated pages for each service type
- Related articles display
- Client testimonials

### Utilities
- **SEO.jsx**: Meta tag management for better search engine visibility

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [React Compiler Guide](https://react.dev/learn/react-compiler)

## 🔧 Development Tips

1. **Hot Module Replacement**: Changes are instantly reflected without page reload
2. **React Compiler**: Enabled for optimized performance - see warnings in dev console if needed
3. **Lazy Loading**: Pages are code-split for better initial load performance
4. **SEO**: Use the SEO utility component for meta tag management on each page

## 📄 License

This project is proprietary and confidential.

## 👥 Contributors

- FinReach Development Team

**Last Updated**: December 2025
**Version**: 0.0.1
