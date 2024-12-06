function showOceanEcho(part) {
    let description = '';

    switch (part) {
        case 'heart':
            description = `
                <h3>Le Cœur Humain & Le Cœur de l'Océan</h3>
                <p>Le cœur humain pompe le sang dans tout le corps, tout comme le système de circulation océanique (les courants) transporte l'eau à travers l'océan.</p>
                <p><strong>Bienfait:</strong> Un bon fonctionnement de ces systèmes assure une circulation efficace de l'énergie (sang ou eau).</p>
                <p><strong>Dysfonctionnement:</strong> Lorsque le cœur ou les courants océaniques ralentissent ou cessent, le système entier en souffre.</p>
            `;
            break;
        case 'lungs':
            description = `
                <h3>Les Poumons Humains & Le Phytoplancton Océanique</h3>
                <p>Les poumons permettent l'échange de gaz, tout comme le phytoplancton dans l'océan joue un rôle vital dans l'échange gazeux (notamment l'oxygène et le dioxyde de carbone).</p>
                <p><strong>Bienfait:</strong> Un bon échange de gaz dans les poumons ou dans l'océan maintient l'équilibre de l'air et de l'eau.</p>
                <p><strong>Dysfonctionnement:</strong> Les maladies pulmonaires ou la pollution des océans perturberaient cet équilibre vital.</p>
            `;
            break;
        case 'brain':
            description = `
                <h3>Le Cerveau Humain & Le Cerveau de l'Océan</h3>
                <p>Le cerveau contrôle et coordonne toutes les fonctions corporelles, tout comme les systèmes neuronaux marins coordonnent les processus dans l'océan (ex : les courants et les migrations maritimes).</p>
                <p><strong>Bienfait:</strong> Un cerveau sain et des systèmes océaniques en harmonie assurent un équilibre global.</p>
                <p><strong>Dysfonctionnement:</strong> Des dommages au cerveau ou des perturbations dans les systèmes marins peuvent mener à un dysfonctionnement total.</p>
            `;
            break;
        case 'stomach':
            description = `
                <h3>L'Estomac Humain & Le Cycle de l'Océan</h3>
                <p>L'estomac digère la nourriture pour fournir de l'énergie, comme le cycle océanique régule l'énergie thermique et les nutriments dans l'océan.</p>
                <p><strong>Bienfait:</strong> Une digestion saine ou un cycle océanique équilibré favorise un système énergétique fonctionnel.</p>
                <p><strong>Dysfonctionnement:</strong> Les troubles digestifs ou les perturbations dans le cycle océanique peuvent mener à des déséquilibres énergétiques.</p>
            `;
            break;
        default:
            description = '<p>Veuillez sélectionner une partie du corps humain pour explorer les parallèles avec l\'océan.</p>';
    }

    document.getElementById('ocean-description').innerHTML = description;
}
