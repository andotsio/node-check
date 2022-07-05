<template>
  <header class="header">
    <h1 class="title">
      <span class="chain">BlockPI</span>
      <span class="mode">TESTER</span>
      <span class="version">v1.0.0</span>
    </h1>
<!--    <div class="theme-switch">-->
<!--      <span class="theme-box">-->
<!--        <span class="theme-inner">-->
<!--          <span class="theme-handel"></span>-->
<!--        </span>-->
<!--      </span>-->
<!--    </div>-->
  </header>
</template>
<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  background-color: rgb(245, 245, 245);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.title {
  display: flex;
  align-items: center;
  font-size: 22px;
  flex: 1;

  .chain {
    font-weight: 700;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    position: relative;
    color: rgb(3, 26, 97);
  }

  .mode {
    display: inline-block;
    font-weight: 400;
    color: rgb(1, 104, 250);
    margin: 0 5px;
  }

  .version {
    color: rgb(236, 108, 3);
    font-size: 15px;
    font-weight: 700;
  }
}

.theme-switch {
  display: flex;
  align-items: center;
  margin-right: 13px;

  .theme-box {
    display: inline-block;
    position: relative;
    width: 62px;
    height: 34px;
    padding: 7px;
  }

  .theme-inner {
    background-color: rgb(170, 180, 190);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: block;
  }

  .theme-handel {
    position: absolute;
    display: block;
    background-color: rgb(0, 30, 60);
    width: 32px;
    height: 32px;
    border-radius: 16px;
    top: 1px;
    left: 7px;
    cursor: pointer;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &.checked {
      transform: translateX(16px);

      &:before {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"%23fff\" d=\"M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z\"/></svg>");
      }
    }

    &:before {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"%23fff\" d=\"M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z\"/></svg>") center center no-repeat;
    }
  }
}

</style>
