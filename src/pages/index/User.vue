<template>
  <div id="user" class="user clearfix">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动报名情况</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <el-table
    :data="tableData"
    style="width: 100%" @expand-change="expandChange">
      <el-table-column type="expand">
        <template slot-scope="props">

        </template>
      </el-table-column>
      <el-table-column label="序号" type="index" align="center"></el-table-column>
      <el-table-column label="活动名称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.Fname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="活动时效" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.FstartTime }} 至 {{scope.row.FendTime}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: "user",
  data() {
    return {
      tableData: [],
      expands: [],
      getRowKeys(row) {
        return row.id;
      },
      
    };
  },
  methods: {
    //获取活动列表
    getList() {
      var that = this;
      this.$http
        .get("/apis/common/list.json?type=activity")
        .then(function(res) {
          // console.log(res);
          if (res.data.data.status == 100) {
            that.tableData = res.data.data.result;
            // console.log("Array: ", res.data.data.result instanceof Array);
          } else {
            that.$alert(res.data.data.msg, "提示", {
              confirmButtonText: "确定"
              // callback: action => {
              //   this.$message({
              //     type: "info",
              //     message: `action: ${action}`
              //   });
              // }
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    toggleRowExpansion(row) {
      this.expands = [];
      this.expands.push(row.id);
      console.log("row: ", row);
    },
    expandChange(row, expandedRows){
      console.log("row: ", row);
      var activityId = row._id.$id;
      console.log("activityId: ",activityId)
      this.$http.get('/apis/enroll/search.json?activity_id='+activityId).then(res=>{
        if(res.data.data.status==100){
          console.log(res);
          console.log(res.data.data.result)
          var result = res.data.data.result;
          var peopleNum = 0;
          var key = "";
          var idArray = [];
          var valueArray = [];
          for(var k in result){
            key = k;
            // console.log(result[k].FformData);
            for (var num in result[k].FformData){
              // console.log((result[k].FformData)[num].id)
              if(idArray.indexOf((result[k].FformData)[num].id)==-1){
                idArray.push((result[k].FformData)[num].id);
              }
            }            
            peopleNum++
          }
          console.log("idArray: ",idArray);
          console.log("valueArray: ",valueArray);
          console.log("报名的人数: ",peopleNum);
          console.log("最后一个key名: ",key);
          console.log("获取信息： ",result[key].FformData)
          //统计性别
          for(var item in result[key].FformData){
            if(item.type == 'radio'){

            }
          }
        }
      }).catch(err=>{
        console.log(err)
      })
      
    },
    //统计性别
  },
  mounted() {
    this.getList();
  },
  beforeMount() {}
};
</script>

