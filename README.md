# Full Stack Development Test - Week Five

This assessment tests your understanding of building a full stack app using React, Node/Express, and MySQL.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called your_db_title: `create database your_db_title`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=foodPrint
  DB_PASS=root
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'food_emi_data' in your database.

- Make sure you understand how the `food_emi_data` table is constructed. In your MySQL console, you can run `use your_db_title;` and then `describe food_emi_data;` to see the structure of the food_emi_data table.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.

## FE Suggestions

Create a webpage with the following functionality:

- [ ] Search field for menus / ingredients.
- [ ] Recipe suggestions (random whenever threshold is reached OR based on user choices) 
- [ ] Styling: general styling, fix in-line styling, "heavy footer"
- [ ] Customize backend data: Make portions adjustable by the user
