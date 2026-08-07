/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // STEP 4b: Store the URL of the local JSON file in a variable
    const url = "js/i-scream.json";

    // STEP 5: Use the URL to create a new request object
    const request = new Request(url);

    // STEP 6: Make a network request with the fetch() function
    const response = await fetch(request);

    // STEP 7: Convert the response to a JSON object
    const responseJson = await response.json();

    // STEP 8: Output the JSON object to the console
    console.log(responseJson);

    // STEP 9a: Call the populateHeader function
    populateHeader(responseJson);

    // STEP 10a: Call the showTopFlavours function
    showTopFlavours(responseJson);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(json) {
    let h1 = document.createElement("h1");
    let para = document.createElement("p");

    h1.textContent = json.companyName;
    para.textContent = `Head Office: ${json.headOffice}, est: ${json.established}, Status: ${json.active ? "Active" : "Inactive"}`;

    header.appendChild(h1);
    header.appendChild(para);
}

/* STEP 10b: Assemble the showTopFlavours() function */
function showTopFlavours(json) {
    let topFlavours = json.topFlavours;

    for (let i = 0; i < topFlavours.length; i++) {
        console.log(topFlavours[i]);

        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let list = document.createElement("ul");

        h2.textContent = topFlavours[i].name;
        p1.textContent = "Calories: " + topFlavours[i].calories;
        p2.textContent = "Type: " + topFlavours[i].type;
        image.setAttribute("src", topFlavours[i].image);
        image.setAttribute("alt", topFlavours[i].name);

        let ingredients = topFlavours[i].ingredients;

        for (let j = 0; j < ingredients.length; j++) {
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        article.appendChild(image);

        section.appendChild(article);
    }
}

// This page was inspired by and adapted from:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// Special thanks to:
// https://openclipart.org/detail/285225/ice-cream-cones