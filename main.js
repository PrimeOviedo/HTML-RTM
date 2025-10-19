// 🌐 URLs de dashboards
const dashboards = {
    MRK: 'https://dashboard-mrk.streamlit.app/?embed=true',
    RTM: 'https://TU-DASHBOARD-2.streamlit.app/?embed=true',
    Ventas: 'https://TU-DASHBOARD-3.streamlit.app/?embed=true'
};

// 📌 Elementos
const iframe = document.getElementById('dashboard-frame');
const tabButtons = document.querySelectorAll('.tab-button');

// Cargar MRK por defecto
iframe.src = dashboards['MRK'];

// 🧭 Cambio de pestañas
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        iframe.src = dashboards[button.dataset.tab];
    });
});