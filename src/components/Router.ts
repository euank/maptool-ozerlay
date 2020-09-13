import Vue from 'vue';

export default Vue.extend({
  name: 'Router',
  props: ['routes', 'currentRoute', 'state'],
  functional: true,
  render: function(h, context) {
    return h(context.props.routes[context.props.currentRoute], context.data);
  }
})
