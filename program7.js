//program that takes a list of items with prices and quantities, then calculates the total bill.

    let items = [
        ["Rice", 100, 2],
        ["Milk", 80, 3],
        ["Bread", 60, 1],
        ["Eggs", 15, 10]
    ];

    let total = 0;

    for (let i = 0; i < items.length; i++) {

        let name = items[i][0];
        let price = items[i][1];
        let quantity = items[i][2];

        let itemTotal = price * quantity;

        total = total + itemTotal;

        console.log(
            "Item: " + name +
            "<br>Price: Rs. " + price +
            "<br>Quantity: " + quantity +
            "<br>Item Total: Rs. " + itemTotal +
            "<br><br>"
        );
    }

    console.log("<strong>Total Bill = Rs. " + total + "</strong>");