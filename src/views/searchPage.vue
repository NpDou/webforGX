<template>
  <div class="out_Container">
    <div class="n_tit" style="margin-top: 15px">
      <span class="title">当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sear_con" v-loading="loading">
      <h3>
        搜索“<span>{{ this.title }}</span
        >”的结果
      </h3>
      <ul>
        <li v-for="item in article" :key="item.id">
          <a href="#" class="tit" v-html="brightenKeyword(item.title)"></a>
          <p>
            {{ item.content | ellipsis(140) }}
            <a href="#" @click="overallClick(item)">[详细]</a>
          </p>
          <i>{{ item.publishTime | fmtDate_global }}</i>
        </li>
      </ul>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :total="length"
          :page-size="obj.pageSize"
          :page-sizes="[5, 8, 10]"
          :current-page="obj.page"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/request";
export default {
  data() {
    return {
      title: "",
      article: [],
      loading: false,
      length: 10,
      obj: {
        page: 1,
        pageSize: 5,
        title:"",
      },
    };
  },
  watch: {
    obj: {
      handler: function () {
        this.getFindArticle(this.obj);
      },
      deep: true,
    },
  },
  created() {
    this.title = this.$route.query.title;
    this.getFindArticle(this.obj);
  },

  mounted() {
    this.loading = true;
    this.obj.title=this.$route.query.title;
  },

  methods: {
    getFindArticle(obj) {
      get("/index/article/pageQuery", obj).then((res) => {
        this.article = res.data.list;
        this.length = res.data.total;
        this.loading = false;
        if (res.data.total == 0) {
          this.$alert("没有查找到相关文章", "查找失败", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    // 点击当前行
    overallClick(row) {
      this.$router.push({
        path: "/notice/details",
        query: {
          id: row.id,
        },
      });
    },
    //搜索高亮
    brightenKeyword(val) {
      var keyword = this.title;
      if (keyword.length > 0) {
        let keywordArr = keyword.split("");
        val = val + "";
        keywordArr.forEach((item) => {
          if (val.indexOf(item) !== -1 && item !== "") {
            val = val.replace(
              new RegExp(item, "g"),
              '<font color="#f75353">' + item + "</font>"
            );
          }
        });
        return val;
      } else {
        return val;
      }
    },
    handleCurrentChange(val) {
      this.obj.page = val;
    },
    handleSizeChange(val) {
      this.obj.pageSize = val;
    },
  },
};
</script>
<style lang='less' scoped>
.sear_con {
  h3 {
    background: #dcdcdc;
    height: 50px;
    line-height: 50px;
    color: #333;
    padding-left: 60px;
    font-size: 16px;
    span {
      color: #680034;
    }
  }
  ul {
    li {
      padding: 20px 20px 8px;
      color: #666;
      font-size: 14px;
      border-bottom: 1px solid #f5f5f5;
      a.tit {
        color: #333333;
        font-size: 16px;
        display: block;
      }
      p {
        line-height: 28px;
        padding-top: 10px;
        a {
          color: #ffc52a;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      i {
        display: block;
        text-align: right;
        font-style: normal;
        color: #999;
      }
    }
  }
}
</style>