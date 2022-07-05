<template>
  <NuxtLayout>
    <NuxtPage/>
    <Toast/>
    <div class="back-top" id="backTop" @click="goTop"></div>
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
    let {
      ctx,
    } = getCurrentInstance();

    function handleScroll() {
      ctx.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (ctx.scrollTop > 140) {
        document.getElementById('backTop').style.opacity = '1';
      } else {
        document.getElementById('backTop').style.opacity = '0';
      }
    }

    function goTop() {
      let timer = setInterval(() => {
        let iSpeed = Math.floor(-ctx.scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop = ctx.scrollTop + iSpeed;
        if (ctx.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    }

    return {
      handleScroll,
      goTop,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body, html {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
}

a {
  color: inherit;
  text-decoration: none
}

html {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-size-adjust: 100%;
}

body {
  background: #f8f8f8;
  min-width: 960px;
  min-height: 770px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
}

input:focus,
button:focus {
  outline: none;
}

.back-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  left: auto;
  width: 45px;
  height: 45px;
  background: url("~~/assets/images/icon_backTop.svg") no-repeat center center #373D47;
  border-radius: 16px;
  z-index: 1000;
  opacity: 0;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: #434954;
    box-shadow: 0 5px 10px rgba(2, 6, 26, 0.36);
  }

  &:active {
    background-color: #2A2F38;
  }
}

@media (min-width: 1800px) {
  .back-top {
    right: auto;
    left: 1730px;
  }
}

@media (min-width: 0px) and (max-width: 1800px) {
  .back-top {
    right: 20px;
    left: auto;
  }
}
</style>
