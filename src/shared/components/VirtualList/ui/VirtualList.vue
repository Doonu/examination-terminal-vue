<script setup lang="ts" generic="T">
import { computed, type PropType, ref } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'

const props = defineProps({
  items: {
    type: Array as PropType<T[]>,
    required: false,
  },
  itemSize: {
    type: Number,
    default: 50,
  },
  overscan: {
    type: Number,
    default: 5,
  },
  rowHeight: {
    type: Number,
    default: 35,
  },
})

const parentRef = ref<HTMLElement | null>(null)

const virtualizerOptions = computed(() => ({
  count: props.items?.length || 0,
  getScrollElement: () => parentRef.value,
  estimateSize: () => props.itemSize ?? 50,
  overscan: props.overscan ?? 5,
}))

const rowVirtualizer = useVirtualizer(virtualizerOptions)
</script>

<template>
  <div ref="parentRef" style="overflow: auto">
    <div
      :style="{
        height: rowVirtualizer.getTotalSize() + 'px',
        width: '100%',
        position: 'relative',
      }"
    >
      <div
        v-for="virtualItem in rowVirtualizer.getVirtualItems()"
        :key="String(virtualItem.key)"
        :style="{
          position: 'absolute',
          top: virtualItem.start + 'px',
          left: 0,
          width: '100%',
          height: rowHeight + 'px',
        }"
      >
        <slot name="item" :item="items?.[virtualItem.index]" />
      </div>
    </div>
  </div>
</template>
