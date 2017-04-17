import Ember from 'ember';

/**
 * A route for displaying details for a specific Tag.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tag', params.id);
  },

  afterModel(tag /*, transition*/) {
    // Side-load articles tagged with this tag, so they can be listed by the template
    this.store.query('article', { 'field_tags.uuid': tag.get('id') });
  }
});
