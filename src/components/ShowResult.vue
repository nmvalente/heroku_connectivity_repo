<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Details
        <b-link href="/results">(Results List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{result.id}}
        </template>
        <template slot="lead">


          Sample Number: {{ result.sample_number }}<br>
          Test Date: {{ result.test_date }}<br>
          Test time: {{ result.test_time }}<br>
          Patient ID: {{ result.patient_id }}<br>
          Patient Name: {{ result.patient_name }}<br>
          Patient Specie: {{ result.patient_species }}<br>
          Patieng Age: {{ result.patient_age }}<br>
          Patient Gender: {{ result.patient_gender }}<br>
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

        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{result.updatedAt}}

        </p>
        <b-btn variant="danger" @click.stop="deleteResult(result._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'ShowResult',
    data () {
      return {
        result: []
      }
    },
    created () {
      axios.get(`result/` + this.$route.params.id)
        .then((response) => {
          this.result = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      deleteResult (resultid) {
        axios.delete('result/' + resultid)
          .then((response) => {


          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
