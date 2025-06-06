# Personal Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and cutting-edge web technologies. This portfolio showcases my projects, skills, and professional experience with stunning 3D animations and smooth user interactions.

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
   git clone https://github.com/your-username/portfolio.git
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

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

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

The project is configured for deployment on GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: trangbui19032004@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **Portfolio**: [Your Portfolio URL]

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- React Three Fiber for React-Three.js integration

---

⭐ If you found this portfolio helpful, please give it a star!