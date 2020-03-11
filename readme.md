# SeeSee

<!-- [![time tracker](https://wakatime.com/badge/github/DanyDodson/seesee.svg)](https://wakatime.com/badge/github/DanyDodson/seesee) -->

[![time tracker](https://wakatime.com/badge/github/danydodson/seesee.space.svg)](https://wakatime.com/badge/github/danydodson/seesee.space)

> Social network for developers

## Quick Start

```
# create .env file in root of api directory

# create .env file in root of client directory

# add uri of your mongodb connection for example

> mongo": "mongodb://localhost/seeseedev

```

```bash
# Install server dependencies
cd api && npm install

# Install client dependencies
cd client && npm install

# Run api from root
npm run server

# Run react client from root
npm run client

# Build react client for production
npm run build
```

## App Info

### Author

Dany Dodson
[Dany Dodson](http://www.google.com)

### Version

1.0.0

### License

This project is licensed under the MIT License

### root dev-deps
concurrently husky lint-staged prettier

### api deps
@babel/cli @babel/core @babel/node @babel/preset-env agenda await-to-js bcryptjs cookie-parser cors dotenv errorhandler eventemitter3 express express-async-handler express-jwt express-validator helmet jsonwebtoken mailgun-js method-override mongoose slugify typedi winston

### api dev-deps
eslint jest nodemon

### client deps
axios jwt-decode logrocket logrocket-react moment react react-dom react-moment react-redux react-router-dom react-scripts react-toastify redux redux-devtools-extension redux-thunk uuid