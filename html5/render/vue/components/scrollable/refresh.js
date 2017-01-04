import LoadingIndicator from './loading-indicator'

export default {
  // name: 'refresh',
  components: { LoadingIndicator },
  props: {
    display: {
      type: String,
      validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      height: 0
    }
  },
  methods: {
    show () {
      // TODO: no fixed height
      this.$emit('refresh')
      this.height = '120px'
      this.visibility = 'visible'
    },
    reset () {
      this.height = 0
      this.visibility = 'hidden'
      this.$emit('refreshfinish')
    }
  },
  render (createElement) {
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-refresh'
    }, this.$slots.default)
  }
}
