

  let sider = document.querySelector(".sidebar");
  let icon = document.querySelectorAll(".sidebar a");

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    sider.style.display = "none";
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    sider.style.display = "block";
  }

  icon.forEach((item) => {
    item.addEventListener("click", ()=> {
      closeNav(); // Close the sidebar when a link is clicked
      // event.preventDefault(); // Prevent default link behavior
      let targetId = this.getAttribute("href"); // Get the target section ID
      let targetElement = document.querySelector(targetId); // Find the target element
      targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element
    });
  });


