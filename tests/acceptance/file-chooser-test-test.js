import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance: File Upload');

test('upload file', function(assert) {
  visit('/');
  uploadFile('#file-chooser', ['test text'], {});

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('#first-file-text').text(), 'test.txt', {});
  });
});