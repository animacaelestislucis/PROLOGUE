/* ============================================================
   PROLOGUE — Books page
   Library data, reader, recommendation, and AI assistant
   ============================================================ */

const CATEGORIES = [
  { key: 'all',        label: 'All Books' },
  { key: 'classic',    label: '🏛️ Classics' },
  { key: 'fantasy',    label: '🐉 Fantasy' },
  { key: 'scifi',      label: '🚀 Science Fiction' },
  { key: 'philosophy', label: '🧠 Philosophy' },
  { key: 'poetry',     label: '🌹 Poetry' },
  { key: 'mystery',    label: '🔍 Mystery' },
  { key: 'adventure',  label: '🗺️ Adventure' },
  { key: 'indian',     label: '🇮🇳 Indian Literature' },
  { key: 'malayalam',  label: '🌴 Malayalam' }
];

const LIBRARY = [
  {
    id: 'pride-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjM_LaLqcyimZRRGubYLnpFa5APvQQnD7OU0E3dnIse8PmP68UM5Czo-7&s=10',
    genre: 'classic',
    genreLabel: 'Classic · Romance',
    desc: 'Wit, misunderstanding, and love in Regency England.',
    why: 'The original enemies-to-lovers — sharp, funny, and timeless.',
    note: 'It is a truth universally acknowledged...',
    source: 'Public Domain · 1813',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
          'However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.',
          '"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"',
          'Mr. Bennet replied that he had not.',
          '"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."',
          'Mr. Bennet made no answer.',
          '"Do you not want to know who has taken it?" cried his wife impatiently.',
          '"You want to tell me, and I have no objection to hearing it."',
          'This was invitation enough.'
        ]
      },
      {
        heading: 'Chapter Two',
        paragraphs: [
          'Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it.',
          'It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with:',
          '"I hope Mr. Bingley will like it, Lizzy."',
          '"We are not in a way to know what Mr. Bingley likes," said her mother resentfully, "since we are not to visit."',
          '"But you forget, mamma," said Elizabeth, "that we shall meet him at the assemblies, and that Mrs. Long promised to introduce him."'
        ]
      },
      {
        heading: 'Chapter Three',
        paragraphs: [
          'Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, was sufficient to draw from her husband any satisfactory description of Mr. Bingley.',
          'They attacked him in various ways—with barefaced questions, ingenious suppositions, and distant surmises; but he eluded the skill of them all, and they were at last obliged to accept the second-hand intelligence of their neighbour, Lady Lucas.',
          'Her report was highly favourable. Sir William had been delighted with him. He was quite young, wonderfully handsome, extremely agreeable, and, to crown the whole, he meant to be at the next assembly with a large party.',
          'Nothing could be more delightful! To be fond of dancing was a certain step towards falling in love.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain — read it free and legally.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/1342', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/prideprejudice00aust', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'great-gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://m.media-amazon.com/images/I/71YF1hHLw7L.jpg',
    genre: 'classic',
    genreLabel: 'Classic · Drama',
    desc: 'Glittering parties, doomed love, and the American Dream.',
    why: 'Prose like champagne — sparkling, and gone too soon.',
    note: 'So we beat on, boats against the current...',
    source: 'Public Domain · 1925',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'In my younger and more vulnerable years my father gave me some advice that I\'ve been turning over in my mind ever since.',
          '"Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had."',
          'He didn\'t say any more, but we\'ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that.',
          'In consequence, I\'m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.'
        ]
      },
      {
        heading: 'Chapter Two',
        paragraphs: [
          'About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land.',
          'This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of men who move dimly and already crumbling through the powdery air.',
          'But above the grey land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg.'
        ]
      },
      {
        heading: 'Chapter Three',
        paragraphs: [
          'There was music from my neighbor\'s house through the summer nights. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.',
          'On week-ends his Rolls-Royce became an omnibus, bearing parties to and from the city between nine in the morning and long past midnight.',
          'Every Friday five crates of oranges and lemons arrived from a fruiterer in New York—every Monday these same oranges and lemons left his back door in a pyramid of pulpless halves.'
        ]
      }
    ],
    fullText: {
      note: 'Published in 1925 — public domain in most countries.',
      links: [
        { label: 'Project Gutenberg', url: 'https://gutenberg.net.au/ebooks02/0200041h.html', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/greatgatsby0000fitz', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'time-machine',
    title: 'The Time Machine',
    author: 'H.G. Wells',
    cover: 'https://m.media-amazon.com/images/I/81yjx2YWqWL.jpg',
    genre: 'scifi',
    genreLabel: 'Sci-Fi · Classic',
    desc: 'A Victorian inventor travels to the year 802,701.',
    why: 'The book that invented time travel as we know it.',
    note: 'There is no difference between time and any of the three dimensions of space.',
    source: 'Public Domain · 1895',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated.',
          'The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.',
          'And he put it to us in this way—marking the points with a lean forefinger—as we sat and lazily admired his earnestness over this new paradox (as we thought it).',
          '"You must follow me carefully. I shall have to controvert one or two ideas that are almost universally accepted."'
        ]
      },
      {
        heading: 'Chapter Two',
        paragraphs: [
          '"I am afraid I cannot convey the peculiar sensations of time travelling. They are excessively unpleasant. There is a feeling exactly like that one has upon a switchback—of a helpless headlong motion!',
          'I felt the same horrible anticipation, too, of an imminent smash. As I put on pace, night followed day like the flapping of a black wing.',
          'The dim suggestion of the laboratory seemed presently to fall away from me, and I saw the sun hopping swiftly across the sky, leaping it every minute, and every minute marking a day."'
        ]
      },
      {
        heading: 'Chapter Three',
        paragraphs: [
          'The Time Traveller came back to his seat with a plate of meat in one hand and a glass in the other.',
          '"I am going to tell you the story of my time travelling," he said. "It is a long one, and I must ask you to excuse my appetite."',
          'He ate and drank, and then he began.',
          '"I told some of you last Thursday of the principles of the Time Machine, and showed you the actual thing itself, incomplete in the workshop."'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/35', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/timemachine00well', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    cover: 'https://cdn.penguin.co.in/wp-content/uploads/2022/06/9780143456841.jpg',
    genre: 'philosophy',
    genreLabel: 'Philosophy · Stoicism',
    desc: 'Reflections from a Roman emperor on life and inner peace.',
    why: 'A practical guide to staying grounded.',
    note: 'You have power over your mind — not outside events.',
    source: 'Public Domain · c. 170 AD',
    pages: [
      {
        heading: 'Book One',
        paragraphs: [
          'From my grandfather Verus I learned good morals and the government of my temper.',
          'From the reputation and remembrance of my father, modesty and a manly character.',
          'From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.',
          'From my great-grandfather, not to have frequented public schools, and to have had good teachers at home.'
        ]
      },
      {
        heading: 'Book Two',
        paragraphs: [
          'Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.',
          'But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them.',
          'For we are made for co-operation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth.'
        ]
      },
      {
        heading: 'Book Three',
        paragraphs: [
          'We ought to consider not only that our life is daily wasting away and a smaller part of it is left.',
          'For if he shall begin to fall into dotage, perspiration and nutrition and imagination and appetite, and whatever else there is of the kind, will not fail; but the power of making use of ourselves will be extinguished.',
          'We must then make haste, not only because we are daily nearer to death, but also because the conception of things and the understanding of them ceases first.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/2680', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/meditationsofmar00marc', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'tao',
    title: 'The Tao Te Ching',
    author: 'Laozi',
    cover: 'https://m.media-amazon.com/images/I/71fvMahxHFL._AC_UF1000,1000_QL80_.jpg',
    genre: 'philosophy',
    genreLabel: 'Philosophy · Taoism',
    desc: 'Eighty-one short verses on the art of living gently.',
    why: 'A small book that quietly rearranges how you see the world.',
    note: 'The journey of a thousand miles begins with a single step.',
    source: 'Public Domain · c. 4th century BC',
    pages: [
      {
        heading: 'Verse 1',
        paragraphs: [
          'The Tao that can be trodden is not the enduring and unchanging Tao. The name that can be named is not the enduring and unchanging name.',
          '(Conceived of as) having no name, it is the Originator of heaven and earth; (conceived of as) having a name, it is the Mother of all things.',
          'Always without desire we must be found, If its deep mystery we would sound; But if desire always within us be, Its outer fringe is all that we shall see.'
        ]
      },
      {
        heading: 'Verse 8',
        paragraphs: [
          'The highest excellence is like (that of) water. The excellence of water appears in its benefiting all things, and in its occupying, without striving (to the contrary), the low place which all men dislike. Hence (its way) is near to (that of) the Tao.',
          'The excellence of a residence is in (the suitability of) the place; that of the mind is in abysmal stillness; that of associations is in their being with the virtuous; that of government is in its securing good order.',
          'And when (one with the highest excellence) does not wrangle (about his low position), no one finds fault with him.'
        ]
      },
      {
        heading: 'Verse 64',
        paragraphs: [
          'That which is at rest is easily kept hold of; before a thing has given indications of its presence, it is easy to take measures against it; that which is brittle is easily broken; that which is very small is easily dispersed.',
          'Action should be taken before a thing has made its appearance; order should be secured before disorder has begun.',
          'The tree which fills the arms grew from the tiniest sprout; the tower of nine storeys rose from a (small) heap of earth; the journey of a thousand li commenced with a single step.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/216', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/taoteching00laoz', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'leaves-of-grass',
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    cover: 'https://m.media-amazon.com/images/I/61uURg5w-LL._AC_UF1000,1000_QL80_.jpg',
    genre: 'poetry',
    genreLabel: 'Poetry · American',
    desc: 'A celebration of the self, the body, and democracy.',
    why: 'Poetry that feels like a deep breath of fresh air.',
    note: 'I contain multitudes.',
    source: 'Public Domain · 1855',
    pages: [
      {
        heading: 'Song of Myself (I)',
        paragraphs: [
          'I celebrate myself, and sing myself,',
          'And what I assume you shall assume,',
          'For every atom belonging to me as good belongs to you.',
          'I loafe and invite my soul,',
          'I lean and loafe at my ease observing a spear of summer grass.'
        ]
      },
      {
        heading: 'Song of Myself (II)',
        paragraphs: [
          'Houses and rooms are full of perfumes, the shelves are crowded with perfumes,',
          'I breathe the fragrance myself and know it and like it,',
          'The distillation would intoxicate me also, but I shall not let it.',
          'The atmosphere is not a perfume, it has no taste of the distillation, it is odorless.'
        ]
      },
      {
        heading: 'O Captain! My Captain!',
        paragraphs: [
          'O Captain! my Captain! our fearful trip is done,',
          'The ship has weather\'d every rack, the prize we sought is won,',
          'The port is near, the bells I hear, the people all exulting,',
          'But O heart! heart! heart!',
          'O the bleeding drops of red,',
          'Where on the deck my Captain lies,',
          'Fallen cold and dead.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/1322', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/leavesofgrass00whit', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'sherlock-holmes',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Adventures_of_sherlock_holmes.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    genre: 'mystery',
    genreLabel: 'Mystery · Detective',
    desc: 'Twelve stories of deduction and crime-solving genius.',
    why: 'The origin of the modern detective story.',
    note: 'Elementary, my dear Watson.',
    source: 'Public Domain · 1892',
    pages: [
      {
        heading: 'A Scandal in Bohemia',
        paragraphs: [
          'To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name.',
          'In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler.',
          'All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.',
          'He was, I take it, the most perfect reasoning and observing machine that the world has seen.'
        ]
      },
      {
        heading: 'The Red-Headed League',
        paragraphs: [
          'I had called upon my friend, Mr. Sherlock Holmes, one day in the autumn of last year and found him in deep conversation with a very stout, florid-faced, elderly gentleman with fiery red hair.',
          'With an apology for my intrusion, I was about to withdraw when Holmes pulled me abruptly into the room and closed the door behind me.',
          '"You could not possibly have come at a better time, my dear Watson," he said cordially.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/1661', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/adventuresofsher00doyl', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'moby-dick',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    cover: 'https://m.media-amazon.com/images/I/918Vii6lgfL._UF1000,1000_QL80_.jpg',
    genre: 'adventure',
    genreLabel: 'Adventure · Epic',
    desc: 'Captain Ahab\'s obsessive hunt for the white whale.',
    why: 'The greatest sea story ever written.',
    note: 'Call me Ishmael.',
    source: 'Public Domain · 1851',
    pages: [
      {
        heading: 'Loomings',
        paragraphs: [
          'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
          'It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul.',
          'And especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\'s hats off—then, I account it high time to get to sea as soon as I can.',
          'This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.'
        ]
      },
      {
        heading: 'The Spouter-Inn',
        paragraphs: [
          'I stuffed a shirt or two into my old carpet-bag, tucked it under my arm, and started for Cape Horn and the Pacific.',
          'Quitting the good city of old Manhatto, I duly arrived in New Bedford. It was on a Saturday night in December.',
          'Much was I disappointed upon learning that the little packet for Nantucket had already sailed, and that no way of reaching that place would offer, till the following Monday.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/2701', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/mobydickorwhale00melv', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'gitanjali',
    title: 'Gitanjali',
    author: 'Rabindranath Tagore',
    cover: 'https://m.media-amazon.com/images/I/81QrFAsO4tL._AC_UF1000,1000_QL80_.jpg',
    genre: 'indian',
    genreLabel: 'Indian · Poetry',
    desc: 'Song offerings from the Nobel Prize-winning poet.',
    why: 'Devotional poetry of extraordinary beauty.',
    note: 'Thou hast made me endless, such is thy pleasure.',
    source: 'Public Domain · 1910',
    pages: [
      {
        heading: 'Song 1',
        paragraphs: [
          'Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.',
          'This little flute of a reed thou hast carried over hills and dales, and hast breathed through it melodies eternally new.',
          'At the immortal touch of thy hands my little heart loses its limits in joy and gives birth to utterance ineffable.',
          'Thy infinite gifts come to me only on these very small hands of mine. Ages pass, and still thou pourest, and still there is room to fill.'
        ]
      },
      {
        heading: 'Song 35',
        paragraphs: [
          'Where the mind is without fear and the head is held high;',
          'Where knowledge is free;',
          'Where the world has not been broken up into fragments by narrow domestic walls;',
          'Where words come out from the depth of truth;',
          'Where tireless striving stretches its arms towards perfection;',
          'Into that heaven of freedom, my Father, let my country awake.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is in the public domain.',
      links: [
        { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/7164', icon: 'fas fa-book-open' },
        { label: 'Internet Archive', url: 'https://archive.org/details/gitanjali00tago', icon: 'fas fa-archive' }
      ]
    }
  },
  {
    id: 'godaan',
    title: 'Godaan',
    author: 'Munshi Premchand',
    cover: 'https://newbookworld.com/cdn/shop/files/godan-in-english-original-imahfs4kztfgcxag.webp?v=1763995612&width=1024',
    genre: 'indian',
    genreLabel: 'Indian · Classic',
    desc: 'The struggles of a poor farmer who dreams of owning a cow.',
    why: 'The greatest Hindi novel ever written.',
    note: 'Hori wanted nothing more than a cow.',
    source: 'Public Domain · 1936',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'Hori Ram was a poor farmer. He had nothing. But more than anything else in the world, he wanted a cow.',
          'A cow would give his family milk. A cow would mean he had something to sell at the market.',
          'A cow, in short, would mean that he was not the poorest man in the village.',
          'But the village was not kind to the poor. The moneylender charged interest that could never be repaid. The landlord demanded rent that could never be reduced.',
          'And Hori, patient, hopeful, worked his whole life for a dream he could never quite reach.'
        ]
      }
    ],
    fullText: {
      note: 'Hindi full text available online.',
      links: [
        { label: 'Internet Archive', url: 'https://archive.org/details/godaan', icon: 'fas fa-archive' },
        { label: 'Hindi Samay', url: 'https://www.hindisamay.com/ebook/godan.pdf', icon: 'fas fa-book-open' }
      ]
    }
  },
  {
    id: 'mockingbird',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://m.media-amazon.com/images/I/81gkyAx5-RL._AC_UF1000,1000_QL80_.jpg',
    genre: 'classic',
    genreLabel: 'Classic · Modern',
    desc: 'A child\'s view of justice, race, and courage in the 1930s.',
    why: 'A book that teaches empathy without ever lecturing.',
    note: 'You never really understand a person until you consider things from his point of view.',
    source: 'In copyright — preview excerpt',
    pages: [
      {
        heading: 'Chapter One (Excerpt)',
        paragraphs: [
          'When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem\'s fears of never being able to play football were assuaged, he was seldom self-conscious about his injury.',
          'Maycomb was an old town, but it was a tired old town when I first knew it. In rainy weather the streets turned to red slop; grass grew on the sidewalks, the courthouse sagged in the square.',
          'But it was a time of vague optimism for some of the people: Maycomb County had recently been told that it had nothing to fear but fear itself.'
        ]
      }
    ],
    fullText: {
      note: 'This book is still in copyright. Borrow or buy from an official source.',
      links: [
        { label: 'Internet Archive', url: 'https://archive.org/details/tokillamockingbird00lee', icon: 'fas fa-archive' },
        { label: 'Amazon', url: 'https://www.amazon.com/dp/0061120081', icon: 'fas fa-shopping-cart' },
        { label: 'Goodreads', url: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird', icon: 'fas fa-star' }
      ]
    }
  },
  {
    id: 'hobbit',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://m.media-amazon.com/images/I/81hylMcxa3L._AC_UF1000,1000_QL80_.jpg',
    genre: 'fantasy',
    genreLabel: 'Fantasy · Adventure',
    desc: 'A comfortable hobbit is swept into a quest for dragon gold.',
    why: 'The gateway to Middle-earth.',
    note: 'In a hole in the ground there lived a hobbit.',
    source: 'In copyright — preview excerpt',
    pages: [
      {
        heading: 'An Unexpected Party (Excerpt)',
        paragraphs: [
          'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',
          'It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floors tiled and carpeted.',
          'The tunnel wound on and on, going fairly but not quite straight into the side of the hill—The Hill, as all the people for many miles round called it.'
        ]
      }
    ],
    fullText: {
      note: 'Still in copyright — read via official stores or your local library.',
      links: [
        { label: 'Amazon', url: 'https://www.amazon.com/dp/054792822X', icon: 'fas fa-shopping-cart' },
        { label: 'Internet Archive', url: 'https://archive.org/details/hobbit00tolk', icon: 'fas fa-archive' },
        { label: 'Goodreads', url: 'https://www.goodreads.com/book/show/5907.The_Hobbit', icon: 'fas fa-star' }
      ]
    }
  },
  {
    id: 'balyakalasakhi',
    title: 'Balyakalasakhi',
    author: 'Vaikom Muhammad Basheer',
    cover: 'https://m.media-amazon.com/images/I/61wgUMgvkVL._AC_UF1000,1000_QL80_.jpg',
    genre: 'malayalam',
    genreLabel: 'Malayalam · Romance',
    desc: 'A touching story of love, separation, and fate.',
    why: 'A timeless Malayalam love story filled with emotion and simplicity.',
    note: 'ഒരു ബാല്യകാല സൗഹൃദം ജീവിതകാലം മുഴുവൻ നീളുന്ന പ്രണയമായി മാറുന്ന കഥ.',
    source: 'Public Domain · 1944',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'മജീദും സുഹ്റയും ബാല്യകാലം മുതൽ തന്നെ അടുത്ത സുഹൃത്തുക്കളായിരുന്നു. ഒരുമിച്ച് കളിച്ചും പഠിച്ചും വളർന്ന അവരുടെ ബന്ധം കാലക്രമേണ ആഴമേറിയ സ്നേഹമായി മാറി.',
          'ബാല്യത്തിന്റെ നിഷ്കളങ്കതയിൽ ആരംഭിച്ച അവരുടെ ബന്ധത്തിൽ പിന്നീട് പ്രണയത്തിന്റെ മാധുര്യം നിറഞ്ഞു. എന്നാൽ ജീവിതത്തിന്റെ സാഹചര്യങ്ങൾ അവരെ പരസ്പരം അകറ്റുകയായിരുന്നു.',
          'മജീദ് തന്റെ ജീവിതം മെച്ചപ്പെടുത്തുന്നതിനായി നാടുവിടുമ്പോൾ, സുഹ്റ അവനെ കാത്തിരിക്കുകയും അവരുടെ പഴയ ഓർമ്മകളിൽ ജീവിക്കുകയും ചെയ്തു.'
        ]
      },
      {
        heading: 'Chapter Two',
        paragraphs: [
          'കാലം കടന്നുപോയി. മജീദിന്റെ ജീവിതത്തിൽ പല മാറ്റങ്ങളും സംഭവിച്ചു. എങ്കിലും സുഹ്റയോടുള്ള സ്നേഹവും ബാല്യകാല ഓർമ്മകളും അവന്റെ മനസ്സിൽ എന്നും നിലനിന്നു.',
          'അകലം അവരുടെ സ്നേഹത്തെ ഇല്ലാതാക്കിയില്ല. മറിച്ച്, വേർപാടിന്റെ വേദന അവരുടെ ബന്ധത്തെ കൂടുതൽ ആഴമുള്ളതാക്കി.',
          'ജീവിതം എത്രത്തോളം അനിശ്ചിതമാണെന്നും യഥാർത്ഥ സ്നേഹം എത്രത്തോളം ശക്തമാണെന്നും അവരുടെ കഥ നമ്മെ ഓർമ്മിപ്പിക്കുന്നു.'
        ]
      },
      {
        heading: 'Chapter Three',
        paragraphs: [
          'മജീദിന്റെയും സുഹ്റയുടെയും ജീവിതം സന്തോഷവും ദുഃഖവും പ്രതീക്ഷയും നിരാശയും നിറഞ്ഞതായിരുന്നു.',
          'അവരുടെ പ്രണയം ഒരു സാധാരണ പ്രണയകഥ മാത്രമല്ല; മനുഷ്യജീവിതത്തിലെ നഷ്ടങ്ങളുടെയും ഓർമ്മകളുടെയും സ്നേഹത്തിന്റെയും പ്രതീകമാണ്.',
          'ബാല്യത്തിൽ ആരംഭിച്ച ആ സ്നേഹം അവരുടെ ജീവിതത്തിന്റെ ഓരോ ഘട്ടത്തിലും ഒരു നിശ്ശബ്ദ സാന്നിധ്യമായി തുടർന്നു.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is available through legally accessible Malayalam literature resources.',
      links: [
        { label: 'Malayalam Wikisource', url: 'https://ml.wikisource.org/', icon: 'fas fa-book-open' }
      ]
    }
  },
  {
    id: 'indulekha',
    title: 'Indulekha',
    author: 'O. Chandu Menon',
    cover: 'https://m.media-amazon.com/images/I/51DxccgEEHL._AC_UF1000,1000_QL80_.jpg',
    genre: 'malayalam',
    genreLabel: 'Malayalam · Classic · Romance',
    desc: 'A pioneering Malayalam novel about love, education, and social change.',
    why: 'A landmark Malayalam novel exploring love, education, tradition, and changing society.',
    note: 'പാരമ്പര്യത്തിനും ആധുനികതയ്ക്കുമിടയിൽ സ്വന്തം ജീവിതം തിരഞ്ഞെടുക്കുന്ന ഒരു യുവതിയുടെ കഥ.',
    source: 'Public Domain · 1889',
    pages: [
      {
        heading: 'Chapter One',
        paragraphs: [
          'ഇന്ദുലേഖ ബുദ്ധിയും വിദ്യാഭ്യാസവും സൗന്ദര്യവും വ്യക്തിത്വവും നിറഞ്ഞ ഒരു യുവതിയായിരുന്നു. തന്റെ ജീവിതത്തെക്കുറിച്ച് സ്വയം തീരുമാനിക്കാനുള്ള ശക്തമായ മനസ്സും അവൾക്കുണ്ടായിരുന്നു.',
          'പത്തൊൻപതാം നൂറ്റാണ്ടിലെ കേരളസമൂഹത്തിന്റെ പശ്ചാത്തലത്തിലാണ് ഇന്ദുലേഖയുടെ കഥ വികസിക്കുന്നത്. പാരമ്പര്യങ്ങളും പുതിയ ആശയങ്ങളും തമ്മിലുള്ള സംഘർഷം അവളുടെ ജീവിതത്തിലും പ്രതിഫലിച്ചു.',
          'വിദ്യാഭ്യാസം നേടിയ ഇന്ദുലേഖയ്ക്ക് സ്വന്തം ജീവിതത്തെക്കുറിച്ച് വ്യക്തമായ കാഴ്ചപ്പാടുണ്ടായിരുന്നു.'
        ]
      },
      {
        heading: 'Chapter Two',
        paragraphs: [
          'മാധവനും ഇന്ദുലേഖയും തമ്മിലുള്ള ബന്ധം കഥയുടെ പ്രധാന ഭാഗമാണ്. വിദ്യാഭ്യാസവും ആധുനിക ചിന്താഗതികളും സ്വീകരിച്ച യുവാവായിരുന്നു മാധവൻ.',
          'അവരുടെ സ്നേഹം വളരുന്നതിനൊപ്പം സമൂഹത്തിലെ പഴയ ആചാരങ്ങളും പുതിയ ആശയങ്ങളും തമ്മിലുള്ള സംഘർഷവും ശക്തമായി.',
          'ഇന്ദുലേഖ തന്റെ ജീവിതത്തെക്കുറിച്ചുള്ള തീരുമാനങ്ങളിൽ സ്വന്തം അഭിപ്രായത്തിനും സ്വാതന്ത്ര്യത്തിനും വലിയ പ്രാധാന്യം നൽകി.'
        ]
      },
      {
        heading: 'Chapter Three',
        paragraphs: [
          'പ്രണയത്തിനൊപ്പം വിദ്യാഭ്യാസത്തിന്റെയും വ്യക്തിസ്വാതന്ത്ര്യത്തിന്റെയും പ്രാധാന്യവും ഈ കഥ മുന്നോട്ടുവയ്ക്കുന്നു.',
          'പഴയ സാമൂഹികരീതികൾ മാറിക്കൊണ്ടിരുന്ന ഒരു കാലഘട്ടത്തിലെ കേരളത്തിന്റെ ജീവിതവും ചിന്താഗതികളും നോവലിലൂടെ കാണാം.',
          'ഇന്ദുലേഖയുടെ വ്യക്തിത്വവും അവളുടെ തീരുമാനങ്ങളും മലയാള സാഹിത്യത്തിലെ ശക്തമായ സ്ത്രീകഥാപാത്രങ്ങളിലൊന്നായി അവളെ മാറ്റുന്നു.'
        ]
      }
    ],
    fullText: {
      note: 'Full text is available through legally accessible Malayalam literature resources.',
      links: [
        { label: 'Malayalam Wikisource', url: 'https://ml.wikisource.org/', icon: 'fas fa-book-open' }
      ]
    }
  }
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  filter: 'all',
  currentBook: null,
  currentPage: 0
};

/* ============================================================
   DOM REFS
   ============================================================ */
const el = {
  libraryGrid:    document.getElementById('libraryGrid'),
  libFilterBar:   document.getElementById('libFilterBar'),
  botmCover:      document.getElementById('botmCover'),
  botmTitle:      document.getElementById('botmTitle'),
  botmAuthor:     document.getElementById('botmAuthor'),
  botmDesc:       document.getElementById('botmDesc'),
  botmWhy:        document.getElementById('botmWhy'),
  botmNote:       document.getElementById('botmNote'),
  botmReadBtn:    document.getElementById('botmReadBtn'),
  moodGrid:       document.getElementById('moodGrid'),
  recommendBox:   document.getElementById('recommendResult'),
  surpriseBtn:    document.getElementById('surpriseBtn'),
  readerModal:    document.getElementById('readerModal'),
  readerTitle:    document.getElementById('readerTitle'),
  readerAuthor:   document.getElementById('readerAuthor'),
  readerBody:     document.getElementById('readerBody'),
  readerChapters: document.getElementById('readerChapters'),
  readerProgress: document.getElementById('readerProgress'),
  readerPrev:     document.getElementById('readerPrev'),
  readerNext:     document.getElementById('readerNext'),
  readerClose:    document.getElementById('readerClose'),
  aiForm:         document.getElementById('aiForm'),
  aiInput:        document.getElementById('aiInput'),
  aiBody:         document.getElementById('aiBody')
};

/* ============================================================
   RENDER — Book of the Month
   ============================================================ */
function renderBookOfMonth() {
  const book = LIBRARY.find(b => b.id === 'pride-prejudice') || LIBRARY[0];
  if (!book || !el.botmTitle) return;

  el.botmCover.src = book.cover;
  el.botmCover.alt = book.title + ' cover';
  el.botmTitle.textContent = book.title;
  el.botmAuthor.textContent = 'by ' + book.author;
  el.botmDesc.textContent = book.desc;
  el.botmWhy.textContent = book.why;
  el.botmNote.textContent = '“' + book.note + '”';

  el.botmReadBtn.addEventListener('click', () => openReader(book.id));
  el.botmCover.addEventListener('click', () => openReader(book.id));
}

/* ============================================================
   RENDER — Filter bar
   ============================================================ */
function renderFilterBar() {
  if (!el.libFilterBar) return;
  el.libFilterBar.innerHTML = CATEGORIES.map(c => `
    <button class="filter-chip ${c.key === state.filter ? 'active' : ''}"
            data-cat="${c.key}" role="tab">
      ${c.label}
    </button>
  `).join('');
}

/* ============================================================
   RENDER — Library grid
   ============================================================ */
function renderLibrary() {
  if (!el.libraryGrid) return;

  const books = state.filter === 'all'
    ? LIBRARY
    : LIBRARY.filter(b => b.genre === state.filter);

  if (books.length === 0) {
    el.libraryGrid.innerHTML = `<p class="muted">No books in this category yet.</p>`;
    return;
  }

  el.libraryGrid.innerHTML = books.map(book => `
    <button class="book-card" data-book-id="${book.id}" aria-label="Open ${book.title}">
      <div class="book-cover">
        <span class="book-badge">Preview</span>
        <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
      </div>
      <div class="book-meta">
        <h4>${book.title}</h4>
        <p class="book-author">${book.author}</p>
        <span class="book-genre">${book.genreLabel}</span>
      </div>
    </button>
  `).join('');
}

/* ============================================================
   READER
   ============================================================ */
function openReader(bookId) {
  const book = LIBRARY.find(b => b.id === bookId);
  if (!book) return;

  state.currentBook = book;
  state.currentPage = 0;
  renderReaderPage();
  renderReaderTabs();
  el.readerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  el.readerClose.focus();
}

function closeReader() {
  el.readerModal.classList.remove('active');
  document.body.style.overflow = '';
  state.currentBook = null;
}

function renderReaderTabs() {
  if (!el.readerChapters) return;
  const book = state.currentBook;
  const total = book.pages.length;

  const chapterTabs = book.pages.map((p, i) => `
    <button class="reader-tab ${i === state.currentPage ? 'active' : ''}" data-page="${i}">
      ${i + 1}. ${(p.heading || 'Chapter ' + (i + 1)).replace(/^Chapter [^—]+—\s*/, '').slice(0, 26)}
    </button>
  `).join('');

  const continueTab = `
    <button class="reader-tab reader-tab--continue ${state.currentPage >= total ? 'active' : ''}" data-page="continue">
      ✨ Continue Reading
    </button>
  `;

  el.readerChapters.innerHTML = chapterTabs + continueTab;
}

function renderReaderPage() {
  const book = state.currentBook;
  if (!book) return;

  const total = book.pages.length;
  const isContinue = state.currentPage >= total;

  el.readerTitle.textContent = book.title;
  el.readerAuthor.textContent = 'by ' + book.author + ' · ' + book.source;

  if (isContinue) {
    renderContinuePanel(book, total);
    return;
  }

  const page = book.pages[state.currentPage];
  const heading = page.heading ? `<h2>${page.heading}</h2>` : '';
  const body = page.paragraphs.map(p => `<p>${p}</p>`).join('');
  el.readerBody.innerHTML = heading + body;
  el.readerBody.scrollTop = 0;

  el.readerProgress.textContent = `Chapter ${state.currentPage + 1} of ${total}`;
  el.readerPrev.disabled = state.currentPage === 0;
  el.readerNext.disabled = false;
}

function renderContinuePanel(book, total) {
  const ft = book.fullText || { note: 'Not available online.', links: [] };
  const links = (ft.links || []).map(l => `
    <a class="cp-btn" href="${l.url}" target="_blank" rel="noopener noreferrer">
      <i class="${l.icon || 'fas fa-external-link-alt'}"></i> ${l.label}
    </a>
  `).join('');

  el.readerBody.innerHTML = `
    <div class="continue-panel">
      <div class="cp-eyebrow">End of Preview</div>
      <h3>Continue Reading</h3>
      <p class="cp-note">${ft.note}</p>
      <div class="cp-actions">${links}</div>
    </div>
  `;
  el.readerBody.scrollTop = 0;

  el.readerProgress.textContent = `Preview complete · ${total} chapter${total !== 1 ? 's' : ''} shown`;
  el.readerPrev.disabled = false;
  el.readerNext.disabled = true;
}

/* ============================================================
   READER — Events
   ============================================================ */
el.readerPrev.addEventListener('click', () => {
  if (state.currentPage > 0) {
    state.currentPage--;
    renderReaderPage();
    renderReaderTabs();
  }
});

el.readerNext.addEventListener('click', () => {
  if (!state.currentBook) return;
  if (state.currentPage < state.currentBook.pages.length) {
    state.currentPage++;
    renderReaderPage();
    renderReaderTabs();
  }
});

el.readerClose.addEventListener('click', closeReader);

el.readerModal.addEventListener('click', (e) => {
  if (e.target === el.readerModal) closeReader();
});

el.readerChapters.addEventListener('click', (e) => {
  const tab = e.target.closest('.reader-tab');
  if (!tab || !state.currentBook) return;
  const val = tab.dataset.page;
  state.currentPage = val === 'continue'
    ? state.currentBook.pages.length
    : parseInt(val, 10);
  renderReaderPage();
  renderReaderTabs();
});

document.addEventListener('keydown', (e) => {
  if (!el.readerModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeReader();
  if (e.key === 'ArrowLeft') el.readerPrev.click();
  if (e.key === 'ArrowRight') el.readerNext.click();
});

/* ============================================================
   LIBRARY — Events
   ============================================================ */
el.libraryGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  openReader(card.dataset.bookId);
});

el.libFilterBar.addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  state.filter = chip.dataset.cat;
  renderFilterBar();
  renderLibrary();
});

/* ============================================================
   RECOMMENDATION
   ============================================================ */
const RECOMMENDATIONS = {
  thoughtful:   { title: 'Meditations',                    author: 'Marcus Aurelius',       reason: 'Timeless reflections for a grounded, examined life.',  id: 'meditations' },
  inspiring:    { title: 'Gitanjali',                      author: 'Rabindranath Tagore',   reason: 'Nobel-winning devotional poetry.',                     id: 'gitanjali' },
  emotional:    { title: 'Pride and Prejudice',            author: 'Jane Austen',           reason: 'Love, wit, and misunderstanding.',                     id: 'pride-prejudice' },
  lighthearted: { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle',  reason: 'Brilliant deduction, delightful mysteries.',           id: 'sherlock-holmes' },
  intellectual: { title: 'The Tao Te Ching',               author: 'Laozi',                 reason: 'Ancient wisdom, quietly powerful.',                    id: 'tao' },
  calm:         { title: 'Leaves of Grass',                author: 'Walt Whitman',          reason: 'Poetry that feels like a deep breath.',                id: 'leaves-of-grass' },
  adventurous:  { title: 'Moby-Dick',                      author: 'Herman Melville',       reason: 'The greatest sea adventure ever written.',             id: 'moby-dick' }
};

function showRecommendation(mood) {
  const r = RECOMMENDATIONS[mood];
  if (!r || !el.recommendBox) return;

  el.recommendBox.innerHTML = `
    <h3>${r.title}</h3>
    <p class="rec-author">by ${r.author}</p>
    <p class="rec-reason">${r.reason}</p>
    <span class="rec-mood">Mood · ${mood}</span>
    <button class="btn btn-primary" id="recReadBtn" style="margin-top:20px;">
      Read This Book <i class="fas fa-arrow-right"></i>
    </button>
  `;

  const btn = document.getElementById('recReadBtn');
  if (btn) btn.addEventListener('click', () => openReader(r.id));
}

el.moodGrid.addEventListener('click', (e) => {
  const chip = e.target.closest('.mood-chip');
  if (!chip) return;
  el.moodGrid.querySelectorAll('.mood-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  showRecommendation(chip.dataset.mood);
});

el.surpriseBtn.addEventListener('click', () => {
  const moods = Object.keys(RECOMMENDATIONS);
  const pick = moods[Math.floor(Math.random() * moods.length)];
  el.moodGrid.querySelectorAll('.mood-chip').forEach(c => c.classList.remove('active'));
  const target = el.moodGrid.querySelector(`[data-mood="${pick}"]`);
  if (target) target.classList.add('active');
  showRecommendation(pick);
});

/* ============================================================
   AI ASSISTANT — smart, context-aware responses
   ============================================================ */

/* -- Book lookup helpers -- */
function findBookByTitle(text) {
  const t = text.toLowerCase();
  return LIBRARY.find(b =>
    t.includes(b.title.toLowerCase()) ||
    b.title.toLowerCase().split(' ').every(w => w.length < 4 || t.includes(w))
  );
}

function findBookByAuthor(text) {
  const t = text.toLowerCase();
  return LIBRARY.find(b => t.includes(b.author.toLowerCase()));
}

function listBooksByGenre(genreKey) {
  return LIBRARY.filter(b => b.genre === genreKey);
}

/* -- Response generators -- */
function replyGreeting() {
  const lines = [
    "Hello, reader! How can I help you today?",
    "Hi there! Ask me for a book, an author, a quote, or a writing prompt.",
    "Hey! Ready to find your next great read? Ask me anything about books.",
    "Welcome! I know every book in the PROLOGUE library — ask away."
  ];
  return pick(lines);
}

function replyThanks() {
  const lines = [
    "You're welcome! Happy reading.",
    "Anytime. Come back whenever you need a new story.",
    "My pleasure. Enjoy your book!"
  ];
  return pick(lines);
}

function replyGoodbye() {
  const lines = [
    "Goodbye! May your next chapter be a good one.",
    "See you soon — happy reading!",
    "Until next time. Keep turning those pages."
  ];
  return pick(lines);
}

function replyAboutSelf() {
  return "I'm the PROLOGUE reading assistant. I know every book in this library — I can recommend titles, tell you about authors, share quotes, and give writing prompts. What would you like?";
}

function replyRecommendByGenre(text) {
  const t = text.toLowerCase();
  let books = [];
  let genreName = '';

  if (/fantasy|dragon|magic|middle.?earth|hobbit/.test(t))       { books = listBooksByGenre('fantasy'); genreName = 'fantasy'; }
  else if (/sci.?fi|science fiction|futur|time travel|space/.test(t)) { books = listBooksByGenre('scifi');   genreName = 'science fiction'; }
  else if (/philosoph|stoic|wisdom|meaning|life/.test(t))        { books = listBooksByGenre('philosophy'); genreName = 'philosophy'; }
  else if (/poem|poetry|verse|poet/.test(t))                     { books = listBooksByGenre('poetry');   genreName = 'poetry'; }
  else if (/mystery|detective|crime|sherlock|holmes/.test(t))    { books = listBooksByGenre('mystery');  genreName = 'mystery'; }
  else if (/adventure|journey|voyage|sea|whale/.test(t))         { books = listBooksByGenre('adventure');genreName = 'adventure'; }
  else if (/classic|classical|austen|fitzgerald|classics/.test(t)){ books = listBooksByGenre('classic'); genreName = 'classics'; }
  else if (/indian|hindi|premchand|tagore|gitanjali|godaan/.test(t)) { books = listBooksByGenre('indian'); genreName = 'Indian literature'; }
  else if (/malayalam|kerala|basheer|indulekha|chandu/.test(t))  { books = listBooksByGenre('malayalam');genreName = 'Malayalam literature'; }

  if (!books.length) return null;

  const sample = books.slice(0, 3).map(b => `“${b.title}” by ${b.author}`).join(', ');
  return `For ${genreName}, I'd suggest: ${sample}. Click any of them in the library to read a preview.`;
}

function replyMoodRecommendation(text) {
  const t = text.toLowerCase();
  const map = {
    thoughtful:   /thoughtful|contemplat|reflect|deep|quiet/,
    inspiring:    /inspir|motivat|uplift|hope|encourag/,
    emotional:    /emotional|moving|touching|heartbreak|tear|cry/,
    lighthearted: /light.?hearted|funny|humor|comic|laugh|cheerful/,
    intellectual: /intellect|smart|clever|brain|analyt|complex/,
    calm:         /calm|peace|relax|serene|gentle|soft/,
    adventurous:  /adventur|thrill|exciting|bold|wild|epic/
  };
  for (const [mood, re] of Object.entries(map)) {
    if (re.test(t)) {
      const r = RECOMMENDATIONS[mood];
      return `Feeling ${mood}? Try “${r.title}” by ${r.author} — ${r.reason}`;
    }
  }
  return null;
}

function replyAboutBook(text) {
  const book = findBookByTitle(text);
  if (!book) return null;
  return `“${book.title}” by ${book.author} (${book.source}). ${book.desc} Why we recommend it: ${book.why}`;
}

function replyAboutAuthor(text) {
  const book = findBookByAuthor(text);
  if (!book) return null;
  return `${book.author} wrote “${book.title}” — ${book.desc} You can read a preview in our library.`;
}

function replyQuote() {
  const quotes = [
    "“A reader lives a thousand lives before he dies.” — George R.R. Martin",
    "“Books are a uniquely portable magic.” — Stephen King",
    "“There is no friend as loyal as a book.” — Ernest Hemingway",
    "“We read to know we are not alone.” — C.S. Lewis",
    "“A room without books is like a body without a soul.” — Cicero",
    "“The more that you read, the more things you will know.” — Dr. Seuss",
    "“Reading is a conversation. All books talk. But a good book listens as well.” — Mark Haddon"
  ];
  return pick(quotes);
}

function replyWritingPrompt() {
  const prompts = [
    "Write about a library where books whisper secrets to those who listen.",
    "Describe a character who can taste emotions in the food they cook.",
    "Write a letter to your future self, ten years from now.",
    "A stranger hands you a book with your name on the cover. What happens next?",
    "Write a story that takes place entirely inside one page of a book.",
    "Describe the last library on earth, and the person who guards it.",
    "Write a poem where every line begins with 'I remember'.",
    "A book falls open to a page you didn't write. What does it say?"
  ];
  return pick(prompts);
}

function replyHowToRead(book) {
  if (!book) return null;
  const ft = book.fullText || {};
  const link = (ft.links && ft.links[0]) ? ft.links[0].label : 'an official source';
  return `You can read a preview of “${book.title}” right here by clicking its card in the library. For the full book, continue via ${link}.`;
}

function replyHelp() {
  return "I can help with:\n• Book recommendations (try “suggest a fantasy book”)\n• Info about any book in our library\n• Author details\n• Quotes\n• Writing prompts\n• Mood-based picks (try “I feel thoughtful”)";
}

function replyFallback() {
  const lines = [
    "I'm not sure I understood. Try asking me to recommend a book, name an author, or give a quote.",
    "Hmm, could you rephrase that? I'm best at books, authors, quotes, and writing prompts.",
    "I don't have an answer for that yet. Ask me about a book or a genre — like 'suggest a classic'."
  ];
  return pick(lines);
}

/* -- Utility -- */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* -- Main brain -- */
function getAiReply(text) {
  const t = text.toLowerCase().trim();

  /* greeting / farewell / thanks */
  if (/^(hi|hello|hey|hii|helo|yo|hola|namaste)\b/.test(t) || /good (morning|afternoon|evening)/.test(t)) return replyGreeting();
  if (/^(bye|goodbye|see you|cya|tata)/.test(t)) return replyGoodbye();
  if (/(thank|thanks|thx|ty)\b/.test(t)) return replyThanks();
  if (/(who are you|what are you|your name|about you)/.test(t)) return replyAboutSelf();
  if (/(help|what can you|how to use|commands?)/.test(t)) return replyHelp();

  /* direct book / author lookups first */
  const aboutBook = replyAboutBook(t);
  if (aboutBook) return aboutBook;

  const aboutAuthor = replyAboutAuthor(t);
  if (aboutAuthor) return aboutAuthor;

  /* how to read a specific book */
  if (/(how|where).*(read|find)/.test(t)) {
    const book = findBookByTitle(t);
    if (book) return replyHowToRead(book);
  }

  /* genre recommendations */
  const genre = replyRecommendByGenre(t);
  if (genre) return genre;

  /* mood-based */
  const moodReply = replyMoodRecommendation(t);
  if (moodReply) return moodReply;

  /* quotes */
  if (/(quote|saying|line|inspirational)/.test(t)) return replyQuote();

  /* writing prompts */
  if (/(prompt|write|writing|story idea|inspire me to write)/.test(t)) return replyWritingPrompt();

  /* general recommend */
  if (/(recommend|suggest|what should i read|something to read|good book|any book)/.test(t)) {
    const b = pick(LIBRARY);
    return `How about “${b.title}” by ${b.author}? ${b.desc} You can read a preview in the library.`;
  }

  /* malayalam responses */
  if (/(മലയാളം|മലയാള|basheer|vaikom)/.test(t)) {
    return "മലയാള സാഹിത്യത്തിൽ ഞങ്ങളുടെ ലൈബ്രറിയിൽ 'ബാല്യകാലസഖി', 'ഇന്ദുലേഖ' എന്നീ പുസ്തകങ്ങൾ ഉണ്ട്. ഏതെങ്കിലും ഒരു പുസ്തകത്തിന്റെ കാര്യം ചോദിക്കാം.";
  }

  return replyFallback();
}

function addAiMessage(text, who) {
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg--' + who;
  /* preserve line breaks with <br> for multiline replies */
  div.innerHTML = text.replace(/\n/g, '<br>');
  el.aiBody.appendChild(div);
  el.aiBody.scrollTop = el.aiBody.scrollHeight;
}

el.aiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = el.aiInput.value.trim();
  if (!text) return;
  addAiMessage(text, 'user');
  el.aiInput.value = '';
  setTimeout(() => addAiMessage(getAiReply(text), 'bot'), 400);
});

/* ============================================================
   INIT
   ============================================================ */
renderBookOfMonth();
renderFilterBar();
renderLibrary();