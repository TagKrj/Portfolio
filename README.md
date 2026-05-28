# Personal Portfolio Website 

<div align="center">
  <img src="https://github.com/TagKrj/Portfolio/blob/master/imgWeb.png?raw=true" alt="Portfolio Preview" width="100%" />
</div>

<div align="center">
  
  [![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-2ea44f?style=for-the-badge)](https://portfolio-two-cyan-15.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/TagKrj/Portfolio)
  
</div> 
---
A modern, interactive portfolio website built with React, Three.js, and cutting-edge web technologies. This portfolio showcases my projects, skills, and professional experience with stunning 3D animations and smooth user interactions.

> **🇻🇳 Tiếng Việt**: [README.vi.md](README.vi.md)

## 🌟 Features

- **3D Interactive Elements**: Animated astronaut model and globe using Three.js and React Three Fiber
- **Parallax Scrolling**: Beautiful parallax background effects with mountain layers and sky
- **Smooth Animations**: Motion animations powered by Framer Motion
- **Responsive Design**: Fully responsive across all devices using Tailwind CSS
- **Contact Integration**: Email functionality using EmailJS
- **Project Showcase**: Interactive project gallery with detailed modals
- **Timeline Experience**: Animated work experience timeline
- **Testimonials Marquee**: Rotating testimonials section
- **Modern UI/UX**: Clean, modern design with gradient backgrounds and hover effects

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Responsive Design**: React Responsive
- **Code Quality**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Astronaut.jsx   # 3D astronaut model
│   ├── Globe.jsx       # Interactive 3D globe
│   ├── Marquee.jsx     # Scrolling marquee component
│   ├── Timeline.jsx    # Experience timeline
│   ├── Particles.jsx   # Particle effects
│   └── ...
├── sections/           # Main page sections
│   ├── Hero.jsx        # Hero section with 3D elements
│   ├── About.jsx       # About me section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── ...
├── constants/          # Static data and configuration
└── App.jsx            # Main application component
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TagKrj/Portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Configure EmailJS credentials in [`Contact.jsx`](src/sections/Contact.jsx)
   - Update personal information in [`constants/index.js`](src/constants/index.js)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Key Components

### Hero Section
- Interactive 3D astronaut model with animations
- Parallax scrolling background with multiple layers
- Animated text with flip words effect
- Responsive design for mobile and desktop

### Projects Section
- Interactive project cards with hover effects
- Detailed project modals with technology stacks
- Mouse-following preview images
- Smooth animations and transitions

### About Section
- Interactive globe showing global presence
- Draggable technology cards
- Responsive grid layout
- Email copy functionality

### Contact Section
- Functional contact form with EmailJS integration
- Particle background effects
- Form validation and success/error alerts
- Responsive design

## 🌐 Deployment

The project is deployed on Vercel:

### Automatic Deployment
1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Import your portfolio project

2. **Configure Build Settings**
   ```bash
   # Build Command
   npm run build
   
   # Output Directory
   dist
   
   # Install Command
   npm install
   ```

3. **Environment Variables** (if needed)
   - Add EmailJS credentials in Vercel dashboard
   - Configure any API keys

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Live Site
- **Portfolio**: https://portfolio-two-cyan-15.vercel.app/

Auto-deployment is enabled on push to main branch.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance Optimizations

- **Code Splitting**: Components are optimized for lazy loading
- **Image Optimization**: Optimized asset loading
- **Animation Performance**: Hardware-accelerated animations
- **Bundle Optimization**: Vite's optimized build process

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: trangbui19032004@gmail.com
- **Portfolio**: https://portfolio-two-cyan-15.vercel.app/

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- React Three Fiber for React-Three.js integration

---

⭐ If you found this portfolio helpful, please give it a star!