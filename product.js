
function checkComment() {
    var comment = document.getElementById("comment").value;
    var resultDiv = document.getElementById("result");
    
    if (comment.trim() !== "") {
        resultDiv.innerText = "\n" + comment;
    } else {
        resultDiv.innerText = "Please enter a comment.";
    }
}
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function txt() {
    document.getElementById("myImage").src = 'iphone.jpg';
  }
  function txt1() {
    document.getElementById("myImage").src = 'left.jpg';
  }
  function txt2() {
    document.getElementById("myImage").src = 'right.jpg';
  }
  function print() {
    document.getElementById("myImage").src = 'blue.jpg';
    document.getElementById("herimage").src = 'blue.jpg';
    document.getElementById("yourimage").src = 'left1.jpg';
    document.getElementById("hisimage").src = 'right1.jpg';
  }
  function print2() {
    document.getElementById("myImage").src = 'blue.jpg';
  }
  function print3() {
    document.getElementById("myImage").src = 'left1.jpg';
  }
  function print4() {
    document.getElementById("myImage").src = 'right1.jpg';
  }
  function myFunction() {
    document.getElementById("myDiv").style.border = "2px solid #007aFF";
  }
  function myFunction1() {
    document.getElementById("myDiv1").style.border = "2px solid #007aFF";
  }
  function myFunction2() {
    document.getElementById("myDiv2").style.border = "2px solid #007aFF";
  }
  function myFunction3() {
    location.reload();
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });