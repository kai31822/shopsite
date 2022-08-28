<template>
  <div>
    <h1>login page</h1>
    <p>測試用頁面</p>
  </div>
  <div>
    <p v-for="item in data" :key="item.book">
      {{ item.book }} : {{ item.num }}
    </p>
  </div>
  <div>
    <hr />
    {{ days }}<br />{{ hours }}<br />{{ minutes }}<br />{{ seconds }}
  </div>
  <router-link to="/"><button>home</button></router-link>
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
      data: [
        { book: "q", num: 1 },
        { book: "w", num: 2 },
      ],
      timer: "Sep 30, 2022 12:30:00",
    };
  },
  //  created() {
  //     this.EventTime();
  //   },
  /*methods: {
    //暫時先不用vue  待解決
    EventTime() {
      // hot deal
      // Set the date we're counting down to
      let countDownDate = new Date(this.timer).getTime();
      let countdown = setInterval(function () {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = format0(Math.floor(distance / (1000 * 60 * 60 * 24)));
        let hours = format0(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        let minutes = format0(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        );
        let seconds = format0(Math.floor((distance % (1000 * 60)) / 1000));

        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("secs").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(countdown);
          document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }, 1000);
      function format0(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
      }
    },
  },*/
};
</script>
