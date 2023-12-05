const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.data-weather-box');
const contentbox = document.querySelector('.weather-content-box');
const searchbox = document.querySelector('.search-box');

search.addEventListener('click', (e) => {
    e.preventDefault();

    contentbox.style.height = '400px';
    weatherbox.style.visibility = 'visible';
    // weatherbox.style.marginTop = '20';


    let city = document.querySelector('.city-field').value;
	if (city == "") {
		alert("Please Insert Location Data")
	}else{
		const fetchData = async () => {
			const url = "https://api.unsplash.com/search/photos/?client_id=G4HmTNNEGq--UG8KfLWvzWE-9DO1DvIn13s5ONLMung&query="+city+"&orientation=landscape";
			const options = {
				method: 'GET'
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				if (result["results"].length > 3) {
					document.getElementById("city-img-1").src = result["results"][0]["urls"]["full"];
					document.getElementById("city-img-2").src = result["results"][1]["urls"]["full"];
					document.getElementById("city-img-3").src = result["results"][2]["urls"]["full"];
				}else{
					const alternative_url = "https://api.unsplash.com/search/photos/?client_id=G4HmTNNEGq--UG8KfLWvzWE-9DO1DvIn13s5ONLMung&query=pemandangan&orientation=landscape";
					const alternative_response = await fetch(alternative_url, options);
					const alternative_result = await alternative_response.json();

					document.getElementById("city-img-1").src = alternative_result["results"][0]["urls"]["full"];
					document.getElementById("city-img-2").src = alternative_result["results"][1]["urls"]["full"];
					document.getElementById("city-img-3").src = alternative_result["results"][2]["urls"]["full"];
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}
});