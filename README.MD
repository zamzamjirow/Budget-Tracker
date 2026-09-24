```markdown
# SpendWise Dashboard - Week 4

## Description

SpendWise is a responsive financial dashboard created using HTML and CSS.

This Week 4 project focuses on creating a modern dashboard layout using CSS Grid, Flexbox, CSS custom properties, responsive design, and card micro-interactions.

## Project Files

### index.html

The `index.html` file contains the structure of the SpendWise dashboard.

It includes:

- A sidebar navigation menu
- A dashboard header
- User profile information
- Six financial category cards
- Monthly spending information
- Available balance information

The six category cards are:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

### style.css

The `style.css` file controls the layout, appearance, responsiveness, and interactions of the dashboard.

It uses:

- CSS Grid for the overall dashboard layout
- CSS Grid for the financial cards
- Flexbox for the sidebar navigation
- Flexbox for the dashboard header
- Flexbox inside the financial cards
- CSS custom properties for the color theme
- Responsive media queries
- Hover and keyboard focus effects

## CSS Custom Properties

The project defines theme variables in `:root` for:

- Brand color
- Accent color
- Surface color
- Background color
- Primary text color
- Secondary text color

## Responsive Design

The dashboard changes to a single-column layout below 768px.

The responsive layout was tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

The financial cards have hover and keyboard focus effects.

The cards use `transform` and `box-shadow` with a 200ms transition.

## Dark Theme

A dark theme was added using:

`@media (prefers-color-scheme: dark)`

The dark theme overrides the CSS custom properties to create a darker color palette.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Responsive Media Queries
```
