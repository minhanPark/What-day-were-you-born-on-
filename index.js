let yearInput = document.getElementById("yearValue").value;
let monthInput = document.getElementById("monthValue").value;
let dayInput = document.getElementById("dayValue").value;

const zeller = (year, month, day) => {
  //h = (q + [m+1*26/10] + k + [k/4] + [j/4] - 2j)7
  //q는 일, m은 달, k는 연도의 마지막 두자리, j는 앞 두자리
  const k = Number(year.substr(2));
  const j = Number(year.substr(0, 2));
  const q = Number(day);
  const m = Number(month);

  const h = (q + Math.floor(((m+1)*26)/10) + k + Math.floor(k/4) + Math.floor(j/4) - 2*j) % 7

  if(h === 1){
    return "일요일";
  } else if(h === 2){
    return "월요일"
  } else if(h === 3){
    return "화요일"
  } else if(h === 4){
    return "수요일"
  } else if(h === 5){
    return "목요일"
  } else if(h === 6){
    return "금요일"
  } else {
    return "토요일"
  };
};
const execute = (event) => {
  event.preventDefault();
  if(yearInput.length() != 0 && monthInput.length() !=0 && dayInput.length() != 0 ){
  const BornDay = zeller(yearInput, monthInput, dayInput);
  document.getElementById(bornDay).value = BornDay;
  }
};
