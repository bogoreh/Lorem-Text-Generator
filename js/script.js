const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    `Faucibus pulvinar elementum integer enim neque. Felis eget velit aliquet sagittis id consectetur purus. Maecenas pharetra convallis posuere morbi leo urna molestie. Fermentum odio eu feugiat pretium nibh. Pretium fusce id velit ut tortor pretium. Elit eget gravida cum sociis natoque penatibus et magnis. Volutpat sed cras ornare arcu dui vivamus arcu felis. Leo integer malesuada nunc vel risus commodo viverra maecenas. Sit amet nulla facilisi morbi tempus iaculis urna. Tincidunt augue interdum velit euismod. Est sit amet facilisis magna etiam. Facilisi etiam dignissim diam quis enim. Netus et malesuada fames ac turpis egestas.`,
    `Mauris a diam maecenas sed enim ut sem viverra aliquet. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt augue interdum velit euismod. Est lorem ipsum dolor sit amet. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Volutpat ac tincidunt vitae semper. Enim ut sem viverra aliquet eget sit amet tellus. Sollicitudin aliquam ultrices sagittis orci. Id aliquet lectus proin nibh nisl condimentum. Pharetra pharetra massa massa ultricies. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in.`,
    `Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Diam maecenas sed enim ut sem viverra. Erat pellentesque adipiscing commodo elit at imperdiet dui. Egestas congue quisque egestas diam. Lectus urna duis convallis convallis tellus. Non odio euismod lacinia at quis risus. Ipsum consequat nisl vel pretium lectus quam id leo in. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Diam donec adipiscing tristique risus nec. Malesuada fames ac turpis egestas integer. Aliquam etiam erat velit scelerisque. Tempor id eu nisl nunc mi. Sed nisi lacus sed viverra. Quisque egestas diam in arcu cursus. Dignissim cras tincidunt lobortis feugiat vivamus.`,
    `Leo in vitae turpis massa sed. Lectus vestibulum mattis ullamcorper velit sed. Tellus at urna condimentum mattis pellentesque id nibh. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tristique magna sit amet purus gravida quis blandit turpis cursus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Scelerisque in dictum non consectetur a erat nam. Vitae tortor condimentum lacinia quis vel eros donec ac. Feugiat in ante metus dictum at. A scelerisque purus semper eget. Morbi quis commodo odio aenean sed adipiscing. In pellentesque massa placerat duis ultricies lacus.`,
    `Quis blandit turpis cursus in hac habitasse platea. Placerat orci nulla pellentesque dignissim. Lacus luctus accumsan tortor posuere ac ut. At auctor urna nunc id cursus metus aliquam eleifend mi. Congue mauris rhoncus aenean vel elit scelerisque mauris. Sed velit dignissim sodales ut eu sem integer vitae. Commodo ullamcorper a lacus vestibulum. Porta nibh venenatis cras sed felis eget velit. Turpis egestas maecenas pharetra convallis. Mollis aliquam ut porttitor leo a diam sollicitudin.`,
    `Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Elementum sagittis vitae et leo duis ut diam quam. Diam maecenas sed enim ut sem viverra. Purus viverra accumsan in nisl. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Sociis natoque penatibus et magnis dis parturient. Suspendisse sed nisi lacus sed viverra. Donec enim diam vulputate ut pharetra. Aliquam ut porttitor leo a diam sollicitudin tempor. Arcu non odio euismod lacinia at quis risus sed. Non consectetur a erat nam at lectus urna duis convallis. Urna molestie at elementum eu. Elit duis tristique sollicitudin nibh sit. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Quam viverra orci sagittis eu volutpat odio.`,
    `Etiam tempor orci eu lobortis elementum nibh. Pretium nibh ipsum consequat nisl vel pretium. Non diam phasellus vestibulum lorem sed risus. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Pretium fusce id velit ut. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ultrices dui sapien eget mi proin sed libero enim sed. A scelerisque purus semper eget. Nunc eget lorem dolor sed.`,
    `Varius quam quisque id diam vel quam elementum. Id neque aliquam vestibulum morbi. Et malesuada fames ac turpis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ridiculus mus mauris vitae ultricies leo. Arcu ac tortor dignissim convallis aenean et. Fusce id velit ut tortor pretium viverra. Dictum fusce ut placerat orci. Tincidunt nunc pulvinar sapien et ligula. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Consequat semper viverra nam libero justo laoreet sit. Est ante in nibh mauris. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.`,
    `Laoreet id donec ultrices tincidunt arcu non sodales neque. Varius morbi enim nunc faucibus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Dolor morbi non arcu risus quis varius. Velit scelerisque in dictum non consectetur a erat. Enim sit amet venenatis urna cursus eget nunc. Eget mi proin sed libero enim. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Leo duis ut diam quam nulla porttitor massa id. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Augue ut lectus arcu bibendum at. Facilisis leo vel fringilla est. Cras semper auctor neque vitae.`
];

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numofoparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
    const value = e.target.value;
    console.log(value);
    numofpara.value = value;
    numofparaRange.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    // console.log(tempText);
    result.innerHTML = tempText;
});

numofpara.addEventListener('input', syncParaNumbers);
numofparaRange.addEventListener('input', syncParaNumbers);