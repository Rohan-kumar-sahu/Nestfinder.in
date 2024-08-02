const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navToggle.classList.toggle('active');
});


const plots = [
    {
        sectionNumber: '456/23',
        area: '500 sq. meters',
        price: '₹2,00,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Park',
            south: '457/23',
            east: 'Ground',
            west: 'Road'
        }
    },
    {
        sectionNumber: '457/23',
        area: '500 sq. meters',
        price: '₹2,00,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '456/23',
            south: 'Community Center',
            east: 'Ground',
            west: 'Road'
        }
    },
    {
        sectionNumber: '868/23',
        area: '1000 sq. meters',
        price: '₹3,85,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Supermarket',
            south: '867/23',
            east: 'Gym',
            west: 'Road'
        }
    },
    {
        sectionNumber: '867/23',
        area: '1000 sq. meters',
        price: '₹3,85,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '868/23',
            south: '866/23',
            east: 'Gym',
            west: 'Road'
        }
    },
    {
        sectionNumber: '866/23',
        area: '1000 sq. meters',
        price: '₹3,85,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '867/23',
            south: 'Road',
            east: 'Gym',
            west: 'Road'
        }
    },
    {
        sectionNumber: '851/23',
        area: '550 sq. meters',
        price: '₹2,25,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '853/23',
            south: 'Stadium',
            east: 'Road',
            west: '852/23'
        }
    },
    {
        sectionNumber: '883/23',
        area: '600 sq. meters',
        price: '₹2,75,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '884/23',
            south: '882/23',
            east: 'Road',
            west: 'Stadium'
        }
    },
    {
        sectionNumber: '663/23',
        area: '480 sq. meters',
        price: '₹1,90,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Road',
            south: 'Library',
            east: 'Hospital',
            west: '667/23'
        }
    },
    {
        sectionNumber: '667/23',
        area: '480 sq. meters',
        price: '₹1,90,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Road',
            south: 'Library',
            east: '663/23',
            west: '664/23'
        }
    },
    {
        sectionNumber: '664/23',
        area: '520 sq. meters',
        price: '₹2,10,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Road',
            south: 'Library',
            east: '667/23',
            west: '665/23'
        }
    },
    {
        sectionNumber: '665/23',
        area: '420 sq. meters',
        price: '₹1,70,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: 'Road',
            south: 'Bus Stop',
            east: '664/23',
            west: 'Bus Stop'
        }
    },
    {
        sectionNumber: '965/23',
        area: '800 sq. meters',
        price: '₹3,35,000',
        vendorName: 'John Doe',
        vendorContact: '+91 1234567890',
        directions: {
            north: '967/23',
            south: 'Road',
            east: '962/23',
            west: '961/23'
        }
    }
   
];


function createPlotSection(plot) {
    const plotSection = document.createElement('div');
    plotSection.className = 'plot-section';
    
    plotSection.innerHTML = `
        <h2>Section Number: ${plot.sectionNumber}</h2>
        <p>Area: ${plot.area}</p>
        <p>Price: ${plot.price}</p>
        <p>Vendor Name: ${plot.vendorName}</p>
        <p>Vendor Contact: ${plot.vendorContact}</p>
        <div class="directions">
            <span class="direction">North: ${plot.directions.north}</span>
            <span class="direction">South: ${plot.directions.south}</span>
            <span class="direction">East: ${plot.directions.east}</span>
            <span class="direction">West: ${plot.directions.west}</span>
        </div>
        
    `;
    
    return plotSection;
}


const plotsContainer = document.getElementById('plots-container');

plots.forEach(plot => {
    const plotSection = createPlotSection(plot);
    plotsContainer.appendChild(plotSection);
});

addEventListeners();


