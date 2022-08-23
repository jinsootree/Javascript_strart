var x = 100;
 let y = 200;
test();

function test() {
    document.write("x is " + x + ", y is " + y);
   //let y = 200; 이 위치에 y변수를 초기화 할 경우 오류 발생(초기화 전에 사용할 수 없음)
}