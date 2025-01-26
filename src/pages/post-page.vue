<script setup lang="ts">
import { PostCard, PostFilter } from '@/entities/post'
import { VirtualList } from '@/shared/components'
import { useGetRolesList } from '@/entities/role'

// const filter = usePostFilter()
// const store = storeToRefs(filter)

// const { isPending, data } = userGetPosts({ title: store.title })
const { data: roleList, isPending } = useGetRolesList()
</script>

<template>
  <div class="p-2">
    <PostFilter />
    <div v-if="isPending">Загрузка...</div>
    <VirtualList v-else :row-height="70" :items="roleList" :item-size="70">
      <template #item="{ item }">
        <PostCard :name="item?.name" />
      </template>
    </VirtualList>
  </div>
</template>
