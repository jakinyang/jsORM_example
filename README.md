# README (no, really)

## Introduction
This repo and blog post uses postgres (because I know nothing \[else\]). If you already have a different RDBMS, I would recommend following along with PostgreSQL for now, and the knowledge should transfer as the ORM libraries we cover support most of the popular RDBMS out there.

If you don't have NodeJS installed, I recommend going to their website and following their [instructions](https://nodejs.org/en/)
## Cloning this repository
  1. Fork this repository
  2. Clone via SSH or HTTP
## Installing PostgreSQL
  1. You're going to need [PostgreSQL](https://www.postgresql.org/download/)
      * Follow the instructions on one of the options for your computer's operating system
  2. Initialise the database cluster and start the database
      * This will depend on what system you are on and what install method you used
      *  If you get lost at this poin, here are some relatively recent (as of 2022) video tutorials for some operating systems to light your way:
          * [Mac](https://www.youtube.com/watch?v=wTqosS71Dc4&ab_channel=Prisma)
          * [Linux](https://www.youtube.com/watch?v=4CsTtMj6214&ab_channel=computeriseasy)
          * [Windows](https://www.youtube.com/watch?v=0n41UTkOBb0&ab_channel=GeekyScript)
  3. Go to the root of this directory and run 'psql'
      * Psql is an interactive terminal for PostgreSQL: a way for you to interact with the PostgreSQL database from the commandline
      * After running this command, you should see some kind of confirmation that psql is running (usually a version number and a prompt for the "help" command)

        ```sh
        > psql
        ```

  4. Create the user and database
      * Run these commands to create a user that matches our node-postgres configuration
        ```sh
         CREATE DATABASE cheeseparty;
         CREATE USER cheesepartyhost WITH PASSWORD "cheeseforever";
         GRANT ALL PRIVILEGES ON DATABASE "cheeseparty" TO cheesepartyhost;
        ```
      * After this you should be able to connect to the 'cheeseparty' database as 'cheesepartyhost'
          * Exit out of psql by running this command

            ```sh
            \q
            ```
  5. Connect to the cheeseparty database as the new user
      * This command may or may not prompt you for the password 'cheeseforever'
        ```sh
        > psql -U cheesepartyhost cheeseparty
        ```
  6. Run the schema and seedfiles to get your mock tables and data for your cheese party
      * The schemas and seeds are numbered in order they should be run because some of the later seeds depend on other data as their foreign keys
      * Run these commands in order in psql while connected to the cheeseparty database
        ```sh
        \i db/schema/00_cheeses.sql
        \i db/schema/01_ingredients.sql
        ...
        \i db/schema/04_cheese_categories.sql
        ```
        ```sh
        \i db/seeds/00_cheeses.sql
        \i db/seeds/01_ingredients.sql
        ...
        \i db/seeds/04_cheese_categories.sql
        ```
      * If you see errors related to 