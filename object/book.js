function Book(title, autor, pages, read) {
	this.title = title;
	this.autor = autor;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${title} by ${autor}, ${pages} pages, ${read}`
	 }
}

const theUlysses = new Book('Ulysses', 'James Joyce', '730', 'not read yet')
console.log(theUlysses.info());