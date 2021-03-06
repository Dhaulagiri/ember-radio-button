import Ember from 'ember';

const {
  Component,
  Object: EmberObject
} = Ember;

export default Component.extend({
  greenObject: { name: 'green object' },
  blueObject: { name: 'blue object' },
  reservation: EmberObject.create({
    number: 'one'
  }),
  init() {
    this._super();
    this.set('selectedColorObject', this.get('blueObject'));
  }
});
