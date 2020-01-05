
#MEAN: MongoDB, Express, Angular & Node

This is a template to work with RESTful in express connected to mongoDB, extract information and draw it with AngularJS.

##Prerequisites

Is needed a mongoDB instanciation or agent
Insert some info with the user of curl and PUT to make some examples:

```
curl -XPOST http://localhost:3000/todos -d 'name=Master%20Routes&completed=false&note=soon'
```

##Install

Start with 

```
npm install && npm run 
```

### Tips to develop

Use nodaemon to save and autorestart the server (node-dev or forever are useful as well)

```
# install nodemon globally
npm install nodemon -g

# Run web server with nodemon
nodemon
```