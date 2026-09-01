function getFood() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("🍕 Food is ready!");
        }, 2000);

    });
}

async function orderFood() {

    let result = await getFood();

    console.log(result);

}

orderFood();