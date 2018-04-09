<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Worklist
        <b-link href="#/">(Worklist)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter ISBN">
          <b-form-input id="isbn" :state="state" v-model.trim="newWorklist.sample_number"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Description">
          <b-form-textarea id="description"
                           v-model="newWorklist.sample_number"
                           placeholder="Enter something"
                           :rows="2"
                           :max-rows="6">{{newWorklist.description}}
          </b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'CreateWorklist',
    data () {
      return {
        newWorklist: {},
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`result`, this.result)
          .then(response => {
            this.$router.push({
              name: 'ShowWorklist',
              params: { id: response.data._id }
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
