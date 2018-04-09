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
      <tr v-for="result in value">
        <td>result.sample_number</td>
        <td>result.test_date</td>
        <td>result.patient_name</td>
        <td><a href="/show-result/result._id" class="btn btn-info">Details</a></td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td><a href="/show-result/5ac78d505be86b2878ec8f68" class="btn btn-info">Details</a></td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td><a href="/show-result/:id" class="btn btn-info">Details</a></td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
  export default {
    name: "Result",
    props:['value']
  }
</script>

<style scoped>
  li{
    display:inline-block;
    margin: 0 10px;
  }
</style>
