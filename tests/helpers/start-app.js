import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

import uploadFile from './utils/upload-file'; // jshint ignore:line

const { run } = Ember;
const assign = Ember.assign || Ember.merge;

export default function startApp(attrs) {
  let application;

  let attributes = assign({rootElement: "#test-root"}, config.APP);
  attributes = assign(attributes, attrs); // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}