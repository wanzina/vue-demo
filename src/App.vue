<template>
  <div id="app">
   <!--  <loading v-show="$root.bloading"></loading> -->
    <loading v-show="bLoading"></loading>
    <footbar></footbar>
    <transition mode="out-in" 
    enter-active-class="animated fadeIn"
    >
       <router-view/>
    </transition>
  </div>
</template>

<style>
 
</style>
<script>

import footbar from './components/footbar';
//import loading from './components/loading'
import {mapGetters} from 'vuex';
import * as types from './store/types.js'
export default {
  components: {
    footbar
  },
  computed: mapGetters([
    'bLoading'
  ]),
  methods: {
   
  }
}
</script>

