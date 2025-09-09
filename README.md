# Jose & Kir Wedding Website 💕

A beautiful, romantic wedding website for Jose and Kir's wedding on February 28th, 2025 in Murcia, Spain.

## Features

- **Romantic Design**: Soft color palette with rose gold and burgundy tones
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive RSVP**: Built-in RSVP form with guest management
- **Wedding Timeline**: Beautiful timeline of the day's events
- **Photo Gallery**: Space for engagement and couple photos
- **Contact Information**: Venue details and accommodation recommendations
- **Smooth Animations**: Elegant scroll animations and transitions
- **SEO Optimized**: Proper meta tags and structured data

## Quick Deployment

### Deploy to Netlify (Recommended)
1. Push this folder to GitHub
2. Connect your GitHub repository to [Netlify](https://netlify.com)
3. Deploy automatically - the `netlify.toml` file will handle the configuration
4. Your website will be live at `your-site-name.netlify.app`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow the prompts to deploy

### Deploy to GitHub Pages
1. Push to a GitHub repository
2. Go to Settings → Pages
3. Select source as "Deploy from a branch"
4. Choose main branch and root folder
5. Your site will be available at `username.github.io/repository-name`

## Customization

### Colors
The main colors can be changed in `styles.css`:
- Primary burgundy: `#8B4B6B`
- Rose gold: `#D4A574`
- Background: `#FFE8E8`

### Content
- Wedding details are in `index.html`
- Update dates, names, and venue information as needed
- Replace placeholder images in the gallery section

### RSVP Integration
The RSVP form currently shows a success message. To integrate with a backend:

1. **Netlify Forms** (Easiest):
   - Add `data-netlify="true"` to the form tag
   - Form submissions will appear in your Netlify dashboard

2. **EmailJS**:
   - Uncomment the EmailJS code in `script.js`
   - Sign up at [EmailJS](https://emailjs.com)
   - Replace the service and template IDs

3. **Custom Backend**:
   - Replace the `submitRSVP` function in `script.js`
   - Point to your API endpoint

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Optimized images and fonts
- Minimal JavaScript
- CSS animations for smooth performance
- Responsive design for all screen sizes

## Contact

For questions about the website, contact jose.kir.wedding@gmail.com

---

Made with ❤️ for Jose & Kir's special day