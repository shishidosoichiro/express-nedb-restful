# express-nedb-restful

## Installation

not yet.

```sh
$ npm install express-nedb-restful
```

## How to use

```javascript
var express = require('express');
var nedb = require('nedb');
var restful = require('express-nedb-restful');

var app = express();

var users = new nedb.DataStore();
app.use('users', restful(users));

```
