# rest-api for banking

##  REST api:
### List of basic routes:

|Route	|HTTP	| Description	|
| ----- |:---:| -----------:|
|`/`		|GET	|Index page		|

###List of users routes:

|Route	|HTTP		| Description				|
| ------|:-----:| -----------------:|
|`/users`	|GET		|Get all user of banking system	|
|`/user/:id`|GET		|Get just one user			|
|`/users`	|POST		|Adding a new user			|
|`/users`	|PUT		|Update a user data			|
|`/user/:id`|DELETE	|Remove a user data			|

##List of employees routes:

|Route		|HTTP		| Description				|
| ------- |:-----:| -----------------:|
|`/employees`	|GET		|Get all banking employees		|
|`/employee/:id`	|GET		|Get just one banking employee	|
|`/employees`	|POST		|Adding a new banking employee	|
|`/employees`	|PUT		|Update a banking employee data	|
|`/employee/:id`	|DELETE	|Remove a banking employee data	|

##List of accounts routes:

|Route		|HTTP		| Description				|
| ------- |:-----:| -----------------:|
|`/accounts`	|GET		|Get all banking employees		|
|`/account/:id`	|GET		|Get just one banking employee	|
|`/accounts`	|POST		|Adding a new banking employee	|
|`/accounts`	|PUT		|Update a banking employee data	|
|`/account/:id`	|DELETE	|Remove a banking employee data	|

##Exported Package (Using npm):

```
- Body Parser
- Express
- Express-jwt
- mysql
- helmet
- jwks-rsa
```

##Access the website via :

| MENU	|	LINK								|
| ----- |:-------------------:|
|index	|[http://localhost:3000](http://localhost:3000)		|
|accounts	|[http://localhost:3000/accounts](http://localhost:3000/accounts)	|
|users	|[http://localhost:3000/users](http://localhost:3000/users)	|
|employees	|[http://localhost:3000/emp](http://localhost:3000/employees)		|
