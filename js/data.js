
function toggleNavbar() {
    const navbar = document.getElementById("navbarMenu");
    navbar.classList.toggle("active");
}

const dunia = [
  [
    [
      ["Andi", "Budi"], ["Citra", "Dina"]
    ],
    [
      ["Eka", "Fajar"], ["Gilang", "Hani"]
    ]
  ]
];

for (let world = 0; world < dunia.length; world++) {
  for (let negara = 0; negara < dunia[world].length; negara++) {
    for (let kota = 0; kota < dunia[world][negara].length; kota++) {
      for (let orang = 0; orang < dunia[world][negara][kota].length; orang++) {
        console.log(dunia[world][negara][kota][orang]);
      }
    }
  }
}
