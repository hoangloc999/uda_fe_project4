// Replace checkForName with a function that checks the URL
const { checkForName } =  require('./nameChecker')
const {checkForURL} = require('./urlChecker')

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = '/api'

// Make sure get form after DOM load completely
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
})


function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('url').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    // checkForName(formText);
    
    // Check if the URL is valid
    if(checkForURL(formText)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        console.log("::: Form Submitted :::")
    
        postData(serverURL, {url: formText})
        .then(function(res) {
            document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        })
    } else {
        alert('Seems like an invalid URL, please try with a valid URL.');
    }
        
      
}

// Function to send data to the server
const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
const polarityChecker = (score) => {
    let display = '';
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}

// Export the handleSubmit function
export { handleSubmit };
export { polarityChecker }
