<template>
  <!-- header -->
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
          <li class="hamburgerbar">
            <p>
              <i class="fa-solid fa-bars"></i>
            </p>
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
  <!-- product -->
  <template v-for="c in getid()" :key="c.id">
    <div class="prod-container" :data-id="c.id">
      <div class="prod-img">
        <img :src="c.url" alt="" />
      </div>
      <div class="prod-info">
        <h1 id="name">{{ c.name }}</h1>
        <p id="info">{{ c.info }}</p>
        <p id="price">${{ c.price }}</p>
        <span id="add"></span> <button>Add Wsishlist</button>
      </div>
    </div>
  </template>
  <div class="detail">
    <h1>More detail</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
      voluptatum! Rem explicabo eius vero tempore saepe nisi, atque pariatur
      esse dolore, laboriosam in ipsum reprehenderit. Laudantium deleniti est
      laboriosam recusandae?
    </p>
  </div>
  <FooterClass />
</template>

<script>
import FooterClass from "../components/FooterClass.vue";
export default {
  components: {
    FooterClass,
  },
  data() {
    return {
      cargo: [
        {
          id: "1",
          type: "laptop",
          name: '2022 Newest HP ProBook 15.6" FHD IPS Notebook Business Laptop- Intel Core i7-1165G7 2.8GHz, 32GB RAM, 2TB PCIe SSD, Backlit Keyboard, Webcam, Windows 10Pro, 3in1 Accessories',
          info: "info222",
          price: "38,900",
          url: "https://m.media-amazon.com/images/I/61UmeWhX8IL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "2",
          type: "laptop",
          name: 'HP Pavilion Premium Laptop (2021 Model),15.6" FHD Display, AMD Athlon N3050, AMD Radeon Graphics, 16GB RAM, 512GB SSD, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life, Win10',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "15,000",
          url: "https://m.media-amazon.com/images/I/71Du0PqvF9L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "3",
          type: "laptop",
          name: 'ASUS Vivobook Laptop,17.3" HD+ (1600x900) Non-Touch Display, Intel Core i5 Quad-Core Processor, 20GB DDR4 RAM, 1TB PCIe NVMe M.2 SSD, Webcam, HDMI, USB type-C, Wi-Fi 5, Windows 11 Home, Silver',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "17,400",
          url: "https://m.media-amazon.com/images/I/710hTvZsh3L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "4",
          type: "laptop",
          name: 'SAMSUNG 13.3" Galaxy Chromebook Laptop Computer w/ 256GB Storage, 8GB RAM, 4K AMOLED Touchscreen Display, HD Intel Core I-5 Processor, Ultra Slim, US Warranty, Fiesta Red',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "30,000",
          url: "https://m.media-amazon.com/images/I/81peks6yuTL._AC_SL1500_.jpg",
        },
        {
          id: "5",
          type: "laptop",
          name: 'ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6" 300Hz FHD Display, Intel Core i7-12700H, GeForce RTX 3060, 16GB DDR5, 1TB PCIe SSD, Thunderbolt 4, Wi-Fi 6, Windows 11 Home, Mecha Gray, FX507ZM-ES74',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "42,920",
          url: "https://m.media-amazon.com/images/I/81Q-FwBZyYL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "6",
          type: "laptop",
          name: 'Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVidIA GeForce RTX 3050Ti Laptop GPU | 17.3" FHD 144Hz IPS Display | 16GB DDR4 | 1TB NVMe SSD | Killer Wi-Fi 6 | Backlit KB | Win 11',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "34,800",
          url: "https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UY327_QL65_.jpg",
        },
        {
          id: "7",
          type: "laptop",
          name: "Lenovo 14w Gen 2 14” Laptop Student Notebook 2022 Newest, AMD 3000 Series 3015e Processor 4GB RAM 192GB Storage (64 GB eMMC + 128GB Micro SD), Bluetooth, Webcam, HDMI, Windows 10 Pro",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "34,800",
          url: "https://m.media-amazon.com/images/I/61pZpYJCqFL._AC_SL1500_.jpg",
        },
        {
          id: "8",
          type: "laptop",
          name: 'Newest Flagship HP Chromebook, 11.6" HD (1366 x 768) Display, Intel Celeron Processor N3350, 4GB LPDDR2, 32GB eMMC, Chrome OS, HD Graphics 500, 11A-NB0013DX, Ash Gray (Renewed)',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "8,100",
          url: "https://m.media-amazon.com/images/I/71zz1YQ9MJL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "t1",
          type: "tablet",
          name: "SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory,SM-X200NZSAXAR, Silver, Amazon Exclusive",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "6,000",
          url: "https://m.media-amazon.com/images/I/61fV4UeHeLL._AC_SL1200_.jpg",
        },
        {
          id: "t2",
          type: "tablet",
          name: 'SAMSUNG Galaxy Tab A7 Lite 8.7" 32GB Android Tablet w/ Compact, Slim Design, Sturdy Metal Frame, Long Lasting Battery, Gray',
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "4,000",
          url: "https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SL1500_.jpg",
        },
        {
          id: "t3",
          type: "tablet",
          name: "10 Inch Android Tablet pc, 32GB ROM 128GB Expand, Octa-Core Tablets, IPS HD Touch Screen,Google Certificated Wi-Fi Tablets, G+G, 8MP Camera, Long Battery Life-Black ( Including Tablet Leather Case)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "2,700",
          url: "https://m.media-amazon.com/images/I/71kMcDJhqSL._AC_SL1491_.jpg",
        },
        {
          id: "t4",
          type: "tablet",
          name: "Samsung Galaxy Tab S8+ Android Tablet, 12.4” Large AMOLED Screen, 128GB Storage, Wi-Fi 6E, Ultra Wide Camera, S Pen Included, Long Lasting Battery, Graphite",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "24,600",
          url: "https://m.media-amazon.com/images/I/81XE3+Sjc6L._AC_SL1500_.jpg",
        },
        {
          id: "t5",
          type: "tablet",
          name: "Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 32GB Storage, Long-Lasting Battery, Kids Content, Smart Switch, Expandable Memory, Dark Gray",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "5,900",
          url: "https://m.media-amazon.com/images/I/61krikJxTmL._AC_SL1200_.jpg",
        },
        {
          id: "t6",
          type: "tablet",
          name: "Microsoft Surface Pro 4 (Intel Core i5, 4GB RAM, 128GB) with Windows 10 Anniversary (Renewed)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "24,500",
          url: "https://m.media-amazon.com/images/I/61+190WRzZL._AC_UY327_QL65_.jpg",
        },
        {
          id: "t7",
          type: "tablet",
          name: "2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Purple (5th Generation)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "22,500",
          url: "https://m.media-amazon.com/images/I/61k05QwLuML._AC_UY327_QL65_.jpg",
        },
        {
          id: "t8",
          type: "tablet",
          name: "SAMSUNG Galaxy Tab S7 11-inch Android Tablet 128GB Wi-Fi Bluetooth S Pen Fast Charging USB-C Port, Mystic Black",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "23,400",
          url: "https://m.media-amazon.com/images/I/51fPuFND28L._AC_UY327_QL65_.jpg",
        },
        {
          id: "s1",
          type: "smartphones",
          name: "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Night Mode, Brightest Display Screen, 50MP Photo Resolution, Long Battery Life, US Version, Green",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "21,000",
          url: "https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_SL1500_.jpg",
        },
        {
          id: "s2",
          type: "smartphones",
          name: "Google Pixel 6-5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "18,000",
          url: "https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s3",
          type: "smartphones",
          name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Olive",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "21,000",
          url: "https://m.media-amazon.com/images/I/61pP6pemX3L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s4",
          type: "smartphones",
          name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Lavender",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "17,800",
          url: "https://m.media-amazon.com/images/I/61UDrA6RtTL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s5",
          type: "smartphones",
          name: "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "17,400",
          url: "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s6",
          type: "smartphones",
          name: "Google Pixel 4a Smartphone, 128GB Storage & Unlocked Cellular - Just Black (Renewed)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "15,000",
          url: "https://m.media-amazon.com/images/I/61MBRtrVz9L._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: "s7",
          type: "smartphones",
          name: "iPhone13 Por",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "32,900",
          url: "https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13_pro__ezrebuldmju6_large.jpg",
        },
        {
          id: "s8",
          type: "smartphones",
          name: "iPhone13 ",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "22,900",
          url: "https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13__ej8lu6qtsdw2_large.jpg",
        },
        {
          id: "a1",
          type: "Accessory",
          name: "USB-C to USB A Cable 3.1A Fast Charging [2-Pack 6.6ft], JSAUX USB Type C Charger Cord Compatible with Samsung Galaxy S10 S9 S8 S20 Plus A51 A12 A11, Note 10 9 8, PS5 Controller USB C Charger-Red",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "270",
          url: "https://m.media-amazon.com/images/I/81FgxrbJDWL._SL1500_.jpg",
        },
        {
          id: "a2",
          type: "Accessory",
          name: "HyperX Cloud Alpha S - PC Gaming Headset, 7.1 Surround Sound, Adjustable Bass, Dual Chamber Drivers, Chat Mixer, Breathable Leatherette, Memory Foam, and Noise Cancelling Microphone - Blue",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "2,670",
          url: "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SL1354_.jpg",
        },
        {
          id: "a3",
          type: "Accessory",
          name: "PopSockets: PopGrip with Swappable Top for Phones and Tablets - Black",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "300",
          url: "https://m.media-amazon.com/images/I/71BYKFrlL+L._AC_SL1500_.jpg",
        },
        {
          id: "a4",
          type: "Accessory",
          name: "Yootech Wireless Charger,10W Max Fast Wireless Charging Pad Compatible with iPhone 13/13 Pro/13 Mini/13 Pro Max/SE 2022/12/SE 2020/11/X/8,Samsung Galaxy S22/S21/S20/S10,AirPods Pro(No AC Adapter)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "420",
          url: "https://m.media-amazon.com/images/I/61oIAKY9s1L._AC_SL1500_.jpg",
        },
        {
          id: "a5",
          type: "Accessory",
          name: "TACOMEGE Transparent Clear Phone Ring Grips Holder Kickstand, Finger Ring Stand for Cell Phone Tablet Case Accessories(Round-Clear)",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "140",
          url: "https://m.media-amazon.com/images/I/61YI6ygBmUL._AC_UY327_QL65_.jpg",
        },
        {
          id: "a6",
          type: "Accessory",
          name: "EDUPLINK Portable Bluetooth Speaker Waterproof IPX7 Wireless Speaker with 20W Louder Speakers Switch Between Bluetooth Pairing and Aux-in Mode by Phone Button Black",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "1,200",
          url: "https://m.media-amazon.com/images/I/71is4M24SJL._AC_SL1500_.jpg",
        },
        {
          id: "a7",
          type: "Accessory",
          name: "Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, Outdoor Speakers with Bluetooth 5.0, 30H Playtime,66ft Bluetooth Range,Dual Pairing for Home",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "1,200",
          url: "https://m.media-amazon.com/images/I/81vKTKWiILL._AC_SL1500_.jpg",
        },
        {
          id: "a8",
          type: "Accessory",
          name: "Ortizan Outdoor Bluetooth Speaker, 50W Wireless Stereo Sound Speakers with LED Lights, IPX5 Waterproof Lantern Speaker with Power Bank Function, Bluetooth 5.0, 40H Playtime for Party Garden Patio Yard",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla tenetur saepe necessitatibus cumque qui et sunt impedit quia quisquam, quos asperiores nesciunt ea ipsam officiis esse vero voluptatem similique.",
          price: "1,950",
          url: "https://m.media-amazon.com/images/I/6111JX5F66L._AC_SL1500_.jpg",
        },
      ],
      search_option: [
        { id: 1, name: "All Categories" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "Smartphones" },
        { id: 4, name: "Tablet" },
        { id: 5, name: "Accessories" },
      ],
      prod: this.$route.params.prodId,
    };
  },
  computed: {
    prodId() {
      return this.$route.params.prodId;
    },
  },
  methods: {
    getid() {
      return this.cargo.filter((item) => item.id === this.prod);
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin pc {
  @media (max-width: 1200px) {
    @content;
  }
}

@mixin laptop {
  @media (max-width: 1024px) {
    @content;
  }
}

//   在螢幕小於768px時，套用此css
@mixin tablet {
  @media (max-width: 768px) {
    @content;
  }
}

//   @include pad
@mixin mobile {
  @media (max-width: 480px) {
    @content;
  }
}
@keyframes moveToTop {
  0% {
    transform: translatey(30px);
    opacity: 0;
  }
  100% {
    transform: translatey(0px);
    opacity: 1;
  }
}
.prod-container {
  max-width: 1200px;
  min-height: 600px;
  padding-bottom: 10px;
  border-bottom: 1px gray solid;
  //   min-height: 600px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  .prod-img {
    width: 30%;
    @include mobile {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .prod-info {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    @include mobile {
      width: 100%;
    }
    #name {
      padding: 20px;
    }
    #info {
      padding: 20px;
    }

    p {
      padding: 0 20px;
    }
    #add {
      display: block;
      text-align: center;
      color: #d10024;
      font-weight: 900;
      margin: 15px auto 0 auto;
    }
    button {
      cursor: pointer;
      margin: 15px auto 0 auto;
      border-radius: 30px;
      width: 200px;
      padding: 10px 15px;
    }
  }
}
.detail {
  max-width: 1200px;
  margin: 15px auto 0 auto;
  height: 300px;
  animation: moveToTop 1s ease-in-out 60ms;
  @include tablet {
    padding: 0 15px;
  }
}
</style>
