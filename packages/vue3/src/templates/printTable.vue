<template>
<div>
  <vxe-toolbar ref="xToolbar" print>
    <template #buttons>
      <vxe-button content="打印表格" @click="printEvent"></vxe-button>
    </template>
  </vxe-toolbar>

  <vxe-table
    border
    ref="xTable"
    height="800"
    :print-config="{}"
    :data="data">
    <vxe-column v-for="item in columns" :key="item.index" :v-bind="item" :field="item.field" :title="item.title"></vxe-column>
  </vxe-table>
</div>
</template>


<script>
import { defineComponent, ref, nextTick } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const xTable = ref({})
    const xToolbar = ref({})

    // 打印样式
    const printStyle = `
    .title {
      text-align: center;
    }
    .my-list-row {
      display: inline-block;
      width: 100%;
    }
    .my-list-col {
      float: left;
      width: 33.33%;
      height: 28px;
      line-height: 28px;
    }
    .my-top,
    .my-bottom {
      font-size: 12px;
    }
    .my-top {
      margin-bottom: 5px;
    }
    .my-bottom {
      margin-top: 30px;
      text-align: right;
    }
    `

    // 打印顶部内容模板
    const topHtml = `
    <h1 class="title">出货单据</h1>
    <div class="my-top">
      <div class="my-list-row">
        <div class="my-list-col">商品名称：vxe-table</div>
        <div class="my-list-col">发货单号：X2665847132654</div>
        <div class="my-list-col">发货日期：2020-09-20</div>
      </div>
      <div class="my-list-row">
        <div class="my-list-col">收货姓名：小徐</div>
        <div class="my-list-col">收货地址：火星第七区18号001</div>
        <div class="my-list-col">联系电话：10086</div>
      </div>
    </div>
    `

    // 打印底部内容模板
    const bottomHtml = `
    <div class="my-bottom">
      <div class="my-list-row">
        <div class="my-list-col"></div>
        <div class="my-list-col">创建人：小徐</div>
        <div class="my-list-col">创建日期：2020-09-20</div>
      </div>
    </div>
    `

    const printEvent = () => {
      const $table = xTable.value
      $table.print({
        sheetName: '打印出货单据',
        style: printStyle,
        columns: props.columns,
        beforePrintMethod: ({ content }) => {
          // 拦截打印之前，返回自定义的 html 内容
          return topHtml + content + bottomHtml
        }
      })
    }

    const printSelectEvent1 = () => {
      const $table = xTable.value
      $table.print({
        sheetName: '打印勾选行',
        style: printStyle,
        mode: 'selected',
        columns: props.columns,
        beforePrintMethod: ({ content }) => {
          // 拦截打印之前，返回自定义的 html 内容
          return topHtml + content + bottomHtml
        }
      })
    }

    nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = xTable.value
      const $toolbar = xToolbar.value
      $table.connect($toolbar)
    })

    return {
      xTable,
      xToolbar,
      printEvent,
      printSelectEvent1
    }
  }
})
</script>
