<template>
  <div id="app">
    
    <!-- <demo1 :columns="columns" :data="list" /> -->
    <printTable :columns="columns" :data="list" />
  </div>
</template>

<script>
// import demo1 from './templates/demo1.vue'
import printTable from './templates/printTable.vue'

const count = 1000

const row = {
  goodsCode: 'XSHHW1100111000025',
  shipperGoodsCode: 'XCXC',
  internationalCode: 'TT',
  goodsName: '夹心饼干',
  shipperName: '小刚',
  goodsQuality: '良品',
  goodsLevel: '水产/海鲜/蟹',
  conversionRate: 20,
  defaultUnit: '只',
  totalBigUnitNum: '55只',
  totalSmallUnitNum: '水产/海鲜/蟹',
  availableNum: 20,
  lockedNum: '只',
  frozenNum: '55只',
}
const columns = [{
  title: '序号',
  field: 'index',
}, {
  title: '货品编码',
  field: 'goodsCode',
}, {
  title: '货主货品编码',
  field: 'shipperGoodsCode',
}, {
  title: '货品条码',
  field: 'internationalCode',
}, {
  title: '货品名称',
  field: 'goodsName',
}, {
  title: '货主',
  field: 'shipperName',
}, {
  title: '货品质量',
  field: 'goodsQuality',
  minWidth: 120,
}, {
  title: '货品分类',
  field: 'goodsLevel',
}, {
  title: '换算率',
  field: 'conversionRate',
  minWidth: 80,
}, {
  title: '默认单位',
  field: 'defaultUnit',
  minWidth: 80,
}, {
  title: '在库库存(整单位)',
  field: 'totalBigUnitNum',
}, {
  title: '在库库存(零单位)',
  field: 'totalSmallUnitNum',
}, {
  title: '可用量',
  field: 'availableNum',
}, {
  title: '预占量',
  field: 'lockedNum',
}, {
  title: '冻结量',
  field: 'frozenNum',
}]

export default {
  name: 'App',
  components: {
    // demo1,
    printTable
  },
  data() {
    return {
      current: '',
      list: [],
      columns
    }
  },
  mounted() {
    for (let index = 0; index < count; index++) {
      this.list.push({
        index,
        ...row
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
