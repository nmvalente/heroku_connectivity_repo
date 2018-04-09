<template>
  <div class="worklist">
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="panel panel-default">
                <div class="panel-body">

                  <div id="worklist-create">


                    <b-row>
                      <b-col cols="12">
                        <h2>
                          Add Worklist
                          <router-link to="/worklist">(Worklist)</router-link>
                        </h2>

                        <b-form @submit="addWorklist">
                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Sample Number">
                            <b-form-input id="sample_number" v-model.trim="newWorklist.sample_number"></b-form-input>
                          </b-form-group>

                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Patient id">
                            <b-form-input id="patient_id" v-model.trim="newWorklist.patient_id"></b-form-input>
                          </b-form-group>

                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Patient Name">
                            <b-form-input id="patient_name" v-model.trim="newWorklist.patient_name"></b-form-input>
                          </b-form-group>


                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Patient Specie">

                            <b-form-select id="patient_specie" v-model="newWorklist.patient_species" :options="species" class="mb-3" />
                          </b-form-group>


                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Patient Gender">

                            <b-form-select id="patient_gender" v-model="newWorklist.patient_gender" :options="genders" class="mb-3" />
                          </b-form-group>

                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Exam Date">

                            <datepicker format="yyyy-MM-dd" v-model="date" placeholder="Select date"></datepicker>
                          </b-form-group>

                          <b-form-group id="fieldsetHorizontal"
                                        horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Exam Time">

                            <timepicker v-model="time" format="HH:mm:ss"></timepicker>
                            <!-- <b-form-input value="time" v-model="time" type="time"></b-form-input>-->
                          </b-form-group>

                          <p>Tests</p>
                          <div class="test_rows form-group row">
                            <div class="rows_form" v-for="(row, index) in rows">
                              <input type="text" class="form-control mb-2" placeholder="Test Name" v-model="row.test_name">
                              <span class="float" style="cursor: pointer" @click="removeElement(index)">X</span>
                            </div>
                          </div>
                          <button type="button" class="btn btn-success mt2 mb2" @click="addRow">
                            Add more tests
                          </button>

                          <b-button type="submit" variant="primary">Save</b-button>
                        </b-form>
                      </b-col>
                    </b-row>
                  </div>

                  <h1>Worklist</h1>

                  <table class="table table-hover">
                    <thead>
                    <tr>
                      <th>Worklist ID</th>
                      <th>Sample Number</th>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th>Patient Specie</th>
                      <th>Patient Gender</th>
                      <th>Patient Age</th>
                      <th>Tests</th>
                      <th>Exam Date</th>
                      <th>Exam Time</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wl, index) in worklist">
                      <td>{{wl._id}} </td>
                      <td>Sample Number: {{wl.sample_number}}</td>
                      <td>Patient ID: {{wl.patient_id}}</td>
                      <td>Patient Name: {{wl.patient_name}}</td>
                      <td>Patient Specie: {{wl.patient_species}}</td>
                      <td>Patient Gender: {{wl.patient_gender}}</td>
                      <td>Patient Age: {{wl.patient_age}}</td>
                      <td>Tests:
                        <div class="showTestName" v-for="test in wl.tests">
                          <div>{{test.test_name}}</div>
                        </div>
                      </td>
                      <td>Exam Date: {{wl.exam_date}}</td>
                      <td>Exam Time: {{wl.exam_time}}</td>
                      <td><button type="button" class="btn btn-danger btn-sm" @click="removeWorklist(wl._id, index)">Delete</button></td>
                    </tr>


                    <tr>
                      <td>132</td>
                      <td>123</td>
                      <td>123</td>
                      <td>123</td>
                      <td>gfgfdg</td>
                      <td>ma</td>
                      <td>34</td>
                      <td>
                        <div class="showTestName">
                          <div>dfsfdsf</div>
                        </div>
                      </td>
                      <td>2018-05-23</td>
                      <td>22:10:45</td>
                      <td><button type="button" class="btn btn-danger btn-sm" @click="removeWorklist(wl._id, index)">Delete</button></td>
                    </tr>

                    </tbody>
                  </table>

                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="pull-right">
                  </div>
                  <div style="height: 225px">
                  </div>
                  <h1 class="text-center"></h1>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <h1 class="data"></h1>
              <div class="panel panel-default">
                <div class="panel-footer clearfix">
                  <h5 class="pull-right" style="margin: 0; margin-right: 20px"></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>

</template>

<script>

  import Navbar from './Navbar';
  import Footer from './Footer';
  import {external, base} from '../main.js';
  import Datepicker from 'vuejs-datepicker';
  import Timepicker from 'vue2-timepicker';

  export default {
    name: 'worklist',
    actual: new Date(),
    data(){
      return {
        newWorklist: {},
        worklist:[],
        state:{},
        species: [
          'dog',
          'cat',
          'horse',
          'rabbit',
          'human',
          'other'
        ],
        genders: [
          'male',
          'female',
          'other'
        ],
        time: {
          HH: '00',
          mm: '00',
          ss: '00'
        },
        date: new Date(),
        rows:[]
      }
    },
    mounted(){
      let url = 'api/worklist';
      base.get(url)
        .then((response) => {
          this.worklist = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    created(){

    },
    methods:{
      addWorklist: function (e) {
        e.preventDefault();

        let time_formatted = this.yourTimeValue.HH +':'+this.yourTimeValue.mm+':'+this.yourTimeValue.ss;
        if(this.date !== undefined) {
          this.newWorklist.exam_date = this.date.toISOString().substring(0, 10);
        }
        let url = 'api/worklist';
        console.log(url);
        base.post(url, {
          sample_number: this.newWorklist.sample_number,
          patient_id: this.newWorklist.patient_id,
          patient_name: this.newWorklist.patient_name,
          patient_species: this.newWorklist.patient_species,
          patient_gender: this.newWorklist.patient_gender,
          patient_age: this.newWorklist.patient_age,
          tests: this.rows,
          exam_date: this.newWorklist.exam_date,
          exam_time: time_formatted
        })
          .then((response) => {
            this.state = response.data.status;
            let obj = response.data.object;
            this.worklist.push(obj);
          })
          .catch((e) => {
            console.error(e);
          });
      },
      addRow: function() {
        this.rows.push({
          test_name: ''
        });
      },
      removeElement: function(index) {
        this.rows.splice(index, 1);
      },
      removeWorklist: function (id, index) {
        let url = 'api/worklist/' + id;
        console.log(url);
        base.delete(url, {
        })
          .then((response) => {
            this.state = response.data.status;
            if(this.state === 'success')
              this.worklist.splice(index, 1);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
    computed:{

    },
    components: {
      Datepicker,Timepicker,
      Navbar, Footer
    }
  }
</script>

<style scoped>
  input { display: block}
  p{text-align: left}
  button{display: block}
</style>
