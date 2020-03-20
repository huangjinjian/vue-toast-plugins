<template>
  <section class="toast-container">
    <div class="toast" :class="[toastType , hide ? 'vue_toast_hide' : '']" :v-show="visible">
      <span>{{ message }}</span>
    </div>
  </section>
</template>
<style lang="scss">
.toast-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center; /* 这个两个属性在flex下可以使元素水平方向和垂直方向都剧中 */
  .toast {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 10px;
    animation: toast-move-in-top cubic-bezier(0.22, 0.58, 0.12, 0.98) 1.5s;
  }
  .info {
    background-color: #3393ee;
  }
  .success {
    background-color: #3cfc9c;
  }
  .error {
    background-color: #fc423c;
  }
  .vue_toast_hide {
    animation: toast-fade-out cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.2s forwards;
  }
  @keyframes toast-move-in-top {
    from {
      opacity: 0;
      transform: translate(0, -1.5em);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes toast-fade-out {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }

    to {
      opacity: 0;
      transform: translate(0, 1em);
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      message: "hello Toast",
      toastType: "",
      visible: false,
      hide: false
    };
  }
};
</script>
