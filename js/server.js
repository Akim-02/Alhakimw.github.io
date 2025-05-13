const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.ul-navbar');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

let scedule={
 Hari:['senin','selasa','rabu','kamis','jum\'at','sabtu','minggu'],
 kegiatan:['sekolah','sekolah','sekolah','sekolah','sekolah','sekolah','libur'],
 play: function() {
  for (let i = 0; i < this.Hari.length; i++) {
    console.log(`hari ${this.Hari[i]} gw ${this.kegiatan[i]}`)
  }
 }
}
scedule.play();