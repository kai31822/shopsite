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
                <router-link v-bind:to="'product/1'"
                  ><img
                    src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></router-link>
              </div>
              <div class="collection-item-body">
                <h3>Laptop<br />Collection</h3>
                <router-link v-bind:to="'product/1'"
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></router-link>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="collection-wrap">
            <div class="collection-item">
              <div class="collection-item-img">
                <router-link v-bind:to="'product/s1'"
                  ><img
                    src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></router-link>
              </div>
              <div class="collection-item-body">
                <h3>Smartphones<br />Collection</h3>
                <router-link v-bind:to="'product/s1'"
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></router-link>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="collection-wrap">
            <div class="collection-item">
              <div class="collection-item-img">
                <router-link v-bind:to="'product/a1'"
                  ><img
                    src="https://images.unsplash.com/photo-1599108859517-0d6aed78ac87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXMlMjBlbGV0aXJpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                /></router-link>
              </div>
              <div class="collection-item-body">
                <h3>Accessories<br />Collection</h3>
                <router-link v-bind:to="'product/a1'"
                  >SHOP NOW<i class="fa-solid fa-circle-arrow-right"></i
                ></router-link>
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
              <!-- newproduct nav -->
              <li v-for="prodnav in newproductnav" :key="prodnav.id">
                <a
                  href="javascript:;"
                  :class="
                    current_type === prodnav.id ? 'newprooduct_active' : ''
                  "
                  @click="checkoutType(prodnav.id, prodnav.name)"
                  >{{ prodnav.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="newproducts-bot">
          <div class="newproducts-bot-item">
            <div class="newproducts-bot-item-left">
              <div class="carousel">
                <div
                  v-for="(img, idx) of imgs"
                  :key="idx"
                  v-show="idx === showImg"
                  class="container"
                >
                  <a href="#"><img :src="img.src" alt="" /></a>
                  <!-- <span>{{ idx + 1 }}</span> -->
                </div>

                <div class="botton">
                  <button class="prev" @click="setShowImg(-1)">◀</button>
                  <button
                    class="indicator"
                    @click="setShowImgTo(num - 1)"
                    v-for="num in imgs.length"
                    :key="num - 1"
                  ></button>
                  <button class="next" @click="setShowImg(1)">▶</button>
                </div>
              </div>
            </div>
            <!-- right -->
            <div class="newproducts-bot-item-right">
              <div
                class="right-prod"
                v-show="showprodright === 'Laptops'"
                v-for="cargo of products6"
                :key="cargo.id"
                :data-type="cargo.type"
              >
                <div class="prod-img">
                  <router-link
                    v-bind:to="'product/' + cargo.id"
                    :title="cargo.name"
                    ><img :src="cargo.url" alt="1"
                  /></router-link>
                </div>
                <div class="prod-info">
                  <div class="info-p">
                    <router-link
                      v-bind:to="'product/' + cargo.id"
                      :title="cargo.name"
                      >{{ cargo.name }}</router-link
                    >
                  </div>
                  <div class="info-price">
                    <b>$</b>
                    <p>{{ cargo.price }}</p>
                  </div>
                </div>
              </div>
              <!-- right 2 smartphone-->
              <div
                class="right-prod"
                v-show="showprodright === 'Smartphones'"
                v-for="cargo of smartphone"
                :key="cargo.id"
                :data-type="cargo.type"
              >
                <div class="prod-img">
                  <router-link
                    v-bind:to="'product/' + cargo.id"
                    :title="cargo.name"
                    ><img :src="cargo.url" alt="1"
                  /></router-link>
                </div>
                <div class="prod-info">
                  <div class="info-p">
                    <router-link
                      v-bind:to="'product/' + cargo.id"
                      :title="cargo.name"
                      >{{ cargo.name }}</router-link
                    >
                  </div>
                  <div class="info-price">
                    <b>$</b>
                    <p>{{ cargo.price }}</p>
                  </div>
                </div>
              </div>
              <!-- 2 -->
              <!-- right 3 Tablet -->
              <div
                class="right-prod"
                v-show="showprodright === 'Tablet'"
                v-for="cargo of tablet"
                :key="cargo.id"
                :data-type="cargo.type"
              >
                <div class="prod-img">
                  <router-link
                    v-bind:to="'product/' + cargo.id"
                    :title="cargo.name"
                    ><img :src="cargo.url" alt="1"
                  /></router-link>
                </div>
                <div class="prod-info">
                  <div class="info-p">
                    <router-link
                      v-bind:to="'product/' + cargo.id"
                      :title="cargo.name"
                      >{{ cargo.name }}</router-link
                    >
                  </div>
                  <div class="info-price">
                    <b>$</b>
                    <p>{{ cargo.price }}</p>
                  </div>
                </div>
              </div>
              <!-- 3 -->
              <!-- right 3 Accessories -->
              <div
                class="right-prod"
                v-show="showprodright === 'Accessories'"
                v-for="cargo of Accessories"
                :key="cargo.id"
                :data-type="cargo.type"
              >
                <div class="prod-img">
                  <router-link
                    v-bind:to="'product/' + cargo.id"
                    :title="cargo.name"
                    ><img :src="cargo.url" alt="1"
                  /></router-link>
                </div>
                <div class="prod-info">
                  <div class="info-p">
                    <router-link
                      v-bind:to="'product/' + cargo.id"
                      :title="cargo.name"
                      >{{ cargo.name }}</router-link
                    >
                  </div>
                  <div class="info-price">
                    <b>$</b>
                    <p>{{ cargo.price }}</p>
                  </div>
                </div>
              </div>
              <!-- 4 -->
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
  components: {},
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
      products6: [
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
      smartphone: [
        {
          id: "s1",
          type: "smartphones",
          name: "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Night Mode, Brightest Display Screen, 50MP Photo Resolution, Long Battery Life, US Version, Green",
          info: "",
          price: "21,000",
          url: "https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_SL1500_.jpg",
        },
        {
          id: "s2",
          type: "smartphones",
          name: "Google Pixel 6-5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black",
          info: "",
          price: "18,000",
          url: "https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s3",
          type: "smartphones",
          name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Olive",
          info: "",
          price: "21,000",
          url: "https://m.media-amazon.com/images/I/61pP6pemX3L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s4",
          type: "smartphones",
          name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Lavender",
          info: "",
          price: "17,800",
          url: "https://m.media-amazon.com/images/I/61UDrA6RtTL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s5",
          type: "smartphones",
          name: "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed)",
          info: "",
          price: "17,400",
          url: "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s6",
          type: "smartphones",
          name: "Google Pixel 4a Smartphone, 128GB Storage & Unlocked Cellular - Just Black (Renewed)",
          info: "",
          price: "15,000",
          url: "https://m.media-amazon.com/images/I/61MBRtrVz9L._AC_UY327_FMwebp_QL65_.jpg",
        },
      ],
      tablet: [
        {
          id: "t1",
          type: "tablet",
          name: "SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory,SM-X200NZSAXAR, Silver, Amazon Exclusive",
          info: "",
          price: "6,000",
          url: "https://m.media-amazon.com/images/I/61fV4UeHeLL._AC_SL1200_.jpg",
        },
        {
          id: "t2",
          type: "tablet",
          name: 'SAMSUNG Galaxy Tab A7 Lite 8.7" 32GB Android Tablet w/ Compact, Slim Design, Sturdy Metal Frame, Long Lasting Battery, Gray',
          info: "",
          price: "4,000",
          url: "https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SL1500_.jpg",
        },
        {
          id: "t3",
          type: "tablet",
          name: "10 Inch Android Tablet pc, 32GB ROM 128GB Expand, Octa-Core Tablets, IPS HD Touch Screen,Google Certificated Wi-Fi Tablets, G+G, 8MP Camera, Long Battery Life-Black ( Including Tablet Leather Case)",
          info: "",
          price: "2,700",
          url: "https://m.media-amazon.com/images/I/71kMcDJhqSL._AC_SL1491_.jpg",
        },
        {
          id: "t4",
          type: "tablet",
          name: "Samsung Galaxy Tab S8+ Android Tablet, 12.4” Large AMOLED Screen, 128GB Storage, Wi-Fi 6E, Ultra Wide Camera, S Pen Included, Long Lasting Battery, Graphite",
          info: "",
          price: "24,600",
          url: "https://m.media-amazon.com/images/I/81XE3+Sjc6L._AC_SL1500_.jpg",
        },
        {
          id: "t5",
          type: "tablet",
          name: "Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 32GB Storage, Long-Lasting Battery, Kids Content, Smart Switch, Expandable Memory, Dark Gray",
          info: "",
          price: "5,900",
          url: "https://m.media-amazon.com/images/I/61krikJxTmL._AC_SL1200_.jpg",
        },
        {
          id: "t6",
          type: "tablet",
          name: "Microsoft Surface Pro 4 (Intel Core i5, 4GB RAM, 128GB) with Windows 10 Anniversary (Renewed)",
          info: "",
          price: "24,500",
          url: "https://m.media-amazon.com/images/I/61+190WRzZL._AC_UY327_QL65_.jpg",
        },
      ],
      Accessories: [
        {
          id: "a1",
          type: "Accessory",
          name: "USB-C to USB A Cable 3.1A Fast Charging [2-Pack 6.6ft], JSAUX USB Type C Charger Cord Compatible with Samsung Galaxy S10 S9 S8 S20 Plus A51 A12 A11, Note 10 9 8, PS5 Controller USB C Charger-Red",
          info: "",
          price: "270",
          url: "https://m.media-amazon.com/images/I/81FgxrbJDWL._SL1500_.jpg",
        },
        {
          id: "a2",
          type: "Accessory",
          name: "HyperX Cloud Alpha S - PC Gaming Headset, 7.1 Surround Sound, Adjustable Bass, Dual Chamber Drivers, Chat Mixer, Breathable Leatherette, Memory Foam, and Noise Cancelling Microphone - Blue",
          info: "",
          price: "2,670",
          url: "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SL1354_.jpg",
        },
        {
          id: "a3",
          type: "Accessory",
          name: "PopSockets: PopGrip with Swappable Top for Phones and Tablets - Black",
          info: "",
          price: "300",
          url: "https://m.media-amazon.com/images/I/71BYKFrlL+L._AC_SL1500_.jpg",
        },
        {
          id: "a4",
          type: "Accessory",
          name: "Yootech Wireless Charger,10W Max Fast Wireless Charging Pad Compatible with iPhone 13/13 Pro/13 Mini/13 Pro Max/SE 2022/12/SE 2020/11/X/8,Samsung Galaxy S22/S21/S20/S10,AirPods Pro(No AC Adapter)",
          info: "",
          price: "420",
          url: "https://m.media-amazon.com/images/I/61oIAKY9s1L._AC_SL1500_.jpg",
        },
        {
          id: "a5",
          type: "Accessory",
          name: "TACOMEGE Transparent Clear Phone Ring Grips Holder Kickstand, Finger Ring Stand for Cell Phone Tablet Case Accessories(Round-Clear)",
          info: "",
          price: "140",
          url: "https://m.media-amazon.com/images/I/61YI6ygBmUL._AC_UY327_QL65_.jpg",
        },
        {
          id: "a6",
          type: "Accessory",
          name: "EDUPLINK Portable Bluetooth Speaker Waterproof IPX7 Wireless Speaker with 20W Louder Speakers Switch Between Bluetooth Pairing and Aux-in Mode by Phone Button Black",
          info: "",
          price: "1,200",
          url: "https://m.media-amazon.com/images/I/71is4M24SJL._AC_SL1500_.jpg",
        },
      ],
      newproductnav: [
        {
          id: 1,
          name: "Laptops",
        },
        {
          id: 2,
          name: "Smartphones",
        },
        {
          id: 3,
          name: "Tablet",
        },
        {
          id: 4,
          name: "Accessories",
        },
      ],
      current_type: 1,
      showprod: 0,
      showprodright: "Laptops",
      //carousel
      transitionName: "right-in",
      showImg: 0,
      imgsCount: 8,
      imgs: [
        {
          src: "https://m.media-amazon.com/images/I/71-qOgGl43L._AC_UL480_FMwebp_QL65_.jpg",
        },
        {
          src: "https://m.media-amazon.com/images/I/71IKEY3NBhL._AC_UL480_FMwebp_QL65_.jpg",
        },
        {
          src: "https://m.media-amazon.com/images/I/71PkoapDXRL._AC_UY327_FMwebp_QL65_.jpg",
        },
      ],
      autoPlayInterval: 3500,
      //carousel
    };
  },
  mounted() {
    //carousel
    setInterval(this.setShowImg, this.autoPlayInterval);
  },
  methods: {
    checkoutType(index, name) {
      this.current_type = index;
      this.showprodright = name;
    },
    //carousel
    setShowImg(changeIdx = 1) {
      switch (true) {
        case changeIdx === 1 && this.showImg === this.imgs.length - 1:
          this.showImg = 0;
          break;
        case changeIdx === -1 && this.showImg === 0:
          this.showImg = this.imgs.length - 1;
          break;
        default:
          this.showImg = this.showImg + changeIdx;
          break;
      }
    },
    setShowImgTo(changeIdxTo) {
      this.showImg = changeIdxTo;
    },
    // watch: {
    //   //carousel
    //   showImg(nIdx, oIdx) {
    //     this.transitionName = nIdx > oIdx ? "right-in" : "left-in";
    //   },
    // },
  },
};
</script>
<style lang="scss">
@import url("../assets/css/home.css");
</style>
