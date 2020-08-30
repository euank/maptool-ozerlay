
<script>
export default {
  name: 'Router',
  props: ['routes', 'currentRoute', 'state'],
  functional: true,
  render: function(h, context) {
    return h(context.props.routes[context.props.currentRoute], context.data);
  }
}
</script>
