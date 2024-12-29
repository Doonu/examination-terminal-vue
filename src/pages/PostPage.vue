<script setup lang="ts">
import { PostCard, PostFilter, usePostFilter, userGetPosts } from '@/entities/post'
import { storeToRefs } from 'pinia'
import { VirtualList } from '@/shared/components'

const filter = usePostFilter()
const store = storeToRefs(filter)

const { isPending, data } = userGetPosts({ title: store.title })
</script>

<template>
  <div class="p-2">
    <PostFilter />
    <div v-if="isPending">Загрузка...</div>
    <VirtualList v-else :row-height="70" :items="data" :item-size="70">
      <template #item="{ item }">
        <PostCard :title="item?.title" :body="item?.body" />
      </template>
    </VirtualList>
  </div>
</template>
