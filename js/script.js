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
            <img src="" alt="Coffee 1" />
        </div>
        <div class="coffe__card__info">
            <h3>Coffee 1</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quasi.
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
