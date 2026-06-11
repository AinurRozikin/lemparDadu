function duaKali (func) {
    func();
    func ();
}

const lemparDadu = () => {
    let dadu = Math.floor(Math.random() * 6 + 1);
    console.log(dadu);
}

console.log(duaKali(lemparDadu));
