const FlutterwaveJS = {
  install(Vue, {publicKey}) {    
    Vue.mixin({
      mounted() {
        const flutterwaveJS = "https://checkout.flutterwave.com/v3.js";
        const script = document.createElement('script')
        script.src = flutterwaveJS
        // Only run if flw script has not been added to the body
        if (!document.querySelector(`[src="${flutterwaveJS}"]`)) {
          document.body.appendChild(script)
        }
      },
          
      methods: {
        $launchFlutterwave(options) {
          window.FlutterwaveCheckout({
            public_key: publicKey,
            ...options
          })
        },
      }
    })
  }
}

export default FlutterwaveJS
