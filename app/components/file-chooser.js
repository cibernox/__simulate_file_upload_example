import Ember from 'ember';

const { testing } = Ember;

export default Ember.Component.extend({
  label: 'choose a file',
  actions: {
    filesSelected(event) {
      const files = testing ? event.testingFiles: event.target.files;
      if (files.length === 0) {
        Ember.Logger.log('you must add a file');
      } else if (files.length > 0) {
        this.sendAction('action', files);
      }
    }
  }
});