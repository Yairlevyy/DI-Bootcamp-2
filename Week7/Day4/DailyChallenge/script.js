let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach((item)=>{
        console.log(item)
    })
};

const cloneGroceries = () => {
    let user = client;
    client = "Betty";

// No we don't see this in the user variable because it was assigned a reference to the original object.

    let shopping = groceries;
    groceries.totalPrice = "35$";

// Yes wee will see the difference because it was assigned by value to the original object.

    groceries.other.paid = false;

// No we will not see this, for that we will need Deep cloning using JSON.stringify.

}