<template>
    <div 
        class="vue-zooming-image-container"
        :style="{height: height, width: width}">
        <img 
            class="vue-zooming-image"
            contain 
            @mouseenter="onMouseEnter($event)"
            @mouseleave="onMouseLeave"
            @mousemove="onMouseMove($event)"
            :src="src"
            :width="width"
            :height="height" />
        <div class="vue-zooming-image-slot-wrapper">  
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueZoomingImage',
    props: ['src', 'width', 'height'],
    data: () => ({
        updateCounter: 0,
        updateRate: 10,
        activeImg: {
            element: null, 
            centerX: 0, 
            centerY: 0 
        }
    }),
    methods: {
        onMouseEnter: function(event) {
            this.setOrigin(event.target)
            this.update(event)
        },
        onMouseLeave: function() {
            let style = ""
            this.activeImg.style.transform = style
            this.activeImg.style.webkitTransform = style
            this.activeImg.style.mozTransform = style
            this.activeImg.style.msTransform = style
            this.activeImg.style.oTransform = style
        },
        onMouseMove: function(event) {
            if(this.isTimeToUpdate()) {
                this.update(event)
            }
        },
        /**
         * Called when the cursor enters an image.
         * Sets the values for the currently active image
         */
        setOrigin: function(target) {
            this.activeImg = target
            this.activeImg.centerX = this.activeImg.offsetLeft + Math.floor(this.activeImg.offsetWidth / 2)
            this.activeImg.centerY = this.activeImg.offsetTop + Math.floor(this.activeImg.offsetHeight / 2)
        },
        /** 
         * Checks if an arbitrary updateRate has been reached to determine if an 
         * update is necessary. Used to increase performance.
         */
        isTimeToUpdate: function() {
            // When the counter reaches the updateRate, an update will be made
            return this.updateCounter++ % this.updateRate === 0
        }, 
        /**
         * Called when the cursor enters an image or moves within it.
         * Updates the css transformation based on the cursor position to animate 
         * the image.
         */
        update: function(event) {
            let e = event || window.event
            let cursorX = e.offsetX
            let cursorY = e.offsetY

            let diffFromCenterX = this.activeImg.centerX - cursorX
            let diffFromCenterY = this.activeImg.centerY - cursorY

            this.updateTransformStyle(diffFromCenterX, diffFromCenterY)
        },
        /**
         * Updates the css transform style scale and translation to animate the 
         * image.
         */
        updateTransformStyle: function(diffFromCenterX, diffFromCenterY) {
            let translateX = diffFromCenterX / 8
            let translateY = diffFromCenterY / 8

            let style = `scale(1.4) translate(${translateX}px, ${translateY}px)`

            this.activeImg.style.transform = style
            this.activeImg.style.webkitTransform = style
            this.activeImg.style.mozTransform = style
            this.activeImg.style.msTransform = style
            this.activeImg.style.oTransform = style
        }
    }
}
</script>

<style scoped>
.vue-zooming-image {
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
}

.vue-zooming-image-container {
    overflow: hidden;
    position: relative;
}

.vue-zooming-image-slot-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>