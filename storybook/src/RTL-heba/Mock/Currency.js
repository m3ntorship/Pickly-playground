async function convert(base, destination) {
    try {
        const result = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${base}`
        );
        const data = await result.json();
        console.log("data", data);
        return data.rates[destination];

    } catch (e) {
        return null;
    }
}

export { convert };