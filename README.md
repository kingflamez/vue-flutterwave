# Flutterwave for Vue 2.x

> This is a Vue Package that helps you integrate Flutterwave - https://flutterwave.com/ easily"

[![NPM](https://img.shields.io/npm/v/vue-flutterwave.svg)](https://www.npmjs.com/package/vue-flutterwave) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

### Vue

Install the npm package:

```bash
npm install --save vue-flutterwave
# OR
yarn add vue-flutterwave
```

Add the Vue plugin in your main.js and pass your [connect public key](#):

```javascript
import Vue from 'vue'
import Flutterwave from 'vue-flutterwave'

Vue.use(Flutterwave, { publicKey: 'YOUR CONNECT PUBLIC KEY' })
```

### Nuxt

Install the npm package:

```bash
npm install --save vue-flutterwave
# OR
yarn add vue-flutterwave
```

Create a `flutterwave.js` file in your `plugins` folder and add the Vue plugin:

```javascript
// plugins/flutterwave.js

import Vue from 'vue'
import Flutterwave from 'vue-flutterwave'

Vue.use(Flutterwave, { publicKey: 'YOUR CONNECT PUBLIC KEY' })
```

Go to your `nuxt.config.js` and add it to your plugin section

```javascript
/*
** Plugins to load before mounting the App
** https://nuxtjs.org/guide/plugins
*/
............
plugins: [{src: '~/plugins/flutterwave', ssr: false},],
...........

```

## Usage

Flutterwave can be launched using `$launchFlutterwave()` method, see example below

```vue
<template>
  <form action="#" @submit.prevent="makePayment">
    <div class="btn-wrapper">
      <input type="number" v-model.number="amount" />
      <button type="submit">Make Payment</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      amount: 200
    }
  },
  methods: {
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '08102909304',
          name: 'yemi desola'
        },
        callback: function(data) {
          // specified callback function
          console.log(data)
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://assets.piedpiper.com/logo.png'
        }
      })
    }
  }
}
</script>

```

Please checkout
[Flutterwave Documentation](https://developer.flutterwave.com/docs/flutterwave-standard) for more explanation and options

Follow on Twitter [@mrflamez\_](https://twitter.com/mrflamez_)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

