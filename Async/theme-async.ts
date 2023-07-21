function fetchDataSimulate(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            if (url === "success") {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchDataSimulate("success")
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

async function fetchDataAsync() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function fetchDataExercise(url: string): Promise<any> {
    try {
        await delay(2000);
        const response = await fetch(url)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error", error)
        throw error;
    }
}