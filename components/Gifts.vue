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
          <img
            src="data:image/jpeg;base64,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"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{ gift.title }}</span>
            <div class="bottom clearfix">
              <el-button type="" class="button" @click="open(index)"
                >Quick View</el-button
              >
              <el-button
                type="primary"
                class="button"
                @click="checkOut(gifts[index].id)"
                >Get</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      :title="gifts[currentGift].title"
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
              src="data:image/jpeg;base64,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"
              class="image"
              :class="$mq"
            />
          </el-col>
          <el-col :span="$mq !== 'sm' ? 12 : 24">
            {{ gifts[currentGift].desc }}
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="checkOut(gifts[currentGift].id)"
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
      gifts: [
        {
          id: 1,
          title: 'Gift #1',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 2,
          title: 'Gift #2',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
        {
          id: 3,
          title: 'Gift #3',
          desc:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          image: 'img/duck.png',
        },
      ],
      //   reg: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    }
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
    justify-content: space-between;
  }
  .el-card__body .image {
    width: 120px;
    height: 120px;
  }
}
</style>
