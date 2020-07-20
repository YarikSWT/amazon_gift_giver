<template>
  <div>
    <div
      class="index faces"
      :style="{
        backgroundImage: `url(${require(`~/assets/img/bgs/${currentBg}.jpg`)})`,
      }"
    >
      <div class="container_main">
        <Main @nextStep="main"></Main>
      </div>
    </div>
    <!-- <div class="w-full h-full shade"> -->
    <section
      id="content3-1"
      class="p-y-lg bg-edit ng-scope guide"
      style="outline-offset: -3px;"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 ml-auto mr-auto">
            <div class="section-header text-center">
              <h2 class="bio-heading">
                Get your FREE gift, in 3 Simple Steps
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 content-block c3 d-md-flex">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <img
                src="~/assets/img/guide/1.jpeg"
                alt=""
                class="img-responsive img-rounded"
                style="
                  border-radius: 6px;
                  border: 1px none rgb(105, 105, 110);
                  width: 100%;
                "
              />
              <h5 class="m-t mt-2 font-semibold">Fill out the Online Form</h5>
              <p class="p-opacity">
                The first step to receive your FREE Bottle is to complete the
                form in this page. This offer is valid only for customers that
                bought the product at full price, at BioSchwartz.com or our
                Official Seller on Amazon.com
              </p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <img
                src="~/assets/img/guide/2.jpeg"
                alt=""
                class="img-responsive img-rounded"
                style="
                  border-radius: 6px;
                  border: 1px none rgb(105, 105, 110);
                  width: 100%;
                "
              />
              <h5 class="m-t mt-2 font-semibold">Tell us your Experience</h5>
              <p class="p-opacity">
                After filling the form you will be asked to tell us your
                experience with your previously purchased product. Sharing your
                honest experience with us will help us to improve our products
                and gather valuable information on our customer's results.
              </p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <img
                src="~/assets/img/guide/3.jpeg"
                alt=""
                class="img-responsive img-rounded"
                style="
                  border-radius: 6px;
                  border: 1px none rgb(105, 105, 110);
                  width: 100%;
                "
              />
              <h5 class="m-t mt-2 font-semibold">Receive your FREE Bottle</h5>
              <p class="p-opacity">
                If you qualify for a FREE Bottle we will ship it within 48 hours
                and we will send a confirmation email with a tracking number.
                Yes! We will pay for the shipping too! You will receive your
                bottle within 7 to 10 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Steps -->
    <!-- </div> -->
    <section name="reviews">
      <div class="container">
        <div class="reviews">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 ml-auto mr-auto">
              <div class="section-header text-center">
                <h2 style="margin-bottom: 30px;">
                  Our Customers Reviews
                </h2>
              </div>
            </div>
          </div>
          <el-carousel
            :interval="4000"
            type="card"
            :autoplay="false"
            height="300px"
          >
            <el-carousel-item v-for="(item, ir) in reviews" :key="ir">
              <img :src="require(`~/assets/img/reviews/${item.src}`)" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Main from '~/components/Main.vue'

export default {
  name: 'MainPage',
  components: { Main },
  data() {
    return {
      step: 0,
      key: 0,
      reviews: [
        { src: '1.jpg' },
        { src: '3.jpg' },
        { src: '4.jpg' },
        { src: '5.jpg' },
      ],
      currentBg: 0,
    }
  },
  methods: {
    main(form) {
      this.step += 1
      this.progress = 33
      this.firstForm = form
      window.scrollTo(0, 0)
      this.$router.push('/step/1')
    },
    nextBackgroundImage() {
      if (this.currentBg === 4) {
        this.currentBg = 1
      } else this.currentBg += 1
    },
  },
  created() {
    if (!process.env.isFamily) {
      this.currentBg = 'faces'
    }
  },
}
</script>

<style>
header {
  width: 60%;
  margin: 2% 0;
}

p,
h1,
h2,
h3,
h4,
h5 {
  /* color: rgb(105, 105, 110); */
}

.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white !important;
}

.faces {
  background-image: url('../assets/img/faces.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.container_main {
  margin: 0 auto;
  /* min-height: 100vh; */
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

h1 {
  margin-bottom: 30px;
}

h2 {
  font-size: 40px;
  color: rgb(105, 105, 110);
}
.p-y-lg {
  padding-top: 120px !important;
  padding-bottom: 120px !important;
}

.guide img {
  width: 100%;
}

.reviews {
  padding-bottom: 100px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
  object-fit: contain;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

@media (min-width: 320px) and (max-width: 780px) {
  h1 {
    margin-top: 40px;
    font-size: 1.5rem;
  }
  .el-message-box {
    width: 300px;
  }
  h2 {
    font-size: 25px !important;
    line-height: 26px !important;
  }
  .container_main {
    padding: 0 0 20px 0;
  }
}
</style>
