const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Techville University</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <style>
        :root {
          --primary: #2c3e50;
          --secondary: #3498db;
          --accent: #e74c3c;
          --light: #ecf0f1;
          --dark: #2c3e50;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background-color: #f9f9f9;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Header */
        header {
          background-color: var(--primary);
          color: white;
          padding: 20px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo i {
          font-size: 32px;
          color: var(--secondary);
          margin-right: 10px;
        }
        
        .logo-text {
          font-size: 24px;
          font-weight: 700;
        }
        
        .logo-text span {
          color: var(--secondary);
        }
        
        nav ul {
          display: flex;
          list-style: none;
        }
        
        nav ul li {
          margin-left: 30px;
        }
        
        nav ul li a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        nav ul li a:hover {
          color: var(--secondary);
        }
        
        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, var(--primary), var(--dark));
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .hero p {
          font-size: 20px;
          max-width: 800px;
          margin: 0 auto 30px;
        }
        
        .btn {
          display: inline-block;
          background-color: var(--secondary);
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .btn:hover {
          background-color: #2980b9;
          transform: translateY(-3px);
        }
        
        /* About Section */
        .section {
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-title h2 {
          font-size: 36px;
          color: var(--primary);
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
        }
        
        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: var(--secondary);
        }
        
        .about-content {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        
        .about-text {
          flex: 1;
        }
        
        .about-text h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: var(--primary);
        }
        
        .about-features {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .feature-card {
          background-color: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .feature-card i {
          font-size: 36px;
          color: var(--secondary);
          margin-bottom: 15px;
        }
        
        .feature-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        /* Courses Section */
        .courses {
          background-color: var(--light);
        }
        
        .courses-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .course-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        
        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .course-icon {
          height: 120px;
          background-color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 48px;
        }
        
        .course-content {
          padding: 25px;
        }
        
        .course-content h3 {
          font-size: 20px;
          margin-bottom: 15px;
          color: var(--primary);
        }
        
        .course-content p {
          margin-bottom: 20px;
          color: #666;
        }
        
        /* Faculty Section */
        .faculty-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .faculty-card {
          background-color: white;
          border-radius: 8px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        
        .faculty-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .faculty-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: var(--light);
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          color: var(--primary);
          overflow: hidden;
        }
        
        .faculty-card h3 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        
        .faculty-card p {
          color: var(--secondary);
          margin-bottom: 15px;
          font-weight: 500;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s;
        }
        
        .social-links a:hover {
          background-color: var(--secondary);
          color: white;
        }
        
        /* Contact Section */
        .contact {
          background-color: var(--light);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
        }
        
        .contact-info h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: var(--primary);
        }
        
        .contact-details {
          margin-bottom: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        
        .contact-item i {
          font-size: 20px;
          color: var(--secondary);
          margin-right: 15px;
          margin-top: 5px;
        }
        
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
          background-color: white;
          font-family: 'Poppins', sans-serif;
        }
        
        .contact-form textarea {
          height: 150px;
          resize: vertical;
        }
        
        .contact-form button {
          background-color: var(--secondary);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .contact-form button:hover {
          background-color: var(--primary);
        }
        
        /* Footer */
        footer {
          background-color: var(--dark);
          color: white;
          padding: 30px 0;
          text-align: center;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .footer-links a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .footer-links a:hover {
          color: var(--secondary);
        }
        
        .copyright {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }
          
          nav ul {
            margin-top: 20px;
          }
          
          nav ul li {
            margin: 0 10px;
          }
          
          .about-content {
            flex-direction: column;
          }
          
          .about-features {
            grid-template-columns: 1fr;
          }
          
          .hero h1 {
            font-size: 36px;
          }
          
          .hero p {
            font-size: 18px;
          }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <header>
        <div class="container header-container">
          <div class="logo">
            <i class="fas fa-graduation-cap"></i>
            <div class="logo-text">Techville <span>University</span></div>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#faculty">Faculty</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <!-- Hero Section -->
      <section class="hero" id="home">
        <div class="container">
          <h1>Shaping Future Leaders</h1>
          <p>Techville University provides world-class education with state-of-the-art facilities and experienced faculty to nurture tomorrow's innovators.</p>
          <a href="#courses" class="btn">Explore Programs</a>
        </div>
      </section>
      
      <!-- About Section -->
      <section class="section" id="about">
        <div class="container">
          <div class="section-title">
            <h2>About Our University</h2>
          </div>
          <div class="about-content">
            <div class="about-text">
              <h3>Welcome to Techville University</h3>
              <p>Founded in 1995, Techville University has been at the forefront of technological education and research. Our institution is committed to providing students with the knowledge and skills needed to excel in today's competitive world.</p>
              <p>With a sprawling 50-acre campus, cutting-edge laboratories, and a vibrant student community, we offer an environment that fosters learning, innovation, and personal growth.</p>
            </div>
            <div class="about-features">
              <div class="feature-card">
                <i class="fas fa-users"></i>
                <h4>5000+ Students</h4>
                <p>Vibrant community of learners from across the globe</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-graduation-cap"></i>
                <h4>200+ Courses</h4>
                <p>Wide range of undergraduate and postgraduate programs</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-chalkboard-teacher"></i>
                <h4>Expert Faculty</h4>
                <p>Learn from industry experts and academic scholars</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-building"></i>
                <h4>Modern Campus</h4>
                <p>State-of-the-art infrastructure and facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Courses Section -->
      <section class="section courses" id="courses">
        <div class="container">
          <div class="section-title">
            <h2>Our Courses</h2>
          </div>
          <div class="courses-container">
            <div class="course-card">
              <div class="course-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div class="course-content">
                <h3>Computer Science</h3>
                <p>Comprehensive program covering algorithms, data structures, AI, and software development.</p>
                <a href="#" class="btn">Learn More</a>
              </div>
            </div>
            <div class="course-card">
              <div class="course-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="course-content">
                <h3>Artificial Intelligence</h3>
                <p>Specialized training in machine learning, neural networks, and cognitive computing.</p>
                <a href="#" class="btn">Learn More</a>
              </div>
            </div>
            <div class="course-card">
              <div class="course-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="course-content">
                <h3>Data Science</h3>
                <p>Master data analysis, visualization, and predictive modeling techniques.</p>
                <a href="#" class="btn">Learn More</a>
              </div>
            </div>
            <div class="course-card">
              <div class="course-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="course-content">
                <h3>Cyber Security</h3>
                <p>Learn to protect systems and networks from digital attacks and threats.</p>
                <a href="#" class="btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Faculty Section -->
      <section class="section" id="faculty">
        <div class="container">
          <div class="section-title">
            <h2>Our Faculty</h2>
          </div>
          <div class="faculty-container">
            <div class="faculty-card">
              <div class="faculty-img">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p>Professor, Computer Science</p>
              <p>PhD from MIT, 15+ years experience in AI research</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
            <div class="faculty-card">
              <div class="faculty-img">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3>Prof. Michael Chen</h3>
              <p>Head of Data Science</p>
              <p>Former Google Data Scientist, Author of 3 textbooks</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
            <div class="faculty-card">
              <div class="faculty-img">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3>Dr. Emily Rodriguez</h3>
              <p>Cyber Security Expert</p>
              <p>Lead security consultant for Fortune 500 companies</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
            <div class="faculty-card">
              <div class="faculty-img">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3>Prof. David Kim</h3>
              <p>Dean of Engineering</p>
              <p>Recipient of National Science Award 2022</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
      <section class="section contact" id="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact Us</h2>
          </div>
          <div class="contact-container">
            <div class="contact-info">
              <h3>Get In Touch</h3>
              <div class="contact-details">
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>123 University Avenue, Techville, TV 56789</p>
                  </div>
                </div>
                <div class="contact-item">
                  <i class="fas fa-phone-alt"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>info@techvilleuniversity.edu</p>
                  </div>
                </div>
              </div>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="contact-form">
              <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="text" placeholder="Subject">
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Footer -->
      <footer>
        <div class="container">
          <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#faculty">Faculty</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="copyright">
            &copy; 2025 Techville University. All Rights Reserved.
          </div>
        </div>
      </footer>
      
      <script>
        // Simple form submission handler
        document.querySelector('.contact-form form').addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! We will contact you soon.');
          this.reset();
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`College website running at http://localhost:${port}`);
});
