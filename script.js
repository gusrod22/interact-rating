const ratingRadioButtons = document.querySelectorAll('input[name="rating"]');
const submitButton = document.querySelector("button");
const ratingText = document.querySelector(".rating-text");

// references to the card divs
const cardDiv = document.querySelector(".card");
const thankYouCardDiv = document.querySelector(".thank-you-card");

//reference error message
const errorMessage = document.querySelector(".error-message");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let selectedRating = null;
  for (const radioButton of ratingRadioButtons) {
    if (radioButton.checked) {
      selectedRating = radioButton.value;
      break;
    }
  }

  if (selectedRating === null) {
    errorMessage.style.display = "block";
    return;
  }

  ratingText.innerHTML = `You selected ${selectedRating} out of 5`;

  cardDiv.style.display = "none";
  thankYouCardDiv.style.display = "block";
});
