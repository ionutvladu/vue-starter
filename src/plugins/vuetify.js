import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-pro/css/all.css'

const MDX_ICONS = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
}

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: MDX_ICONS
  },
  theme: {
    themes: {
      light: {
        primary: '#2CA3F0', // definded
        secondary: '#242F57', // defined
        accent: '#2CA3F0',
        error: '#FE0026', // definded
        info: '#2196F3',
        success: '#27B852', // definded
        warning: '#FFC107'
      }
    }
  }
})
