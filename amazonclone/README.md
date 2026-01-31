# Amazon Clone

A static front-end clone of the Amazon homepage featuring responsive navigation, product cards, hero section, and footer. Built with HTML and CSS to replicate Amazon's UI design.

## What This Is

A pixel-perfect recreation of Amazon's homepage interface including:
- Navigation bar with search functionality
- Product category panels
- Hero banner with gradient fade
- Product showcase cards
- Multi-column footer

## Files

- `amazon.html` - Main HTML structure
- `style.css` - Complete styling
- Images folder (product images, logos, hero banner)

## Features

**Navigation Bar:**
- Amazon logo
- Location selector (Deliver to Nepal)
- Search bar with category dropdown
- Language/currency selector (US flag, EN)
- Account/Lists dropdown
- Returns & Orders link
- Shopping cart icon

**Secondary Panel:**
- "All" menu with hamburger icon
- Quick links (Today's Deals, Customer Service, Registry, Gift Cards, Sell)

**Hero Section:**
- Large background image
- Gradient fade effect from solid to transparent

**Product Cards (8 cards):**
1. Find gifts at any price (4 categories)
2. Shop gifts by recipient (4 categories)
3. Gaming accessories (4 items with images)
4. Delightful deals (single image)
5. Deals in PCs (single image)
6. Small gifts under $20 (single image)
7. Shop deals in Fashion (4 categories)
8. Level up beauty routine (4 categories)

**Footer:**
- 4-column information grid
- Logo and language/currency selectors
- Copyright and legal links

## Color Scheme

**Header:**
- Dark green gradient: `#003e33` to `#04724b`
- Secondary panel: `#095749`

**Search:**
- Magnifying glass button: `#a8176d`
- Hover border: `#b3588e`

**Background:**
- Page background: `#e2e6e7`
- Cards: `#ffffff`

**Footer:**
- Main section: `#232f3f`
- Copyright: `#131a22`

**Text:**
- Primary: White
- Secondary: `#cccccc`
- Links: `#007185`

## Layout Structure

```html
<header>
  <div class="navbar">...</div>
  <div class="panel">...</div>
</header>

<div class="hero"></div>

<div class="shop">
  <div class="outer">...</div> (×8)
</div>

<footer>
  <div class="footer-instruction">...</div>
  <div class="footer-items">...</div>
  <div class="footer-copyright">...</div>
</footer>
```

## CSS Highlights

### Flexbox Navigation:
```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

### Hero Gradient Mask:
```css
.hero {
    -webkit-mask-image: linear-gradient(#ffffff 35%, rgba(0,0,0,0));
    mask-image: linear-gradient(#ffffff 35%, rgba(0,0,0,0));
}
```

### Product Grid:
```css
.shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
```

### Card Layout:
```css
.outer {
    height: 385px;
    width: 320px;
    background-color: #ffffff;
}

.inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
```

## Navigation Features

**Search Bar:**
- Dropdown category selector
- Full-width search input
- Magnifying glass button
- Hover effect (pink border)

**Location:**
- Delivery location with pin icon
- Country selector

**Account Section:**
- "Hello, sign in" text
- Account & Lists dropdown indicator
- Returns & Orders link

**Cart:**
- Shopping cart icon
- Cart label

**Secondary Menu:**
- All menu with bars icon
- Category links with hover effects

## Product Card Types

### Type 1: Four-Image Grid
- 2×2 grid of product images
- Text labels on images
- "See more" link

### Type 2: Single Large Image
- Full-size product image
- "Shop now" link

**Card Structure:**
```html
<div class="outer">
  <p class="up">Title</p>
  <div class="inner">
    <!-- Images or grid -->
  </div>
  <p class="down">Link text</p>
</div>
```

## Image Background Technique

Products use CSS background images:
```css
.first {
    background-image: url(headphone.jpg);
    background-repeat: no-repeat;
}
```

**Benefits:**
- Easy positioning
- Text overlay
- Consistent sizing
- No HTML clutter

## Footer Structure

**Section 1: Information Grid**
- 4 columns
- Links organized by category
- Get to Know Us, Make Money, Payment, Help

**Section 2: Settings Bar**
- Amazon logo
- Language selector (English)
- Currency selector (USD)
- Country selector (United States)

**Section 3: Copyright**
- Legal links
- Copyright notice

## Typography

**Fonts:**
- Primary: Arial (throughout)

**Sizes:**
- Card titles: 1.3rem (bold)
- Navigation: 0.88rem
- Links: 0.8rem
- Labels: 0.75rem

## Hover Effects

**Navigation Items:**
```css
.border:hover {
    border: 1px solid white;
    border-radius: 2px;
}
```

**Search Bar:**
```css
.selection-search:hover {
    border: 3px solid #b3588e;
}
```

## Responsive Considerations

**Fixed Widths:**
- Search bar: 900px
- Cards: 320px each
- Hero: 85px margins

**Flexible Elements:**
- Navigation uses flexbox
- Product grid wraps automatically
- Footer columns use flex

## Key CSS Techniques

### Gradient Background:
```css
background: linear-gradient(to right, #003e33, #04724b);
```

### Mask Image (Hero Fade):
```css
-webkit-mask-image: linear-gradient(#ffffff 35%, rgba(0,0,0,0));
```

### Negative Margin (Overlap):
```css
.shop {
    position: relative;
    top: -320px;
    margin-bottom: -320px;
}
```

### Flexbox Spacing:
```css
justify-content: space-between;
align-items: center;
```

## Product Categories Shown

**Gaming:**
- Headsets, Keyboards, Mice, Chairs

**Gifts by Price:**
- Under $10, $25, $50, $75

**Gifts by Recipient:**
- Him, Her, Kids, Teens

**Fashion:**
- Jeans, Tops, Dresses, Shoes (under various prices)

**Beauty:**
- Makeup, Brushes, Sponges, Mirrors

## Icon Usage

**Font Awesome Icons:**
- Location pin
- Magnifying glass
- Shopping cart
- Hamburger menu
- Caret down/up
- Globe
- Dollar sign

## File Structure

```
.
├── amazon.html           # Main HTML
├── style.css            # All styling
├── amazon logo.png      # Amazon logo
├── us.png              # US flag
├── hero.jpg            # Hero banner
├── download.jpg        # Favicon
└── [product images]    # Various product photos
```

## Design Details

**Logo:**
- 113px width
- Contains image on bottom alignment

**Search:**
- Three parts: dropdown, input, button
- Total height: 40px
- Rounded left and right edges

**Cards:**
- 385px height (including padding)
- 320px width
- White background
- 10px spacing between

**Footer Columns:**
- 210px width each
- 45px right margin
- Organized link lists

## Browser Compatibility

Works on:
- Chrome/Edge
- Firefox
- Safari
- Modern mobile browsers

## No JavaScript Required

Completely static HTML/CSS:
- No interactive features
- Pure visual clone
- Fast loading
- Easy to host

## How to Use

1. Open `amazon.html` in browser
2. View the static clone
3. All images must be in same directory
4. No server required

## Learning Outcomes

This project demonstrates:
- **Flexbox** for navigation
- **CSS Grid** alternative (flex-wrap)
- **Background images** for products
- **Gradient masks** for hero effect
- **Positioning** techniques (relative, absolute)
- **Hover states** for interactivity
- **Multi-section layout** structure
- **Footer design** patterns

## Limitations

**Static Only:**
- No search functionality
- No dropdown menus work
- No cart functionality
- Links don't navigate
- No responsiveness for mobile

**Image Dependent:**
- Requires all image files
- Paths must be correct
- Images must be sized appropriately

## Future Enhancements

**For Full Functionality:**
- Add JavaScript for dropdowns
- Implement search logic
- Make links functional
- Add responsive breakpoints
- Implement cart system
- Add product pages
- Include hover zoom on products

## Styling Tips

**Card Hover:**
Could add hover effects:
```css
.outer:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: translateY(-2px);
}
```

**Link Colors:**
Already styled:
- Normal: `#007185` (teal)
- Hover: red (in portfolio version)

## Image Requirements

**Product Images:**
- Format: JPG
- Dimensions: 155×150px (grid items)
- Or: 320×300px (full cards)

**Logo:**
- Format: PNG (transparent)
- Approximate: 100×40px

**Hero:**
- Format: JPG
- Large: 1200px+ width

## Performance

**Optimizations:**
- Minimal CSS (no framework)
- No JavaScript overhead
- Background images (no HTML img tags)
- Simple selectors

**Load Time:**
- Fast (static HTML/CSS)
- Image-dependent
- No external dependencies (except Font Awesome)

## Credits

- Design: Amazon.com
- Icons: Font Awesome
- Built for educational purposes

## License

Educational project - for learning purposes only.
Amazon and all related marks are trademarks of Amazon.com, Inc.
