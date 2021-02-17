import Vue from 'vue';

const tawkSrc = 'https://embed.tawk.to/602bdaff918aa261273f68b9/1eulkutkg';

const tawkTo = {
  install(VueInstance) {
    VueInstance.prototype.$tawkTo = {
      init() {
        try {
          if (window.Tawk_API) return Promise.resolve(this.show());

          const lines = [];
          lines.push('var Tawk_API = Tawk_API || {};');
          lines.push('var Tawk_LoadStart = new Date();');
          lines.push('(function(){');
          lines.push('  var s1 = document.createElement("script");');
          lines.push('  var s0 = document.getElementsByTagName("script")[0];');
          lines.push('  s1.async = true;');
          lines.push(`  s1.src = "${tawkSrc}";`);
          lines.push('  s1.charset = "UTF-8";');
          lines.push('  s1.setAttribute("crossorigin", "*");');
          lines.push('  s0.parentNode.insertBefore(s1, s0);');
          lines.push('})();');

          let scriptContent = '';
          lines.forEach((line) => { scriptContent += `${line}\n`; });

          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.id = 'tawkto-script';
          script.innerHTML = scriptContent;

          document.getElementsByTagName('head')[0].append(script);

          return Promise.resolve(true);
        } catch (error) {
          return Promise.reject(error);
        }
      },
      show() {
        window.Tawk_API.showWidget();
      },
      hide() {
        window.Tawk_API.hideWidget();
      },
    };
  },
};

Vue.use(tawkTo);
