
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	},
    {
        id: 4,
        title: 'The Hobbit',
        date: 'September 21, 1937',
        description: 'Bilbo Baggins, a home-loving hobbit, is swept into an epic quest to reclaim a stolen treasure hidden in the Lonely Mountain, guarded by a fearsome dragon.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
        imgAlt: 'Original first edition book cover for The Hobbit',
        ages: '8-12',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        date: 'June 26, 1997',
        description: 'An orphaned boy discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
        imgAlt: 'Book cover for Harry Potter Book One',
        ages: '9-12',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 6,
        title: 'Mistborn: The Final Empire',
        date: 'July 17, 2006',
        description: 'In a world where ash falls from the sky and an immortal tyrant has ruled for a thousand years, a street urchin discovers she has the power of a Mistborn—the ability to "burn" metals to gain incredible magical abilities.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg',
        imgAlt: 'Book cover for Mistborn: The Final Empire',
        ages: '13+',
        genre: 'Epic Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 7,
        title: 'The Lightning Thief',
        date: 'July 1, 2005',
        description: "Twelve-year-old Percy Jackson discovers he is a demigod son of Poseidon. He must embark on a quest across America to find Zeus's stolen master bolt and prevent a war between the Greek gods.",
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg',
        imgAlt: 'First edition book cover for The Lightning Thief',
        ages: '10-14',
        genre: 'Fantasy/Mythology',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 8,
        title: 'The Way of Kings',
        date: 'August 31, 2010',
        description:
            "In a world of stone and storms, four characters must find the strength to stand. As a world-ending war looms, ancient shardplate armor and legendary blades hold the key to survival.",
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/8/8b/TheWayOfKings.png',
        imgAlt: 'Book cover for The Way of Kings',
        ages: '14+',
        genre: 'Epic Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    }
];

    articles.forEach(book => {

        // Display a book card for each book object in the array

        // 1. Building HTML for the card
        const card = `
        <article class="book">
            <hr>
            <div id="bookName">
            <ul id="bookInfo">
                <li id="date">${book.date}</li>
                <li>${book.ages}</li>
                <li>${book.genre}</li>
                <li>${book.stars}</li>
            </ul>
        <hr class="hr3">
            <h2 id="bookTitle">${book.title}</h2>
            <img src="${book.imgSrc}" alt="${book.imgAlt}">
            <p id="commentary">${book.description}</p>
        </div>
        </article>
        `;

        // 2. Putting that HTML on the page
        document.getElementById("book-list").innerHTML += card;
    });