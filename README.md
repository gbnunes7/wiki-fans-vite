
# Wiki for fans

Welcome to my repository, Wikipedia for fans. It showcases the main characters from your favorite series. By interacting with the cards, you can view details about the selected character.


## Table of Content

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
- [What's coming up](#whats-coming-up)
- [Conclusion](#conclusion)

## Introduction

This is my single-page application (SPA) developed to showcase my front-end portfolio. The front end is built with React, Vite, and JavaScript for optimal performance and dynamism. It is styled using Tailwind CSS with a mobile-first approach. I set up a JSON Server to simulate a REST API for mocking character data. The application uses React Router for client-side routing and incorporates Framer Motion and React Icons for animations images and icon integration. This combination of technologies has enabled me to create a powerful and scalable SPA.
## Technologies Used

**Front-end:** 
- **Vite:**: A build tool that boasts a faster and leaner development experience for modern web projects.

- **React:**: A JavaScript library for building user interfaces. It allows us to create reusable UI components.

- **JavaScript:** A dynamic programming language essential for creating interactive and responsive web applications, enabling seamless manipulation of web page content and user interface.

- **React-Router-Dom:** A routing library for React, enabling navigation among views.

- **TailwindCSS:** A utility-first CSS framework packed with classes like flex, pt-4, text-center and more to style your websites without leaving your HTML.

- **Git Flow:** A branching model for Git that provides a structured approach to managing feature development, releases, and hotfixes, streamlining collaboration and ensuring consistent workflows in software projects. This model follows Semantic Git Flow conventions and utilizes semantic versioning (x.y.z) for releases.

- **React Icons:** A library for adding scalable and customizable icons to React apps, supporting various icon sets with simple integration.

- **Framer Motion:** A library for creating smooth and interactive animations in React, offering powerful tools for animating components with ease and flexibility.

**Back-end:**

- **Json-Server:** A tool for setting up a full fake REST API with minimal configuration, ideal for prototyping and testing. It uses a db.json file to define and manage mock data. 


## Installation

To set up and run this single-page application (SPA) on your local machine, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Clone the Repository

```bash
git clone https://github.com/gbnunes7/wiki-fans-vite
```

### Navigate to Repository

```bash
cd wiki-fans-vite
```

### Install the dependencies

``` bash
npm install

json-server --watch db.json
```

### Starting the application

``` bash
npm run dev
```
This starts the React application on `http://localhost:5173` (or another available port).

### Deployed Version

You can also visit the deployed version of the application [here](https://github.com/ProgramadoresSemPatria/full-stack-template/edit/main/README.md).

## What's coming up

In the next version, new features will be added:

- Backend in Node.js
- Create your own character
- Create a series
## Conclusion

This application setup is intended to accelerate the development process by providing a cohesive blend of some of the best technologies in web development today. Whether you're looking to create a small prototype or build a large-scale application, this repository provides a solid foundation. Happy coding!

---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/gbnunes7/wiki-fans-vite/issues).

**Made by [Gabriel Melo](https://github.com/gbnunes7)**.
