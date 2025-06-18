const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ananthsarvesh.github.io/cleanfolio',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ananthsarvesh S B',
  role: 'Java Backend Developer',
  description:
    'I’m a passionate Java Backend Developer with 3+ years of experience building scalable and secure REST APIs using Spring Boot, Microservices, and MySQL in the BFSI domain. I enjoy solving real-world problems with clean code, strong logic, and efficient architecture.\nCurrently, I’m enhancing my skills in System Design, Kafka, and DSA, aiming to join top-tier product companies. I believe in continuous learning, sharing knowledge, and building side projects that reflect my skills and growth.',
  resume: 'https://drive.google.com/file/d/1BCmT62IXlbTFw9GhsPEoMURPLkF1VT_e/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/ananthsarvesh724',
    github: 'https://github.com/ANANTHSARVESH',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'E-Commerce Backend Application',
    description:
      'E-Commerce Application with Spring Boot This is a simple e-commerce application built using Spring Boot, JWT Authentication, and MySQL. The application is designed to support two roles: USER and ADMIN, and provides functionality to manage products and categories in an online store.',
    stack: ['Java', 'MySQL', 'Spring Boot', 'Hibernate', 'JWT'],
    sourceCode: 'https://github.com/ANANTHSARVESH/ECommerce.git',
    // livePreview: 'https://github.com',
  },
 /* {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }, */
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Spring Boot',
  'Microservices',
  'Hibernate',
  'RESTful APIs',
  'JWT',
  'PL/SQL',
  'JUnit',
  'Git',
  'Postman API',
  'Swagger',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ananthsarvesh724@gmail.com',
}

export { header, about, projects, skills, contact }

// Package.json
//  "scripts": {
//    "start": "react-scripts start --openssl-legacy-provider",
//    "build": "react-scripts build --openssl-legacy-provider",
//    "test": "react-scripts test --openssl-legacy-provider",
//    "eject": "react-scripts eject --openssl-legacy-provider",
//    "lint": "eslint .",
//    "format": "prettier --write \"**/*.+(js|jsx|json|css|md)\"",
//    "deploy": "gh-pages -d build"
//  },