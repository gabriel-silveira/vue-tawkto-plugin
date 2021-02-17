# Vue Tawk.to Plugin
> Plugin to use **Tawk.to** in Vue.js applications

## How to use
First, we have to import the plugin to make it global inside Vue application:

`import 'plugins/tawkto.js';`

To start **Tawk.to** widget, call the _init_ method:

`this.$tawkTo.init();`

To hide the widget (on logout, for example) call _hide_ method:

`this.$tawkTo.hide();`
