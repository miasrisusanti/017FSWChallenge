## Challenge 04: Create a HTTP Server for managing car data via DBMS

Created with JavaScript, Node.js/Express.js, PostgreSQL, and tested with [Postman](https://www.postman.com/miesedapkrispi/workspace/api-mia/collection/29759373-66cdd7cd-87d4-4d61-a55f-f5ac700beb72?action=share&creator=29759373).

[Cars Management Entity Relationship Diagram](https://dbdiagram.io/d/Car-Management-651feaebffbf5169f02c8375)

![ERD](https://github.com/miasrisusanti/017FSWChallenge/blob/b6cb03fdb2c9345b10ecb0f74272bfd73b2a2cc5/Challenge04/ERD-Car%20Management.png)

### How to run this project?
1. Clone the repository ```git clone https://github.com/miasrisusanti/017FSWChallenge```
2. Change directory to Challenge03 ```cd/Challenge03```
3. Install all dependencies package on package.json using ```npm i```
4. Check the config/config.json. Please change the `username` and `password` to match your settings in PostgreSQL. You can also change the `database` to the name of a database you may have created previously. ___NOTE:__ If you haven't created one, please provide a name to create a new database. And then create the database with_ ```npm run db:create```
5. Run the migrations ```npx sequelize-cli db:migrate```
6. Run the seeds ```npx sequelize-cli db:seed:all```
7. Start the project ```npm run start```
8. You can see the project through localhost or using the API documentation in Postman.



