# modal

## Very simple modal for nuxt framework

```bash
# install module
$  npm install git://github.com/S3RVER/modal.git#v1
```

## Steps of use

### 1 - Add module to nuxt.config.js

```javascript
// nuxt.config.js
export default {
  //...
  modules: ['modal']
  //...
}
```

### 2 - Register modals for layout
```vue
<template>
  <div>
    <nuxt />

    <!-- added line -->
    <register-modals />
  </div>
</template>
```

### 3 - Making directory modals
In the main root of the project, create a directory called `modals` and save your modals with the `vue` extension


## options
### nuxt.config.js
#### `default` options
```javascript
// nuxt.config.js
export default {
  //...
  modal: {
    pluginName: "modal", // name plugin 
    layout: "default", // layout desktop
    mobileLayout: "defaultMobile", // layout mobile
    mobileSize: 400, // mobile or desktop window size
    responsive: false,
  },
  
  modules: ['modal']
  //...
}
```

### layout & mobileLayout
#### The value is equal to the name of the registered component 
