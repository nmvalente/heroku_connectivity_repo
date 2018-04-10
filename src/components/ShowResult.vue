<template>
  <div id="show-result">
    <b-row>
      <b-col cols="12">
        <h2>
          Details
          <router-link to ="/results" exact>(Results List) </router-link>
        </h2>
        <b-jumbotron>
          <template slot="header">
            ID: {{result._id}}
          </template>
          <template slot="lead">

            Sample Number: {{ result.sample_number }}<br>
            Test Date: {{ result.test_date.split('T')[0] }}<br>
            Test time: {{ result.test_time }}<br>
            Patient ID: {{ result.patient_id }}<br>
            Patient Name: {{ result.patient_name }}<br>
            Patient Specie: {{ result.patient_species }}<br>
            Patieng Age: {{ result.patient_age }}<br>
            Patient Gender: {{ result.patient_gender }}<br>
            <p>Results:</p>
            <div class="result" v-for="(item,index) in result.results">
              <p> Result {{ index+1 }}</p>
              <li>Test name: {{item.test_name}}</li>
              <li>Unit: {{item.unit}}</li>
              <li>Value: {{item.value}}</li>
              <li>Ref. lower: {{item.ref_lower}}</li>
              <li>Ref. upper: {{item.ref_upper}}</li>
              <p>Warnings: </p>
              <div class="warning" v-for="(warning,i) in item.warnings">
                <li>{{warning}}</li>
              </div>
            </div>

          </template>
          <hr class="my-4">
          <p>
            Updated Date: {{result.updatedAt.split('T')[0]}}

          </p>
          <b-btn variant="danger" @click.stop="deleteResult(result._id)">Delete</b-btn>
        </b-jumbotron>

        <!--
                <b-jumbotron>
                  <template slot="header">
                    ID: 132
                  </template>
                  <template slot="lead">
                    Sample Number: 321<br>
                    Test Date: 2018-01-01<br>
                    Test time: 15:45:52<br>
                    Patient ID: 2<br>
                    Patient Name: Nuno<br>
                    Patient Specie: human<br>
                    Patieng Age: 33<br>
                    Patient Gender: male<br>
                    <p>Results:</p>
                    <div class="result">
                      <p> Result 1</p>
                      <li>Test name: asd</li>
                      <li>Unit: g</li>
                      <li>Value: 0.2</li>
                      <li>Ref. lower: 0.1</li>
                      <li>Ref. upper: 0.4</li>
                      <p>Warnings: </p>
                      <div class="warning">
                        <li>att1</li>
                        <li>att2</li>
                      </div>
                    </div>

                  </template>
                  <hr class="my-4">
                  <p>Updated Date: 2018-02-02</p>
                  <b-btn variant="danger">Delete</b-btn>
                </b-jumbotron>
                -->

      </b-col>
    </b-row>
  </div>
</template>

<script>

  import {instance, external} from '../../config/config';

  export default {
    name: 'ShowResult',
    data () {
      return {
        result: {}
      }
    },
    created () {
      instance.get(`api/results/` + this.$route.params.id)
        .then((response) => {
          this.result = response.data.object
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      deleteResult (resultid) {
        instance.delete('api/results/' + resultid)
          .then((response) => {
            window.location.href = '/results';
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
  li{
    list-style-type: none;
  }
  .result{
    margin-left: 16px;
  }
  .warning{
    margin-left: 32px;
  }
</style>
