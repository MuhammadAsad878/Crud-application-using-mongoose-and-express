
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const newDataForm = document.getElementById('newDataForm');
const rollNo = document.querySelector('#rollNo').value;
const name = document.querySelector('#stdName').value;
const section = document.querySelector('#section').value;
const department = document.querySelector('#department').value;
const semester = document.querySelector('#semester').value;
const newStudentBtn = document.getElementById('newBtn');

const themeButton = document.querySelector('#changeThemeBtn');
const themeElement = document.documentElement;

themeButton.addEventListener('click',()=>{
  const currentThemeValue = localStorage.getItem('theme');
  const newTheme = currentThemeValue === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme',newTheme);
  themeElement.setAttribute('data-bs-theme',newTheme);
  console.log(newTheme);

})

newDataForm.addEventListener('submit',(e)=>{
  // validateNewStudentForm(e);

});
searchForm.addEventListener('submit', (e) => {
  if (searchInput.value.trim() === '') {
    // Prevent form submission if the input is empty
    e.preventDefault();
    alert('Please enter a search query');
  }
});

function validateNewStudentForm(e){
  if(name === '' || semester === '' || rollNo === '' || section === '' ){
    e.preventDefault();
  }
}