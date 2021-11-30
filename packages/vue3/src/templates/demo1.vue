<template>
<div>
  <!-- <h1>el-table</h1>
  <el-table :data="data" border>
    <el-table-column v-for="item in columns" :key="item.index" :prop="item.field" :label="item.title" />
  </el-table> -->

  <h1>vxe-table</h1>
  <vxe-grid :data="data" :columns="columns" height="500px"></vxe-grid>
</div>
</template>


<script>

// document.getElementsByClassName('vxe-body--row').length: 500

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  }
}
</script>
