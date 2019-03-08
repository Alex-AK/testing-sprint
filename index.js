// const express = require('express');

const server = require('./server/server.js')

const port = 4000
server.listen(port, () => {
  console.log("** listening on port 4000 **")
})