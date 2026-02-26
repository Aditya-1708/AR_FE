# AR Industries - Client Application

## 🚀 Overview
The client application for AR Industries is a modern, responsive single-page application (SPA) built to serve as the digital storefront and administrative portal for the company. It provides information about products, manufacturing processes, careers, and blogs, alongside a secure admin panel for content management.  

## ✨ Features
- **Public Website:** Browse products, factory details, certifications, and clients.
- **Careers Portal:** View job openings and submit applications with resumes.
- **Blog System:** Read industry insights and company updates.
- **Admin Dashboard (Protected):** Manage staff, product catalog, job openings, and publish blogs via a rich text editor.
- **Rich Text Editing:** Integrated Tiptap and SunEditor for content creation.
- **Responsive Design:** Mobile-first design utilizing Tailwind CSS v4.
- **Smooth Animations:** Page transitions and component animations powered by Framer Motion.

## 🏗️ Architecture
The frontend is built using a component-based architecture with React.
- **Routing:** Handled via `react-router-dom` with defined public and protected routes.
- **State Management:** Handled largely via React Context/Hooks.
- **Data Fetching:** Custom configured Axios instance to communicate with the backend API.
- **Styling:** Tailwind CSS v4 for utility-first styling combined with custom CSS for specific resets and animations.

## 🛠️ Tech Stack
**Frontend:**
- React 19
- React Router DOM v7
- Vite 7
- Tailwind CSS v4

**Libraries & Tools:**
- Axios (HTTP Client)
- Framer Motion (Animations)
- Tiptap & SunEditor (Rich Text Editors)
- Lucide React & React Icons (Iconography)

**Dev Tools:**
- ESLint
- Vite React Plugin

## 📁 Project Structure
```text
client/
├── public/                 # Static assets and media files
├── src/
│   ├── assets/             # Internal assets (images, logos)
│   ├── components/         # Reusable UI components (Navbar, Footer, UI sections)
│   ├── pages/              # Application views (Homepage, AdminPanel, Contact)
│   ├── App.jsx             # Main routing component
│   ├── axios.js            # Axios configuration
│   ├── index.css           # Global stylesheet and Tailwind imports
│   └── main.jsx            # Application entry point
├── .env                    # Environment variables
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite bundler configuration
```

## ⚙️ Installation & Setup
### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Steps
1. Clone the repository and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the client directory and configure the environment variables:
   ```env
   VITE_BACKEND_URL="http://localhost:3000" # Replace with your local or production API URL
   ```

## ▶️ Usage
To start the development server:
```bash
npm run dev
```
To build for production:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## 🔌 API Documentation
*This project strictly serves as the frontend client. API documentation should be referenced from the backend server component.* 
The client communicates via base URL: `${VITE_BACKEND_URL}/api`.

## 🧪 Testing
*Currently, no explicit testing frameworks (like Jest or Cypress) are configured in the `package.json`.* 
Linting can be run using:
```bash
npm run lint
```

## 🚀 Deployment
Ensure the `.env` variables are correctly set for the production environment before building.
1. Build the production artifacts:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` directory to any static file hosting service such as Vercel, Netlify, AWS S3, or Nginx.

## 🤝 Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📌 Future Improvements
- Integrate standard unit and E2E testing frameworks (e.g., Vitest, Cypress).
- Implement global state management (e.g., Redux Toolkit or Zustand) if application logic scales.
- Add TypeScript for stricter type safety.
- Server-side rendering (SSR) or Static Site Generation (SSG) for improved SEO (e.g., migrating to Next.js or Remix).

## 📄 License
ISC License (as specified in package.json)
