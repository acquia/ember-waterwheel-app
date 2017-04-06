import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.uuid, {include: 'uid'});
  },

  setupController(controller /*, model*/) {
    this._super(...arguments);

    // Side-load all tags so we can autocomplete based on them
    controller.set('tags', this.store.findAll('tag'));

    // @todo - un-hardcode these
    controller.set('text_formats', [
      {value: 'basic_html', label: 'Basic HTML'},
      {value: 'plain_text', label: 'Plain Text'},
      {value: 'invalid!', label: 'Invalid!'}
    ]);
  },

  actions: {
    willTransition() {
      this._super(...arguments);
      this.controller.get('model').rollbackAttributes();
    },

    save() {
      let record = this.controller.get('model');
      record.save()
        .then(() => this.transitionTo('articles'))
        .catch((adapterError) => {
          Logger.error("Save failed:", adapterError);
        });
    },

    cancel() {
      window.history.back();
    },

    delete() {
      let record = this.controller.get('model');
      record.destroyRecord()
        .then(() => {
          this.store.unloadRecord(record);
          this.transitionTo('articles');
        })
        .catch((reason) => Logger.error("Delete failed:", reason));
    }
  }
});
