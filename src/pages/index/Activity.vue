<template>
  <div id="activity" class="activity clearfix">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动设置</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <main>
      <el-row>
        <el-button type="primary" @click="addActivity">新增</el-button>
      </el-row>
      <el-row>
        <el-table :data="tableData" style="width: 100%;" height="700" stripe>
          <el-table-column label="序号" type="index" align="center" fixed>
          </el-table-column>
          <el-table-column label="活动名称" align="center" fixed>
            <template slot-scope="scope">
              <span>{{ scope.row.Fname }}</span>
            </template>
          </el-table-column>
          <el-table-column label="活动时效" align="center" min-width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.FstartTime }}<br>至<br>{{scope.row.FendTime}}</span>
              <!-- <span>{{ scope.row.FstartTime }} 至 {{scope.row.FendTime}}</span> -->
            </template>
          </el-table-column>
          <el-table-column label="活动状态" align="center" :formatter="formatterACSta">
          </el-table-column>
          <el-table-column label="海报状态" align="center" :formatter="formatterPOSta" min-width="110">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <el-table-column label="报名表单" align="center" min-width="148">
              <template slot-scope="scope">
                <el-button size="mini" v-if="scope.row.Fstatus == 0" @click="changeForm(scope.row)">修改</el-button>
                <el-button size="mini" type="primary" @click="previewForm(scope.row)">预览</el-button>
              </template>
            </el-table-column>
            <el-table-column label="海报设计" align="center" min-width="148">
              <template slot-scope="scope">
                <div v-if="scope.row.FposterSts == 0">
                  <el-button size="mini" @click="addPoster(scope.row)">海报设计</el-button>
                </div>
                <div v-else-if="scope.row.FposterSts == 1">
                  <el-button size="mini" v-if="scope.row.Fstatus == 0"  @click="changePoster(scope.row)">修改</el-button>
                  <el-button size="mini" type="primary" @click="previewPoster(scope.row)">预览</el-button>
                </div>
                <div v-else></div>
              </template>
            </el-table-column>
            <el-table-column label="活动管理" align="center" min-width="148">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deleteActivity(scope.row._id)">删除</el-button>
                <el-button size="mini" type="success" v-if="(scope.row.Fstatus == 0 && scope.row.FposterSts != 0)" @click="upActivity(scope.row._id,scope.row.Fstatus)">上线</el-button>
                <el-button size="mini" type="success" v-if="scope.row.Fstatus == 1" @click="downActivity(scope.row._id,scope.row.Fstatus)">下线</el-button>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-row>
    </main>
  </div>
</template>
<style scoped>
header {
  height: 20px;
  line-height: 20px;
}

.el-row {
  margin: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    formatterActName(row, column) {
      if (row.Fname) {
        console.log("row.Fname: ", row.Fname);
      }
    },
    formatterACSta(row, column) {
      if (row.Fstatus == 0) {
        return "未上线";
      } else if (row.Fstatus == 1) {
        return "已上线";
      } else {
        return "活动状态有误";
      }
    },
    formatterPOSta(row, column) {
      if (row.FposterSts == -1) {
        return "无需设计海报";
      } else if (row.FposterSts == 0) {
        return "海报未设计";
      } else {
        return "海报已设计";
      }
    },
    addActivity() {
      this.$router.push({ name: "formdesign" });
    },
    addPoster(row) {
      console.log(row._id.$id);
      var id = row._id.$id;
      // this.$route.push({ path: "/xxx", query: { id: 1 } }); //类似get传参，通过URL传递参数
      // this.$route.push({ path: "/xxx", params: { id: 1 } }); //类似post传参
      this.$router.push({ name: "posterdesign", query: {row: JSON.stringify(row)} });
      // this.$router.push({ name: "posterdesign", params: {row: JSON.stringify(row)} });
    },
    //修改表单
    changeForm(row) {
      // console.log(row);
      var formId = row.FformId;
      var activityId = row._id.$id;
      this.$router.push({name: 'formdesign', params: {row: JSON.stringify(row)}});
    },
    //修改海报
    changePoster(row) {},
    //预览表单
    previewForm(row) {
      if (row.FformId) {
        var formId = row.FformId;
        var activityId = row._id.$id;
        this.$router.push({name: 'form', query: {formId:formId, activityId: activityId}});
      } else {
        this.$router.push({ name: "form" });
      }
    },
    previewPoster(row) {
      // if (row.FposterBgUrl && row.FposterQrcode && row.FposterTipsTxt && row.FposterUrl) {
      // } else {
        this.$router.push({ name: "poster" });
      // }
    },
    //删除活动
    deleteActivity(id) {
      var that = this;
      this.$confirm("此操作将永久删除该活动, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var postData = new FormData();
          postData.append("id", id.$id);
          postData.append("type", "activity");
          this.$http
            .post("/apis/common/delete.json", postData, {
              headers: {
                "Content-Type": "multipart/form-data; charset=utf-8"
              }
            })
            .then(function(res) {
              console.log("delete res: ", typeof res.data);

              if (res.data.data.status == 100) {
                that.$message({
                  type: "success",
                  message: "删除成功!"
                });
                that.getList();
              } else {
                that.$alert(res.data.data.msg, "删除活动提示", {
                  confirmButtonText: "确定"
                });
              }
            })
            .catch(function(err) {
              console.log("delete err: ", err);
              that.$alert(err, "删除活动提示", {
                confirmButtonText: "确定"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //上线活动
    upActivity(id, status) {
      var that = this;
      var postData = new FormData();
      postData.append("id", id.$id);
      postData.append("status", status);
      console.log("id: ", id.$id);
      console.log("status: ", status);
      this.$http
        .post("/apis/activity/onoff.json", postData, {
          headers: {
            "Content-Type": "multipart/form-data; charset=utf-8"
          }
        })
        .then(function(res) {
          if (res.data.data.status == 100) {
            that.$message({
              type: "success",
              message: "上线成功!"
            });
            that.getList();
          } else {
            that.$alert(res.data.data.msg, "上线活动提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
          that.$alert(err, "上线活动提示", {
            confirmButtonText: "确定"
          });
        });
    },
    //下线活动
    downActivity(id, status) {
      var that = this;
      var postData = new FormData();
      postData.append("id", id.$id);
      postData.append("status", status);
      console.log("id: ", id.$id);
      console.log("status: ", status);
      this.$http
        .post("/apis/activity/onoff.json", postData, {
          headers: {
            "Content-Type": "multipart/form-data; charset=utf-8"
          }
        })
        .then(function(res) {
          if (res.data.data.status == 100) {
            that.$message({
              type: "success",
              message: "下线成功!"
            });
            that.getList();
          } else {
            that.$alert(res.data.data.msg, "下线活动提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
          that.$alert(err, "下线活动提示", {
            confirmButtonText: "确定"
          });
        });
    },
    //获取活动列表
    getList() {
      var that = this;
      this.$http
        .get("/apis/common/list.json?type=activity")
        .then(function(res) {
          if (res.data.data.status == 100) {
            that.tableData = res.data.data.result;
          } else {
            that.$alert(res.data.data.msg, "提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

