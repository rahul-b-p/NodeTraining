const fetchData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
};

fetchData().then((data: any) => console.log(data)).catch((error: any) => console.error(error));

