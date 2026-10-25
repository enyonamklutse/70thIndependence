document.addEventListener('DOMContentLoaded', () => {
    const timelineButtons = document.querySelectorAll('.timeline-year');
    const timelineDetail = document.getElementById('timeline-detail');
    const galleryEl = document.getElementById('history-gallery');
    const archiveDocsEl = document.getElementById('archive-documents');
    const searchInput = document.getElementById('archive-search');
    const periodSelect = document.getElementById('archive-period');
    const regionSelect = document.getElementById('archive-region');
    const categorySelect = document.getElementById('archive-category');
    const peopleSelect = document.getElementById('archive-people');

    const galleryItems = [
        {
            title: 'Old Accra street life',
            period: 'Gold Coast',
            region: 'Greater Accra',
            category: 'photograph',
            people: 'Ghanaian citizens',
            year: '1930s',
            image: 'images/old accra.jpg',
            caption: 'Daily life, markets and civic rhythm in Accra during the Gold Coast era.',
            source: 'Ghana heritage archive',
            credit: '© Ghana 70 Community Archive'
        },
        {
            title: 'A nation in motion',
            period: 'Independence 1957',
            region: 'National',
            category: 'community',
            people: 'Families',
            year: '1957',
            image: 'images/Ghanaians.jpeg',
            caption: 'Crowds gathered to celebrate freedom, nationhood and a new chapter in Ghana’s story.',
            source: 'National celebration archive',
            credit: '© Ghana 70 Heritage Collection'
        },
        {
            title: 'Osagyefo in focus',
            period: 'Independence 1957',
            region: 'National',
            category: 'leadership',
            people: 'Kwame Nkrumah',
            year: '1957',
            image: 'images/osagyefo.jpg',
            caption: 'A portrait of the central figure in Ghana’s independence movement and early political leadership.',
            source: 'Historical archive',
            credit: '© Ghana National Museum'
        },
        {
            title: 'The Gold Coast on the move',
            period: 'Colonial era',
            region: 'Western',
            category: 'trade',
            people: 'Farmers and traders',
            year: '1940s',
            image: 'images/default (1).jpg',
            caption: 'Trade and mobility shaped the social and economic fabric of Ghana before independence.',
            source: 'Regional historical photo archive',
            credit: '© Regional heritage collection'
        },
        {
            title: 'The youth and the future',
            period: '2010s-2027',
            region: 'National',
            category: 'culture',
            people: 'Women and youth',
            year: '2020s',
            image: 'images/cid.jpg',
            caption: 'Modern Ghanaian identity is shaped by youth creativity, innovation and pride in nationhood.',
            source: 'Contemporary archive',
            credit: '© Ghana 70 Archive'
        },
        {
            title: 'Democracy and accountability',
            period: '1990s-2000s',
            region: 'National',
            category: 'politics',
            people: 'Leaders',
            year: '1992',
            image: 'images/democracy.jpg',
            caption: 'The Fourth Republic deepened Ghana’s democratic culture and civic participation.',
            source: 'Public records archive',
            credit: '© Ghana Civic Memory Project'
        },
        {
            title: 'National pride in every community',
            period: '2010s-2027',
            region: 'Ashanti',
            category: 'community',
            people: 'Ghanaian citizens',
            year: '2020s',
            image: 'images/square.jpg',
            caption: 'Communities continue to anchor Ghana’s identity and celebration of 70 years of independence.',
            source: 'Community archive',
            credit: '© 70 Chale Collection'
        },
        {
            title: 'Leadership and public service',
            period: '1960s-1980s',
            region: 'Eastern',
            category: 'leadership',
            people: 'Traditional rulers',
            year: '1970s',
            image: 'images/saving the nation.jpg',
            caption: 'Leadership, governance and public service have long been central to Ghana’s nation-building story.',
            source: 'Regional civic archive',
            credit: '© Eastern Region Heritage Fund'
        },
        {
            title: 'Volta region heritage',
            period: 'Gold Coast',
            region: 'Volta',
            category: 'culture',
            people: 'Families',
            year: '1930s',
            image: 'images/large_000000.jpg',
            caption: 'The cultural diversity of Ghana is rooted in the lived traditions of communities across every region.',
            source: 'Regional cultural archive',
            credit: '© Volta Heritage Collection'
        },
        {
            title: 'Northern communities and tradition',
            period: 'Gold Coast',
            region: 'Northern',
            category: 'community',
            people: 'Farmers and traders',
            year: '1940s',
            image: 'images/large_000000.jpg',
            caption: 'Northern communities have long shaped Ghana through agriculture, trade and resilience.',
            source: 'Northern regional archive',
            credit: '© Northern Region Archive'
        },
        {
            title: 'Students and political awakening',
            period: '1940s-1950s',
            region: 'Central',
            category: 'education',
            people: 'Workers and students',
            year: '1950s',
            image: 'images/osagyefo.jpg',
            caption: 'Education and political consciousness were central to the independence struggle.',
            source: 'Academic and civic archive',
            credit: '© Central Region Research Collection'
        },
        {
            title: 'The diaspora connection',
            period: '2010s-2027',
            region: 'National',
            category: 'community',
            people: 'Diaspora communities',
            year: '2020s',
            image: 'images/Ghanaians.jpeg',
            caption: 'Ghana’s story continues through global communities and the strength of Ghanaian identity abroad.',
            source: 'Diaspora archive',
            credit: '© Ghana Diaspora Heritage Council'
        },
        {
            title: 'Market and farm networks',
            period: 'Pre-colonial',
            region: 'Upper East',
            category: 'agriculture',
            people: 'Farmers and traders',
            year: '1800s',
            image: 'images/default (1).jpg',
            caption: 'Agriculture and trade networks are a long-standing part of Ghana’s economic and cultural life.',
            source: 'Regional agricultural archive',
            credit: '© Upper East Heritage Council'
        },
        {
            title: 'Religious and cultural life',
            period: 'Pre-colonial',
            region: 'Bono',
            category: 'religion',
            people: 'Families',
            year: '1700s',
            image: 'images/saving the nation.jpg',
            caption: 'Religion, custom and community life shaped social identity long before modern nationhood.',
            source: 'Cultural archive',
            credit: '© Bono Cultural Heritage Archive'
        },
        {
            title: 'Migration and movement',
            period: 'Gold Coast',
            region: 'Greater Accra',
            category: 'migration',
            people: 'Ghanaian citizens',
            year: '1910s',
            image: 'images/old accra.jpg',
            caption: 'Movement between places and communities was already a defining part of Ghana’s social history.',
            source: 'Migration archive',
            credit: '© Greater Accra Community Histories'
        },
        {
            title: 'Education for the future',
            period: '1940s-1950s',
            region: 'Eastern',
            category: 'education',
            people: 'Workers and students',
            year: '1950s',
            image: 'images/nkrumah.jpg',
            caption: 'Education and political awareness were vital in building the generation that pushed for freedom.',
            source: 'Academic archive',
            credit: '© Eastern Region Learning Heritage'
        }
    ];

    const archiveDocuments = [
        {
            type: 'document',
            title: 'The independence declaration and national vision',
            year: '1957',
            image: 'images/osagyefo.jpg',
            summary: 'Historic documentation reflecting Ghana’s political language of freedom, citizenship and nationhood.',
            source: 'Ghana National Archives',
            credit: '© Ghana National Archives',
            link: 'https://www.ghanaweb.com/ghana/independence-history/'
        },
        {
            type: 'newspaper',
            title: 'Front-page reporting on Ghana’s freedom',
            year: '1957',
            image: 'images/default (1).jpg',
            summary: 'Press coverage capturing the excitement and symbolic importance of independence.',
            source: 'Historical newspaper archive',
            credit: '© Public domain editorial archive',
            link: 'https://www.google.com/search?q=Ghana+independence+1957+newspaper'
        },
        {
            type: 'poster',
            title: 'Ghana @ 70 commemorative poster',
            year: '2027',
            image: 'images/saving the nation.jpg',
            summary: 'A visual archive entry for national celebration, heritage and anniversary pride.',
            source: '70 Chale design archive',
            credit: '© Ghana @ 70 commemorative program',
            link: 'https://www.google.com/search?q=Ghana+70+independence+poster'
        },
        {
            type: 'video',
            title: 'Ghana independence documentary',
            year: '1957',
            image: 'images/nkrumah.jpg',
            summary: 'A documentary exploring the ideas, struggles and aspirations behind independence.',
            source: 'Educational documentary archive',
            credit: '© Documentary archive / educational use',
            link: 'https://www.youtube.com/results?search_query=Ghana+independence+documentary'
        },
        {
            type: 'speech',
            title: 'Independence day speech and public address',
            year: '1957',
            image: 'images/osagyefo.jpg',
            summary: 'Public speech material illustrating Ghana’s first national voice and political ideals.',
            source: 'Political archive',
            credit: '© Ghana historical speech archive',
            link: 'https://www.google.com/search?q=Ghana+independence+speech+1957'
        },
        {
            type: 'document',
            title: 'Constitution and democratic transition archive',
            year: '1992',
            image: 'images/democracy.jpg',
            summary: 'A record of Ghana’s constitutional renewal and democratic transition in the Fourth Republic.',
            source: 'Ghana legal archives',
            credit: '© Ghana Constitution Review archive',
            link: 'https://www.google.com/search?q=Ghana+1992+constitution+archive'
        },
        {
            type: 'poster',
            title: 'National unity and development poster',
            year: '1980s',
            image: 'images/square.jpg',
            summary: 'A visual record of governance, national identity and developmental messaging in Ghana’s modern era.',
            source: 'Public policy archive',
            credit: '© Ghana public communications archive',
            link: 'https://www.google.com/search?q=Ghana+national+unity+poster'
        },
        {
            type: 'video',
            title: 'Regional identity and modern Ghana',
            year: '2020s',
            image: 'images/cid.jpg',
            summary: 'A modern commemorative archive item reflecting the voices, communities and diversity of contemporary Ghana.',
            source: 'Contemporary archive',
            credit: '© Ghana at 70 digital archive',
            link: 'https://www.youtube.com/results?search_query=Ghana+70+documentary'
        }
    ];

    const renderGallery = () => {
        if (!galleryEl) return;

        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const period = periodSelect ? periodSelect.value : 'all';
        const region = regionSelect ? regionSelect.value : 'all';
        const category = categorySelect ? categorySelect.value : 'all';
        const people = peopleSelect ? peopleSelect.value : 'all';

        const filtered = galleryItems.filter((item) => {
            const matchesQuery = !query || [item.title, item.caption, item.period, item.region, item.people, item.category].join(' ').toLowerCase().includes(query);
            const matchesPeriod = period === 'all' || item.period === period;
            const matchesRegion = region === 'all' || item.region === region;
            const matchesCategory = category === 'all' || item.category === category;
            const matchesPeople = people === 'all' || item.people === people;
            return matchesQuery && matchesPeriod && matchesRegion && matchesCategory && matchesPeople;
        });

        galleryEl.innerHTML = filtered.length
            ? filtered.map((item) => `
                <article class="archive-card">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="archive-card-body">
                        <div class="archive-card-meta">
                            <span class="type-badge">${item.category}</span>
                            <span>${item.year}</span>
                        </div>
                        <h3>${item.title}</h3>
                        <p>${item.caption}</p>
                        <div class="archive-credits">
                            <strong>Source:</strong> ${item.source}<br>
                            <strong>Credit:</strong> ${item.credit}
                        </div>
                    </div>
                </article>
            `).join('')
            : '<p class="archive-empty">No historical items match your current filters.</p>';
    };

    const renderArchiveDocuments = () => {
        if (!archiveDocsEl) return;

        archiveDocsEl.innerHTML = archiveDocuments.map((item) => `
            <article class="archive-doc-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="archive-doc-copy">
                    <div class="archive-card-meta">
                        <span class="type-badge ${item.type}">${item.type}</span>
                        <span>${item.year}</span>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <div class="archive-credits">
                        <strong>Source:</strong> ${item.source}<br>
                        <strong>Credit:</strong> ${item.credit}
                    </div>
                    <a href="${item.link}" target="_blank" rel="noreferrer" class="archive-link">View item</a>
                </div>
            </article>
        `).join('');
    };

    [searchInput, periodSelect, regionSelect, categorySelect, peopleSelect].forEach((field) => {
        if (field) {
            field.addEventListener('input', renderGallery);
            field.addEventListener('change', renderGallery);
        }
    });

    renderGallery();
    renderArchiveDocuments();

    const timelineEntries = {
        '1957': {
            year: '1957',
            title: 'Ghana becomes independent',
            image: 'images/osagyefo.jpg',
            text: 'On 6 March 1957, Ghana became the first sub-Saharan African nation to gain independence from colonial rule. The historic moment inspired a generation of activists across the continent and signalled a bold new chapter in African history.',
            narrative: [
                'Ghana’s independence was not a sudden event. It was the result of years of protest, political organising, educational activism, and the courage of communities that insisted on dignity and self-rule. Before independence, the Gold Coast was governed under British colonial authority, and ordinary citizens were demanding a greater voice in the future of their country.',
                'The movement gathered strength through political parties, youth groups, labour organisations, and community leaders who believed that Ghana could build a freer, stronger future. Dr. Kwame Nkrumah became the face of that dream, speaking with conviction about liberation, economic development, and Pan-African unity.',
                'When the country declared independence on 6 March 1957, it sent a powerful message across Africa: colonial domination was not permanent, and the people of Africa had the right to shape their own destiny. The event became a symbol of hope, identity and Black pride for generations to come.'
            ],
            subpoints: [
                {
                    title: 'The Gold Coast under colonial rule',
                    image: 'images/old accra.jpg',
                    description: 'Before independence, Ghana was called the Gold Coast, a territory shaped by colonial administration, trade, labour systems, and the deep resilience of its people. Communities were already building political awareness and demanding rights, education, and representation.'
                },
                {
                    title: 'The freedom movement grows',
                    image: 'images/nkrumah.jpg',
                    description: 'Activists, workers, students, and nationalists pushed the fight for self-rule forward. They organised meetings, led campaigns, and challenged the idea that Ghana should remain governed by colonial systems that denied its people full political power.'
                },
                {
                    title: 'The moment of independence',
                    image: 'images/cid.jpg',
                    description: 'On 6 March 1957, Ghana raised its flag and declared freedom. That historic moment marked the start of a new chapter, not only for Ghana, but for the entire African continent, whose people saw in Ghana the possibility of a liberated future.'
                }
            ],
            facts: ['First sub-Saharan African nation to gain independence', 'Kwame Nkrumah became the first Prime Minister', 'The Gold Coast was renamed Ghana']
        },
        '1966': {
            year: '1966',
            title: 'A turning point in Ghana’s political journey',
            image: 'images/saving%20the%20nation.jpg',
            text: 'The 1966 coup marked a major turning point in the country’s political history. It reminded Ghanaians that democracy, accountability and national unity remain essential to building a stable nation.',
            narrative: [
                'The political climate in Ghana changed dramatically in the years after independence. As the country sought to define its identity, governance, economic policy, and national priorities became contested issues. The 1966 coup was a dramatic interruption in that journey and a deep reminder that freedom requires strong institutions as well as political leadership.',
                'This period also opened an important national conversation about who Ghana wanted to become. It highlighted the need for accountability, inclusion, and a democratic culture that respects the will of the people. The lessons of that moment remain important in discussions about leadership, stability, and national development.',
                'Even in times of upheaval, the Ghanaian story kept evolving. Citizens continued to ask what kind of republic they wanted, how power should be exercised, and how the country could remain faithful to the ideals of independence, dignity and progress.'
            ],
            subpoints: [
                {
                    title: 'The shift in national politics',
                    image: 'images/democracy.jpg',
                    description: 'After independence, Ghana faced difficult decisions about governance, economy, and political leadership. This period showed how important institutions are when a nation is trying to balance ambition, stability, and public trust.'
                },
                {
                    title: 'The message of accountability',
                    image: 'images/Ghanaians.jpeg',
                    description: 'The upheaval reminded citizens that freedom must grow into democratic discipline. Strong leadership is important, but so are transparency, checks and balances, and respect for the people’s voice.'
                },
                {
                    title: 'The long lesson for democracy',
                    image: 'images/square.jpg',
                    description: 'Ghana’s political journey did not end with the coup. Instead, it deepened the country’s understanding of governance, national resilience, and the value of democratic continuity.'
                }
            ],
            facts: ['The first military coup in Ghana', 'The government changed direction sharply', 'National conversations about leadership and governance deepened']
        },
        '1992': {
            year: '1992',
            title: 'A new democratic chapter',
            image: 'images/Ghanaians.jpeg',
            text: 'Ghana returned to constitutional rule in 1992, opening a new stage of democratic governance and peaceful political transitions. It helped shape the country’s reputation as a beacon of stability in West Africa.',
            narrative: [
                'The 1992 Constitution represented a hopeful reset for Ghana. It restored constitutional order, broadened democratic participation, and gave citizens a stronger framework for political expression. It also reaffirmed the idea that the nation’s destiny should rest on the rule of law and the people’s voice.',
                'This period ushered in a more institutionalised democratic culture, where elections, civic participation and peaceful transfers of power became central to Ghana’s identity. The country gradually became known for its political maturity, fair electoral processes and resilient civil society.',
                'These gains mattered not only for Ghana’s internal development, but for the wider region as well. Ghana emerged as an example of how democracy, national unity and accountability could be strengthened over time, especially when citizens remain committed to the values of freedom.'
            ],
            subpoints: [
                {
                    title: 'A constitutional reset',
                    image: 'images/saving%20the%20nation.jpg',
                    description: 'The 1992 Constitution gave Ghana a new framework for constitutional justice, rights, and governance. It restored faith in the idea that national progress should be anchored in law, citizenship, and collective responsibility.'
                },
                {
                    title: 'A democratic culture grows',
                    image: 'images/large_000000.jpg',
                    description: 'By making multiparty politics and elections more central to national life, Ghana strengthened its democratic culture. Citizens increasingly saw participation, voting, and peaceful leadership transitions as essential to the national project.'
                },
                {
                    title: 'Regional influence',
                    image: 'images/osagyefo.jpg',
                    description: 'Ghana’s democratic progress inspired confidence across the region and reinforced the idea that stability can be built alongside freedom, civic engagement, and purposeful leadership.'
                }
            ],
            facts: ['Fourth Republican Constitution adopted', 'Multi-party democracy was firmly established', 'Free and fair elections became a national norm']
        },
        '2027': {
            year: '2027',
            title: 'Ghana looks ahead to 70 years',
            image: 'images/square.jpg',
            text: 'As Ghana prepares to mark 70 years of independence in 2027, the country reflects on its progress and renews its commitment to unity, innovation, youth leadership and national development. The story continues.',
            narrative: [
                'Today, Ghana stands at a defining moment in its national journey. As the country approaches 70 years of independence, it reflects on how far it has come in education, infrastructure, culture, entrepreneurship, and regional diplomacy. This is a time to honour the legacy of those who struggled for freedom and to celebrate the role of ordinary citizens in shaping national progress.',
                'The future of Ghana will depend on the vision, energy and responsibility of young people. From technology and agriculture to the arts and civic leadership, the next generation has a powerful role to play in building a nation that is both modern and rooted in its values. The celebration of 70 years is therefore not only about looking back—it is also about imagining a bold and inclusive future.',
                'The 2027 milestone invites every Ghanaian to reflect on the meaning of independence: not simply political freedom, but the ongoing work of peace, justice, dignity, prosperity and national pride. Ghana’s story is still unfolding, and its next chapter will be shaped by the choices made today.'
            ],
            subpoints: [
                {
                    title: 'Honouring the legacy',
                    image: 'images/nkrumah.jpg',
                    description: 'As Ghana marks 70 years, the nation recognises the sacrifices and leadership that made independence possible. The celebration is a way of keeping memory alive for younger generations.'
                },
                {
                    title: 'Youth and innovation',
                    image: 'images/Ghanaians.jpeg',
                    description: 'The future of Ghana depends on young people continuing to innovate, lead, and create opportunities in business, technology, the arts, and community building.'
                },
                {
                    title: 'A new chapter of nation-building',
                    image: 'images/saving%20the%20nation.jpg',
                    description: 'Ghana’s next chapter will be shaped by unity, education, civic pride, and a commitment to building a country that honours its history while moving boldly toward the future.'
                }
            ],
            facts: ['70 years of freedom and nation-building', 'A focus on youth, digital growth and culture', 'A call to honour the past while shaping the future']
        }
    };

    const updateTimeline = (year) => {
        const entry = timelineEntries[year];
        if (!entry || !timelineDetail) return;

        timelineButtons.forEach((button) => {
            const isActive = button.dataset.year === year;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        timelineDetail.innerHTML = `
            <span class="timeline-year-tag">${entry.year}</span>
            <h3>${entry.title}</h3>
            <div class="timeline-media">
                <img src="${entry.image}" alt="${entry.title} in Ghana’s history">
            </div>
            <div class="timeline-story">
                <p>${entry.text}</p>
                ${entry.narrative.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            </div>
            <div class="timeline-subpoints">
                ${entry.subpoints ? entry.subpoints.map((point) => `
                    <article class="timeline-subpoint-card">
                        <img src="${point.image}" alt="${point.title}">
                        <div>
                            <h4>${point.title}</h4>
                            <p>${point.description}</p>
                        </div>
                    </article>
                `).join('') : ''}
            </div>
            <ul>
                ${entry.facts.map((fact) => `<li>${fact}</li>`).join('')}
            </ul>
        `;
    };

    timelineButtons.forEach((button) => {
        button.addEventListener('click', () => updateTimeline(button.dataset.year));
    });

    updateTimeline('1957');

    const quizForm = document.getElementById('history-quiz');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const answers = {
                q1: '1957',
                q2: 'black star',
                q3: 'kwame nkrumah'
            };

            let score = 0;
            const formData = new FormData(quizForm);

            ['q1', 'q2', 'q3'].forEach((question) => {
                const selected = (formData.get(question) || '').toString().trim().toLowerCase();
                if (selected === answers[question].toLowerCase()) {
                    score += 1;
                }
            });

            quizResult.textContent = `You scored ${score} out of 3. ${score === 3 ? 'Excellent work! You know Ghana’s story well.' : 'Nice try — keep learning and celebrate Ghana’s journey.'}`;
            quizResult.classList.remove('hidden');
        });
    }

    const storyForm = document.getElementById('story-form');
    const storyMessage = document.getElementById('story-message');

    if (storyForm && storyMessage) {
        storyForm.addEventListener('submit', (event) => {
            event.preventDefault();
            storyMessage.textContent = 'Thank you for sharing your story. Your reflection helps keep Ghana’s history alive for future generations.';
            storyMessage.classList.remove('hidden');
            storyForm.reset();
        });
    }
});
