// Resources
let resources = {
    p1: {
        title: 'Solar energy',
        bodyText: 'Solar energy is no longer a luxury—it is now affordable for people with average budgets. Thanks to advancements in technology and increased production, the cost of solar panels and related equipment has significantly decreased. Many governments and local authorities offer incentives, rebates, and tax credits that further reduce the financial burden. Additionally, innovative financing options like solar leases and power purchase agreements allow homeowners to install solar systems with little to no upfront cost, paying for the energy produced instead. Community solar programs also enable individuals to benefit from solar power without installing panels on their own properties. As a result, solar energy is a viable and attractive option for households looking to reduce their energy bills and carbon footprint, making clean, renewable energy accessible to a broader population.',
        url: 'images/sun44.jpg'
    },
    p2: {
        title: 'Wind Energy',
        bodyText: 'Wind energy, once considered costly and specialized, is now becoming increasingly affordable for individuals with average budgets. Technological advancements have significantly reduced the expenses associated with wind turbines and their installation. Moreover, government incentives and subsidies have made it more practical for homeowners and communities to invest in wind energy. The emergence of community wind projects allows individuals to participate in shared wind farms, reducing initial costs and enjoying the advantages of clean, renewable energy. This transition not only makes wind energy a feasible choice for the average household but also contributes to a more sustainable future for all.',
        url: 'images/windmill44.jpg'
    },
    p3: {
        title: 'Hydro Energy',
        bodyText: 'Hydropower, also known as water energy, is becoming more affordable for folks with average budgets thanks to new technologies and creative financing options. Modern small-scale hydropower systems are designed to be cost-effective and accessible for homes and communities. Innovations like micro-hydropower systems, which can be installed in existing water flows or small streams, bring down the initial and operating costs. What is more, there are government grants, subsidies, and low-interest loans available to help folks adopt hydropower. These improvements make it easier for average households to invest in water energy, providing a reliable and sustainable power source while also reducing energy bills and dependence on fossil fuels. It is important to remember that unlike other energy sources, water resources are not easily reusable, so conserving water energy is an important environmental consideration.',
        url: 'images/waterdam.jpg'
    }
};

// Get references to the active parts of HTML
let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

// Event handler
function selectPage(ev) {
    let currentButton = ev.target.closest('button'); // Ensure you get the button element even if the icon is clicked

    // Styling the active button here:
    buttons.forEach(btn => btn.classList.remove('active'));
    currentButton.classList.add('active');

    // Pushing the corresponding data inside the div#dynamic-content:
    dc.innerHTML = `
        <h2>${resources[currentButton.id].title}</h2> 
        <img src="${resources[currentButton.id].url}" alt="${resources[currentButton.id].title}" class="dynamic-image">
        <p>${resources[currentButton.id].bodyText}</p>
    `;
}

// Register buttons for click event
for (let button of buttons) {
    button.addEventListener('click', selectPage);
}

// Set default content to p1 on page load
window.addEventListener('load', () => {
    let defaultButton = document.getElementById('p1');
    defaultButton.classList.add('active'); // Mark the default button as active

    dc.innerHTML = `
        <h2>${resources.p1.title}</h2> 
        <img src="${resources.p1.url}" alt="${resources.p1.title}" class="dynamic-image">
        <p>${resources.p1.bodyText}</p>
    `;
});
