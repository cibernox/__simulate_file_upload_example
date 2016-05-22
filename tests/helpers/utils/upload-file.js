/* global Blob */

import Ember from 'ember';

function createFile(content = ['test'], options = {}) {
  const {
    name,
    type
  } = options;

  const file = new Blob(content, {type : type ? type : 'text/plain'});
  file.name = name ? name : 'test.txt';

  return file;
}


export default Ember.Test.registerAsyncHelper('uploadFile', function(app, selector, content, options) {
  const file = createFile(content, options);

  return triggerEvent(
    selector,
    'change',
    { testingFiles: [file] }
  );
});