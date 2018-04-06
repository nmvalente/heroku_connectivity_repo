<template>
  <div class="worklist">
    <Header></Header>
    <h1>Create Worklist</h1>

    <form id="worklist-create" v-on:submit="addWorklist">
      <input type="text" v-model="newWorklist.sample_number" placeholder="Sample Number">
      <input type="text" v-model="newWorklist.patient_id" placeholder="PatientID">
      <input type="text" v-model="newWorklist.patient_name" placeholder="Patient Name">
      Patient Specie:
      <select v-model="newWorklist.patient_species">
        <option disabled value="">Please select one</option>
        <option v-for="specie in species">{{specie.name}}</option>
      </select>
      <br>
      Patient Gender:
      <select v-model="newWorklist.patient_gender">
        <option disabled value="">Please select one</option>
        <option v-for="gender in genders">{{gender.name}}</option>
      </select>
      <input type="text" v-model="newWorklist.patient_age" placeholder="Patient Age">

      <div id="dates">
        <datepicker format="yyyy-MM-dd" v-model="date" placeholder="Exam Date" :clear-button=true></datepicker>
        <vue-timepicker v-model="yourTimeValue" format="HH:mm:ss"></vue-timepicker>
      </div>
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

      <b-btn @click="addWorklist" variant="info" class="m-1">
        Submit
      </b-btn>

    </form>
    <h1>List of Worklist</h1>
    <div v-for="(wl, index) in worklist">
      <p><strong>Worklist id : {{wl._id}}</strong> <span  style="cursor: pointer" @click="removeWorklist(wl._id, index)">REMOVE</span></p>
      <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-minus"></span> Minus
      </button>
      <p>Minus icon: <span class="glyphicon glyphicon-minus"></span></p>
      <p>Sample Number: {{wl.sample_number}}</p>
      <p>Patient ID: {{wl.patient_id}}</p>
      <p>Patient Name: {{wl.patient_name}}</p>
      <p>Patient Specie: {{wl.patient_species}}</p>
      <p>Patient Gender: {{wl.patient_gender}}</p>
      <p>Patient Age: {{wl.patient_age}}</p>
      <p>Tests:</p>
      <div class="showTestName" v-for="test in wl.tests">
        <div>{{test.test_name}}</div>
      </div>
      <p>Exam Date: {{wl.exam_date}}</p>
      <p>Exam Time: {{wl.exam_time}}</p>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>

</template>

<script>

  import VueTimepicker from 'vue2-timepicker';
  import Datepicker from 'vuejs-datepicker';
  import Header from './Navbar';

  export default {
    name: 'worklist',
    actual: new Date(),
    data(){
      return {
        newWorklist: {},
        worklist:[],
        state:{},
        species: [
          {id: '1', name: 'dog'},
          {id: '2', name: 'cat'},
          {id: '3', name: 'horse'},
          {id: '4', name: 'rabbit'},
          {id: '5', name: 'human'},
          {id: '6', name: 'other'}
        ],
        genders: [
          {id: '1', name: 'male'},
          {id: '2', name: 'female'},
          {id: '3', name: 'other'}
        ],
        date: new Date(),
        yourTimeValue: {
          HH: '00',
          mm: '00',
          ss: '00'
        },
        rows:[]
      }
    },
    mounted(){
      let url = '/worklist';
      this.axios.get(url)
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

        let url = '/worklist';
        this.post(url, {
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
            console.log(response);
            this.state = response.data.status;
            let obj = response.data.object;
            this.worklist.push(obj);
          })
          .catch((e) => {
            console.error(e);
          });
      },
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
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
        let url = '/worklist/' + id;
        this.axios.delete(url, {
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
      VueTimepicker, Datepicker, Header
    }
  }
</script>

<style scoped>
  input { display: block},
  p{text-align: left},
  button{display: block}
</style>
