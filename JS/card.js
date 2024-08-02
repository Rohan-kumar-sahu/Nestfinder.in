document.addEventListener("DOMContentLoaded", () => {
    const data = {
        totalListings: 120,
        totalSales: 45,
        avgTimeMarket: 30,
        newInquiries: 15,
        properties: [
            {
                address: "101 Shivaji Nagar, Pune",
                details: "3 bed, 2 bath, 1500 sqft, Rate: ₹5,000/sqft, Price: ₹75,00,000",
                image: " ./JS/1.jpg",
                bookingLink: "card.html"
            },
            {
                address: "202 Koregaon Park, Pune",
                details: "2 bed, 1 bath, 1200 sqft, Rate: ₹6,000/sqft, Price: ₹72,00,000",
                image: " ./JS/2.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "707 Baner, Pune",
                details: "4 bed, 3 bath, 2000 sqft, Rate: ₹5,100/sqft, Price: ₹1,02,00,000",
                image: " ./JS/3.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "808 Pimple Saudagar, Pune",
                details: "2 bed, 1 bath, 1100 sqft, Rate: ₹5,800/sqft, Price: ₹63,80,000",
                image: " ./JS/4.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "909 Wakad, Pune",
                details: "3 bed, 2 bath, 1500 sqft, Rate: ₹5,000/sqft, Price: ₹75,00,000",
                image: " ./JS/5.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "1001 Aundh, Pune",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹5,300/sqft, Price: ₹74,20,000",
                image: " ./JS/6.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "1102 Connaught Place, Delhi",
                details: "2 bed, 1 bath, 1300 sqft, Rate: ₹8,000/sqft, Price: ₹1,04,00,000",
                image: " ./JS/7.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "1506 Saket, Delhi",
                details: "2 bed, 2 bath, 1400 sqft, Rate: ₹7,000/sqft, Price: ₹98,00,000",
                image: " ./JS/8.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "1607 Karol Bagh, Delhi",
                details: "3 bed, 2 bath, 1200 sqft, Rate: ₹8,000/sqft, Price: ₹96,00,000",
                image: " ./JS/9.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "1809 Noida Sector 18, Delhi",
                details: "2 bed, 2 bath, 1100 sqft, Rate: ₹5,800/sqft, Price: ₹63,80,000",
                image: " ./JS/10.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "1910 Rajouri Garden, Delhi",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹6,500/sqft, Price: ₹91,00,000",
                image: " ./JS/11.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "2011 Greater Kailash, Delhi",
                details: "4 bed, 3 bath, 1900 sqft, Rate: ₹7,200/sqft, Price: ₹1,36,80,000",
                image: " ./JS/12.jpg",
                bookingLink: "card.html"
            },
            {
                address: "2112 South Mumbai, Mumbai",
                details: "2 bed, 2 bath, 1100 sqft, Rate: ₹12,000/sqft, Price: ₹1,32,00,000",
                image: " ./JS/13.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "2617 Borivali East, Mumbai",
                details: "3 bed, 2 bath, 1600 sqft, Rate: ₹7,500/sqft, Price: ₹1,20,00,000",
                image: " ./JS/14.jpg",
                bookingLink: "card.html"
            },
            {
                address: "2718 Colaba, Mumbai",
                details: "4 bed, 3 bath, 2000 sqft, Rate: ₹12,000/sqft, Price: ₹2,40,00,000",
                image: " ./JS/15.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "2819 Navi Mumbai, Mumbai",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹6,500/sqft, Price: ₹91,00,000",
                image: " ./JS/16.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "2920 Ghatkopar East, Mumbai",
                details: "2 bed, 1 bath, 1300 sqft, Rate: ₹7,000/sqft, Price: ₹91,00,000",
                image: " ./JS/17.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "3021 Thane West, Mumbai",
                details: "3 bed, 2 bath, 1500 sqft, Rate: ₹6,800/sqft, Price: ₹1,02,00,000",
                image: " ./JS/18.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "3122 Park Street, Kolkata",
                details: "2 bed, 2 bath, 1200 sqft, Rate: ₹5,000/sqft, Price: ₹60,00,000",
                image: " ./JS/19.jpg",
                bookingLink: "card.html"
            },
            {
                address: "3223 New Alipore, Kolkata",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹5,200/sqft, Price: ₹72,80,000",
                image: " ./JS/20.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "3324 Salt Lake City, Kolkata",
                details: "4 bed, 3 bath, 1800 sqft, Rate: ₹4,800/sqft, Price: ₹86,40,000",
                image: " ./JS/21.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "3425 Ballygunge, Kolkata",
                details: "2 bed, 2 bath, 1100 sqft, Rate: ₹5,500/sqft, Price: ₹60,50,000",
                image: " ./JS/22.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "3526 Howrah, Kolkata",
                details: "3 bed, 2 bath, 1500 sqft, Rate: ₹5,000/sqft, Price: ₹75,00,000",
                image: " ./JS/23.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "4031 Esplanade, Kolkata",
                details: "3 bed, 2 bath, 1500 sqft, Rate: ₹5,300/sqft, Price: ₹79,50,000",
                image: " ./JS/24.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "4132 Banjara Hills, Hyderabad",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹7,000/sqft, Price: ₹98,00,000",
                image: " ./JS/25.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "4233 Hitech City, Hyderabad",
                details: "2 bed, 1 bath, 1200 sqft, Rate: ₹6,500/sqft, Price: ₹78,00,000",
                image: " ./JS/26.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "4334 Secunderabad, Hyderabad",
                details: "4 bed, 3 bath, 1800 sqft, Rate: ₹6,200/sqft, Price: ₹1,11,60,000",
                image: " ./JS/27.jpeg",
                bookingLink: "card.html"
            },
            
            {
                address: "4839 Mehdipatnam, Hyderabad",
                details: "2 bed, 2 bath, 1100 sqft, Rate: ₹5,500/sqft, Price: ₹60,50,000",
                image: " ./JS/28.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "4940 Old City, Hyderabad",
                details: "3 bed, 2 bath, 1400 sqft, Rate: ₹5,200/sqft, Price: ₹72,80,000",
                image: " ./JS/29.jpeg",
                bookingLink: "card.html"
            },
            {
                address: "5051 Ameerpet, Hyderabad",
                details: "4 bed, 3 bath, 1700 sqft, Rate: ₹6,000/sqft, Price: ₹1,02,00,000",
                image: " ./JS/30.jpeg",
                bookingLink: "card.html"
            }
        ]
    };

    document.getElementById("total-listings").innerText = data.totalListings;
    document.getElementById("total-sales").innerText = data.totalSales;
    document.getElementById("avg-time-market").innerText = data.avgTimeMarket;
    document.getElementById("new-inquiries").innerText = data.newInquiries;

    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const results = data.properties.filter(property => property.address.toLowerCase().includes(query));

        searchResults.innerHTML = "";
        if (results.length > 0) {
            results.forEach(result => {
                const resultElement = document.createElement("div");
                resultElement.className = "property-card";
                resultElement.innerHTML = `
                    <img src="${result.image}" alt="${result.address}">
                    <div class="details">
                        <p><strong>Address:</strong> ${result.address}</p>
                        <p><strong>Details:</strong> ${result.details}</p>
                        <a href="${result.bookingLink}?address=${encodeURIComponent(result.address)}&details=${encodeURIComponent(result.details)}" class="booking-button">Book Now</a>
                    </div>
                `;
                searchResults.appendChild(resultElement);
            });
        } else {
            searchResults.innerHTML = "<p>No results found</p>";
        }
    });

    const propertyList = document.getElementById("property-list");
    data.properties.forEach(property => {
        const propertyCard = document.createElement("div");
        propertyCard.className = "property-card";
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.address}">
            <div class="details">
                <p><strong>Address:</strong> ${property.address}</p>
                <p><strong>Details:</strong> ${property.details}</p>
                <a href="${property.bookingLink}?address=${encodeURIComponent(property.address)}&details=${encodeURIComponent(property.details)}" class="booking-button">Book Now</a>
            </div>
        `;
        propertyList.appendChild(propertyCard);
    });
});

const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navToggle.classList.toggle('active');
});
