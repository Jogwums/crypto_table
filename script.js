const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
const params = '?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

async function fetchData(){
    try{
        const response = await fetch(apiUrl + params);
        const data = await response.json();
        display(data);
    }
    catch(error){
        console.error('Error network issues', error);
        
    }
}

// function to display the data in the html table 

function display(cryptoList){
    const tbody = document.querySelector("#crypto-table tbody")
    cryptoList.forEach((crypto, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${crypto.name}
            <img src=${crypto.image} alt="" width=15 height=15 />
            </td>
            <td>${crypto.symbol.toUpperCase()}</td>
            <td>${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.market_cap.toLocaleString()}</td>
            
        `;
        tbody.appendChild(row);
    });
}

fetchData();