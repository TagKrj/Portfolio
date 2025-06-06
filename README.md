# Personal Portfolio Website | Trang Web Portfolio Cá Nhân

A modern, interactive portfolio website built with React, Three.js, and cutting-edge web technologies. This portfolio showcases my projects, skills, and professional experience with stunning 3D animations and smooth user interactions.

*Một trang web portfolio hiện đại, tương tác được xây dựng bằng React, Three.js và các công nghệ web tiên tiến. Portfolio này giới thiệu các dự án, kỹ năng và kinh nghiệm chuyên môn của tôi với các hiệu ứng 3D ấn tượng và tương tác mượt mà.*

## 🌟 Features | Tính Năng

- **3D Interactive Elements | Phần Tử Tương Tác 3D**: Animated astronaut model and globe using Three.js and React Three Fiber | Mô hình phi hành gia và quả địa cầu hoạt hình sử dụng Three.js và React Three Fiber
- **Parallax Scrolling | Cuộn Parallax**: Beautiful parallax background effects with mountain layers and sky | Hiệu ứng nền parallax đẹp mắt với các lớp núi và bầu trời
- **Smooth Animations | Hoạt Hình Mượt Mà**: Motion animations powered by Framer Motion | Hoạt hình chuyển động được hỗ trợ bởi Framer Motion
- **Responsive Design | Thiết Kế Responsive**: Fully responsive across all devices using Tailwind CSS | Hoàn toàn responsive trên mọi thiết bị sử dụng Tailwind CSS
- **Contact Integration | Tích Hợp Liên Hệ**: Email functionality using EmailJS | Chức năng email sử dụng EmailJS
- **Project Showcase | Trưng Bày Dự Án**: Interactive project gallery with detailed modals | Thư viện dự án tương tác với các modal chi tiết
- **Timeline Experience | Trải Nghiệm Timeline**: Animated work experience timeline | Timeline kinh nghiệm làm việc có hoạt hình
- **Testimonials Marquee | Marquee Nhận Xét**: Rotating testimonials section | Phần nhận xét xoay vòng
- **Modern UI/UX | UI/UX Hiện Đại**: Clean, modern design with gradient backgrounds and hover effects | Thiết kế sạch sẽ, hiện đại với nền gradient và hiệu ứng hover

## 🚀 Tech Stack | Công Nghệ Sử Dụng

- **Frontend Framework | Framework Frontend**: React 19
- **Build Tool | Công Cụ Build**: Vite
- **Styling | Styling**: Tailwind CSS 4.1
- **3D Graphics | Đồ Họa 3D**: Three.js, React Three Fiber, React Three Drei
- **Animations | Hoạt Hình**: Framer Motion
- **Email Service | Dịch Vụ Email**: EmailJS
- **Responsive Design | Thiết Kế Responsive**: React Responsive
- **Code Quality | Chất Lượng Code**: ESLint

## 📁 Project Structure | Cấu Trúc Dự Án

```
src/
├── components/          # Reusable UI components | Các component UI tái sử dụng
│   ├── Astronaut.jsx   # 3D astronaut model | Mô hình phi hành gia 3D
│   ├── Globe.jsx       # Interactive 3D globe | Quả địa cầu 3D tương tác
│   ├── Marquee.jsx     # Scrolling marquee component | Component marquee cuộn
│   ├── Timeline.jsx    # Experience timeline | Timeline kinh nghiệm
│   ├── Particles.jsx   # Particle effects | Hiệu ứng hạt
│   └── ...
├── sections/           # Main page sections | Các phần chính của trang
│   ├── Hero.jsx        # Hero section with 3D elements | Phần hero với phần tử 3D
│   ├── About.jsx       # About me section | Phần giới thiệu
│   ├── Projects.jsx    # Projects showcase | Trưng bày dự án
│   ├── Contact.jsx     # Contact form | Form liên hệ
│   └── ...
├── constants/          # Static data and configuration | Dữ liệu tĩnh và cấu hình
└── App.jsx            # Main application component | Component ứng dụng chính
```

## 🛠️ Installation & Setup | Cài Đặt & Thiết Lập

1. **Clone the repository | Clone repository**
   ```bash
   git clone https://github.com/TagKrj/Portfolio
   cd portfolio
   ```

2. **Install dependencies | Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup | Thiết lập môi trường**
   - Configure EmailJS credentials in [`Contact.jsx`](src/sections/Contact.jsx) | Cấu hình thông tin đăng nhập EmailJS trong [`Contact.jsx`](src/sections/Contact.jsx)
   - Update personal information in [`constants/index.js`](src/constants/index.js) | Cập nhật thông tin cá nhân trong [`constants/index.js`](src/constants/index.js)

4. **Start development server | Khởi động server phát triển**
   ```bash
   npm run dev
   ```

5. **Build for production | Build cho production**
   ```bash
   npm run build
   ```

## 📦 Available Scripts | Các Script Có Sẵn

- `npm run dev` - Start development server | Khởi động server phát triển
- `npm run build` - Build for production | Build cho production
- `npm run lint` - Run ESLint | Chạy ESLint
- `npm run preview` - Preview production build | Xem trước bản build production
- `npm run deploy` - Deploy to GitHub Pages | Deploy lên GitHub Pages

## 🎨 Key Components | Các Component Chính

### Hero Section | Phần Hero
- Interactive 3D astronaut model with animations | Mô hình phi hành gia 3D tương tác với hoạt hình
- Parallax scrolling background with multiple layers | Nền cuộn parallax với nhiều lớp
- Animated text with flip words effect | Text hoạt hình với hiệu ứng lật chữ
- Responsive design for mobile and desktop | Thiết kế responsive cho mobile và desktop

### Projects Section | Phần Dự Án
- Interactive project cards with hover effects | Thẻ dự án tương tác với hiệu ứng hover
- Detailed project modals with technology stacks | Modal dự án chi tiết với công nghệ sử dụng
- Mouse-following preview images | Hình ảnh preview theo chuột
- Smooth animations and transitions | Hoạt hình và chuyển tiếp mượt mà

### About Section | Phần Giới Thiệu
- Interactive globe showing global presence | Quả địa cầu tương tác hiển thị sự hiện diện toàn cầu
- Draggable technology cards | Thẻ công nghệ có thể kéo thả
- Responsive grid layout | Layout grid responsive
- Email copy functionality | Chức năng copy email

### Contact Section | Phần Liên Hệ
- Functional contact form with EmailJS integration | Form liên hệ chức năng với tích hợp EmailJS
- Particle background effects | Hiệu ứng nền hạt
- Form validation and success/error alerts | Validation form và thông báo thành công/lỗi
- Responsive design | Thiết kế responsive

## 🌐 Deployment | Triển Khai

The project is configured for deployment on GitHub Pages:
*Dự án được cấu hình để triển khai trên GitHub Pages:*

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.
*Lệnh này sẽ build dự án và deploy lên nhánh `gh-pages`.*

## 📱 Responsive Design | Thiết Kế Responsive

The portfolio is fully responsive and optimized for:
*Portfolio được thiết kế responsive hoàn toàn và tối ưu cho:*

- Desktop (1920px+) | Máy tính để bàn (1920px+)
- Laptop (1024px - 1919px) | Laptop (1024px - 1919px)
- Tablet (768px - 1023px) | Máy tính bảng (768px - 1023px)
- Mobile (320px - 767px) | Điện thoại di động (320px - 767px)

## 🎯 Performance Optimizations | Tối Ưu Hiệu Suất

- **Code Splitting | Chia Tách Code**: Components are optimized for lazy loading | Các component được tối ưu cho lazy loading
- **Image Optimization | Tối Ưu Hình Ảnh**: Optimized asset loading | Tải tài nguyên được tối ưu
- **Animation Performance | Hiệu Suất Hoạt Hình**: Hardware-accelerated animations | Hoạt hình được tăng tốc bằng phần cứng
- **Bundle Optimization | Tối Ưu Bundle**: Vite's optimized build process | Quy trình build được tối ưu của Vite

## 📄 License | Giấy Phép

This project is open source and available under the [MIT License](LICENSE).
*Dự án này là mã nguồn mở và có sẵn dưới [Giấy phép MIT](LICENSE).*

## 📞 Contact | Liên Hệ

- **Email**: trangbui19032004@gmail.com
- **Portfolio**: https://portfolio-two-cyan-15.vercel.app/

## 🙏 Acknowledgments | Lời Cảm Ơn

- Three.js community for amazing 3D capabilities | Cộng đồng Three.js vì khả năng 3D tuyệt vời
- Framer Motion for smooth animations | Framer Motion vì các hoạt hình mượt mà
- Tailwind CSS for utility-first styling | Tailwind CSS vì cách tiếp cận utility-first styling
- React Three Fiber for React-Three.js integration | React Three Fiber vì tích hợp React-Three.js

---

⭐ If you found this portfolio helpful, please give it a star!  
🌟 Nếu bạn thấy portfolio này hữu ích, hãy thả sao giúp mình nhé!