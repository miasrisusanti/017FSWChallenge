Tugas 3: Create a HTTP server using Express.js & suitable to RESTful API's rules.

Created with JavaScript, Node.js/Express.js, and tested with Postman.

API Documentation: `https://www.postman.com/miesedapkrispi/workspace/api-mia/collection/29759373-66cdd7cd-87d4-4d61-a55f-f5ac700beb72?action=share&creator=29759373`

How to run this project:
1. Clone the repository `git clone https://github.com/miasrisusanti/017FSWChallenge`
2. Change directory to Challenge03 `cd/Challenge03`
3. Install all dependencies package on package.json using `npm i`
4. Start the project `npm run start`
5. You can see the project through localhost or using the API documentation in Postman.

Endpoint explanation:
1. GET / will open the root endpoint with a response of { "message": "Ping successful" }.
2. GET /cars will display the list of cars.
3. GET /cars/:id will retrieve a specific car's data from the list by its ID.
4. POST /cars will return a response with the newly created car data.
5. PUT /cars/:id will return a response with the updated data.
6. DELETE /cars/:id will return a response with the deleted data.
