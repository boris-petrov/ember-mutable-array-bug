import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Mixin from '@ember/object/mixin';
import MutableArray from '@ember/array/mutable';
import Observable from '@ember/object/observable';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

const properties = {
  replace(index, amount, objects = []) {
    console.log('replace called!');
    return this;
  },
};

const result = Mixin
  .create(MutableArray, Observable, properties)
  .without(['length'])
  .apply([]);

result.pushObject(123);

export default App;
