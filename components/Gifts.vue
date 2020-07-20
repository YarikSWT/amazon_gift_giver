<template>
  <div class="gifts">
    <h1>Choose Your Gift</h1>
    <el-row :gutter="40">
      <el-col
        v-for="(gift, index) in gifts"
        :key="index"
        :span="$mq !== 'sm' ? 8 : 24"
        style="margin-bottom: 20px;"
      >
        <el-card :body-style="{ padding: '20px' }">
          <img :src="gift.ImageURL" class="image" />
          <div style="padding: 14px;">
            <p style="height: 50px;">{{ gift.Title }}</p>
            <div class="bottom clearfix">
              <el-button type="" class="button quick" @click="open(index)"
                >Quick View</el-button
              >
              <el-button
                type="primary"
                class="button"
                @click="checkOut(gifts[index].ID)"
                >Get</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      :title="gifts[currentGift].Title"
      :visible.sync="dialogVisible"
      :width="$mq !== 'sm' ? '50%' : '99%'"
    >
      <div class="gift-card">
        <el-row :gutter="80">
          <el-col
            :span="$mq !== 'sm' ? 12 : 24"
            style="display: flex; justify-content: center;"
          >
            <img
              :src="gifts[currentGift].ImageURL"
              class="image"
              :class="$mq"
            />
          </el-col>
          <el-col :span="$mq !== 'sm' ? 12 : 24">
            <div v-html="gifts[currentGift].Description"></div>
            <!-- {{ gifts[currentGift].Description }} -->
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="checkOut(gifts[currentGift].ID)"
          >Check Out</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Gifts',
  data() {
    return {
      dialogVisible: false,
      currentGift: 1,
    }
  },
  computed: {
    gifts() {
      return this.$store.state.gifts
    },
  },
  methods: {
    open(id) {
      this.currentGift = id
      this.dialogVisible = true
    },
    checkOut(giftId) {
      this.dialogVisible = false
      console.log('submit!')
      this.$emit('nextStep', giftId)
    },
  },
}
</script>

<style>
.gifts {
  /* display: flex; */
  /* flex-wrap: wrap; */
}

.gift-card {
}

.gift {
  width: 33%;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

/* .button {
  padding: 0;
  float: right;
} */

.image {
  width: 100%;
  display: block;
  object-fit: contain;
}

.image.sm {
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

@media (min-width: 320px) and (max-width: 480px) {
  .el-card__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-card__body .image {
    width: 120px;
    height: 120px;
  }
  .bottom {
    text-align: center;
  }

  .bottom .el-button {
    margin-left: 0 !important;
  }

  .bottom .quick {
    margin-bottom: 5px;
  }
}
</style>
