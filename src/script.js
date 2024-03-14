alert(`Selamat datang di game tebak kata
kamu diminta untuk menebak kata
dan kamu akan bermain dalam 3 ronde.
kata yang boleh dimasukkan adalah 
"dodi", "dean", "budi", "joki"
Player yang berhasil menebak kata dengan benar akan mendapat poin
dan player yang gagal menebak kata akan kalah
selamat bermain!`);

let skorP1 = 0;
let skorP2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  let p1 = prompt(
    "Player 1: masukan kata, dan ingat kata yang boleh dimasukkan dodi, dean, budi, joki"
  );
  let p2 = prompt(
    "Player 2: masukan kata, dan ingat kata yang boleh dimasukkan dodi, dean, budi, joki"
  );

  let random = getRandom();
  let endgame = validasi(p1, p2);
  if (!endgame) {
    stop = window.confirm("mau main lagi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (p1 === random) {
        alert("Player 1 Win");
        skorP1++;
      }
      if (p2 === random) {
        alert("Player 2 Win");
        skorP2++;
      }
    }

    alert(`
    kata yang dicari: ${random}
    -----------------------------------
    - Player 1: ${skorP1}
    - Player 2: ${skorP2}`);

    ronde++;
    if (ronde <= 3) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      if (skorP1 > skorP2) {
        alert("Good Jobs Player 1");
        stop = false;
      } else if (skorP1 < skorP2) {
        alert("Good Jobs Player 2");
        stop = false;
      } else {
        alert(
          `SERI!!! kalian berhasil mencapai ${skorP1} poin dan ${skorP2} poin`
        );
        ronde = 1;
        skorP1 = 0;
        skorP2 = 0;
        stop = window.confirm("mau main lagi?");
      }
    }
  }
}

function validasi(player1, player2) {
  const allowedWords = ["dodi", "dean", "budi", "joki"];

  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();

  if (player1.length > 4 || player2.length > 4) {
    alert("Kata tidak boleh lebih dari 4 karakter.");
    return false;
  }

  if (!allowedWords.includes(player1) || !allowedWords.includes(player2)) {
    alert("kata yang dimasukkan salah");
    return false;
  }

  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  return true;
}

function getRandom() {
  const allowedWords = ["dodi", "dean", "budi", "joki"];
  const randomIndex = Math.floor(Math.random() * allowedWords.length);
  return allowedWords[randomIndex];
}
