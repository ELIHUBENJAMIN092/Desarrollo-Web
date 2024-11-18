function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "JavaScript", type: "Language" };
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log("Data received:", result);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
