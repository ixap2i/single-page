<template>
  <transition name="fade">
    <div>
      <v-btn v-if="show" color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
  </transition>
</template>

<style>
.fade-enter-active {
  /*開始の状態を指定する*/
  opacity: 0;
}
.fade-enter, fade-leave-to {
  /*終了の状態を指定する*/
  opacity: 0;
}
.fade-enter-active {
   /*動作（イージングや時間）を指定する*/
  transition: opacity 300ms ease-out;
}
</style>
