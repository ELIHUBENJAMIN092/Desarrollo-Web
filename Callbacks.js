function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "JavaScript", type: "Language" };
        callback(null, data);
    }, 1000);
}

fetchData((err, result) => {
    if (err) {
        console.error("Error fetching data:", err);
    } else {
        console.log("Data received:", result);
    }
});
