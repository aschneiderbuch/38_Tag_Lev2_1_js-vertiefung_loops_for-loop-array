console.log("test");

/* 

Frage

array Bilder = image_001.jpg ... image_100.jpg

frunction imageArray
    Variable returnArray

    for schleife
        push() 
        if else 

        retrunArray ausgeben

    
*/


function imageArray() {

    let returnArray = [];
    console.log(returnArray);

    for (let rundenIndex = 1; rundenIndex < 101; rundenIndex = rundenIndex + 1) {
        console.log(rundenIndex);
        console.log(rundenIndex.toString().length);

        // blanko Bild Name
        let image = "image_"
        console.log(image);

        // umbenennen ob 0 00 usw
        if (rundenIndex.toString().length == 1) {
            console.log(rundenIndex.toString());
            image = (`${image}00${rundenIndex}.jpg`);
            console.log(image);
        } else if (rundenIndex.toString().length == 2) {
            console.log(rundenIndex.toString());
            image = (`${image}0${rundenIndex}.jpg`);
            console.log(image);
        } else if (rundenIndex.toString().length == 3) {
            console.log(rundenIndex.toString());
            image = (`${image}${rundenIndex}.jpg`);
            console.log(image);
        }

// ins Array hinzufügen
console.log(returnArray);
returnArray.push(image);
console.log(returnArray);
console.table(returnArray);

// jeder Array durchlauf
// document.write(`${returnArray.join(" <br>")} `); 


    };
    // 1x Array am Ende fertig ausgeben
    document.write(`${returnArray.join(" <br>")} `); 

};



imageArray();