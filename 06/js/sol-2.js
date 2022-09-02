var r = prompt("원의 반지름은? (cm)");
var circle = new Circle(r);
document.write("반지름이 " + r + "cm일 때" + "<br>원의 둘레 : 약 " + circle.round() + "cm <br>원의 넓이 : 약 " + circle.area()+"cm<sup>2</sup>");

function Circle(r) {
    this.r = r
    this.floor = function() {
        return Math.floor(this.r * 2 * Math.PI);
    }
    this.area = function() {
        return Math.floor(Math.pow(this.r, 2) * Math.PI);
    }
}
