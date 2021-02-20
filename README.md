# vue-zooming-image

<div align="center">

![javascript](https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=222222)
![vuejs](https://img.shields.io/badge/vue.js-4FC08D.svg?style=for-the-badge&logo=Vue.js&logoColor=ffffff)
![downloadsPerYear](https://img.shields.io/npm/dy/vue-zooming-image?style=for-the-badge)
![license](https://img.shields.io/npm/l/vue-zooming-image?style=for-the-badge)

</div>

A simple vue component to hold an image which will zoom towards the position of the cursor. Originally written to hold preview thumbnails in conjunction with a lightbox.


## Demo
[vue-zooming-image Demo](https://marctr.github.io/vue-zooming-image/)

## Installation via NPM
```
npm i vue-zooming-image
```

## Usage
```
<template>
  <div id="app">
    <ZoomingImage 
      src="./image.png"
      width="375px"
      height="250px"> 
      <div>Overlay content</div>
    </ZoomingImage>
  </div>
</template>

<script>
import ZoomingImage from 'vue-zooming-image'

export default {
  name: 'App',
  components: {
    ZoomingImage
  }
}
</script>
```

## Options

### Props
|Prop         | Description                       |
|-------------|-----------------------------------|
|src          | Path to the image to display      |
|width        | width of the image (in pixels)    |
|height       | height of the image (in pixels)   | 


### Slots
The component provides a single, unnamed slot as an overlay for the image.