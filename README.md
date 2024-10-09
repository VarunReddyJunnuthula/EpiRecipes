# EpiRecipes Search

## Project Description

EpiRecipes Search is a web application that allows users to search for recipes based on ingredients and dish names. The application leverages a backend built with Flask, which communicates with an OpenSearch database to fetch relevant recipe information. The frontend is built using React, providing a responsive and user-friendly interface.

## Objectives

- To create a searchable database of recipes.
- To allow users to input search queries and receive relevant results.
- To implement a clean and responsive user interface using React.
- To integrate Flask and OpenSearch for backend functionalities.

## Features

- Search for recipes by name or ingredients.
- Display detailed information for each recipe, including ingredients and cooking instructions.
- Responsive design for optimal viewing on various devices.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Technologies Used

- **Frontend**: React
- **Backend**: Flask
- **Database**: OpenSearch
- **Version Control**: Git

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- [Python](https://www.python.org/downloads/) (version 3.8 or above)
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [OpenSearch](https://opensearch.org/) (configured and running)

### Step-by-Step Installation

#### 1. Clone the Repository

First, clone the repository to your local machine:

``bash
git clone https://github.com/VarunReddyJunnuthula/EpiRecipes.git
cd EpiRecipes.

#### 2. Set Up the Backend
Navigate to the backend directory and set up the Flask environment
cd backend

Create a virtual environment:
python -m venv venv

Activate the virtual environment:

Windows:
.\venv\Scripts\activate

Linux/macOS:
source venv/bin/activate

Install required Python packages:
pip install -r requirements.txt

#### 3. Set Up the Frontend
Next, navigate to the frontend directory and install the necessary packages:
cd ../frontend

Install Node.js dependencies:
npm install

#### 4. Start the Applications
Starting the Backend

Run the Flask application:

python app.py

Starting the Frontend

In another terminal, navigate to the frontend directory and run:

npm start

This will start the React development server and open the application in your default web browser.

### Usage
Open your browser and go to http://localhost:3000 to access the application.
Use the search bar to find recipes by name or ingredients.
### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements, bug fixes, or new features.

