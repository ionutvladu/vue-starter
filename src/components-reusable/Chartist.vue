<template>
    <div class="v-chartist-container"></div>
</template>

<script>
import Chartist from 'chartist'
import 'chartist-plugin-legend'
import 'chartist-plugin-tooltips-updated'

const PIE = 'Pie'
const LINE = 'Line'
const BAR = 'Bar'
export default {
  name: 'vue-chartist',
  props: {
    type: {
      type: String,
      validator (val) {
        return val === PIE || val === LINE || val === BAR
      },
      default () {
        return LINE
      }
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object
    },
    listener: {
      type: Object
    },
    responsiveOptions: {
      type: Array
    }
  },
  data () {
    return {
      chartist: undefined
    }
  },
  methods: {
    updateEventListener (listener, type = 'on') {
      listener = listener || {}
      for (const event in listener) {
        // eslint-disable-next-line no-prototype-builtins
        if (listener.hasOwnProperty(event)) {
          this.chartist[type](event, listener[event])
        }
      }
    },
    renderChart () {
      const data = this.data
      const options = this.options ? this.options : {}
      const responsiveOptions = this.responsiveOptions ? this.responsiveOptions : []
      if (this.chartist) {
        this.chartist.update(data, options, responsiveOptions)
      } else {
        this.chartist = new Chartist[this.type](this.$el, data, options, responsiveOptions)
        this.updateEventListener(this.listener, 'on')
      }
    }
  },
  watch: {
    data: {
      handler: 'renderChart',
      deep: true
    },
    options: {
      handler: 'renderChart',
      deep: true
    },
    responsiveOptions: {
      handler: 'renderChart',
      deep: true
    },
    listener (val, oldVal) {
      this.updateEventListener(oldVal, 'off')
      this.updateEventListener(val, 'on')
    }
  },
  mounted () {
    this.renderChart()
  },
  destroyed () {
    if (this.chartist) {
      this.chartist.detach()
    }
  }
}
</script>

<style lang="scss">
@import "chartist/dist/scss/chartist.scss";
@import "chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.scss";

.ct-legend {
    position: relative;
    z-index: 10;

    li {
        position: relative;
        padding-left: 23px;
        margin-bottom: 3px;
    }

    li:before {
        width: 12px;
        height: 12px;
        position: absolute;
        left: 0;
        content: '';
        border: 3px solid transparent;
        border-radius: 2px;
    }

    li.inactive:before {
        background: transparent;
    }

    &.ct-legend-inside {
        position: absolute;
        top: 0;
        right: 0;
    }

    @for $i from 0 to length($ct-series-colors) {
        .ct-series-#{$i}:before {
            background-color: nth($ct-series-colors, $i + 1);
            border-color: nth($ct-series-colors, $i + 1);
        }
    }
}
</style>
