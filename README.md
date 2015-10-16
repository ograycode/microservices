This is my personal playground for exploring micro service architecture. It will not evolve beyond just an exmple.

# Install

This assumes you already have node and npm installed

  * `(sudo) npm install forever -g`
  * cd into frontend and  run `npm install`
  * cd into user and run `npm install`

# Usage

After installing all dependencies, in the microservices directory run `forever start dev/forever.json`. Then visit http://localhost:3000/. If everything is working correctly, you should see a single output -- "User: <id>, Fetched At: <now>".

# Architecture

The frontend server (in the frontend folder) is responsible for interacting with clients directly. It will field the request, get information from other services and the provide the response. In this case, the frontend queries the the user service (in the user folder) to get a random user to display to the client. 

While this example is useless at the moment, it is here to demonstrate concepts.
