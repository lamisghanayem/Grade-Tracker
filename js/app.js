'use strict'
 let formEl= document.getElementById('studentForm');
 let tableEl = document.getElementById('tableResult');
 let tableHeaderArr = ['Student Name', 'Student Grade', 'Course', 'Status'];

 let arrOfObj = [];


//constructor
 function Grade (name, course ){
     this.name= name;
     this.course= course;
     this.grade= studentGrade();
     this.status= calcStatus(this.grade);

     arrOfObj.push(this);

 }

 //prototype
 Grade.prototype.render = function (){

    let StudentRow = document.createElement('tr');
    tableEl.appendChild(StudentRow);

       let tdEl= document.createElement('td');
       StudentRow.appendChild(tdEl);
       tdEl.textContent= this.name;

       let tdEl2= document.createElement('td');
       StudentRow.appendChild(tdEl2);
       tdEl2.textContent= this.grade;

       let tdEl3= document.createElement('td');
       StudentRow.appendChild(tdEl3);
       tdEl3.textContent= this.course;

      let tdEl4= document.createElement('td');
      StudentRow.appendChild(tdEl4);
      tdEl4.textContent= this.status;


 }

 function tableHeader (){

    let firstRow = document.createElement('tr');
    tableEl.appendChild(firstRow);

    for (let i=0; i<tableHeaderArr.length; i++){

        let thEl= document.createElement('th');
        firstRow.appendChild(thEl);
       thEl.textContent= tableHeaderArr[i];
    }

 }

 function studentGrade(){
     return Math.floor ( Math.random() * (100-0)+0 );
 }

 function calcStatus(grade){

    if (grade> 50)
    {
        return status= "PASS";
    }
    else {
        return status= "FAIL";
    }

 }



 //submit function
 formEl.addEventListener('submit', handleSubmitting);

 function handleSubmitting(event){
     event.preventDefault();
      
     let newName = event.target.nameField.value;
     let newCourse = event.target.courseField.value;

     let gradeStudent = new Grade (newName, newCourse);

     gradeStudent.render();
     setLocal();
 }


 function setLocal(){
     let stringArr = JSON.stringify(arrOfObj);
     localStorage.setItem('student', stringArr);
 }


 function getLocal(){
     let data = localStorage.getItem('student');
     let parsedArr= JSON.parse(data);

     if (parsedArr){
         for(let i=0; i<parsedArr.length; i++){

            let newInst = new Grade (parsedArr[i].name, parsedArr[i].course);

            newInst.render();
         }
     }
 }

 tableHeader ();

 getLocal();