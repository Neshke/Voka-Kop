<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <strong>GRAĐEVINSKO PREDUZEĆE VOKA KOP DOO</strong>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-2">
            <h5><strong>Telefon</strong></h5>
            <a href="tel:+38162281493">+381 62 281 493</a>
          </div>
          <div class="col-sm-2">
            <h5><strong>Email</strong></h5>
            <a href="mailto:vokakop@gmail.com">vokakop@gmail.com</a>
          </div>
          <div class="col-sm-12">
            <p>Autorska prava i zaštita podataka</p>
            <p class="footer-p">
              {{ currentYear.getYear() + 1900 }} &copy; Voka Kop doo sva prava
              zadržana na sadržaj ove stranice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: () => {
    return {
      currentYear: new Date(),
    };
  },
};
</script>
<style>
.footer {
  position: relative;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #231f20;
  color: white;
  text-align: left;
}
.footer-p {
  font-size: 0.7em;
  opacity: 0.6;
}
.a:link {
  color: white;
}
</style>
