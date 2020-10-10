<template>
  <div>
    <div class="only-top">
      <div>{{ $mq }} size</div>
      <div v-if="small">small size</div>
      <div v-else-if="medium">medium size</div>
      <div v-else-if="tablet">tablet size</div>
      <div v-else-if="largePlus">large+ size</div>
      <div v-else-if="large">large size</div>
      <div v-else-if="xlarge">xlarge size</div>
      <div v-else>xxlarge size</div>
    </div>
    <div>window width: {{ windowWidth }} px</div>
    <div>window height: {{ windowHeight }} px</div>
    <div>amount of scrolling : {{ windowPageYOffset }} px</div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    small: 640,
    medium: 769,
    tablet: 1025,
    large: 1201,
    xlarge: 1441,
    xxlarge: Infinity,
  },
  defaultBreakpoint: "small",
});

// eslint-disable-next-line vue/one-component-per-file
Vue.mixin({
  data() {
    return {
      small: false,
      medium: false,
      tablet: false,
      largePlus: false,
      large: false,
      xlarge: false,
      xxlarge: false,
    };
  },
});

// eslint-disable-next-line vue/one-component-per-file
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      windowPageYOffset: window.pageYOffset,
    };
  },
  watch: {
    $mq() {
      this.small = this.$mq === "small";
      this.medium = this.$mq === "medium";
      this.tablet = this.$mq === "tablet";
      this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
      this.large = this.$mq === "large";
      this.xlarge = this.$mq === "xlarge";
      this.xxlarge = this.$mq === "xxlarge";
    },
  },
  mounted() {
    this.small = this.$mq === "small";
    this.medium = this.$mq === "medium";
    this.tablet = this.$mq === "tablet";
    this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
    this.large = this.$mq === "large";
    this.xlarge = this.$mq === "xlarge";
    this.xxlarge = this.$mq === "xxlarge";
    window.addEventListener("resize", this.calculateWindowWidth);
    window.addEventListener("resize", this.calculateWindowHeight);
    window.addEventListener("scroll", this.calculateWindowPageYOffset);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateWindowWidth);
    window.removeEventListener("resize", this.calculateWindowHeight);
    window.removeEventListener("scroll", this.calculateWindowPageYOffset);
  },
  methods: {
    calculateWindowWidth() {
      // Every time you resize it, it fires.
      this.windowWidth = window.innerWidth;
    },
    calculateWindowHeight() {
      this.windowHeight = window.innerHeight;
    },
    calculateWindowPageYOffset() {
      this.windowPageYOffset = window.pageYOffset;
    },
  },
};
</script>
