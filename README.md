# Ceradev Portfolio

Welcome to the official repository for **Ceradev Portfolio**, a personal website for showcasing projects, skills, and career achievements. This project was built with modern technologies such as **Astro**, **React**, and **Tailwind CSS**, combining performance and interactivity for a seamless user experience.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This portfolio site is designed to provide a professional online presence, showcasing:

- Personal and career information.
- Technical skills and expertise.
- Projects with descriptions, technology stacks, and dynamic image carousels.
- Career timeline and education history.
- Contact details and social media links.

---

## Features

- **Modern Design**: A sleek, user-friendly design with responsive layouts.
- **Dynamic Content**: Projects, skills, and timeline sections generated dynamically from content collections.
- **Theming**: Light and dark mode toggling with theme persistence across routes.
- **Interactive Elements**:
  - Scroll animations using `ScrollFade`.
  - React-based components like a customizable image carousel.
- **Optimized Performance**: Astro's server-side rendering ensures fast load times.

---

## Tech Stack

- **Astro**: For building static and server-rendered pages.
- **React**: For interactive components (e.g., carousel).
- **Tailwind CSS**: For styling with a utility-first approach.
- **React Icons**: For integrating scalable vector icons.
- **TypeScript**: Ensures code reliability with static type checking.

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ceradev-portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd ceradev-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open the project in your browser:
   ```
http://localhost:3000
   ```

---

## Project Structure

```
├── src
│   ├── components      # Reusable components (e.g., Hero, ScrollFade, Carousel)
│   ├── layouts         # Base layouts for pages
│   ├── pages           # Individual page routes (e.g., About, Career)
│   ├── styles          # Global and component-specific styles
│   └── content         # Markdown files for projects and timeline data
├── public              # Static assets (e.g., images, fonts)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## Screenshots

### Homepage
![Homepage](public/assets/screenshots/homepage.png)

### Projects Section
![Projects Section](public/assets/screenshots/projects.png)

### Career Timeline
![Career Timeline](public/assets/screenshots/career.png)

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

