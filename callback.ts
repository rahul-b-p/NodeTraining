function fetchData(callback:any)  {
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 1000);
}

fetchData((data:any) => {
    console.log(data);
});
