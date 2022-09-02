var now = new Date(); //오늘 날짜 정보를 date 객체의 인스턴스 now 객체로 만듬
var firstDay = new Date("2022-08-23") //첫째날의 날짜 정보를 firstDay 객체로 만듬
var toNow = now.getTime( ); // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime( ); // 처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst;  // 처음 만난 날과 오늘 사이의 차이 (밀리초)
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); // 밀리초를 일로 변환 후 반올림.
document.querySelector("#accent").innerText = passedDay + "일"; // #accent영역에 표시

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
calcDate(1000);

function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someDay = new Date(future); // future 값을 사용해 Date 객체의 인스턴스를 생성
    var year = someDay.getFullYear( ); // ‘연도’를 가져와 year 변수에 저장
    var month = someDay.getMonth( ) + 1;   // ‘월’을 가져와 month 변수에 저장

    // 현지 시간 기준 월을 나타내는 0에서 11 사이의 정수. 0은 1월, 1은 2월... 을 나타냄
    // 그래서 +1을 해주워야 함
    
    var date = someDay.getDate( ); // ‘일’을 가져와 date 변수에 저장
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}



