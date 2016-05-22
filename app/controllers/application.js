import Ember from 'ember';

export default Ember.Controller.extend({
  firstFile: null,

  actions: {
    addFiles(files) {
      this.set('firstFile', files[0].name);
    }
  }
});