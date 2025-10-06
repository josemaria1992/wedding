# Wedding Website - Lara & Ignacio

A beautiful, responsive wedding website created for Lara and Ignacio's wedding on October 18, 2025, in Córdoba, Spain.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Countdown Timer**: Live countdown to the wedding day
- **RSVP Form**: Guests can confirm their attendance
- **Multiple Sections**:
  - Welcome message
  - Event timeline (ceremony, cocktail, reception)
  - RSVP/Contact form
  - Recommendations (hotels, restaurants, attractions)
  - International guests information
  - Gift registry
- **Bilingual Support**: Spanish/English language switcher (basic implementation)
- **Cookie Consent**: GDPR-compliant cookie banner
- **Smooth Animations**: Scroll-based animations and transitions
- **Mobile Navigation**: Hamburger menu for mobile devices

## How to Launch

### Option 1: Open Directly (Simplest)
1. Double-click on `index.html` to open it in your default browser

### Option 2: Using Live Server (Recommended for Development)
If you have VS Code installed:
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open in your browser with auto-reload on changes

### Option 3: Using Python
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 4: Using Node.js
If you have Node.js installed:
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server

# Then open: http://localhost:8080
```

## Customization Guide

### 1. Update Wedding Information

Edit `index.html` to change:
- **Names**: Search for "Lara & Ignacio" and replace
- **Date**: Change "18 de Octubre de 2025" and update the countdown date in `script.js` (line 48)
- **Location**: Update "Córdoba, España"
- **Contact emails/phones**: Update in the RSVP section

### 2. Update Event Details

In the "El Día" section, modify:
- Ceremony time and location
- Cocktail time and location
- Reception time and details
- Google Maps links

### 3. Change Colors

Edit `styles.css` (lines 11-18):
```css
:root {
    --primary-color: #c43c13;  /* Main accent color */
    --secondary-color: #f1ece0; /* Background color */
    /* ... other colors ... */
}
```

### 4. Add Your Own Hero Image

Replace the hero section background in `styles.css` (around line 145):
```css
.hero {
    background: url('your-image.jpg') no-repeat center center;
    background-size: cover;
}
```

Or use an online image:
```css
.hero {
    background: url('https://your-image-url.com/image.jpg') no-repeat center center;
}
```

### 5. Configure RSVP Form

The form currently logs data to console. To make it functional:

**Option A: Use Google Forms**
- Create a Google Form
- Link the form to your RSVP section

**Option B: Use Formspree**
1. Sign up at https://formspree.io
2. Update the form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C: Use EmailJS**
1. Sign up at https://www.emailjs.com
2. Uncomment and configure the EmailJS code in `script.js` (lines 185-194)

## File Structure

```
WeddingWeb/
├── index.html      # Main HTML file with all content
├── styles.css      # All styles and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Further Customization

1. **Add Photos**: Create an image gallery section with your engagement photos
2. **Add Music**: Background music that plays on page load (optional)
3. **Add Instagram Feed**: Embed a wedding hashtag feed
4. **Add Registry Links**: Update the gift registry section with your actual registry links
5. **Translation**: Implement full bilingual content by duplicating sections or using a translation library

## Hosting Options (To Make it Live)

### Free Hosting:
- **Netlify**: Drag and drop deployment (recommended)
- **GitHub Pages**: Host directly from a GitHub repository
- **Vercel**: Simple deployment with custom domain support
- **Firebase Hosting**: Google's hosting solution

### Steps to Deploy on Netlify (Easiest):
1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop your `WeddingWeb` folder
4. Get a free URL like `yourwedding.netlify.app`
5. Optional: Connect a custom domain

## Need Help?

Common issues:
- **Countdown not working**: Check the date format in `script.js` line 48
- **Form not submitting**: You need to configure a form handler (see section 5 above)
- **Styling issues**: Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## License

Feel free to use this template for your own wedding website!

---

Made with ❤️ for Lara & Ignacio
