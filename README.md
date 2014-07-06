# vue-director (WIP)

** CAUTION: This is a work in progress, please report bugs in github issues.

VueDirector extends Vue to add a new option called route, this route option takes
`director` style routes for each component:

## Usage

On each component, just define your route as one of your options:

The route is an object that uses the `director` convention { route: fn }

** VueDirector depends on the convention `currentView` to be specified as the
   component `v-view` navigation variable.

``` js
var VueDirector = require('vue-director');

var app = new VueDirector({
  el: '#app',
  data: {
    currentView: 'home'
  },
  components: {
    'home': {
      route: {
        '/': function() {
          console.log('at home!');
        }
      },
      template: '<h1>Home</h1>',
    },
    'about': {
      route: {
        '/:id': function(id) {
          console.log('at ' + id);
        }
      },
      template: '<h1>About</h1>'
    }
  }
});
```
