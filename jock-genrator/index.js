const apiKey = "in7pwBFllyRlzSGWMVePXindqapOsPQQ3sfPRpU2";

const options = {
    method: "GET",
    headers: {
        "X-APi-Key": apiKey,
    },
};

const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


async function getJoke() {
    const selectedOption = document.getElementById('apiOption').value;

    let apiURL;
    switch (selectedOption) {
        case 'option1':
            apiURL ='https://api.api-ninjas.com/v1/dadjokes?limit=1';
            try {
                jokeEl.innerText = "Searching a joke..";
                btnEl.disabled = true;
                btnEl.innerText = "fetching...";
                const response = await fetch(apiURL, options);
                const data = await response.json();
        
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
                jokeEl.innerText = data[0].joke;
            } catch (error) {
                jokeEl.innerText = "Something went wrong, Please Try Later.";
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
            }
            console.log("Dad Joke");
            break;
        case 'option2':
            apiURL = 'https://api.api-ninjas.com/v1/chucknorris?';
            try {
                jokeEl.innerText = "Searching a joke..";
                btnEl.disabled = true;
                btnEl.innerText = "fetching...";
                const response = await fetch(apiURL, options);
                const data = await response.json();
        
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
                jokeEl.innerHTML = data.joke;
            } catch (error) {
                jokeEl.innerText = "Something went wrong, Please Try Later.";
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
            }
            console.log("Riddlse");
            break;
        case 'option3':
            apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';
            try {
                jokeEl.innerText = "Searching a joke..";
                btnEl.disabled = true;
                btnEl.innerText = "fetching...";
                const response = await fetch(apiURL, options);
                const data = await response.json();
        
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
        
                jokeEl.innerText = data[0].joke;
            } catch (error) {
                jokeEl.innerText = "Something went wrong, Please Try Later.";
                btnEl.disabled = false;
                btnEl.innerText = "Get Your Joke";
            }
            console.log("Jokes");
            break;
        default:
            //jokeEl.innerText = "Please Select Category!!";
            jokeEl.innerText = "Please Select Category!!";
            return;
    }   
}