<script>
    // Get all collapsible buttons
    var coll = document.getElementsByClassName("collapsible");

    // Add event listeners to each button
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // Toggle the content visibility
            this.classList.toggle("active");

            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none"; // Hide the content
            } else {
                content.style.display = "block"; // Show the content
            }
        });
    }
</script>
