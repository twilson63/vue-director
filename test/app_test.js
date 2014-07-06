var domify = require('domify');
var appHtml = [
  "<h1>App Test</h1>",
  "<div id=\"app\">",
    "<div v-view=\"currentView\"></div>",
  "</div>"
  ].join('\n')

document.body.appendChild(
  domify(appHtml)
);

var VueDirector = require('../');

var app = new VueDirector({
  el: '#app',
  data: { currentView: 'home' },
  route: '/',
  components: {
    'home': {
      route: {
        '/': function(foo, bar) {
          console.log('routed to home!');
        }
      },
      template: "<h1>Home</h1><a href=\"#/about/foo\">About</a>"

    },
    'about': {
      route: {
        '/about/:id': function(id) {
          console.log(id);
          console.log('routed to about');
        }
      },
      template: "<h1>About</h1><a href=\"#/\">Home</a>"
    }
  },
  created: function() {
    console.log('BeepBoop');
  }
});
