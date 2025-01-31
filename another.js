//add event listener to dropdown trigger
document.querySelectorAll('.dropdown').forEach((dropdown)=>
{
dropdown.previouElementSibling.addEventListener('click',()=>{
dropdown.classList.toggle('show');
});
});
const searchForm =document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const searchTerm=searchInput.ariaValueMax.trim();
    if (searchTerm){
        //redirect to search results page or handle search logic here
        console.log( Searching for: ${searchTerm});
    }
});