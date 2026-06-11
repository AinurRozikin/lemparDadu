// kode untuk menjalankan function 2 kali
function duaKali (func) {
    func();
    func ();
}

// kode untuk mengenerate lemparan dadu 
const lemparDadu = () => {
    let dadu = Math.floor(Math.random() * 6 + 1);
    console.log(dadu);
}

// callback function atau menjalankan fungsi di dalam fungsi
console.log(duaKali(lemparDadu));
