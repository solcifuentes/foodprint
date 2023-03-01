# Full Stack Development Test - Week Five

This assessment tests your understanding of building a full stack app using React, Node/Express, and MySQL.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called your_db_title: `create database your_db_title`
- Create a table called 'food_emi_data' in your your_db_title database
- Import the data from the dataset .csv from the data folder:

    DROP TABLE IF EXISTS food_emi_data;
    CREATE TABLE food_emi_data (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    food_item VARCHAR(200),
    emi_kg DECIMAL(6, 1),
    emi_port DECIMAL(6, 1),
    food_cat VARCHAR(200)
    );

    LOAD DATA LOCAL INFILE './footprints_clean.csv'   /*use correct path to location where you store this file*/
    INTO TABLE food_emi_data
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    -- skip the first row with labels
    IGNORE 1 ROWS
    -- assign the data to these two columns
    (country, pay_gap);
    
- If you see the following error when you try to import…

    ERROR 3948 (42000) at line 21: Loading local data is disabled; this must be enabled on both the client and server sides

  …then type this in the MySQL CLI and try again:
    set global local_infile = true;


- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=foodPrint
  DB_PASS=root
```

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
