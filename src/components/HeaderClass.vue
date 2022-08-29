<template>
  <div>
    <header id="top">
      <div class="header">
        <!-- top -->
        <nav class="navigation">
          <ul class="menu-info">
            <li class="">
              <a href="javascript:;"
                ><i class="fa-solid fa-phone"></i>+886-987654321</a
              >
            </li>
            <li class="">
              <a href="javascript:;"
                ><i class="fa-solid fa-envelope"></i>yoursite@gmail.com</a
              >
            </li>
            <li>
              <a href="javascript:;"
                ><i class="fa-solid fa-location-dot"></i>addr</a
              >
            </li>
          </ul>
          <ul class="menu-info">
            <li>
              <a href="javascript:;"
                ><i class="fa-solid fa-dollar-sign"></i>USD</a
              >
            </li>
            <li>
              <router-link to="/login">
                <i class="fa-solid fa-user"></i>Sign-In
              </router-link>
            </li>
            <!-- text can change into user account  -->
          </ul>
        </nav>
      </div>
      <div class="header2">
        <!-- bottom -->
        <nav class="navigation">
          <div class="nav-logo">
            <!-- <router-link to="/">logo</router-link> -->
            <a href="/">logo</a>
          </div>
          <div class="nav-search">
            <form action="">
              <select name="" id="Categories">
                <option value="0">All Categories</option>
                <option value="1">Laptops</option>
                <option value="2">Smartphones</option>
                <option value="3">Tablet</option>
                <option value="4">Accessories</option>
              </select>
              <input type="search" placeholder="Search here" />
              <button class="search-btn">Search</button>
            </form>
          </div>
          <ul class="menu-info-bot">
            <li>
              <a href="#">
                <i class="fa-solid fa-heart"></i>
                <span>Wishlist</span>
                <div class="qty">0</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
                <div class="qty">0</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- nav END -->
    <!-- categories -->
    <section class="no1">
      <nav class="container sm">
        <ul class="categories">
          <!--class= category_active -->
          <li v-for="nav in nav" :key="nav.id">
            <router-link
              :to="nav.path"
              :class="current_type === nav.id ? 'category_active' : ''"
              @click="checkoutType(nav.id)"
              >{{ nav.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <!--  categories END -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      nav: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "All", path: "prodall" },
        { id: 3, name: "Laptops", path: "laptops" },
        { id: 4, name: "Smartphones", path: "smartphones" },
        { id: 5, name: "Tablet", path: "tablets" },
        { id: 6, name: "Accessories", path: "accessories" },
      ],
      current_type: 1,
    };
  },
  methods: {
    checkoutType(index) {
      this.current_type = index;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mouse+Memoirs&family=Roboto:ital,wght@1,300&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
/* all */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  padding-top: 30px;
  padding-bottom: 30px;
}

/* nav */
.header {
  background-color: #1e1f29;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header2 {
  background-color: #15161d;
}

.navigation {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* 購物車 */
}
.navigation a {
  padding: 15px;
  color: white;
}
.navigation .menu-info {
  display: flex;
  padding: 10px;
  /* test */
  /* border: 1px white solid; */
}
.navigation .nav-logo {
  height: 100px;
  align-self: center;
  padding: 10px 0px 10px 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navigation .nav-logo a {
  /* padding: 20px 0px 20px 10px; */
  font-size: 60px;
}
.navigation .nav-search {
  align-self: center;
  /* padding-top: 30px; */
  /* margin: 0; */
  /* width: 555px; */
}
.navigation .nav-search select {
  height: 40px;
  padding: 0px 15px;
  border-radius: 40px 0px 0px 40px;
  border: 1px solid #e4e7ed;
  margin-right: -4px;
  margin-top: 1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navigation .nav-search input {
  height: 40px;
  width: 350px;
  padding: 0 15px;
  border: none;
  font-weight: 700;
}
.navigation .nav-search .search-btn {
  height: 40px;
  width: 100px;
  padding: 0px 15px;
  border-radius: 0px 40px 40px 0px;
  border: 1px solid #d10024;
  color: #fff;
  font-weight: 700;
  margin-left: -4px;
  background-color: #d10024;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navigation .menu-info-bot {
  display: flex;
  align-self: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navigation .menu-info-bot li {
  padding: 0 15px;
  text-align: center;
}
.navigation .menu-info-bot li a {
  display: block;
  width: 90px;
  position: relative;
}
.navigation .menu-info-bot li a i {
  display: block;
}
.navigation .menu-info-bot li a span {
  font-size: 18px;
}
.navigation .menu-info-bot .qty {
  position: absolute;
  right: 15px;
  top: -3px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background-color: #d10024;
}

/* nav END */
/* categories */
.no1 {
  width: 100vw;
  border-top: 3px solid #d10024;
  border-bottom: 2px solid #e4e7ed;
  max-width: 100%;
}
.no1 .container .categories {
  display: flex;
  gap: 30px;
  /* li啟用時的style */
}
.no1 .container .categories li:first-child {
  padding: 20px 0 20px 25px;
}
.no1 .container .categories li {
  font-size: 18px;
  padding: 20px 0;
}
.no1 .container .categories li a::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #d10024;
  transition: 0.2s all;
}
.no1 .container .categories li a:hover:after {
  width: 100%;
}
.no1 .container .categories .category_active {
  color: #d10024;
  background-color: transparent;
  border-bottom: #d10024 3px solid;
}

/* categories END */
</style>
