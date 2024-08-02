document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];
  
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', () => {
        const articleId = button.getAttribute('data-article');
        const title = button.previousElementSibling.previousElementSibling.innerText;
        const content = getArticleContent(articleId);
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-content').innerHTML = content;
        modal.style.display = 'block';
      });
    });
  
    closeModal.onclick = () => {
      modal.style.display = 'none';
    };
  
    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  
    function getArticleContent(articleId) {
      const articles = {
        "annual-growth-2023": `
          <h4>Introduction</h4>
          <p>The Annual Growth Report 2023 provides a comprehensive analysis of the economic growth patterns observed over the past year. This report highlights key sectors that contributed to growth, examines the factors driving economic performance, and projects future trends.</p>
          <h4>Economic Overview</h4>
          <p>In 2023, the global economy showed a robust recovery post-pandemic. The GDP growth rate averaged 4.2%, with significant contributions from technology, healthcare, and renewable energy sectors.</p>
          <h4>Sectoral Performance</h4>
          <p><b>1. Technology:</b> The tech industry continued to thrive, driven by advancements in AI, cloud computing, and cybersecurity.</p>
          <p><b>2. Healthcare:</b> Innovations in biotechnology and pharmaceuticals led to increased productivity and better health outcomes.</p>
          <p><b>3. Renewable Energy:</b> Investment in renewable energy sources surged, contributing to a greener economy and sustainable growth.</p>
          <h4>Challenges and Opportunities</h4>
          <p>The report also addresses challenges such as inflationary pressures, supply chain disruptions, and geopolitical tensions. Opportunities lie in digital transformation, green technologies, and emerging markets.</p>
          <h4>Conclusion</h4>
          <p>The Annual Growth Report 2023 concludes with a positive outlook, emphasizing the resilience of the global economy and the potential for sustainable development.</p>
        `,
        "upcoming-proposals-2023": `
          <h4>Introduction</h4>
          <p>The Upcoming Real Estate Proposals 2023 report provides an in-depth look at major real estate projects slated for development in the coming year. This report covers residential, commercial, and industrial real estate sectors.</p>
          <h4>Residential Projects</h4>
          <p>Several high-profile residential projects are planned, focusing on smart home technology, sustainability, and community living.</p>
          <h4>Commercial Developments</h4>
          <p>Commercial real estate is set to expand with new office complexes, shopping centers, and mixed-use developments aimed at enhancing urban infrastructure.</p>
          <h4>Industrial Real Estate</h4>
          <p>The industrial sector will see the development of logistics hubs, manufacturing facilities, and warehouses to support e-commerce growth and supply chain efficiency.</p>
          <h4>Conclusion</h4>
          <p>The report highlights the dynamic nature of the real estate market and the potential for significant investment opportunities in 2023.</p>
        `,
        "market-trends-analysis-2023": `
          <h4>Introduction</h4>
          <p>The Market Trends Analysis 2023 report examines the key trends shaping the global market landscape. This report covers consumer behavior, technological advancements, and economic indicators.</p>
          <h4>Consumer Behavior</h4>
          <p>Shifts in consumer preferences towards sustainable and ethically produced goods are driving changes across various industries.</p>
          <h4>Technological Advancements</h4>
          <p>The rapid adoption of AI, IoT, and blockchain technology is transforming business operations and creating new market opportunities.</p>
          <h4>Economic Indicators</h4>
          <p>Inflation rates, interest rates, and employment statistics are analyzed to provide a comprehensive understanding of market dynamics.</p>
          <h4>Conclusion</h4>
          <p>The report concludes that staying ahead of market trends is crucial for businesses to remain competitive and capitalize on emerging opportunities.</p>
        `,
        "investment-opportunities-2023": `
          <h4>Introduction</h4>
          <p>The Investment Opportunities 2023 report identifies key areas for investors to consider in the coming year. This report covers traditional investments, emerging sectors, and innovative financial instruments.</p>
          <h4>Traditional Investments</h4>
          <p>Stocks, bonds, and real estate remain reliable investment options, with expected growth in specific sectors such as technology and healthcare.</p>
          <h4>Emerging Sectors</h4>
          <p>Investments in renewable energy, biotechnology, and fintech are poised for significant returns due to technological advancements and market demand.</p>
          <h4>Innovative Financial Instruments</h4>
          <p>Cryptocurrencies, NFTs, and decentralized finance (DeFi) are gaining traction as alternative investment avenues.</p>
          <h4>Conclusion</h4>
          <p>The report emphasizes the importance of diversifying investment portfolios and staying informed about market trends to maximize returns.</p>
        `,
        "real-estate-regulations-2023": `
          <h4>Introduction</h4>
          <p>The Real Estate Regulations 2023 report provides a detailed overview of regulatory changes affecting the real estate industry. This report covers zoning laws, environmental regulations, and property tax reforms.</p>
          <h4>Zoning Laws</h4>
          <p>Changes in zoning laws aim to promote sustainable urban development and increase housing affordability.</p>
          <h4>Environmental Regulations</h4>
          <p>New environmental regulations focus on reducing the carbon footprint of real estate projects and promoting green building practices.</p>
          <h4>Property Tax Reforms</h4>
          <p>Reforms in property taxation are designed to create a more equitable tax system and incentivize real estate investment.</p>
          <h4>Conclusion</h4>
          <p>The report highlights the need for real estate professionals to stay updated on regulatory changes to ensure compliance and capitalize on new opportunities.</p>
        `,
        "annual-growth-2024": `
          <h4>Introduction</h4>
          <p>The Annual Growth Report 2024 provides an in-depth analysis of the economic growth observed in the current year, highlighting key drivers, sectoral performance, and future projections.</p>
          <h4>Economic Overview</h4>
          <p>In 2024, the global economy is expected to grow at a steady pace, with a projected GDP growth rate of 3.8%. Key drivers include technological innovation, increased consumer spending, and strong international trade.</p>
          <h4>Sectoral Performance</h4>
          <p><b>1. Technology:</b> Continued investment in AI, robotics, and quantum computing is driving growth in the tech sector.</p>
          <p><b>2. Healthcare:</b> Advances in telemedicine and personalized medicine are transforming healthcare delivery and outcomes.</p>
          <p><b>3. Renewable Energy:</b> The transition to green energy sources is accelerating, supported by government policies and corporate initiatives.</p>
          <h4>Challenges and Opportunities</h4>
          <p>Challenges such as geopolitical tensions, climate change, and economic inequality are addressed, with opportunities identified in digital transformation and sustainable development.</p>
          <h4>Conclusion</h4>
          <p>The report concludes with a positive outlook, emphasizing the resilience of the global economy and the potential for sustainable growth in 2024.</p>
        `,
        "upcoming-proposals-2024": `
          <h4>Introduction</h4>
          <p>The Upcoming Real Estate Proposals 2024 report outlines significant real estate projects planned for the year. This report covers residential, commercial, and industrial developments.</p>
          <h4>Residential Projects</h4>
          <p>Innovative residential projects focusing on smart living, sustainability, and community amenities are highlighted.</p>
          <h4>Commercial Developments</h4>
          <p>New commercial projects aim to enhance urban infrastructure, with a focus on mixed-use developments and smart city initiatives.</p>
          <h4>Industrial Real Estate</h4>
          <p>The industrial sector will see the development of advanced logistics hubs, manufacturing facilities, and green industrial parks.</p>
          <h4>Conclusion</h4>
          <p>The report emphasizes the dynamic nature of the real estate market and the potential for significant investment opportunities in 2024.</p>
        `,
        "market-trends-analysis-2024": `
          <h4>Introduction</h4>
          <p>The Market Trends Analysis 2024 report examines key trends shaping the global market landscape. This report covers consumer behavior, technological advancements, and economic indicators.</p>
          <h4>Consumer Behavior</h4>
          <p>A shift towards sustainability and ethical consumption continues to drive changes across industries.</p>
          <h4>Technological Advancements</h4>
          <p>The integration of AI, IoT, and blockchain technology is revolutionizing business operations and creating new market opportunities.</p>
          <h4>Economic Indicators</h4>
          <p>Key economic indicators such as inflation rates, interest rates, and employment statistics are analyzed to provide insights into market dynamics.</p>
          <h4>Conclusion</h4>
          <p>The report concludes that staying ahead of market trends is essential for businesses to remain competitive and capitalize on emerging opportunities.</p>
        `,
        "investment-opportunities-2024": `
          <h4>Introduction</h4>
          <p>The Investment Opportunities 2024 report identifies key areas for investors to consider in the coming year. This report covers traditional investments, emerging sectors, and innovative financial instruments.</p>
          <h4>Traditional Investments</h4>
          <p>Stocks, bonds, and real estate remain reliable investment options, with expected growth in sectors such as technology and healthcare.</p>
          <h4>Emerging Sectors</h4>
          <p>Investments in renewable energy, biotechnology, and fintech are poised for significant returns due to technological advancements and market demand.</p>
          <h4>Innovative Financial Instruments</h4>
          <p>Cryptocurrencies, NFTs, and decentralized finance (DeFi) continue to gain traction as alternative investment avenues.</p>
          <h4>Conclusion</h4>
          <p>The report emphasizes the importance of diversifying investment portfolios and staying informed about market trends to maximize returns.</p>
        `,
        "real-estate-regulations-2024": `
          <h4>Introduction</h4>
          <p>The Real Estate Regulations 2024 report provides a comprehensive overview of regulatory changes affecting the real estate industry. This report covers zoning laws, environmental regulations, and property tax reforms.</p>
          <h4>Zoning Laws</h4>
          <p>New zoning laws aim to promote sustainable urban development and increase housing affordability.</p>
          <h4>Environmental Regulations</h4>
          <p>Environmental regulations focus on reducing the carbon footprint of real estate projects and promoting green building practices.</p>
          <h4>Property Tax Reforms</h4>
          <p>Property tax reforms are designed to create a more equitable tax system and incentivize real estate investment.</p>
          <h4>Conclusion</h4>
          <p>The report highlights the importance of staying updated on regulatory changes to ensure compliance and capitalize on new opportunities.</p>
        `,
        "annual-growth-2025": `
          <h4>Introduction</h4>
          <p>The Annual Growth Report 2025 provides an in-depth analysis of the economic growth observed in the current year, highlighting key drivers, sectoral performance, and future projections.</p>
          <h4>Economic Overview</h4>
          <p>In 2025, the global economy is expected to grow at a steady pace, with a projected GDP growth rate of 3.9%. Key drivers include technological innovation, increased consumer spending, and strong international trade.</p>
          <h4>Sectoral Performance</h4>
          <p><b>1. Technology:</b> Continued investment in AI, robotics, and quantum computing is driving growth in the tech sector.</p>
          <p><b>2. Healthcare:</b> Advances in telemedicine and personalized medicine are transforming healthcare delivery and outcomes.</p>
          <p><b>3. Renewable Energy:</b> The transition to green energy sources is accelerating, supported by government policies and corporate initiatives.</p>
          <h4>Challenges and Opportunities</h4>
          <p>Challenges such as geopolitical tensions, climate change, and economic inequality are addressed, with opportunities identified in digital transformation and sustainable development.</p>
          <h4>Conclusion</h4>
          <p>The report concludes with a positive outlook, emphasizing the resilience of the global economy and the potential for sustainable growth in 2025.</p>
        `,
        "upcoming-proposals-2025": `
          <h4>Introduction</h4>
          <p>The Upcoming Real Estate Proposals 2025 report outlines significant real estate projects planned for the year. This report covers residential, commercial, and industrial developments.</p>
          <h4>Residential Projects</h4>
          <p>Innovative residential projects focusing on smart living, sustainability, and community amenities are highlighted.</p>
          <h4>Commercial Developments</h4>
          <p>New commercial projects aim to enhance urban infrastructure, with a focus on mixed-use developments and smart city initiatives.</p>
          <h4>Industrial Real Estate</h4>
          <p>The industrial sector will see the development of advanced logistics hubs, manufacturing facilities, and green industrial parks.</p>
          <h4>Conclusion</h4>
          <p>The report emphasizes the dynamic nature of the real estate market and the potential for significant investment opportunities in 2025.</p>
        `,
        "market-trends-analysis-2025": `
          <h4>Introduction</h4>
          <p>The Market Trends Analysis 2025 report examines key trends shaping the global market landscape. This report covers consumer behavior, technological advancements, and economic indicators.</p>
          <h4>Consumer Behavior</h4>
          <p>A shift towards sustainability and ethical consumption continues to drive changes across industries.</p>
          <h4>Technological Advancements</h4>
          <p>The integration of AI, IoT, and blockchain technology is transforming business operations and creating new market opportunities.</p>
          <h4>Economic Indicators</h4>
          <p>Inflation rates, interest rates, and employment statistics are analyzed to provide a comprehensive understanding of market dynamics.</p>
          <h4>Conclusion</h4>
          <p>The report concludes that staying ahead of market trends is crucial for businesses to remain competitive and capitalize on emerging opportunities.</p>
        `,
        "investment-opportunities-2025": `
          <h4>Introduction</h4>
          <p>The Investment Opportunities 2025 report identifies key areas for investors to consider in the coming year. This report covers traditional investments, emerging sectors, and innovative financial instruments.</p>
          <h4>Traditional Investments</h4>
          <p>Stocks, bonds, and real estate remain reliable investment options, with expected growth in specific sectors such as technology and healthcare.</p>
          <h4>Emerging Sectors</h4>
          <p>Investments in renewable energy, biotechnology, and fintech are poised for significant returns due to technological advancements and market demand.</p>
          <h4>Innovative Financial Instruments</h4>
          <p>Cryptocurrencies, NFTs, and decentralized finance (DeFi) continue to gain traction as alternative investment avenues.</p>
          <h4>Conclusion</h4>
          <p>The report emphasizes the importance of diversifying investment portfolios and staying informed about market trends to maximize returns.</p>
        `,
        "real-estate-regulations-2025": `
          <h4>Introduction</h4>
          <p>The Real Estate Regulations 2025 report provides a detailed overview of regulatory changes affecting the real estate industry. This report covers zoning laws, environmental regulations, and property tax reforms.</p>
          <h4>Zoning Laws</h4>
          <p>Changes in zoning laws aim to promote sustainable urban development and increase housing affordability.</p>
          <h4>Environmental Regulations</h4>
          <p>New environmental regulations focus on reducing the carbon footprint of real estate projects and promoting green building practices.</p>
          <h4>Property Tax Reforms</h4>
          <p>Reforms in property taxation are designed to create a more equitable tax system and incentivize real estate investment.</p>
          <h4>Conclusion</h4>
          <p>The report highlights the need for real estate professionals to stay updated on regulatory changes to ensure compliance and capitalize on new opportunities.</p>
        `
      };
  
      return articles[articleId] || "Content not available.";
    }
  });
  
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
