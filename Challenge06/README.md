## Challenge 06: Converting [https://github.com/miasrisusanti/017FSWChallenge/tree/main/Challenge02](Challenge02) into ReactJS form.

Created with JavaScript, Node.js, and ReactJS.


### How to run this project?
1. Clone the repository
```
git clone https://github.com/miasrisusanti/017FSWChallenge
```

2. Change directory to Challenge06
```
cd/Challenge06
```

3. Install all dependencies package on package.json using
```
npm i
```

4. Check the config/config.json. Please change the `username` and `password` to match your settings in PostgreSQL. You can also change the `database` to the name of a database you may have created previously (please change it in the `test_sequelize.js` too). ___NOTE:__ If you haven't created one, please provide a name to create a new database. And then create the database with:_ 
```
npx sequelize-cli db:create
```

5. Run the migrations
```
npx sequelize-cli db:migrate
```

6. Run the seeds
```
npx sequelize-cli db:seed:all
```

7. Start the project
```
npm run start
```

8. You can see the project through localhost or using the API documentation in Postman or in /docs endpoint.


### Endpoint Explanation
(_All actions performed via this endpoint will be synchronized with the DBMS._)
1. GET / will open the root endpoint with a response of { "message": "Ping successful" }.
2. GET /cars will display the list of cars.
3. GET /cars/:id will retrieve a specific car's data from the list by its ID.
4. POST /cars will return a response with the newly created car data.
5. PUT /cars/:id will return a response with the updated data.
6. DELETE /cars/:id will return a response 204 No Content (data deleted).
7. API Documentation /docs will return API documentation.
   - Login Super Admin
     ```
     email: superadmin@gmail.com
     password: superadmin
     ```
