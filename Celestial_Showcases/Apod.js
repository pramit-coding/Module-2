const API_KEY ='uFPTVFrngoJc41l5VYnjWifb4XmZk1vbu72XjLrr';

function initializeDatepicker(){
    const today = new Date();
    const formattedToday = formateDate(today);
    console.log("Initializing date picker with today's date:", formattedToday);
    
    document.getElementById('datePicker').max = formattedToday;
    document.getElementById('datePicker').value = formattedToday;
}
6
function getRandomDate() {
    const start = new Date('1995-06-16');
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    consonle.log('Generated random date:', formatDate(randomDate));
    return randomDate;
}

function formatDate(date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth()+1). toString().padStart(2,'0');
    const dd = date.getDate().toString().padStart(2,'0');
    return `${yyyy} - ${mm} - ${dd}`
}

async function fetchAPODData(date) {
    try {
        const endpoint = 'https://api.nasa.gov/planetary/apod?date=${date}&api_key=$(API_KEY)';
        console.log('Fetching APOD data for data:', date);
        const response = await fetch(endpoint);
        console.log('Full fetch response:', response);
        const date = await response.json();
        console.log('Recieved APOD data:', data);
        updateUI(data, date);
    }   catch (error){
        console.error('Error fetching data:', error);
    }
}

function upateUI(data, date) {
    console.log('Updating ')
}