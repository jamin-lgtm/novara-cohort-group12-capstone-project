# Novara Cohort 2026 Capstone Project--Group 12

# 🌍 Planetary Science React Application

## Project Overview
This is a collaborative capstone project built using React.  
The application displays planetary data such as planet names, distance from the sun, gravity, and images.

It also includes a fully functional contact form with validation and user interaction features.

The goal of this project is to demonstrate:
- Component-based architecture in React
- API data fetching using Fetch API
- Form handling and validation
- Responsive design principles
- Team collaboration using Git and GitHub


## Live Demo
(we will paste our deployed-link-here)


## Tech Stack
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- Git & GitHub


## Project Structure

src/
│---assets
│---components/
│ │---Contact_Form.css
│ │---Contact_Form.jsx
│ │---Footer.css
│ │---Footer.jsx
│ │---Hero.css
│ │---Hero.jsx
│ │---InfoVideo.jsx
│ │---PlanetGallery.css
│ │---PlanetGallery.jsx
│ │--- PlanetTable.css
│ │---PlanetTable.jsx
│ │---SpaceBackground.css
│ │---SpaceBackground.jsx
│
│---App.css
└── App.jsx



## Features

### Planet Display Section
- Displays planet name
- Shows distance from the sun
- Displays planet images using `<figure>` element
- Shows planetary data in a structured table layout


### API Integration
- Uses Fetch API to retrieve planetary data
- Dynamically renders data in React components
- Handles loading and display states


### Contact Form
- Fully functional contact form
- Client-side validation
- Required fields validation
- Success message on submission
- Includes:
  - Full Name
  - Email
  - Phone Number
  - City selection
  - Message input
  - Contact preference (radio buttons)
  - Source tracking (checkboxes)


### Responsive Design
- Mobile-friendly layout
- Uses Flexbox and Media Queries
- Adjusts layout for different screen sizes


## Components Breakdown

| Component | Description |
|----------|-------------|
| Header | Navigation and branding |
| PlanetTable | Displays planetary data |
| ContactForm | Handles form input and validation |
| Footer | Contains team and project information |


## Team Members

- Team Lead: Your Name FELIX Aniebiet Benjamin (https://github.com/jamin-lgtm/novara-cohort-group12-capstone-project)
- Assistant Team Lead: Samuel David
- Developers: Luciana Okorie, Mary Nwandiogo,Johnson Ibiye Catherine,Ubighi O. Samuel,


## Git Workflow

- Each feature is developed on a separate branch
- Work is submitted via Pull Requests (PRs)
- PRs must be reviewed by another team member
- No self-review or self-merge allowed
- Only completed features are merged into `main`


## Deployment

This project can be deployed using:
- Vercel (Recommended for React)
- Netlify
- Render (for backend if needed)


## How to Run Project Locally

```bash
# Clone repository
git clone https://github.com/your-username/your-repo.git

# Move into project folder
cd your-repo

# Install dependencies
npm install

# Run development server
npm run dev
