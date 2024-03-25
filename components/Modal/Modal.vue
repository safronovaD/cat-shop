<template>
  <div class="modal">
    <div
        :class="['modal__overlay', {'modal__overlay--transparent': !showContent}]"
        @click="close"
    />
    <transition :name="position === 'left' ? 'slide-from-left' : 'slide-from-right'">
      <div
          v-if="showContent"
          :class="['modal__container', {'modal__container--right': position === 'right'}]"
      >
        <div class="modal__header">
          <slot name="header"/>
          <nuxt-icon name="close" class="modal__close" @click="close"/>
        </div>
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "@vue/reactivity";
import {onBeforeUnmount, onMounted} from "@vue/runtime-core";

const props = defineProps({
  position: {
    type: String,
    default: 'left'
  }
});
const emits = defineEmits(['close']);

let showContent = ref<boolean>(false);

function close() {
  showContent.value = false;
  setTimeout(() => {
    emits('close');
  }, 300)
}

onMounted(() => {
  showContent.value = true;
})

onBeforeUnmount(() => {

})
</script>

<style src="./style.scss" lang="scss" scoped/>