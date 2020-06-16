//Global variables
const studentList = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
const pageMaxNum = 10;


//Display 10 students to UI
function showPage (list, page) {
   let start = pageMaxNum - pageMaxNum; // start = 0
   let end = page * pageMaxNum; // end = 10

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i < end) { // greater or equal to 0 && less than 10
         list[i].style.display = ''; 
      } else {
         list[i].style.display = 'none';
      }
   }
};
showPage(studentList, 1);



function appendPageLinks(list) {
   //create a new div
   let pageNumber = Math.ceil( list.length /10 );
   let div = document.createElement('div');
   div.className = 'pagination';
   page.appendChild(div);
   let ul = document.createElement('ul');


// create a new li and anchor element with each loop
   for(i = 0; i < pageNumber; i++ ) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      div.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(a);
      a.href = '#'; //making sure each is linked
      a.textContent = i + 1;


      // ** I learned this bit of code with the help of Github **
      if (i === 0) {
         a.className = 'active';
      };
      //creating a click event and adding the active class to the targeted anchor elements
      a.addEventListener ('click', (e) => {
         let A = document.querySelectorAll('a');
         for(let i = 0; i < A.length; i++) {
            A[i].className = '';
         };

         e.target.className = 'active';
         showPage(list, e.target.textContent);
      });
   };
};

appendPageLinks(studentList);

