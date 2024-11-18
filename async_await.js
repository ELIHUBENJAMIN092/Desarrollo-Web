async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "JavaScript", type: "Language" };
            resolve(data);
        }, 1000);
    });
}

async function main() {
    try {
        const result = await fetchData();
        console.log("Data received:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

main();
