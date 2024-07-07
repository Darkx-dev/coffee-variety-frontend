const coffees__wrapper = document.querySelector(".coffee__cards__wrapper");
const fetchCoffes = async () => {
  const response = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await response.json();
  return data;
};

const returnCards = async () => {
  const coffeeData = await fetchCoffes();
  console.log(coffeeData);
  coffeeData.map((coffee) => {
    let clutter = `
    <div class="coffe__card">
        <div class="coffe__card__image">
            <img src="${coffee.image}" alt="Coffee 1" />
        </div>
        <div class="coffe__card__info">
            <h3>${coffee.title}</h3>
            <p>
                ${coffee.description}
            </p>
        </div>
    </div>
`;
    let cardElement = document.createElement("h5");
    cardElement.innerHTML = clutter;
    coffees__wrapper.appendChild(cardElement);
  });
};

returnCards();
