
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Shawshank Redemption",
        date: "Sept 22, 1994",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        imgAlt: "Poster showing Andy Dufresne in the rain",
        ages: "16+",
        genre: "Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Godfather",
        date: "Mar 24, 1972",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        imgAlt: "Marlon Brando as Don Corleone",
        ages: "17+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Dark Knight",
        date: "July 18, 2008",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29_poster.jpg",
        imgAlt: "Batman standing in front of a burning building",
        ages: "13+",
        genre: "Action/Crime",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Pulp Fiction",
        date: "Oct 14, 1994",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        imgAlt: "Mia Wallace lying on a bed with a cigarette",
        ages: "18+",
        genre: "Crime",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Schindler's List",
        date: "Feb 4, 1994",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        imgAlt: "A hand holding a child's hand in black and white",
        ages: "16+",
        genre: "Biography/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        date: "Dec 17, 2003",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
        imgAlt: "Aragorn holding a sword with a crown",
        ages: "12+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Forrest Gump",
        date: "July 6, 1994",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        imgAlt: "Forrest Gump sitting on a park bench with a box of chocolates",
        ages: "13+",
        genre: "Drama/Romance",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Inception",
        date: "July 16, 2010",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        imgAlt: "Dom Cobb holding a gun with a city bending behind him",
        ages: "13+",
        genre: "Sci-Fi/Action",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Matrix",
        date: "Mar 31, 1999",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        imgAlt: "Neo and Trinity in black leather with green code rain",
        ages: "16+",
        genre: "Sci-Fi/Action",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Goodfellas",
        date: "Sept 19, 1990",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
        imgAlt: "Three mobsters looking down at the viewer",
        ages: "18+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        date: "May 21, 1980",
        description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29_poster.jpg",
        imgAlt: "Darth Vader looming over Luke and Leia",
        ages: "8+",
        genre: "Sci-Fi/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Interstellar",
        date: "Nov 7, 2014",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        imgAlt: "Astronaut walking on an icy planet",
        ages: "12+",
        genre: "Sci-Fi/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Parasite",
        date: "May 30, 2019",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29_poster.jpg",
        imgAlt: "Characters standing in a modern house with eyes blacked out",
        ages: "16+",
        genre: "Thriller/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Silence of the Lambs",
        date: "Feb 14, 1991",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
        imgAlt: "Clarice Starling with a moth over her mouth",
        ages: "18+",
        genre: "Crime/Thriller",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Spirited Away",
        date: "July 20, 2001",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        imgAlt: "Chihiro standing in front of a bathhouse",
        ages: "8+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Saving Private Ryan",
        date: "July 24, 1998",
        description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
        imgAlt: "Captain Miller leading soldiers on a beach",
        ages: "16+",
        genre: "War/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Green Mile",
        date: "Dec 10, 1999",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/ce/Green_mile.jpg",
        imgAlt: "Tom Hanks looking at John Coffey",
        ages: "16+",
        genre: "Fantasy/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Life Is Beautiful",
        date: "Dec 20, 1997",
        description: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vita_e_bella.jpg",
        imgAlt: "Guido riding a bicycle with his son",
        ages: "12+",
        genre: "Comedy/War",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lion King",
        date: "June 15, 1994",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        imgAlt: "Mufasa and Simba on Pride Rock",
        ages: "All",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Se7en",
        date: "Sept 22, 1995",
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
        imgAlt: "Brad Pitt and Morgan Freeman in a dark alley",
        ages: "18+",
        genre: "Crime/Mystery",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Usual Suspects",
        date: "Aug 16, 1995",
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg",
        imgAlt: "Five men in a police lineup",
        ages: "16+",
        genre: "Crime/Mystery",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Gladiator",
        date: "May 5, 2000",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        imgAlt: "Maximus in gladiator armor",
        ages: "15+",
        genre: "Action/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Back to the Future",
        date: "July 3, 1985",
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
        imgAlt: "Marty McFly looking at his watch next to a DeLorean",
        ages: "10+",
        genre: "Sci-Fi/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Departed",
        date: "Oct 6, 2006",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/50/The_Departed_poster.jpg",
        imgAlt: "Leonardo DiCaprio and Matt Damon",
        ages: "18+",
        genre: "Crime/Thriller",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Whiplash",
        date: "Oct 10, 2014",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
        imgAlt: "Andrew Neiman playing drums aggressively",
        ages: "16+",
        genre: "Drama/Music",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Prestige",
        date: "Oct 20, 2006",
        description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
        imgAlt: "Hugh Jackman and Christian Bale facing opposite ways",
        ages: "13+",
        genre: "Mystery/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Alien",
        date: "May 25, 1979",
        description: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
        imgAlt: "An egg cracking open with green light",
        ages: "18+",
        genre: "Sci-Fi/Horror",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Coco",
        date: "Nov 22, 2017",
        description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        imgAlt: "Miguel with a guitar in the Land of the Dead",
        ages: "All",
        genre: "Animation/Family",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Joker",
        date: "Oct 4, 2019",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society, embarking on a downward spiral of revolution and crime.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
        imgAlt: "Arthur Fleck in Joker makeup looking up",
        ages: "17+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Wall-E",
        date: "June 27, 2008",
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-E_poster.jpg",
        imgAlt: "Wall-E robot looking up at the stars",
        ages: "All",
        genre: "Animation/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Toy Story",
        date: "Nov 22, 1995",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        imgAlt: "Woody and Buzz Lightyear",
        ages: "All",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Truman Show",
        date: "June 5, 1998",
        description: "An insurance salesman discovers his whole life is actually a reality TV show.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/ad/Truman_show.jpg",
        imgAlt: "Jim Carrey's face made of tiny TV images",
        ages: "PG",
        genre: "Drama/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Great Gatsby",
        date: "May 10, 2013",
        description: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg",
        imgAlt: "Jay Gatsby raising a glass",
        ages: "13+",
        genre: "Romance/Drama",
        stars: "⭐⭐⭐⭐"
      }
];

    movies.forEach(movie => {

        // Display a movie card for each movie object in the array

        // 1. Building HTML for the card
        const card = `
        <article class="movie">
            <h2>${movie.title}</h2>
            <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
            <p><strong>Release Date:</strong> ${movie.date}</p>
            <p><strong>Recommended Age:</strong> ${movie.ages}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
            <p id='desc'>${movie.description}</p>
        </article>
        `;

        // 2. Putting that HTML on the page
        document.getElementById("movie-list").innerHTML += card;
    });
          