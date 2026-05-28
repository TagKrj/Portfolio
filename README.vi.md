# Trang Web Portfolio Cá Nhân 

<div align="center">
  <img src="https://github.com/TagKrj/Portfolio/blob/master/imgWeb.png?raw=true" alt="Portfolio Preview" width="100%" />
</div>

<div align="center">
  
  [![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-2ea44f?style=for-the-badge)](https://portfolio-two-cyan-15.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/TagKrj/Portfolio)
  
</div> 
---
Một trang web portfolio hiện đại, tương tác được xây dựng bằng React, Three.js và các công nghệ web tiên tiến. Portfolio này giới thiệu các dự án, kỹ năng và kinh nghiệm chuyên môn của tôi với các hiệu ứng 3D ấn tượng và tương tác mượt mà.

> **🇺🇸 English**: [README.md](README.md)

## 🌟 Tính Năng

- **Phần Tử Tương Tác 3D**: Mô hình phi hành gia và quả địa cầu hoạt hình sử dụng Three.js và React Three Fiber
- **Cuộn Parallax**: Hiệu ứng nền parallax đẹp mắt với các lớp núi và bầu trời
- **Hoạt Hình Mượt Mà**: Hoạt hình chuyển động được hỗ trợ bởi Framer Motion
- **Thiết Kế Responsive**: Hoàn toàn responsive trên mọi thiết bị sử dụng Tailwind CSS
- **Tích Hợp Liên Hệ**: Chức năng email sử dụng EmailJS
- **Trưng Bày Dự Án**: Thư viện dự án tương tác với các modal chi tiết
- **Trải Nghiệm Timeline**: Timeline kinh nghiệm làm việc có hoạt hình
- **Marquee Nhận Xét**: Phần nhận xét xoay vòng
- **UI/UX Hiện Đại**: Thiết kế sạch sẽ, hiện đại với nền gradient và hiệu ứng hover

## 🚀 Công Nghệ Sử Dụng

- **Framework Frontend**: React 19
- **Công Cụ Build**: Vite
- **Styling**: Tailwind CSS 4.1
- **Đồ Họa 3D**: Three.js, React Three Fiber, React Three Drei
- **Hoạt Hình**: Framer Motion
- **Dịch Vụ Email**: EmailJS
- **Thiết Kế Responsive**: React Responsive
- **Chất Lượng Code**: ESLint

## 📁 Cấu Trúc Dự Án

```
src/
├── components/          # Các component UI tái sử dụng
│   ├── Astronaut.jsx   # Mô hình phi hành gia 3D
│   ├── Globe.jsx       # Quả địa cầu 3D tương tác
│   ├── Marquee.jsx     # Component marquee cuộn
│   ├── Timeline.jsx    # Timeline kinh nghiệm
│   ├── Particles.jsx   # Hiệu ứng hạt
│   └── ...
├── sections/           # Các phần chính của trang
│   ├── Hero.jsx        # Phần hero với phần tử 3D
│   ├── About.jsx       # Phần giới thiệu
│   ├── Projects.jsx    # Trưng bày dự án
│   ├── Contact.jsx     # Form liên hệ
│   └── ...
├── constants/          # Dữ liệu tĩnh và cấu hình
└── App.jsx            # Component ứng dụng chính
```

## 🛠️ Cài Đặt & Thiết Lập

1. **Clone repository**
   ```bash
   git clone https://github.com/TagKrj/Portfolio
   cd portfolio
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Thiết lập môi trường**
   - Cấu hình thông tin đăng nhập EmailJS trong [`Contact.jsx`](src/sections/Contact.jsx)
   - Cập nhật thông tin cá nhân trong [`constants/index.js`](src/constants/index.js)

4. **Khởi động server phát triển**
   ```bash
   npm run dev
   ```

5. **Build cho production**
   ```bash
   npm run build
   ```

## 🎨 Các Component Chính

### Phần Hero
- Mô hình phi hành gia 3D tương tác với hoạt hình
- Nền cuộn parallax với nhiều lớp
- Text hoạt hình với hiệu ứng lật chữ
- Thiết kế responsive cho mobile và desktop

### Phần Dự Án
- Thẻ dự án tương tác với hiệu ứng hover
- Modal dự án chi tiết với công nghệ sử dụng
- Hình ảnh preview theo chuột
- Hoạt hình và chuyển tiếp mượt mà

### Phần Giới Thiệu
- Quả địa cầu tương tác hiển thị sự hiện diện toàn cầu
- Thẻ công nghệ có thể kéo thả
- Layout grid responsive
- Chức năng copy email

### Phần Liên Hệ
- Form liên hệ chức năng với tích hợp EmailJS
- Hiệu ứng nền hạt
- Validation form và thông báo thành công/lỗi
- Thiết kế responsive

## 🌐 Triển Khai

Dự án được triển khai trên Vercel:

### Triển Khai Tự Động
1. **Kết nối với Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Kết nối repository GitHub của bạn
   - Import dự án portfolio của bạn

2. **Cấu hình Thiết Lập Build**
   ```bash
   # Lệnh Build
   npm run build
   
   # Thư mục Output
   dist
   
   # Lệnh Cài đặt
   npm install
   ```

3. **Biến Môi Trường** (nếu cần)
   - Thêm thông tin EmailJS trong dashboard Vercel
   - Cấu hình các API key

### Triển Khai Thủ Công
```bash
# Build dự án
npm run build

# Deploy lên Vercel
npx vercel --prod
```

### Trang Web Trực Tiếp
- **Portfolio**: https://portfolio-two-cyan-15.vercel.app/

Triển khai tự động được kích hoạt khi push lên nhánh main.

## 📱 Thiết Kế Responsive

Portfolio được thiết kế responsive hoàn toàn và tối ưu cho:

- Máy tính để bàn (1920px+)
- Laptop (1024px - 1919px)
- Máy tính bảng (768px - 1023px)
- Điện thoại di động (320px - 767px)

## 🎯 Tối Ưu Hiệu Suất

- **Chia Tách Code**: Các component được tối ưu cho lazy loading
- **Tối Ưu Hình Ảnh**: Tải tài nguyên được tối ưu
- **Hiệu Suất Hoạt Hình**: Hoạt hình được tăng tốc bằng phần cứng
- **Tối Ưu Bundle**: Quy trình build được tối ưu của Vite

## 📄 Giấy Phép

Dự án này là mã nguồn mở và có sẵn dưới [Giấy phép MIT](LICENSE).

## 📞 Liên Hệ

- **Email**: trangbui19032004@gmail.com
- **Portfolio**: https://portfolio-two-cyan-15.vercel.app/

## 🙏 Lời Cảm Ơn

- Cộng đồng Three.js vì khả năng 3D tuyệt vời
- Framer Motion vì các hoạt hình mượt mà
- Tailwind CSS vì cách tiếp cận utility-first styling
- React Three Fiber vì tích hợp React-Three.js

---

🌟 Nếu bạn thấy portfolio này hữu ích, hãy thả sao giúp mình nhé!