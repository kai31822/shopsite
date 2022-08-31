<template>
  <div>
    <!-- footer -->
    <footer>
      <a href="#top" class="btt">Back to top</a>
      <div class="copyright-bg">
        <div class="container">
          <div class="item">
            <a href="javascript:;">Conditions of Use</a>
            <a href="javascript:;">Privacy Notice</a>
            <a href="javascript:;">Interest-Based Ads</a>
            <p>&copy;2022 kai.com Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer END -->
  </div>
</template>
<style lang="scss">
@charset "UTF-8";
/* font */
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

footer .btt {
  padding: 15px;
  display: block;
  text-align: center;
  background-color: #232f3e;
  color: #eee;
}

footer .btt:hover {
  background-color: #324459;
}

footer .copyright-bg {
  height: 50px;
  background-color: #131a22;
}

footer .copyright-bg .container {
  max-width: 900px;
  height: 100%;
}

footer .copyright-bg .container .item {
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

footer .copyright-bg .container .item p {
  color: #eee;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

footer .copyright-bg .container .item a {
  color: #eee;
}
</style>
