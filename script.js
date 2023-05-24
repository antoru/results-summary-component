async function logJSONData() {

    const response = await fetch("./data.json");
    const jsonData = await response.json();

    console.log(jsonData);

    const rowTemplate = (item) => {
        
        return `
            <div class="table__row table__row--${(item.category).toLowerCase()}">
                <div class="icon">
                    <img src="${item.icon}" alt="">
                </div>
                <div class="category">
                    ${item.category}
                </div>
                <div class="score">
                    <div class="score__left">
                        ${item.score}
                    </div>
                    <div class="score__right"> / 100 </div>
                </div>
            </div>
        `
    }

    document.querySelector(".table").innerHTML = `
        ${jsonData.map(rowTemplate).join("")}
    `;
    
}

logJSONData();