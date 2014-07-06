var Router = require('director').Router;
var Vue = require('vue');
var _ = require('underscore');

module.exports = Vue.extend({
  created: function() {
    var app = this;
    var routes = _(this.$options.components).reduce(function(m, v, k) {
      var routeInfo = _.chain(v.options.route).pairs().first().value();
      m[routeInfo[0]] = function() {
        var args = Array.prototype.slice.call(arguments);
        app.currentView = k;
        routeInfo[1].apply(v, args);
      };
      return m
    }, {});

    var router = new Router(routes);
    router.init();
  }
});
