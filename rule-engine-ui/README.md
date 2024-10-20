# Rule Engine Application

## Overview

This project is a Rule Engine Application consisting of a backend API built with Express and a frontend developed with React. The application allows users to create, combine, and evaluate rules based on various attributes.

- **Create Rule**: Allows users to input and create a new rule using a rule string.
- **Combine Rules**: Combines multiple rules into a single composite rule.
- **Evaluate Rule**: Evaluates rules against user-provided attributes and displays the results.

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Backend Setup

1. **Navigate to the Backend Directory**:

   ```bash
   cd rule-engine-ast
   npm install
   ```

2. **Configure the Mongo Database**:\
  Create a new MongoDB database and replace the `uri` in `app.js`

    ```
    const uri = '<YOUR_MONGODB_URI>'
    ```

3. **Start the Backend Server**:

   ```
   node index.js
   ```

   The server will be running at `http://localhost:3001`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:

    ```
    cd rule-engine-ui
    ```

2. **Install Dependencies**:

    ```
    npm install
    ```

3. **Start the Frontend Server**:

    ```
    npm start
    ```

    The frontend will be running at `http://localhost:3000`.

### Backend file structure

    ```
    rule-engine-ast/
    |
    ├── models/
    │   └── rule.js
    ├── controllers/
    │   └── ruleController.js
    ├── routes/
    │   └── ruleRoutes.js
    ├── services/
    │   └── ruleService.js
    ├── app.js
    └── index.js
    ```
   
### Frontend file structure


