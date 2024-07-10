# Movie reviews project
* Technologies: HTML, CSS, VanillaJS, Node.js, MongoDB

* First install Node.js. For more information click this link https://nodejs.org/en/download/package-manager

* Create a .env file in the project root folder
* Provide username and password for database connetction with MongoDB
```bash
MONGO_USERNAME=xxxx
MONGO_PASSWORD=xxxx
```

* (Optional) Install Live Server on vscode
* Then, app goes live on (localhost) 127.0.0.1:[port]

* Run backend API with Node.js:
```bash
node --env-file=.env index.js
```
* Now, you can search with searchbar tool or click on 'reviews for' and create a review for the movie you want.
* You can save, edit and delete a review or just see the already saved reviews for that particular movie.
