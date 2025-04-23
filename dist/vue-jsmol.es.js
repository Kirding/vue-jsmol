import { ref as d, watch as a, onMounted as c, onUnmounted as m, openBlock as u, createElementBlock as p, normalizeStyle as h } from "vue";
import w from "jquery";
let l = !1;
const f = () => new Promise((t, e) => {
  if (typeof Jmol < "u") {
    t(window.Jmol);
    return;
  }
  if (l)
    return;
  const o = document.createElement("script");
  o.src = "../assets/JSmol.min.js", o.onload = () => {
    l = !0, t(window.Jmol);
  }, o.onerror = e, document.head.appendChild(o);
}), y = ["id"], g = {
  __name: "JSmolViewer",
  props: {
    src: { type: String, required: !0 },
    // 分子结构文件 URL
    width: { type: String, default: "500px" },
    // 容器宽度
    height: { type: String, default: "400px" },
    // 容器高度
    j2sPath: { type: String, default: "/src/assets/j2s" },
    // j2s 资源路径
    use: { type: String, default: "HTML5" }
    // 渲染模式
  },
  setup(t) {
    const e = t, o = d(`jsmol-${Math.random().toString(36).substr(2, 9)}`);
    let r = null;
    const s = async () => {
      try {
        const n = await f(), i = {
          debug: !1,
          addSelectionOptions: !1,
          color: "0xFFFFFF",
          width: e.width,
          height: e.height,
          use: e.use,
          j2sPath: e.j2sPath,
          container: document.getElementById(o.value),
          readyFunction: () => {
            console.log("JSmol is ready");
          }
        };
        r = n.getApplet(o.value, i), n.script(r, `load ${e.src}`);
      } catch (n) {
        console.error("[JSmol Error]", n);
      }
    };
    return a(() => e.src, (n) => {
      Jmol.script(r, `load ${n}`);
    }), c(() => {
      window.$ = window.jQuery = w, s();
    }), m(() => {
      r && Jmol.destroyApplet(r), delete window.$, delete window.jQuery;
    }), (n, i) => (u(), p("div", {
      id: o.value,
      style: h({ width: t.width, height: t.height })
    }, null, 12, y));
  }
}, j = {
  install: (t, e = {}) => {
    t.component(e.componentName || "JSmolViewer", g);
  }
};
export {
  j as default
};
