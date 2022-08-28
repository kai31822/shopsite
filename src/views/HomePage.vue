<template>
  <div>
    <!-- Collection -->
    <section class="section">
      <div class="container">
        <div class="collection-allwrap">
          <!-- 1 -->
          <div class="collection-wrap">
            <div class="collection-item">
              <div class="collection-item-img">
                <a href="./pages/laptop.html"
                  ><img
                    src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></a>
              </div>
              <div class="collection-item-body">
                <h3>Laptop<br />Collection</h3>
                <a href=""
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="collection-wrap">
            <div class="collection-item">
              <div class="collection-item-img">
                <a href="./pages/Smartphone.html"
                  ><img
                    src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></a>
              </div>
              <div class="collection-item-body">
                <h3>Smartphones<br />Collection</h3>
                <a href=""
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="collection-wrap">
            <div class="collection-item">
              <div class="collection-item-img">
                <a href="./pages/Accessories.html"
                  ><img
                    src="https://images.unsplash.com/photo-1599108859517-0d6aed78ac87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXMlMjBlbGV0aXJpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></a>
              </div>
              <div class="collection-item-body">
                <h3>Accessories<br />Collection</h3>
                <a href=""
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Collection END -->
    <!-- NEW PRODUCTS -->
    <section class="section">
      <div class="container newproducts-all">
        <div class="newproducts-top">
          <div class="newproduct-item-wrap">
            <div class="newproduct-item">
              <h3>New PRODUCTS</h3>
            </div>
            <ul class="newproduct-item sm">
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Tablet</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
        </div>
        <div class="newproducts-bot">
          <div class="newproducts-bot-item">
            <div class="newproducts-bot-item-left">
              <div class="carousel">
                <div class="container">
                  <a href=""
                    ><img
                      src="https://m.media-amazon.com/images/I/71-qOgGl43L._AC_UL480_FMwebp_QL65_.jpg"
                      alt=""
                  /></a>
                  <a href=""
                    ><img
                      src="https://m.media-amazon.com/images/I/71IKEY3NBhL._AC_UL480_FMwebp_QL65_.jpg"
                      alt=""
                  /></a>
                  <a href=""
                    ><img
                      src="https://m.media-amazon.com/images/I/71PkoapDXRL._AC_UY327_FMwebp_QL65_.jpg"
                      alt=""
                  /></a>
                </div>

                <div class="botton">
                  <button class="indicator" onclick="setindex(0)"></button>
                  <button class="indicator" onclick="setindex(1)"></button>
                  <button class="indicator" onclick="setindex(2)"></button>
                </div>
              </div>
            </div>
            <div class="newproducts-bot-item-right">
              <template v-for="cargo of productslaptop" :key="cargo.id">
                <!-- 6src -->
                <div class="right-prod" :data-type="cargo.type">
                  <div class="prod-img">
                    <router-link to="/"
                      ><img :src="cargo.url" alt="1"
                    /></router-link>
                  </div>
                  <div class="prod-info">
                    <div class="info-p">
                      <a href="" :title="cargo.name">{{ cargo.name }}</a>
                    </div>
                    <div class="info-price">
                      <b>$</b>
                      <p>{{ cargo.price }}</p>
                    </div>
                  </div>
                </div>
                <!-- 6pic end -->
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- NEW PRODUCTS END -->
    <!-- hot deal -->
    <section class="section hotdeal-wrap">
      <!-- old -->
      <div class="container hotdeal">
        <ul id="countdown">
          <li>
            <div class="hotdeal-time">
              <h3 id="days">{{ days || "- -" }}</h3>
              <span>DAYS</span>
            </div>
          </li>
          <li>
            <div class="hotdeal-time">
              <h3 id="hours">{{ hours || "- -" }}</h3>
              <span>HOURS</span>
            </div>
          </li>
          <li>
            <div class="hotdeal-time">
              <h3 id="mins">{{ minutes || "- -" }}</h3>
              <span>MINS</span>
            </div>
          </li>
          <li>
            <div class="hotdeal-time">
              <h3 id="secs">{{ seconds || "- -" }}</h3>
              <span>SECS</span>
            </div>
          </li>
        </ul>
        <h2>hot deal this week</h2>
        <p>New Collection Up To 50% OFF</p>
        <a href="#">SHOP NOW</a>
      </div>
    </section>
    <!-- hot deal end -->
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    //test簡易倒數計時器,用vue  ref:可以接受任何型態的資料，但是不會對物件或陣列內部的屬性變動做監聽。
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const timer = new Date("Sep 30, 2022 12:30:00").getTime();
    const format00 = (time) => {
      time = time.toString();
      return time.length < 2 ? "0" + time : time;
    };
    setInterval(() => {
      const currentDate = new Date();
      const distance = timer - currentDate;

      seconds.value = format00(Math.floor((distance % (1000 * 60)) / 1000));
      minutes.value = format00(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      hours.value = format00(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      days.value = format00(Math.floor(distance / (1000 * 60 * 60 * 24)));
    }, 1000);

    return { days, hours, minutes, seconds };
  },
  data() {
    return {
      productslaptop: [
        {
          id: 1,
          type: "laptop",
          name: '2022 Newest HP ProBook 15.6" FHD IPS Notebook Business Laptop- Intel Core i7-1165G7 2.8GHz, 32GB RAM, 2TB PCIe SSD, Backlit Keyboard, Webcam, Windows 10Pro, 3in1 Accessories',
          price: "38,900",
          url: "https://m.media-amazon.com/images/I/61UmeWhX8IL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: 2,
          type: "laptop",
          name: 'HP Pavilion Premium Laptop (2021 Model), 15.6" FHD Display, AMD Athlon N3050, AMD Radeon Graphics, 16GB RAM, 512GB SSD, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life, Win10',
          price: "15,000",
          url: "https://m.media-amazon.com/images/I/71Du0PqvF9L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: 3,
          type: "laptop",
          name: 'ASUS Vivobook Laptop, 17.3" HD+ (1600x900) Non-Touch Display, Intel Core i5 Quad-Core Processor, 20GB DDR4 RAM, 1TB PCIe NVMe M.2 SSD, Webcam, HDMI, USB Type-C, Wi-Fi 5, Windows 11 Home, Silver',
          price: "17,400",
          url: "https://m.media-amazon.com/images/I/710hTvZsh3L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: 4,
          type: "laptop",
          name: 'SAMSUNG 13.3" Galaxy Chromebook Laptop Computer w/ 256GB Storage, 8GB RAM, 4K AMOLED Touchscreen Display, HD Intel Core I-5 Processor, Ultra Slim, US Warranty, Fiesta Red',
          price: "30,000",
          url: "https://m.media-amazon.com/images/I/81peks6yuTL._AC_UL480_FMwebp_QL65_.jpg",
        },
        {
          id: 5,
          type: "laptop",
          name: "ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6” 300Hz FHD Display, Intel Core i7-12700H, GeForce RTX 3060, 16GB DDR5, 1TB PCIe SSD, Thunderbolt 4, Wi-Fi 6, Windows 11 Home, Mecha Gray, FX507ZM-ES74",
          price: "42,920",
          url: "https://m.media-amazon.com/images/I/81Q-FwBZyYL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: 6,
          type: "laptop",
          name: 'Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU | 17.3" FHD 144Hz IPS Display | 16GB DDR4 | 1TB NVMe SSD | Killer Wi-Fi 6 | Backlit KB | Win 11',
          price: "34,800",
          url: "https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UY327_QL65_.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import url("../assets/css/home.css");
</style>
