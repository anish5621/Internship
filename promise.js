let foodPromise = new Promise((resolve, reject) => {

    let foodReady = true;
    setTimeout(() => {

        if (foodReady) {
            resolve("🍕 Food is ready!");
        } else {
            reject("❌ Food is not available!");
        }

    }, 2000);

});
foodPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//    Output :🍕 Food is ready!