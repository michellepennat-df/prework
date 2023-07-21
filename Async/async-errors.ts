// Otro cambio
async function fetchData(url: string): Promise<any> {
    console.log("entro");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "success") {
                resolve({
                    status: "success",
                    data: [1, 2, 3, 4, 5]
                });
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

async function processData(data: any): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multiplied = data.data.map((num: number) => num * 2)
            resolve(multiplied);
        }, 1000);
    })
}

async function displayData(data: any): Promise<any> {
    return new Promise((resolve) => {
        console.log("Success multiplied:", data);
        resolve(data);
    })
}

async function fetchAndProcessData(url: string) {
    try {
        let res = await fetchData(url);
        res = await processData(res);
        await displayData(res);


    } catch (error) {
        console.error("Error:", error);
    }
}

fetchAndProcessData("success");