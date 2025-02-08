<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, watch } from 'vue'
import { getPositionPercent } from '../lib/getPositionPercent.ts'

use([CanvasRenderer, PieChart, TooltipComponent])

const progress = ref(50)

const option = ref({
  series: [
    {
      type: 'pie',
      radius: ['80%', '100%'],
      startAngle: 90,
      silent: true,
      label: {
        show: false,
      },
      data: [
        { value: progress.value, itemStyle: { color: '#F7D047' } },
        { value: 100 - progress.value, itemStyle: { color: '#2E2E2E' } },
      ],
    },
  ],
})

watch(progress, (newVal) => {
  option.value.graphic.elements[0].style.text = `${newVal}%`
})
</script>

<template>
  <div class="relative">
    <v-chart class="chart" :option="option" autoresize />
    <div :style="{ left: `${getPositionPercent(progress)}px` }" class="absolute top-4 text-xs">
      {{ progress }}%
    </div>
  </div>
</template>

<style scoped>
.chart {
  width: 50px;
  height: 50px;
}
</style>
