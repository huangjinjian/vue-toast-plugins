<template>
  <section class="toast-container">
    <div class="toast" :class="[toastType , visible ? 'show':'']">
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
    opacity: 0;
    background-color: transparent;
    transition: all 1s;
  }
  .show {
    opacity: 1;
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
}
</style>
<script>
export default {
  data() {
    return {
      message: "hello Toast",
      toastType: "",
      visible: false
    };
  }
};
</script>
