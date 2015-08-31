import DS from 'ember-data';

// export default DS.RESTAdapter.reopen({
//   namespace: 'api'
// });

export default DS.LSAdapter.extend({
  namespace: 'api'
});
