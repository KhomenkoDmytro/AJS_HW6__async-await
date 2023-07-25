const searchButton = document.querySelector('.button__search');
searchButton.addEventListener('click', async (event) => {
  const clientIPResponse = await fetch('https://api.ipify.org/?format=json');
  const clientIP = await clientIPResponse.json();
  console.log(clientIP.ip);
  const physicalAddressResponse = await fetch(
    'http://ip-api.com/json/' +
      clientIP.ip +
      '?fields=continent,country,regionName,city,district'
  );
  const physicalAddress = await physicalAddressResponse.json();
  console.log(physicalAddress);
  const placeInfoElement = document.createElement('div');
  placeInfoElement.innerHTML = `
  ${physicalAddress.continent}, ${physicalAddress.country}, ${physicalAddress.regionName}, ${physicalAddress.city}, ${physicalAddress.district}
  `;
  const parentSearchButton = document.querySelector('.root');
  parentSearchButton.insertAdjacentElement('beforeend', placeInfoElement);
});
