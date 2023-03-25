// Load the express.js plugin
const app = require('./wordpress-express');

// Register the plugin with WordPress
function registerPlugin() {
  add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/posts', {
      methods: 'GET',
      callback: app.get('/wp-api/posts', (req, res) => {
        wp.posts()
          .perPage(10)
          .then(data => {
            res.json(data);
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      }),
    });
  });
}

// Call the registerPlugin function when the plugin is activated
add_action('plugins_loaded', 'registerPlugin');
