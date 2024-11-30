// Get the query string parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Display the form data in the confirmation page
document.getElementById('first-name').textContent = urlParams.get('first-name');
document.getElementById('last-name').textContent = urlParams.get('last-name');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('organization-name').textContent = urlParams.get('organization-name');
document.getElementById('membership-level').textContent = urlParams.get('membership-level');
document.getElementById('description').textContent = urlParams.get('description');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');

// Fetch the membership data from the external JSON file
fetch('membership.json')
    .then(response => response.json())
    .then(data => {
        const membershipCardsContainer = document.getElementById('membership-level');

        // Loop through each membership level and create a card
        data.forEach(membership => {
            const card = document.createElement('div');
            card.classList.add('membership-level');

            const cardTitle = document.createElement('h3');
            cardTitle.textContent = membership.level;
            card.appendChild(cardTitle);

            const cardDescription = document.createElement('p');
            cardDescription.textContent = membership.description;
            card.appendChild(cardDescription);

            const benefitsList = document.createElement('ul');
            membership.benefits.forEach(benefit => {
                const listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });
            card.appendChild(benefitsList);

            membershipCardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading membership data:', error);
    });
