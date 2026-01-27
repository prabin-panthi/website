# Portfolio Website

A personal portfolio website showcasing web development and machine learning projects with an interactive, responsive design. Features project filtering, mobile menu, and links to live demos.

## Live Site

Hosted at: `https://www.prabinpanthi.com.np`

## Features

- **Responsive Navigation** - Sticky navbar with mobile hamburger menu
- **Hero Section** - Introduction with animated image and social links
- **Project Showcase** - Filterable projects (All, Web Design, ML, DL)
- **Live Demos** - Links to deployed projects on Render and GitHub
- **Contact Section** - Social media links in footer
- **Mobile Optimized** - Fully responsive for all screen sizes
- **Smooth Animations** - Hero image animation and hover effects

## Project Structure

```
.
├── index.html              # Main HTML file
├── style.css              # All styling and responsive design
├── script.js              # Navigation and filtering logic
├── images/                # Images folder
│   ├── hero-img.png      # Main hero image
│   ├── icon.jpg          # Favicon
│   ├── yellow-bg.png     # Background image
│   └── [project images]  # Screenshots of projects
├── amazon_project/        # Amazon clone files
├── calculator/            # Calculator app files
├── tic_tac_toe/          # Tic-tac-toe game files
├── CNAME                 # Custom domain configuration
└── README.md             # This file
```

## Tech Stack

**Frontend:**
- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, animations)
- Vanilla JavaScript (ES6)
- Font Awesome (icons)
- Google Fonts (Inter, Poppins, Roboto)

**Hosting:**
- GitHub Pages (with custom domain)

## Projects Showcased

### Web Design Projects:
1. **Amazon Clone** - E-commerce UI clone
2. **Tic Tac Toe** - Interactive game with AI
3. **Calculator** - Functional calculator app

### Machine Learning:
1. **Movie Recommender** - Content-based recommendation system

### Deep Learning:
1. **Digit Prediction** - CNN-based handwriting recognition
2. **Text Predictor** - RNN-based text generation

## Features Explained

### 1. Responsive Navigation

**Desktop:**
- Horizontal navbar with links
- Dropdown menu for projects
- Gradient background
- Hover effects with underline animation

**Mobile:**
- Hamburger menu toggle
- Vertical dropdown menu
- Full-width menu items
- Toggle icon changes (bars → X)

### 2. Hero Section

**Content:**
- Large heading with name
- Description paragraph
- GitHub and LinkedIn buttons
- Animated hero image

**Animations:**
- Image moves and rotates subtly
- 15-second loop animation
- Smooth transitions

**Styling:**
- Dark background with gradient
- Yellow accent background image
- Grid layout (text + image)

### 3. Project Filtering

**Filter Buttons:**
- All (shows all projects)
- Web Design
- Machine Learning
- Deep Learning

**How it Works:**
- Click button to filter
- Active button turns red
- Projects fade in/out
- Uses class-based filtering

### 4. Project Tiles

**Layout:**
- Horizontal scrollable grid
- Snap scrolling for smooth navigation
- Project image + title + GitHub link

**Styling:**
- Gradient background (green to yellow)
- Border and rounded corners
- Hover effects on links

### 5. Footer

**Contact Section:**
- Social media icons (Facebook, Instagram, LinkedIn)
- Email link
- Gradient background
- Icon hover effects

## Responsive Design

### Desktop (> 600px):
- Full horizontal navigation
- 2-column hero section
- Wide project tiles
- Visible all elements

### Mobile (≤ 600px):
- Hamburger menu
- Stacked hero section
- Single column layout
- Adjusted font sizes
- Touch-friendly buttons

### Landscape Warning:
- Shows message on small landscape screens
- Prevents awkward layout
- Suggests portrait mode

## Color Scheme

**Primary Colors:**
- Dark Green: `#0e312e` (background)
- Light Green: `#34CB88` (accents)
- Yellow: `#fdc435` (buttons)
- Teal: `#438983` (gradients)

**Text Colors:**
- White: Main headings
- Gray: Body text
- Gold: `#C1996C` (section titles)

## Fonts

**Inter:**
- Headings
- Weight: 400, 600, 700

**Poppins:**
- Body text and buttons
- Weight: 400-900

**Roboto:**
- Contact section
- Weight: 400-900

## Animations

### Hero Image:
- 15-second loop
- Translates and rotates
- Alternate direction
- Subtle movement (1-2%)

### Hover Effects:
- Buttons: translateY + scale
- Links: Color change
- Nav items: Underline animation
- Tiles: Shadow on hover

## Navigation Features

### Dropdown Menu:
- Appears on hover
- Lists all projects
- Green background
- Direct links to projects

### Smooth Scrolling:
- Enabled with `scroll-behavior: smooth`
- Contact button scrolls to footer
- Home button returns to top

## JavaScript Functionality

### Menu Toggle (Mobile):
```javascript
menuToggle.addEventListener('click', menu_toggle);
// Toggles 'menu-open' class
// Changes icon (bars ↔ X)
```

### Project Filtering:
```javascript
// Filter by category
btnIds.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove 'active' from all
        // Add 'active' to clicked
        // Show/hide tiles based on class
    });
});
```

### Dynamic Classes:
- `active` - Highlights current filter
- `hidden` - Hides filtered projects
- `menu-open` - Shows mobile menu

## CSS Highlights

### Grid Layout:
```css
.top-div {
    display: grid;
    grid-template-columns: 5fr 5fr;
}
```

### Flexbox:
```css
nav > ul {
    display: flex;
    justify-content: flex-end;
}
```

### Gradients:
```css
background: linear-gradient(
    to right, 
    #34CB88 0%, 
    rgba(253, 196, 53, 1) 100%
);
```

### Animations:
```css
@keyframes heroAnimation {
    0% { }
    20% { transform: translateX(1%) scale(1.02); }
    50% { transform: translateX(1%) translateY(1%); }
    80% { transform: rotate(1deg); }
    100% { transform: rotate(-1deg); }
}
```

## Deployment

**GitHub Pages:**
- Repository: Set to public
- Settings → Pages → Deploy from main branch
- Custom domain configured with CNAME file

**Custom Domain:**
- Domain: prabinpanthi.com.np
- CNAME record points to GitHub Pages
- HTTPS enabled

## File Organization

### HTML Structure:
```html
<nav>           <!-- Navigation -->
<main>
  <div class="top-div">      <!-- Hero -->
  <div class="projects-div"> <!-- Projects -->
</main>
<footer>        <!-- Contact -->
```

### CSS Organization:
1. Reset styles
2. Navigation styles
3. Hero section
4. Projects section
5. Footer
6. Media queries
7. Animations

### JavaScript Modules:
1. Menu toggle logic
2. Filter button handlers
3. Event listeners

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

**Images:**
- Optimized PNGs
- Appropriate dimensions
- Lazy loading (browser native)

**CSS:**
- Minified in production
- Efficient selectors
- Hardware-accelerated animations

**JavaScript:**
- Vanilla JS (no heavy frameworks)
- Event delegation
- Minimal DOM manipulation

## Customization Guide

### Change Colors:
Edit color variables in CSS:
```css
background: linear-gradient(...); /* Update gradients */
color: #yourcolor;               /* Update text colors */
```

### Add Projects:
1. Add tile in HTML:
```html
<div class="tile web">
    <img src="images/project.png">
    <p>Project Name</p>
    <a href="link">Visit Repository</a>
</div>
```

2. Add project image to `images/` folder

### Update Links:
Change GitHub/LinkedIn URLs in index.html:
```javascript
onclick="window.open('your-link')"
```

## Local Development

1. Clone repository:
```bash
git clone https://github.com/prabin-panthi/portfolio
```

2. Open in browser:
```bash
# Open index.html directly
# Or use Live Server extension in VS Code
```

3. Edit files:
- `index.html` - Structure
- `style.css` - Styling
- `script.js` - Functionality

## Project Links

All projects are deployed and accessible:
- **Amazon Clone**: `/amazon project/amazon.html`
- **Tic Tac Toe**: `/tic tac toe/tic.html`
- **Calculator**: `/calculator/calculator.html`
- **Digit Prediction**: `prabin-handwriting-recognition.onrender.com`
- **Text Predictor**: `prabin-avenger-text-prediction.onrender.com`
- **Movie Recommender**: `prabin-movie-recommendation.onrender.com`

## SEO and Meta Tags

```html
<meta name="description" content="...">
<title>Prabin's Portfolio</title>
<link rel="icon" href="images/icon.jpg" />
```

## Accessibility Features

- Semantic HTML tags
- Alt text on images
- Focus states on buttons
- Keyboard navigation support
- ARIA labels where needed

## Future Enhancements

**Planned Features:**
- Dark mode toggle
- Project detail modals
- Skills section
- Blog integration
- Contact form
- Loading animations
- More project demos

## Credits

- Font Awesome for icons
- Google Fonts for typography
- GitHub Pages for hosting
- Render for ML project hosting

## License

Open source - available for educational purposes.

## Contact

- GitHub: [prabin-panthi](https://github.com/prabin-panthi)
- LinkedIn: [prabin-panthi](https://www.linkedin.com/in/prabin-panthi-4b3302306/)
- Email: prabinpanthi33@gmail.com
- Website: [www.prabinpanthi.com.np](https://www.prabinpanthi.com.np)
