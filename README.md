## Very simple modal for nuxt framework

### [Demo Page](https://s3rver.github.io/nuxt-modal)

https://user-images.githubusercontent.com/51977254/169375875-33904498-5449-42b4-89c9-77c9f22909ef.mp4

```bash
# install module
$ npm i @s3rver/nuxt-modal
```

## Steps of use

### 1 - Add module to nuxt.config.js

```javascript
// nuxt.config.js
export default {
    //...
    modules: ['@s3rver/nuxt-modal']
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

    modules: ['@s3rver/nuxt-modal']
    //...
}
```

### Responsive

#### Responsive value is disabled by default and you must define separate components for mobile and desktop dimensions

#### `If enabled, you do not need to create two components`
![image](https://user-images.githubusercontent.com/51977254/169388851-59ee05ac-ad3c-4ab9-b075-677df6a2fd47.png)


### layout & mobileLayout

#### The value is equal to the name of the registered component 



## Making Custom Layout

#### [Sample desktop layout](https://github.com/S3RVER/nuxt-modal/blob/v1/template/layouts/default.vue)
#### [Sample mobile layout](https://github.com/S3RVER/nuxt-modal/blob/v1/template/layouts/defaultMobile.vue)

![image](https://user-images.githubusercontent.com/51977254/169386837-34ff3b41-ea76-4810-8ce7-b88b7761e28a.png)
### And then open the modal
![image](https://user-images.githubusercontent.com/51977254/169388119-acc526e3-251f-41ef-832e-f91219bd697e.png)