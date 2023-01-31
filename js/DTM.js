const score = Number(prompt("Toplagan balingizni kiriting: (0-180)"));
if (score >= 0 && score <= 180) {
  if (score < 80) {
    alert("Siz o'qishga tavsiya etilmadingiz.");
  } else if (score >= 80 && score < 100) {
    alert("Siz super kontrakt asosida o'qishga tavsiya etildingiz.");
    const pupilMoney = prompt(
      "Kontrakt miqdori yiliga 3000$, qancha pulingiz bor?"
    );
    if (pupilMoney >= 3000) {
      alert("Siz o'qishga qabul qilindingiz!");
    } else {
      alert("Sizda yetarli mablag' mavjud emas!");
    }
  } else if (score >= 100 && score < 150) {
    alert("Siz kontrakt asosida o'qishga tavsiya etildingiz.");
    const pupilMoney = prompt(
      "Kontrakt miqdori yiliga 2000$, qancha pulingiz bor?"
    );
    if (pupilMoney >= 2000) {
      alert("Siz o'qishga qabul qilindingiz!");
    } else {
      alert("Sizda yetarli mablag' mavjud emas!");
    }
  } else if (score >= 150) {
    alert("Siz o'qishga grand asosida qabul qilindingiz!");
  }
} else {
  alert("Siz noto'g'ri qiymat kiritdingiz!");
}
