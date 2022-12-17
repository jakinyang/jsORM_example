# README (no, really)

## Introduction
This repo has branches for each method of interacting with the database: one with the node-postgres client and two with ORM libraries. Checkout (git checkout \<branchname\>) to see the code with that method.

The main branch has a basic version of the node-postgres method and the schema/seedfiles as well as a test example query in:
``` db/queries/exampleQuery.js.```

If you don't already have PostgreSQL, I would strongly recommend going to the method/pg branch and going through the setup for PostgreSQL and the baseline database.

```sh
git checkout method/pg
```