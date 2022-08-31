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
                ><i class="fa-solid fa-dollar-sign"></i>NTD</a
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
            <router-link to="/">logo</router-link>
          </div>
          <div class="nav-search">
            <form action="">
              <select name="" id="Categories">
                <option v-for="op of search_option" :key="op.id">
                  {{ op.name }}
                </option>
              </select>

              <input type="search" placeholder="Search here" />
              <button class="search-btn">
                <a href="javascrept:;">Search</a>
              </button>
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
            <li class="sign">
              <router-link to="/login">
                <i class="fa-solid fa-user"></i>Sign-In
              </router-link>
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
      search_option: [
        { id: 1, name: "All Categories" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "Smartphones" },
        { id: 4, name: "Tablet" },
        { id: 5, name: "Accessories" },
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
