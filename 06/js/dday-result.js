var now = new Date(); //오늘 날짜 정보를 date 객체의 인스턴스 now 객체로 만듬
var firstDay = new Date("2018-03-23") //첫째날의 날짜 정보를 firstDay 객체로 만듬

var toNow = now.getTime( );
var toFirst = firstDay.getTime( );
var passedTime = toNow - toFirst;

var passedTime = Math.round( passedTime/(1000 * 60 * 60 * 24)) //밀리초를 날짜수로 변환한 후 올림

document.querySelector("#accent").innerText = passedTime + "일"; // #accent영역에 표시