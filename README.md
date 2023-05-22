# Chooose Me

Chooose Me is a React application that allows users to see a bunch of hardcoded data into public/db.json. It provides a visually appealing and interactive interface for selecting and comparing options.

## Features

- Display options with relevant information such as countries, days, emission offset, and trip rating.
- Use star ratings to indicate the quality or popularity of each option.
- Show the emission offset of each option in a visually appealing way.
- Responsive design to provide an optimal viewing experience on different devices.
- config.js allows the user to switch from public/db.json file and go to endpoint http://localhost:4000/data, from which it will also take the file

## Installation

1. Clone the repository: `git clone https://github.com/your-username/chooose-me.git`
2. Navigate to the project directory: `cd chooose-me`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit: `http://localhost:3000`



## Customization

- Modify the `data` object in `DataItem.tsx` to provide your own data for the options.
- Customize the styles in `App.css` to match your desired visual design.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Chakra UI: A simple, modular, and accessible component library for React.
