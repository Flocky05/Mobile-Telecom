const phoneLoad = async () => {
  const url = "https://openapi.programming-hero.com/api/phones?search=iphone";
  const res = await fetch(url);
  const data = await res.json();
  displayMobileData(data.data);
};

const displayMobileData = (phones) => {
  console.log(phones);
  const mobileContainer = document.getElementById("mobile-contailer");
  phones.forEach((phone) => {
    const mobileDiv = document.createElement("div");
    mobileDiv.classList.add("col");
    mobileDiv.innerHTML = `
                <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is the section of I phones, thus phones are available in our market. If you wanna buy them may you knock with use.</p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">${phone.slug}</small>
                </div>
              </div>
    `;
    mobileContainer.appendChild(mobileDiv);
  });
};
phoneLoad();
