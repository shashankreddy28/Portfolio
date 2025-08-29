# Minimalistic Dark Portfolio Website

A beautiful, responsive, and minimalistic portfolio website with a dark theme. Built with HTML, CSS, and JavaScript.

## Features

- 🌙 **Dark Theme**: Elegant dark color scheme with blue accents
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Smooth Animations**: Subtle animations and transitions
- 🎯 **Interactive Elements**: Hover effects and smooth scrolling
- 📧 **Contact Form**: Functional contact form with validation
- 🎨 **Modern UI**: Clean and professional design
- 🔧 **Easy Customization**: Simple to modify and personalize

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Projects Section**: Showcase of your work
4. **Skills Section**: Technical skills with progress bars
5. **Contact Section**: Contact form and information

## Getting Started

### 1. Basic Setup

1. Download or clone the files
2. Open `index.html` in your browser
3. The website is ready to use!

### 2. Customization

#### Personal Information

Edit the following in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Full Stack Developer & Designer</p>
```

#### About Section

Update the about text and statistics:

```html
<div class="about-text">
    <p>Your personal description here...</p>
    <div class="about-stats">
        <div class="stat">
            <h3>3+</h3>
            <p>Years Experience</p>
        </div>
        <!-- Add more stats as needed -->
    </div>
</div>
```

#### Projects

Replace the project cards with your own:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Code</a>
        </div>
    </div>
</div>
```

#### Skills

Update your skills and proficiency levels:

```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

#### Contact Information

Update your contact details:

```html
<div class="contact-details">
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>your.email@example.com</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+1 (555) 123-4567</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Your Location</span>
    </div>
</div>
```

#### Social Links

Update your social media links:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram-url" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 3. Styling Customization

#### Colors

The main colors are defined in `styles.css`. You can customize them:

```css
:root {
    --primary-color: #60a5fa;      /* Blue accent */
    --background-dark: #0f172a;    /* Dark background */
    --background-light: #1e293b;   /* Lighter background */
    --text-primary: #e2e8f0;       /* Primary text */
    --text-secondary: #94a3b8;     /* Secondary text */
}
```

#### Fonts

The website uses Inter font. You can change it in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### 4. Adding Images

To add your profile picture:

1. Replace the placeholder in the hero section:
```html
<div class="hero-image">
    <img src="path/to/your/image.jpg" alt="Your Name" class="profile-image">
</div>
```

2. Add CSS for the image:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #60a5fa;
    box-shadow: 0 20px 40px rgba(96, 165, 250, 0.2);
}
```

### 5. Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS** (Recommended):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add your EmailJS configuration to `script.js`

2. **Netlify Forms**:
   - Deploy to Netlify
   - Add `netlify` attribute to the form

3. **Custom Backend**:
   - Modify the form submission in `script.js`
   - Connect to your backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Minimal JavaScript
- Efficient CSS animations
- Fast loading times

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository settings
3. Enable GitHub Pages
4. Select source branch

### Netlify

1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on push

### Vercel

1. Install Vercel CLI
2. Run `vercel` in your project directory
3. Follow the prompts

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Tips

1. **Keep it minimal**: Don't overcrowd with too many elements
2. **Use high-quality images**: Optimize images for web
3. **Test on mobile**: Ensure everything works on mobile devices
4. **Update regularly**: Keep your projects and skills current
5. **Add analytics**: Consider adding Google Analytics

## Support

If you need help customizing your portfolio:

1. Check the comments in the code
2. Refer to this README
3. Look up CSS/HTML documentation
4. Test changes in a development environment

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀** 