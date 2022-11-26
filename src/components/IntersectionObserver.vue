<template>
    <div ref="observerElement" class="observer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits} from "vue";

const observerElement = ref();

const emit = defineEmits(['fixHeader'])

const callback = () => {
    if (window.scrollY > 40) {
        emit('fixHeader',true)
    }
    else{
        emit('fixHeader',false)
    }
}
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

let observer = new IntersectionObserver(callback, options);

onMounted(() => { observer.observe(observerElement.value) })

</script>

<style scoped>
.observer {
    height: 0px;
    z-index: 10000;
    pointer-events: none;
    width: 100%;
    position: absolute;
    top: 40px;
}
</style>