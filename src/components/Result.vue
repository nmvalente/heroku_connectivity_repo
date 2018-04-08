<template>
  <div id="result">
    <div v-for="result in value" class="card card-body">
      <li>Sample Number: {{ result.sample_number }}</li>
      <li>Test Date: {{ result.test_date }}</li>
      <li>Test time: {{ result.test_time }}</li>
      <li>Patient ID: {{ result.patient_id }}</li>
      <li>Patient Name: {{ result.patient_name }}</li>
      <li>Patient Specie: {{ result.patient_species }}</li>
      <li>Patieng Age: {{ result.patient_age }}</li>
      <li>Patient Gender: {{ result.patient_gender }}</li>
      <p>Results:</p>
      <div v-for="(item,index) in result.results">
        <p> Result: {{ index+1 }}</p>
        <li>Test name: {{item.test_name}}</li>
        <li>Unit: {{item.unit}}</li>
        <li>Value: {{item.value}}</li>
        <li>Ref. lower: {{item.ref_lower}}</li>
        <li>Ref. upper: {{item.ref_upper}}</li>
        <p>Warnings: </p>
        <div v-for="(warning,i) in item.warnings">
          <li>{{warning}}</li>
        </div>
      </div>
    </div>
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
