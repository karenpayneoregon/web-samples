const r = document.querySelector(':root');

document.getElementById("getMainColor").addEventListener("click", function () {
    writeResults();
});

document.getElementById("setMainColor").addEventListener("click", function () {
    document.documentElement.style.setProperty('--main-text-color', document.getElementById("colors").value);
    writeResults();
});

function writeResults() {
    var rs = getComputedStyle(r);
    document.getElementById('results').innerHTML =
        `<strong>--main-text-color</strong> is: <strong>${rs.getPropertyValue('--main-text-color')}</strong>`;
}

jSuites.dropdown(document.getElementById('colors'), {
    data: [
        { color: 'blue', value: 'blue', text: 'blue' },
        { color: 'black', value: 'black', text: 'black' },
        { color: 'green', value: 'green', text: 'green' },
        { color: 'red', value: 'red', text: 'red' },
        { color: 'red', value: 'pink', text: 'pink' },

    ],
    width: '135px',
    value: "pink"
});