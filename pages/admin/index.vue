<template>
  <div>
    <el-table :data="feeds" style="width: 100%; margin-bottom: 20px;">
      <el-table-column prop="time" label="Time" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="orderId" label="OrderId" width="180">
      </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
      <el-table-column prop="state" label="State"> </el-table-column>
      <el-table-column prop="phone" label="Phone"> </el-table-column>
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
    <!-- <el-button @click="removeAll">Remove everything</el-button> -->
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
          feeds.push(doc.val())
        })
        return {
          feeds,
        }
      })
    console.log('get', fb.feeds)
    return {
      feeds: fb.feeds,
      // user_name: fb.name
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
  },
}
</script>

<style></style>
