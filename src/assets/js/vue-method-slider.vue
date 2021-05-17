<template>
  <div class="grid-x grid-margin-x">
    <div class="cell small-10">
      <div
        id="slider"
        :data-initial-start="dataValue"
        :data-end="dataEnd"
        class="slider"
        data-slider
      >
        <span
          class="slider-handle"
          data-slider-handle
          role="slider"
          tabindex="1"
        />
        <span class="slider-fill" data-slider-fill />
        <input type="hidden" class="slider-input" />
      </div>
    </div>
    <div class="cell small-2">
      <input v-model="dataValue" type="number" />
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: 'Slider',
  data() {
    return {
      dataValue: 50,
      dataEnd: 100,
    };
  },
  mounted() {
    this.slider = new Foundation.Slider($('#slider'), {
      // These options can be declarative using the data attributes
      step: 10,
    });
    this.slider.$element.on('moved.zf.slider', () => {
      this.dataValue = this.slider.inputs.val();
    });
  },
  destroyed() {
    this.slider.destroy();
  },
};
</script>
