<script>
  // MENU düyməsi səhifəni yuxarı atmasın
  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
</script>
