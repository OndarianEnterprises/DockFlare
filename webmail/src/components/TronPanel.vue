<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  delay?: number
  scanlines?: boolean
  innerClass?: string
  noGlow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  scanlines: false,
  noGlow: false,
})

const BOOT = {
  edgeDur: 0.3,
  bootGap: 0.07,
  bootDur: 1.2,
}

const edgeDelay = (index: number) =>
  `${props.delay + index * BOOT.edgeDur}s`

const bgDelay = computed(() =>
  `${props.delay + 4 * BOOT.edgeDur + BOOT.bootGap}s`
)

const contentDelay = computed(() =>
  `${props.delay + 4 * BOOT.edgeDur + BOOT.bootGap + BOOT.bootDur}s`
)

const glowStyle = computed(() => ({
  animation: props.noGlow ? 'none' : 'idle-glow 3s ease-in-out infinite',
  animationDelay: contentDelay.value,
}))
</script>

<template>
  <div class="relative" :style="glowStyle">
    <!-- Top edge -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-[#3d8bff] origin-left"
      :style="{ animation: `draw-edge-x 0.3s ease-out forwards`, animationDelay: edgeDelay(0), opacity: 0 }"
    />
    <!-- Right edge -->
    <div
      class="absolute top-0 right-0 bottom-0 w-px bg-[#3d8bff] origin-top"
      :style="{ animation: `draw-edge-y 0.3s ease-out forwards`, animationDelay: edgeDelay(1), opacity: 0 }"
    />
    <!-- Bottom edge -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-[#3d8bff] origin-right"
      :style="{ animation: `draw-edge-x 0.3s ease-out forwards`, animationDelay: edgeDelay(2), opacity: 0 }"
    />
    <!-- Left edge -->
    <div
      class="absolute top-0 left-0 bottom-0 w-px bg-[#3d8bff] origin-bottom"
      :style="{ animation: `draw-edge-y 0.3s ease-out forwards`, animationDelay: edgeDelay(3), opacity: 0 }"
    />

    <!-- Panel background -->
    <div
      class="absolute inset-0 bg-[#0f1720]"
      :style="{ animation: `boot 1.2s ease-out forwards`, animationDelay: bgDelay, opacity: 0 }"
    />

    <!-- Scanline overlay -->
    <div
      v-if="scanlines"
      class="absolute inset-0 pointer-events-none z-[25]"
      style="background: repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);"
    />

    <!-- Scan sweep line -->
    <div
      class="absolute left-0 right-0 h-[2px] pointer-events-none z-[30]"
      style="background: linear-gradient(to right, transparent, rgba(61,139,255,0.3), transparent); animation: scan 5s linear infinite;"
      :style="{ animationDelay: contentDelay }"
    />

    <!-- Content -->
    <div
      class="relative z-20"
      :class="innerClass"
      :style="{ animation: `boot 1.2s ease-out forwards`, animationDelay: contentDelay, opacity: 0 }"
    >
      <slot />
    </div>
  </div>
</template>
