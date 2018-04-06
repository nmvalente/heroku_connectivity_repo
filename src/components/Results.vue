<template>
  <div class="results">

    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample" @click="viewAllResults">
      Show all results
    </button>
    <div class="collapse" id="collapseExample1">
      <Result id="all_results" :value="results"></Result>
    </div>


    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
      View Results by date
    </button>

    <div class="collapse" id="collapseExample2">
      <datepicker v-on:closed="getMin" format="yyyy-MM-dd" v-model="state.min_date" placeholder="Select min date"></datepicker>
      <datepicker v-on:closed="getMax" format="yyyy-MM-dd" v-model="state.max_date" placeholder="Select max date"></datepicker>
      <button class="btn btn-primary" v-on:click="viewFilteredResults()">Show</button>

      <Result :value="results_filtered" id="results_filtered"></Result>

      <div v-if="date_selected === true" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import Result from './Result';

  export default {
    components: {Datepicker, Result},
    name: 'Results',
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
      //this.viewResults()
    },
    methods:{
      viewAllResults: function () {
        this.axios.get('/api/results')
          .then((response) => {
            console.log(response.data);
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
        let url = '/api/results/' + min_date + '/' + max_date;
        console.log(url);
        this.axios.get(url)
          .then((response) => {
            console.log(response.data);
            this.results_filtered = response.data;
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

</style>
