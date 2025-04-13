function calculerDevis() {
    console.log("devis en cour de preparation");
    const form = document.getElementById("formDevis");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  }