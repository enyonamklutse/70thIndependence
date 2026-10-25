document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const refreshButton = document.getElementById('refresh-now');
    const lastUpdatedLabel = document.getElementById('last-updated');
    const board = document.getElementById('trend-board');
    const AUTO_REFRESH_MS = 5 * 60 * 1000;

    const defaultStories = {
        now: [
            { title: '#GhanaAt70 is trending as Ghanaians celebrate heritage, pride, and national identity online.', link: 'https://www.instagram.com/explore/tags/ghanaat70/', category: 'now', platform: 'Instagram', label: 'Now' },
            { title: 'Ghana’s 70th anniversary is sparking debates, celebrations, and patriotic discussions worldwide.', link: 'https://x.com/search?q=Ghana%20At%2070&src=typed_query', category: 'now', platform: 'X / Twitter', label: 'Live' },
            { title: 'Major cultural celebrations and national pride moments are driving renewed attention to Ghana’s story.', link: 'https://www.google.com/search?q=Ghana+independence+celebration', category: 'now', platform: 'Google News', label: 'Hot' }
        ],
        next: [
            { title: 'Future-focused conversations are exploring innovation, smart cities, and youth leadership in Ghana.', link: 'https://www.instagram.com/explore/tags/futureghana/', category: 'next', platform: 'Instagram', label: 'Next' },
            { title: 'Ghana’s diaspora networks are preparing for stronger cultural and investment connections in the years ahead.', link: 'https://www.instagram.com/explore/tags/ghanadiaspora/', category: 'next', platform: 'Social', label: '2027+' },
            { title: 'Youth-led growth, education, and tech integration are shaping the next chapter of Ghana’s story.', link: 'https://www.youtube.com/results?search_query=Ghana+future+innovation', category: 'next', platform: 'YouTube', label: 'Upcoming' }
        ],
        culture: [
            { title: 'Ghanaian food, fashion, music, and traditions are driving major cultural conversations.', link: 'https://www.instagram.com/explore/tags/ghanaculture/', category: 'culture', platform: 'Instagram', label: 'Culture' },
            { title: 'Heritage revival is growing as audiences turn toward music, food, and storytelling traditions.', link: 'https://www.youtube.com/results?search_query=Ghana+culture+and+heritage', category: 'culture', platform: 'YouTube', label: 'Heritage' },
            { title: 'Black history and cultural pride conversations continue to gain momentum across Africa and the diaspora.', link: 'https://www.instagram.com/explore/tags/africanheritage/', category: 'culture', platform: 'Instagram', label: 'Heritage' }
        ],
        youth: [
            { title: 'Young creators are shaping Ghana’s digital identity through storytelling and innovation.', link: 'https://www.instagram.com/explore/tags/youngghana/', category: 'youth', platform: 'Instagram', label: 'Youth' },
            { title: 'Young Ghanaians are leading debates about identity, sustainability, and national pride online.', link: 'https://www.tiktok.com/tag/youthvoice', category: 'youth', platform: 'TikTok', label: 'Creators' },
            { title: 'Digital media is giving the next generation a stronger voice in Ghana’s national conversation.', link: 'https://www.youtube.com/results?search_query=Ghana+youth+innovation', category: 'youth', platform: 'YouTube', label: 'Voice' }
        ],
        global: [
            { title: 'International audiences are following Ghana’s progress, governance, and cultural influence across Africa.', link: 'https://www.youtube.com/results?search_query=Ghana+future+innovation', category: 'global', platform: 'YouTube', label: 'World' },
            { title: 'Pan-African pride is rising as Ghana remains a symbol of leadership and resilience.', link: 'https://www.instagram.com/explore/tags/africanpride/', category: 'global', platform: 'Instagram', label: 'Global' },
            { title: 'Ghana continues to inspire broader conversations around African development and identity.', link: 'https://www.google.com/search?q=Ghana+Africa+development', category: 'global', platform: 'Google News', label: 'Africa' }
        ]
    };

    const rssUrlMap = {
        now: 'https://news.google.com/rss/search?q=Ghana+At+70&hl=en-US&gl=US&ceid=US:en',
        next: 'https://news.google.com/rss/search?q=Ghana+future+innovation&hl=en-US&gl=US&ceid=US:en',
        culture: 'https://news.google.com/rss/search?q=Ghana+culture+heritage&hl=en-US&gl=US&ceid=US:en',
        youth: 'https://news.google.com/rss/search?q=Ghana+youth+innovation&hl=en-US&gl=US&ceid=US:en',
        global: 'https://news.google.com/rss/search?q=Ghana+Africa+development&hl=en-US&gl=US&ceid=US:en'
    };

    const renderCard = (story, category) => {
        const card = document.createElement('a');
        card.href = story.link || '#';
        card.target = '_blank';
        card.rel = 'noreferrer';
        card.className = 'news-card social-link trend-card';
        card.dataset.category = category;

        const shortTag = (story.platform || 'GH').slice(0, 3).toUpperCase();
        const title = story.title || 'Trending story';
        const label = story.label || 'Now';

        card.innerHTML = `
            <div class="news-thumb">${shortTag}</div>
            <div class="news-body">
                <span class="news-kicker">${story.platform || 'Trend'}</span>
                <h3>${title}</h3>
                <p>${story.description || 'Fresh updates from the latest conversations around Ghana and the wider African story.'}</p>
                <div class="news-meta">
                    <span>${label}</span>
                    <span>${category}</span>
                </div>
            </div>
        `;

        return card;
    };

    const updateLastUpdated = () => {
        const now = new Date();
        const timeText = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        if (lastUpdatedLabel) {
            lastUpdatedLabel.textContent = 'Updated at ' + timeText;
        }
    };

    const refreshPage = () => {
        window.location.reload();
    };

    const applyFilter = (selectedCategory) => {
        const cards = document.querySelectorAll('.trend-card');

        cards.forEach((card) => {
            const matches = card.dataset.category === selectedCategory;
            card.classList.toggle('hidden', !matches);
        });

        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === selectedCategory;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    };

    const buildLiveFeed = async () => {
        if (!board) return;

        board.innerHTML = '';
        const entries = Object.entries(rssUrlMap);
        const cards = [];

        for (const [category, rssUrl] of entries) {
            try {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
                const data = await response.json();
                const items = Array.isArray(data.items) ? data.items.slice(0, 2) : [];

                if (items.length > 0) {
                    items.forEach((item) => {
                        cards.push({
                            title: item.title,
                            link: item.link,
                            description: item.description ? item.description.replace(/<[^>]*>/g, '').slice(0, 120) + '...' : 'Fresh trend update',
                            category,
                            platform: category.charAt(0).toUpperCase() + category.slice(1),
                            label: item.pubDate ? new Date(item.pubDate).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'Now'
                        });
                    });
                }
            } catch (error) {
                cards.push(...defaultStories[category]);
            }
        }

        if (cards.length === 0) {
            Object.entries(defaultStories).forEach(([category, stories]) => {
                stories.forEach((story) => cards.push({ ...story, category }));
            });
        }

        cards.forEach((story) => {
            board.appendChild(renderCard(story, story.category));
        });

        applyFilter('now');
    };

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            applyFilter(button.dataset.filter);
        });
    });

    if (refreshButton) {
        refreshButton.addEventListener('click', refreshPage);
    }

    updateLastUpdated();
    buildLiveFeed();

    window.setInterval(() => {
        refreshPage();
    }, AUTO_REFRESH_MS);

    const legendaryData = {
        music: [
            'E.T. Mensah', 'C.K. Mann', 'Nana Ampofo', 'The African Brothers', 'Amandzeba', 'Kojo Antwi', 'Daddy Lumba', 'Reggie Rockstone', 'Obrafour', 'VIP', 'Sarkodie', 'Samini', 'R2Bees', 'Stonebwoy', 'Shatta Wale', 'Bisa Kdei', 'Kofi Kinaata', 'Wiyaala', 'Kuami Eugene', 'Joe Mettle', 'Efya', 'Black Sherif', 'Gyakie', 'King Promise', 'Amaarae', 'Adina', 'Mr Eazi', 'Kidi', 'Camidoh', 'S3fa', 'KiDi', 'Piesie Esther', 'Fancy Gadam', 'Akwaboah', 'Kweku Smoke', 'E.L.', 'Joyce Blessing', 'M.anifest', 'D-Black', 'Dope Nation', 'Kelvyn Boy', 'Becca', 'MzVee', 'Rufftown Records', 'Medikal', 'Burna Boy', 'Fuse ODG'
        ].map((title, index) => ({
            title,
            year: String(1957 + index),
            video: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Ghana official music video`)}`
        })),
        tv: [
            'GTV launch', 'The Morning Show', 'Music Time', 'The Chat Show', 'Family viewing era', 'Celebrity interview formats', 'Ghanaian news drama', 'TV3 begins', 'Metro TV rise', 'Adom TV era', 'Joy Prime rise', 'Music chart programs', 'Current affairs TV', 'Ghanaian comedy programs', 'Youth talk shows', 'Reality TV in Ghana', 'The talk-show shift', 'Entertainment TV boom', 'The digital newsroom era', 'The YouTube interview age', 'Documentary storytelling on TV', 'Faith and worship TV', 'Sports studio culture', 'Ghanaian fashion television', 'The celebrity talk era', 'The game show boom', 'The stream-first TV age', 'The music and TV merger', 'The comeback of live programming', 'The national screen story', 'The youth broadcast age', 'The golden age of local TV', 'The era of public TV', 'The social media crossover', 'A new generation of presenters'
        ].map((title, index) => ({
            title,
            year: String(1957 + index),
            video: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Ghana TV show`)}`
        })),
        movies: [
            'Love Brewed in the African Pot', 'The Perfect Picture', 'A Sting in a Tale', 'Keteke', 'Azali', 'The Last Funeral', 'Away Bus', '4 Play', 'The Price of a Child', 'A Northern Affair', 'Madam Bee', 'The Black Star', 'The Last Supper', 'Crime and Love', 'Princess Tyra', 'The Kingdom', 'Adina', 'Stigma', 'Boys at Risk', 'Kintampo', 'The Big Picture', 'The Return of the Dancer', 'Merry Go Round', 'Wedding Bells', 'The Red Candle', 'A Country Called Ghana', 'The Cursed One', 'Ties That Bind', 'The Reward', 'Where Are You From?', 'The Wedding Party 2', 'The Last King of Scotland', 'Mabel', 'The Golden Stool story', 'The Ghanaian dream on screen', 'The storyteller generation', 'The diaspora cinema wave', 'The modern Ghanaian film movement', 'The next chapter of Ghanaian cinema'
        ].map((title, index) => ({
            title,
            year: String(1957 + index),
            video: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Ghana movie trailer`)}`
        })),
        events: [
            'Black Star Square Independence Parade', 'The Ghana Music Festival', 'Accra Nights', 'The Chale Wote festival', 'Afrochella', 'Detty December', 'The Green and Gold parade', 'The diaspora reunion festival', 'Kakumdo cultural nights', 'The Accra street carnival', 'The beach party boom', 'The Ghana fashion weekend', 'Big stadium concerts', 'Hiplife live nights', 'Dancehall festival waves', 'The Christmas festival circuit', 'Youth culture festivals', 'Music and football fan fests', 'The tourism celebration wave', 'The arts and culture weekend', 'The Ghana festival economy', 'The nightlife capital story', 'The sports and music event merger', 'The city pride festival movement', 'The Ghanaian diaspora homecoming events', 'The 70-year celebration calendar', 'The Accra culture weekend', 'The joy of public celebration', 'The urban festival revival', 'The nation on stage', 'The festival of heritage', 'The celebration of sound and style', 'The grand return of live events', 'The Ghana showcase season', 'The all-night celebration era', 'The stadium pride nights', 'The festival generation', 'The big public celebration wave', 'Ghana in full colour', 'The future of event culture in Ghana'
        ].map((title, index) => ({
            title,
            year: String(1957 + index),
            video: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Ghana event video`)}`
        })),
        incidents: [
            'Ghana gains independence', '1966 coup and national shock', '1972 football euphoria', '1979 state transition', '1981 anti-corruption campaign', '1983 national crisis', '1992 democratic transition', '2000 election tension', '2008 power crisis', '2012 election progress', 'FixTheCountry movement', '2016 sanitation crisis', '2017 flood emergency', '2018 anti-galamsey pressure', '2019 civic protest wave', '2020 COVID-19 response', '2021 election debate', '2022 fuel crisis', '2023 accountability pressure', '2024 protest movement', '2025 national reset conversation', '2026 Ghana At 70', 'The public memory moment', 'The resilience generation', 'The voices of the street', 'The youth civic awakening', 'The accountability decade', 'The reform era', 'The collective action wave', 'The pride of the nation', 'The national story in motion', 'The voices for change', 'The long road to democracy', 'The civic renaissance', 'The power of the people', 'The nation reimagines itself', 'The people-first movement', 'The era of public accountability', 'The movement for reform', 'The rise of social activism', 'The story of resilience', 'The collective national memory'
        ].map((title, index) => ({
            title,
            year: String(1957 + index),
            video: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} Ghana history video`)}`
        }))
    };

    const years = Array.from({ length: 70 }, (_, i) => 1957 + i);
    Object.keys(legendaryData).forEach((key) => {
        legendaryData[key] = legendaryData[key].map((entry, index) => ({
            ...entry,
            year: String(years[index] || 1957 + index)
        }));
    });

    const renderLegendEntries = (listId, items) => {
        const list = document.getElementById(listId);
        if (!list) return;

        list.innerHTML = items.map((item, index) => `
            <li>
                <span class="legend-no">${String(index + 1).padStart(2, '0')}</span>
                <div>
                    <strong>${item.year}</strong>
                    <p>${item.title}</p>
                </div>
                <a href="${item.video}" target="_blank" rel="noreferrer">Watch</a>
            </li>
        `).join('');
    };

    Object.entries(legendaryData).forEach(([key, items]) => renderLegendEntries(`${key}-legend`, items));

    const entertainmentButtons = document.querySelectorAll('.ent-filter');
    const entertainmentCards = document.querySelectorAll('.legend-section');
    const entertainmentSearch = document.getElementById('ent-search');
    const entertainmentEmpty = document.getElementById('no-results');

    if (entertainmentButtons.length && entertainmentCards.length) {
        const applyEntertainmentFilter = () => {
            const activeFilter = document.querySelector('.ent-filter.active')?.dataset.filter || 'all';
            const query = (entertainmentSearch?.value || '').trim().toLowerCase();
            let visibleCount = 0;

            entertainmentCards.forEach((card) => {
                const categoryMatches = activeFilter === 'all' || card.dataset.category === activeFilter;
                const text = (card.textContent || '').toLowerCase();
                const keywordMatches = !query || text.includes(query);
                const isVisible = categoryMatches && keywordMatches;

                card.style.display = isVisible ? '' : 'none';
                if (isVisible) visibleCount += 1;
            });

            if (entertainmentEmpty) {
                entertainmentEmpty.hidden = visibleCount !== 0;
            }
        };

        entertainmentButtons.forEach((button) => {
            button.addEventListener('click', () => {
                entertainmentButtons.forEach((item) => item.classList.toggle('active', item === button));
                applyEntertainmentFilter();
            });
        });

        entertainmentSearch?.addEventListener('input', applyEntertainmentFilter);
        applyEntertainmentFilter();
    }
});
