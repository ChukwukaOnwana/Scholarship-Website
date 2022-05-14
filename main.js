let fName = document.getElementById("fName"),
   lName = document.getElementById("lName"),
   dob = document.getElementById("dob"),
   gender = document.getElementById("gender"),
   pNum = document.getElementById("pNum"),
   school = document.getElementById("school"),
   continent = document.getElementById("continent"),
   africa = document.getElementById("africa"),
   asia = document.getElementById("asia"),
   europe = document.getElementById("europe"),
   northAmerica = document.getElementById("northAmerica"),
   southAmerica = document.getElementById("southAmerica"),
   africaBlock = document.getElementById("africaBlock"),
   asiaBlock = document.getElementById("asiaBlock"),
   europeBlock = document.getElementById("europeBlock"),
   northBlock = document.getElementById("northBlock"),
   southBlock = document.getElementById("southBlock"),
   sub1 = document.getElementById("sub1"),
   sub1Score = document.getElementById("sub1Score"),
   sub2 = document.getElementById("sub2"),
   sub2Score = document.getElementById("sub2Score"),
   sub3 = document.getElementById("sub3"),
   sub3Score = document.getElementById("sub3Score"),
   sub4 = document.getElementById("sub4"),
   sub4Score = document.getElementById("sub4Score"),
   sub5 = document.getElementById("sub5"),
   sub5Score = document.getElementById("sub5Score"),
   sub6 = document.getElementById("sub6"),
   sub6Score = document.getElementById("sub6Score"),
   sub7 = document.getElementById("sub7"),
   sub7Score = document.getElementById("sub7Score"),
   sub8 = document.getElementById("sub8"),
   sub8Score = document.getElementById("sub8Score"),
   btnSubmit = document.getElementById("btnSubmit"),
   resultContainer = document.getElementById("resultContainer"),
   point,
   age,
   countryPoint,
   agePoint,
   gradePoint,
   avg,
   subjectSelect = document.querySelectorAll(".subjectSelect")
   
   
   continent.addEventListener("change", function () {
      showCountry() 
   })

   sub3.addEventListener("change", function () {
      switch(sub3.value) {
         case "agric":
            checkSub(sub3, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub3, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub3, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub3, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub3, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub3, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub3, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub3, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub3, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub3, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub3, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub3, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub3, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub3, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   sub4.addEventListener("change", function () {
      switch(sub4.value) {
         case "agric":
            checkSub(sub4, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub4, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub4, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub4, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub4, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub4, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub4, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub4, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub4, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub4, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub4, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub4, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub4, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub4, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   sub5.addEventListener("change", function () {
      switch(sub5.value) {
         case "agric":
            checkSub(sub5, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub5, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub5, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub5, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub5, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub5, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub5, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub5, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub5, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub5, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub5, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub5, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub5, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub5, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   sub6.addEventListener("change", function () {
      switch(sub6.value) {
         case "agric":
            checkSub(sub6, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub6, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub6, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub6, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub6, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub6, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub6, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub6, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub6, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub6, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub6, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub6, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub6, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub6, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   sub7.addEventListener("change", function () {
      switch(sub7.value) {
         case "agric":
            checkSub(sub7, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub7, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub7, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub7, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub7, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub7, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub7, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub7, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub7, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub7, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub7, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub7, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub7, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub7, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   sub8.addEventListener("change", function () {
      switch(sub8.value) {
         case "agric":
            checkSub(sub8, "agric", subjectSelect)
           break;
         case "biology":
            checkSub(sub8, "biology", subjectSelect)
            break;
         case "chemistry":
            checkSub(sub8, "chemistry", subjectSelect)
           break;
         case "commerce":
            checkSub(sub8, "commerce", subjectSelect)
            break;
         case "civic":
            checkSub(sub8, "civic", subjectSelect)
           break;
         case "economics":
            checkSub(sub8, "economics", subjectSelect)
            break;
         case "foodandnut":
            checkSub(sub8, "foodandnut", subjectSelect)
           break;
         case "fmaths":
            checkSub(sub8, "fmaths", subjectSelect)
            break;
         case "government":
            checkSub(sub8, "government", subjectSelect)
           break;
         case "homec":
            checkSub(sub8, "homec", subjectSelect)
            break;
         case "marketing":
            checkSub(sub8, "marketing", subjectSelect)
           break;
         case "td":
            checkSub(sub8, "td", subjectSelect)
            break;
         case "physics":
            checkSub(sub8, "physics", subjectSelect)
           break;
         case "varts":
            checkSub(sub8, "varts", subjectSelect)
            break;
         
         default:
           // code block
       }
   })

   btnSubmit.addEventListener("click", function (e) {
      e.preventDefault()
      submitForm()
      calcScore()
      displayResult()
 
      let chartResults = document.getElementById("chartResults").getContext("2d");
      yourResult = new Chart(chartResults, {
         type: 'pie',
         data: {
            labels: ["Points from age", "Points from grades", "Points from Continent"],
            datasets: [{
               label: 'Scores',
               data: [
                 agePoint,
                 gradePoint,
                 countryPoint
               ],

               backgroundColor: [
                  'red',
                  'green',
                  'blue'

               ]
            }]
         },
         options: {}
      })

   })


function submitForm() {
        if (fName.value == "" || fName.value == null) {
          fName.nextElementSibling.innerHTML = "Firstname Field Required";
        } else {
          fName.nextElementSibling.innerHTML = "";
        }
        if (lName.value == "" || lName.value == null) {
          lName.nextElementSibling.innerHTML = "Lastname Field Required";
        } else {
          lName.nextElementSibling.innerHTML = "";
        }
        if (dob.value == "" || dob.value == null) {
            dob.nextElementSibling.innerHTML = " Date of birth Field Required";
          } else {
            dob.nextElementSibling.innerHTML = "";
          }
        if (gender.value == "" || gender.value == null) {
          gender.nextElementSibling.innerHTML = "Gender Field Required";
        } else {
          gender.nextElementSibling.innerHTML = "";
        }
        if (pNum.value == "" || pNum.value == null) {
            pNum.nextElementSibling.innerHTML = "Phone number Field Required";
        } else {
            pNum.nextElementSibling.innerHTML = "";
        }
        if (school.value == "" || school.value == null) {
            school.nextElementSibling.innerHTML = "School Field Required";
        } else {
            school.nextElementSibling.innerHTML = "";
        }
        if (continent.value == "" ||continent.value == null) {
         continent.nextElementSibling.innerHTML = "Continent Field Required";
      } else {
         continent.nextElementSibling.innerHTML = "";
      }
        if (sub1Score.value == "" ||sub1Score.value == null) {
            sub1Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub1Score.nextElementSibling.innerHTML = "";
         }
         if (sub2Score.value == "" ||sub2Score.value == null) {
            sub2Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub2Score.nextElementSibling.innerHTML = "";
         }
         if (sub3.value == "" ||sub3.value == null) {
            sub3.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub3.nextElementSibling.innerHTML = "";
         }
         if (sub3Score.value == "" ||sub3Score.value == null) {
            sub3Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub3Score.nextElementSibling.innerHTML = "";
         }
         if (sub4.value == "" ||sub4.value == null) {
            sub4.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub4.nextElementSibling.innerHTML = "";
         }
         if (sub4Score.value == "" ||sub4Score.value == null) {
            sub4Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub4Score.nextElementSibling.innerHTML = "";
         }
         if (sub5.value == "" ||sub5.value == null) {
            sub5.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub5.nextElementSibling.innerHTML = "";
         }
         if (sub5Score.value == "" ||sub5Score.value == null) {
            sub5Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub5Score.nextElementSibling.innerHTML = "";
         }
         if (sub6.value == "" ||sub6.value == null) {
            sub6.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub6.nextElementSibling.innerHTML = "";
         }
         if (sub6Score.value == "" ||sub6Score.value == null) {
            sub6Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub6Score.nextElementSibling.innerHTML = "";
         }
         if (sub7.value == "" ||sub7.value == null) {
            sub7.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub7.nextElementSibling.innerHTML = "";
         }
         if (sub7Score.value == "" ||sub7Score.value == null) {
            sub7Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub7Score.nextElementSibling.innerHTML = "";
         }
         if (sub8.value == "" ||sub8.value == null) {
            sub8.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub8.nextElementSibling.innerHTML = "";
         }
         if (sub8Score.value == "" ||sub8Score.value == null) {
            sub8Score.nextElementSibling.innerHTML = "Score Field Required";
         } else {
            sub8Score.nextElementSibling.innerHTML = "";
         }
         
         if (africa.value == "" || africa.value == null || asia.value == "" || asia.value == null || europe.value =="" || europe.value==null || northAmerica.value == "" || northAmerica.value == null || southAmerica.value == "" || southAmerica.value == null) {
            africa.nextElementSibling.innerHTML = "Country Field Required";
            asia.nextElementSibling.innerHTML = "Country Field Required";
            europe.nextElementSibling.innerHTML = "Country Field Required";
            northAmerica.nextElementSibling.innerHTML = "Country Field Required";
            southAmerica.nextElementSibling.innerHTML = "Country Field Required";
        } else {
            africa.nextElementSibling.innerHTML = "";
            asia.nextElementSibling.innerHTML = "";
            europe.nextElementSibling.innerHTML = "";
            northAmerica.nextElementSibling.innerHTML = "";
            southAmerica.nextElementSibling.innerHTML = "";
        }

      }

   function showCountry() {
         
            if (continent.value == "africa") {
               africaBlock.style.display = "block"
               asiaBlock.style.display = "none"
               europeBlock.style.display = "none"
               northBlock.style.display = "none"
               southBlock.style.display = "none"
            } else if (continent.value == "asia") {
               africaBlock.style.display = "none"
               asiaBlock.style.display = "block"
               europeBlock.style.display = "none"
               northBlock.style.display = "none"
               southBlock.style.display = "none"
            } else if (continent.value == "europe") {
               africaBlock.style.display = "none"
               asiaBlock.style.display = "none"
               europeBlock.style.display = "block"
               northBlock.style.display = "none"
               southBlock.style.display = "none"
            } else if (continent.value == "northamerica") {
               africaBlock.style.display = "none"
               asiaBlock.style.display = "none"
               europeBlock.style.display = "none"
               northBlock.style.display = "block"
               southBlock.style.display = "none"
            } else if (continent.value == "southamerica") {
               africaBlock.style.display = "none"
               asiaBlock.style.display = "none"
               europeBlock.style.display = "none"
               northBlock.style.display = "none"
               southBlock.style.display = "block"
            } else if (continent.value == "" || continent.value == null) {
               africaBlock.style.display = "none"
               asiaBlock.style.display = "none"
               europeBlock.style.display = "none"
               northBlock.style.display = "none"
               southBlock.style.display = "none"
            }
      }

function calcScore() {
   let year = new Date().getFullYear(),
       date_of_birth = new Date(dob.value).getFullYear()
       age = year - date_of_birth;

       if (18<=age && age<=24) {
         agePoint = 100
       }else if (25<=age && age<=30) {
         agePoint = 80
       }else if (31<=age && age<=35) {
         agePoint = 50
       }else if (36<=age && age<=40) {
         agePoint = 30
       }else if (41<=age) {
         agePoint = 10
       }
       console.log(agePoint)

   if (africa.value != "" || africa.value != null) {
      countryPoint = 50
   } else if (asia.value != "" || asia.value != null){
      countryPoint = 40
   }else if (southAmerica.value != "" || southAmerica.value != null){
      countryPoint = 30
   }else if (northAmerica.value != "" || northAmerica.value != null){
      countryPoint = 20
   }else if (europe.value != "" || europe.value != null){
      countryPoint = 10
   }
   console.log(countryPoint)

   avg = (parseInt(sub1Score.value) + parseInt(sub2Score.value) + parseInt(sub3Score.value) + parseInt(sub4Score.value) + parseInt(sub5Score.value) + parseInt(sub6Score.value) + parseInt(sub7Score.value) + parseInt(sub8Score.value))/8
   console.log(avg)

   if (avg>=90 && avg<=100) {
      gradePoint = 150
   } else if (avg>=85 && avg<=90) {
      gradePoint = 140
   } else if (avg>=75 && avg<=84) {
      gradePoint = 120
   } else if (avg>=65 && avg<=74) {
      gradePoint = 100
   } else if (avg>=60 && avg<=64) {
      gradePoint = 80
   } else if (avg>=50 && avg<=59) {
      gradePoint = 50
   } else if (avg>=40 && avg<=49) {
      gradePoint = 20
   }
   
   console.log(gradePoint)
   point = gradePoint + countryPoint + agePoint
   console.log(point)
   
}

function displayResult() {
   let sex
   if (gender.value == "male") {
      sex = "Mr"
   } else if (gender.value == "female" && age<30){
      sex = "Miss"
   } else if (gender.value == "female" && age>30){
      sex = "Mrs"
   }
   if (point>=180) {
      resultContainer.innerHTML=
      `<div class="inner-result-container">
                    <h2>Congratulation</h2>
                    <p> Good day ${sex} ${fName.value} ${lName.value}
                        We are pleased to announce to you that after considering the data you gave us,
                        you  have qualified for our scholarship programme for one year.
                        Below is how you performed
                    </p>
                    <canvas class="chart-results" id="chartResults">

                    </canvas>
                    
                </div>`
   } else {
      resultContainer.innerHTML=
      `<div class="inner-result-container">
                    <h2>We are so sorry</h2>
                    <p> Good day ${sex} ${fName.value} ${lName.value}
                        We are sad to announce to you that after considering the data you gave us,
                        you did not qualified for our scholarship programme. To help you improve,
                        below is how you performed
                    </p>
                    <canvas class="chart-results" id="chartResults">

                    </canvas>
                </div>`
   }
}

function checkSub(selectObject, subs, allSubs) {
   for (let i = 0; i < allSubs.length; i++) {
      
      if (allSubs[i].id!=selectObject.id) {
         for (let j = 0; j < allSubs[i].options.length; j++) {
            if (allSubs[i].options[j].value == subs) {
               allSubs[i].options[j].hidden = true
            }
            else if (allSubs[i].options[j].value == subs){
               if (allSubs[i].options[j].hidden != true) {
                  allSubs[i].options[j].hidden = false
               }
               // allSubs[i].options[j].hidden = false
            }
          }
      } 
      
      
   }
   
   
 }