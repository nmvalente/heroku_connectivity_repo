<template>
  <div class="results">
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div id="collapse-buttons">
                    <button class="btn btn-primary" data-parent="#collapse-buttons" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample" @click="viewAllResults">
                      Show all
                    </button>
                    <button class="btn btn-primary" data-parent="#collapse-buttons" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                      Show by date
                    </button>
                    <button class="btn btn-primary" type="button" aria-expanded="false" @click="updateResults">
                      Get Results
                    </button>


                    <div class="collapse" id="collapseExample1">
                      <Result id="all_results" v-bind:value="results"></Result>
                    </div>

                    <div class="collapse" id="collapseExample2">
                      <datepicker v-on:closed="getMin" format="yyyy-MM-dd" v-model="state.min_date" placeholder="Select min date"></datepicker>
                      <datepicker v-on:closed="getMax" format="yyyy-MM-dd" v-model="state.max_date" placeholder="Select max date"></datepicker>
                      <button class="btn btn-primary" v-on:click="viewFilteredResults()">Show</button>
                      <Result id="results_filtered" v-bind:value="results_filtered"></Result>
                      <div v-if="date_selected === true" class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>


                  </div>

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
  import Datepicker from 'vuejs-datepicker';
  import Result from './Result';
  import Navbar from './Navbar';
  import Footer from './Footer';
  import {instance, external} from '../../config/config';

  export default {
    name: 'Results',
    components: {Datepicker, Result, Navbar, Footer},
    props: {
    },
    data(){
      return {
        date_selected: false,
        results: [],
        results_filtered: [],
        state: {
          min_date: '',
          max_date: ''
        },
      }
    },
    mounted(){

    },
    methods:{
      viewAllResults: function () {

        instance.get('results')
          .then((response) => {
            this.results = response.data;
          })
          .catch((e) => {
            console.error(e);
          });
      },
      viewFilteredResults: function () {
        /*var month = this.state.min_date.getUTCMonth() + 1; //months from 1-12
        var day = this.state.min_date.getUTCDate();
        var year = this.state.min_date.getUTCFullYear();*/
        let min_date, max_date = {};
        if(this.state.min_date != '' && this.state.min_date != '') {
          min_date = this.state.min_date.toISOString().substring(0, 10)
          max_date = this.state.max_date.toISOString().substring(0, 10)
        }
        else {
          //this.date_selected = true;
          return;
        }
        let url = 'results/' + min_date + '/' + max_date;
        instance.get(url)
          .then((response) => {
            this.results_filtered = response.data;
          })
          .catch((e) => {
            console.error(e);
          });
      },
      updateResults: function(){
        let url = 'results';
        external.get(url)
          .then((response) => {
            this.results  = response.data;

            instance.post(url + '/update', JSON.stringify(this.results))
              .then((response) => {
                this.results  = response.data;
              })
              .catch((e) => {
                console.error(e);
              });


          })
          .catch((e) => {
            console.error(e);
          });
      },
      getMin: function () {
        console.log('Min Date: ' + this.state.min_date);
      },
      getMax: function () {
        console.log('Max Date: ' + this.state.max_date);
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
  #results {
    width: 100%;
    height: 100%;
    padding-top: 80px;
  }
</style>
