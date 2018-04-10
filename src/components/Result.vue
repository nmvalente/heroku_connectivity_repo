<template>
  <div id="result">
    <table class="table table-hover">
      <thead>
      <tr>
        <th>Sample Number</th>
        <th>Test Date</th>
        <th>Patient Name</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in value">
        <td>{{item.sample_number}}</td>
        <td>{{item.test_date.split('T')[0]}}</td>
        <td>{{item.patient_name}}</td>
        <td><b-btn variant="info" @click.stop="details(item._id, index)">Details</b-btn></td>
      </tr>
      <!--<tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td><a href="/results/5ac78d505be86b2878ec8f68" class="btn btn-info">Details</a></td>
      </tr>-->
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: "Result",
    props: ['value'],
    data() {
      return {

      }
    },
    created() {

    },
    methods:{
      details (id, index) {
        this.$router.push({
          name: 'ShowResult',
          params: { id: id },
        })
      }
    }
  }
</script>

<style scoped>
  li{
    display:inline-block;
    margin: 0 10px;
  }
</style>
