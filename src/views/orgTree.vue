<template>
  <div class="tar_tree page_content">
    <nodeTree :treeData='treeData'></nodeTree>
  </div>
</template>
<script>
import nodeTree from '@/components/nodeTree.vue';
export default {
  data() {
    return {
      treeData: [{
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "HR人事"
          }
        ]
      },{
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "HR人事"
          }
        ]
      }]
    }
  },
  components:{
    nodeTree
  }
};
</script>
<style scoped lang="stylus">
.tar_tree{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>