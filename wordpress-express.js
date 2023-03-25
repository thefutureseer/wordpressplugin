// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const wpapi = require('wpapi');
const app = express();

// Configure WordPress API client
const wp = new wpapi({ endpoint: 'http://your-wordpress-site.com/wp-json/' });

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.get('/wp-api/posts', (req, res) => {
  wp.posts()
    .perPage(10)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Export the plugin
module.exports = app;
