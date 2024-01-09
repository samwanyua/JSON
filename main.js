//Sending an XMLHttpRequest
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const res =JSON.parse(xhttp.responseText);
        //console.log(res.people)
        const people = res.people;
        //to append the queue on the html
        let output ='';
        //forEach
        const queue = people.forEach(individual => output += `<li> ${individual.name}</li>`);
        document.getElementById('people').innerHTML = output;
        document.getElementById('people').style.listStyleType = 'none';
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();