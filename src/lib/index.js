// 1.首先需要导入这个vue文件
import ToastCompinet from "./vue-toast.vue";

// 2.定义一个Toast对象
let Toast = {};

// 3.给这个Toast添加一个静态的类 vue插件有一个原则必须要定义一个install方法 只有通过install方法才能被 vue.use()所引用
Toast.install = function(VUe, options) {
  // 默认配置
  var opt = {
    duration: 2000
  };

  // 如果用户传了参数就去循环覆盖这个参数
  for (var key in options) {
    opt[key] = options[key];
  }

  //5.通过Vue.prototype原型绑定一个函数 读取vue文件并进行解析
  // 说白了就是在Vue的原型上面驱拓展一个函数
  Vue.prototype.$toast = function(message, option) {
    if (typeof option == "object") {
      for (var key in option) {
        opt[key] = option[key];
      }
    }

    // 通过Vue.extend去继承这个组件 然后得到一个实例
    const ToastController = Vue.extend(ToastCompinet);

    // new出来的对象就是vue文件最终导出来的对象 并挂在到一个div里面去
    // 返回一个新的实例
    var instance = new ToastController().$mount(document.createElement("div"));

    document.body.appendChild(instance.$el);
    // 拿到这个实例之后，我们就可以控制这个实例的显示 比如给它赋值 但是赋的值一般是通过函数传进来的
    setTimeout(() => {
      instance.message = message;
      instance.toastType = opt.toastType ? opt.toastType : "info";
      instance.visible = true;
    }, 10);

    setTimeout(() => {
      instance.visible = false;
      setTimeout(() => {
        document.body.removeChild(instance.$el);
      }, 200);
    }, opt.duration);
  };
  Vue.prototype.$toast["show"] = function(message, option) {
    Vue.prototype.$toast(message, getOption("info", option));
  };
  Vue.prototype.$toast["success"] = function(message, option) {
    Vue.prototype.$toast(message, getOption("success", option));
  };
  Vue.prototype.$toast["info"] = function(message, option) {
    Vue.prototype.$toast(message, getOption("info", option));
  };
  Vue.prototype.$toast["error"] = function(message, option) {
    Vue.prototype.$toast(message, getOption("error", option));
  };

  function getOption(toastType, option) {
    if (typeof option == "object") {
      return Object.assign({}, { toastType }, option);
    } else {
      return { toastType };
    }
  }
};

// 4.通过export default进行输出 要不然 vue.use() 是找不到的
export default Toast;