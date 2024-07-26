# Assignment 1

## Overview

This project consists of three main tasks:
1. **OTP Form**: A form to input and verify an OTP.
2. **Batches Draggable**: A draggable list of batches.
3. **Course List Table**: A table displaying a list of courses.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  - [OTP Form](#otp-form)
  - [Batches Draggable](#batches-draggable)
  - [Course List Table](#course-list-table)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Git21221/masterji-assignment1.git
    ```
2. Navigate to the project directory:
    ```sh
    cd masterji-assignment1
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

- Navigate to `/otp-form` to use the OTP form.
- Navigate to `/batches` to use the draggable batches list.
- Navigate to `/course-list` to view the course list table.

## Features

### OTP Form

- **Route**: `/otp-form`
- **Functionality**: A form to input an OTP and verify it against a preset value (`1234`).
- **Validation**:
  - The OTP must be exactly 4 digits long.
  - The OTP must match the preset value (`1234`).
- **Hosted Route**: https://assignment-masterji.netlify.app/otp-form

### Batches Draggable

- **Route**: `/batches`
- **Functionality**: A list of batches that can be reordered via drag and drop.
- **Hosted Route**: https://assignment-masterji.netlify.app/batches

### Course List Table

- **Route**: `/course-list`
- **Functionality**: A table displaying a list of courses.
- **Hosted Route**: https://assignment-masterji.netlify.app/course-list

## Screenshots

### OTP Form
![OTP Form](public/image.png)
![OTP Form Validation](public/image2.png)
![OTP Form Success](public/image3.png)

### Batches Draggable
![Batches Draggable](public/image4.png)

### Course List Table
![Course List Table](public/course-list.png)

## Technologies

- React
- React Router
- HTML5
- CSS3
- JavaScript (ES6+)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
