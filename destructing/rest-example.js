function sum(...numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    //   console.log(numbers);
    //   console.log("Sum of Numbers is ",sum);
    return sum;

}

// sum(10, 20, 30, 40);

function calculateSum() {
    const input = document.getElementById("numbers").value;

    const numbersArray = input.split(",").map(num => Number(num.trim()))

    const result = sum(...numbersArray)

    document.getElementById("sum").value = result;
}

