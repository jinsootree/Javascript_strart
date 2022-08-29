function book (title, author, volume, price ) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new book('자바스크립트', 'ko', '608', '28000'); // 인스턴스 생성