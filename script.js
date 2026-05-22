document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return;
    }

    alert("Form submitted successfully!");

    // Optional: clear form
    this.reset();
});


<script>
  document.querySelector(".dropbtn").addEventListener("click", function(e) 
    e.preventDefault()
    document.querySelector(".dropdown-content").classList.toggle("show");
  );
</script>











