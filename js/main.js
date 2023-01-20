// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.com/v3.1/all

let res = fetch("https://restcountries.com/v3.1/all");

res
  .then((result) => result.json())
  .then((data) => {
    tbody = document.querySelector("tbody");
    console.log(data);
    data.forEach((item) => {
      tbody.innerHTML += `
        <tr>
            <td>${item.cca2}</td>
            <td><img class='img' src="${item.flags.svg}"></td>
            <td>${item.name.official}</td>
            <td>${item.capital}</td>
            <td>${item.population}</td>
        </tr>
        `;
    });
  });

  
