const dogContainer = document.getElementById('dogContainer');
const loadBtn = document.getElementById('loadBtn');
const filterInput = document.getElementById('filterInput');

async function fetchDogs(breed = "") {
  let url = "";
  if (breed) {
    url = `https://dog.ceo/api/breed/${breed}/images/random/5`;
  } else {
    url = `https://dog.ceo/api/breeds/image/random/5`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "success") {
      displayDogs(data.message);
    } else {
      dogContainer.innerHTML = `<p style="color:red;">Breed not found. Try another!</p>`;
    }
  } catch (err) {
    console.error('Error fetching dogs:', err);
    dogContainer.innerHTML = `<p style="color:red;">Error fetching dogs. Please try again.</p>`;
  }
}

function displayDogs(images) {
  dogContainer.innerHTML = '';
  images.forEach(url => {
    const breed = url.split('/')[4];
    const img = document.createElement('img');
    img.src = url;
    img.alt = breed;
    img.dataset.breed = breed;
    dogContainer.appendChild(img);
  });
}

loadBtn.addEventListener('click', () => {
  const breed = filterInput.value.trim().toLowerCase();
  fetchDogs(breed);
});

// Initial load
fetchDogs();
