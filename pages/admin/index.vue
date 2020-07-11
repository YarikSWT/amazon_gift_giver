<template>
  <div>
    <el-table :data="feeds" style="width: 100%; margin-bottom: 20px;">
      <el-table-column prop="time" label="Time" width="180"></el-table-column>
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="email" label="Email"> </el-table-column>
      <el-table-column prop="orderId" label="OrderId" width="180">
      </el-table-column>
      <el-table-column prop="giftId" label="GiftId" width="180">
      </el-table-column>
      <el-table-column prop="address1" label="Address1"> </el-table-column>
      <el-table-column prop="address2" label="Address2"> </el-table-column>
      <el-table-column prop="state" label="State"> </el-table-column>
      <el-table-column prop="phone" label="Phone"> </el-table-column>
      <el-table-column prop="last_filled_step" label="LastFilledStep">
      </el-table-column>
      <el-table-column prop="feed_status" label="FeedStatus">
        <template slot-scope="scope">
          <p v-if="scope.row.feed_status === 'processed'">Обработанно</p>
          <p v-else>Новая заявка</p>
          <el-checkbox
            v-if="scope.row.feed_status !== 'processed'"
            @change="checkBoxInput(scope.row.key)"
          ></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
    <client-only>
      <vue-excel-xlsx
        :data="feeds"
        :columns="columns"
        :filename="'filename'"
        :sheetname="'sheetname'"
      >
        Download
      </vue-excel-xlsx>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $fireDb }) {
    const fb = await $fireDb
      .ref('/Feed')
      .once('value')
      .then((snapshot) => {
        const feeds = []
        snapshot.forEach((doc) => {
          const item = doc.val()
          const time = item.time
          const date = new Date(time)
          let dd = date.getDate()
          if (dd < 10) dd = '0' + dd
          let mm = date.getMonth() + 1
          if (mm < 10) mm = '0' + mm
          const yyyy = date.getFullYear()
          const hs = date.toLocaleTimeString()
          item.time = dd + '.' + mm + '.' + yyyy + ' ' + hs
          item.key = doc.key
          feeds.push(item)
        })
        return {
          feeds,
        }
      })
    console.log('get', fb.feeds)
    return {
      feeds: fb.feeds,
    }
  },
  data() {
    return {
      columns: [
        {
          label: 'Time',
          field: 'time',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'OrderId',
          field: 'orderId',
        },
        {
          label: 'Address',
          field: 'address',
        },
        {
          label: 'State',
          field: 'state',
        },
        {
          label: 'Phone',
          field: 'phone',
        },
      ],
    }
  },
  methods: {
    removeAll() {
      this.$fireDb.ref('/').child('Feeds').remove()
      console.log('remove all')
    },
    getDate(time) {
      const date = new Date(time)
      let dd = date.getDate()
      if (dd < 10) dd = '0' + dd
      let mm = date.getMonth() + 1
      if (mm < 10) mm = '0' + mm
      const yyyy = date.getFullYear()
      const hs = date.toLocaleTimeString()
      return dd + '.' + mm + '.' + yyyy + ' ' + hs
    },
    checkBoxInput(key) {
      console.log('check', key)
      this.$fireDb.ref(`/Feed/${key}`).update({
        feed_status: 'processed',
      })
    },
  },
}
</script>

<style></style>
