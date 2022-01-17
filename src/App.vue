<template> 
  <div>
    <!-- Navbar -->
    <Navbar/>
    <!-- Main -->
    <Main/>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Footer
  }
}
</script>

<style>

</style>
