<template>
  <!-- categories laptops...-->
  <div class="producesall" id="pageMain">
    <template v-for="prod in pagelist" :key="prod.id">
      <div class="prod-container" :data-id="prod.id">
        <div class="prod-img">
          <router-link v-bind:to="'product/' + prod.id" :title="prod.name">
            <img :src="prod.url" alt="" />
          </router-link>
        </div>
        <div class="prod-info">
          <div class="info-p">
            <router-link v-bind:to="'product/' + prod.id" :title="prod.name">{{
              prod.name
            }}</router-link>
          </div>
          <div class="info-price">
            <b>$</b>
            <p>{{ prod.price }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div id="pageBox">
    <span id="prev" @click="change(-1)">Previous</span>
    <div id="pageNav">
      <a
        href="javascript:;"
        v-for="(c, index) in totalPage"
        :key="index"
        :class="current_type === index ? 'active' : ''"
        @click="changepage(c)"
      >
        {{ c }}
      </a>
    </div>
    <!-- <span id="next" v-show="nowPage < totalPage" @click="change(1)"> 下一頁 </span> -->
    <span id="next" @click="change(1)">Next</span>
  </div>
  <!-- categories End-->
</template>
<script>
export default {
  props: {
    cargo: { type: Object },
  },
  data: function () {
    return {
      count: 0,
      perPage: 12,
      nowPage: 1,
      laptops: [],
      current_type: 0,
    };
  },
  computed: {
    //包含篩選
    pagelist() {
      let laptops = this.cargo.filter(function (item) {
        // 方法一
        // return item.name.match('1')
        //方法二
        if (item.type.includes("smartphones")) {
          return item;
        }
      });
      let start = (this.nowPage - 1) * this.perPage;
      return laptops.slice(start, start + this.perPage);
    },
    totalPage() {
      let laptops = this.cargo.filter(function (item) {
        if (item.type.includes("smartphones")) {
          return item;
        }
      });
      return Math.ceil(laptops.length / this.perPage);
    },
  },
  methods: {
    change(direct) {
      this.current_type = this.current_type + direct;
      let page = this.nowPage + direct;
      if (page < 1) {
        this.current_type = 0;
        alert("Already the first page!!");
      } else if (page > this.totalPage) {
        this.current_type = this.totalPage - 1;
        alert("Already the last page!!");
      }
      return (this.nowPage =
        page < 1 ? 1 : page > this.totalPage ? this.totalPage : page);
    },
    changepage(direct) {
      this.current_type = direct - 1;
      return (this.nowPage = direct);
    },
  },
};
</script>
<style lang="scss">
@import url("../assets/css/categories.css");
</style>
