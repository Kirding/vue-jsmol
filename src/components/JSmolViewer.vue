<template>
  <div :id="containerId" :style="{ width, height }" ref="containerRef"></div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, watch, defineExpose } from 'vue';
  import $ from 'jquery';
  import { loadJSmol } from '../utils/loader';

  const props = defineProps({
    src: { type: String, required: true }, // 分子结构文件 URL
    width: { type: String, default: '500px' }, // 容器宽度
    height: { type: String, default: '400px' }, // 容器高度
    j2sPath: { type: String, default: '/src/assets/j2s' }, // j2s 资源路径
    use: { type: String, default: 'HTML5' }, // 渲染模式
  });

  const exposeAPI = ref({
    rotate: (degrees) => Jmol.script(jmolInstance, `rotate y ${degrees}`),
    resetView: () => Jmol.script(jmolInstance, 'reset'),
    getStatus: () => Jmol.getStatus(jmolInstance),
  });

  const containerId = ref(`jsmol-${Math.random().toString(36).substr(2, 9)}`);
  let jmolInstance = null;

  // 初始化 JSmol
  const init = async () => {
    try {
      // 动态加载 JSmol
      const Jmol = await loadJSmol();

      // 配置参数
      const info = {
        debug: false,
        addSelectionOptions: false,
        color: '0xFFFFFF',
        width: props.width,
        height: props.height,
        use: props.use,
        j2sPath: props.j2sPath,
        container: document.getElementById(containerId.value),
        readyFunction: () => {
          console.log('JSmol is ready');
        },
      };

      // 创建实例
      jmolInstance = Jmol.getApplet(containerId.value, info);
      Jmol.script(jmolInstance, `load ${props.src}`);
    } catch (error) {
      console.error('[JSmol Error]', error);
    }
  };

  // 响应式更新
  watch(
    () => props.src,
    (newVal) => {
      Jmol.script(jmolInstance, `load ${newVal}`);
    }
  );

  onMounted(() => {
    window.$ = window.jQuery = $; // 局部挂载 jQuery
    init();
  });

  onUnmounted(() => {
    // 清理资源
    if (jmolInstance) {
      Jmol.destroyApplet(jmolInstance);
    }
    delete window.$;
    delete window.jQuery;
  });

  defineExpose({
    jmol: exposeAPI,
    container: containerRef,
  });
</script>
