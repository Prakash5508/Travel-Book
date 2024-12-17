const reviews = [
    {
        id: 1,
        name:'Virat Kohli',
        job:'Cricketer',
        img:'https://images.news18.com/ibnlive/uploads/2022/12/virat-kohli-celebrates-his-44th-odi-ton-ap-photo-167066553516x9.jpg',
        text:`'Virat Kohli (born 5 November 1988) is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. A former captain in all formats of the game, Kohli retired from the T20I format following India's win at the 2024 T20 World Cup. He's a right-handed batsman and an occasional unorthodox right arm quick bowler.'`,
    },
    {
        id: 2,
        name:'Peace Pagoda',
        job:'Darjeeling',
        img:'https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-1/467182508_906681474770398_1772350763775752396_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=C8cv6oRrrBUQ7kNvgHJUNjM&_nc_zt=24&_nc_ht=scontent.fdel27-3.fna&_nc_gid=AKd5cyQ-cn3eLNvS522W9s5&oh=00_AYBOyNYT3_KF7OQgXu4iMbNaySa8DTyGx-F-gDD6pWfieA&oe=6761E612',
        
        text:'The Peace Pagoda in Darjeeling is a sacred symbol of harmony and brotherhood.Designed by Dr. M Ohka of Japan, it showcases four avatars of Buddha and is 28.5 meters tall with a diameter of 23 meters .Constructed in 1972, it is part of the 70 Japanese pagodas built around the world by the Nipponzan Myohoji organization.'
    },
    {
    id: 3,
    name:'Kamakhya Temple',
    job:'Assam(Guwahati)',
    img:'https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/450613653_824318489673364_5562784164759086442_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j82ulrtVkqIQ7kNvgGIHjrl&_nc_zt=23&_nc_ht=scontent.fdel27-3.fna&_nc_gid=AwdBvky2sqxo7j66jKgKoCQ&oh=00_AYDh9lccZxtNFEv66l9lMR9xJNlmUpoNIISSyweC3vPXfQ&oe=6761D549',
    text:'Kamakhya Temple, perched on the Nilachal Hill in Guwahati, Assam, is a historic and mystical sanctuary that has drawn devotees for centuries. This temple is dedicated to Goddess Kamakhya, an embodiment of Shakti, and is revered as one of the 51 Shakti Pithas in Hinduism.',
    },
    {
        id: 4,
        name:'Iskcon Temple',
        job:'Mayapur',
        img:'https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/363337142_636907295081152_7267588618572887926_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TTjx5uQ2iiAQ7kNvgG4J-Sg&_nc_zt=23&_nc_ht=scontent.fdel27-5.fna&_nc_gid=A2yK8JhSGbkibSQq-OheXu7&oh=00_AYA2r8FNlmOarfwUgbfzByRYsTM4E83JOYhpR65tFxKJpQ&oe=6761F975',
        text:'Mayapur, in West Bengal, is a place of the highest importance for Sanatan Dharma and particularly for the Vaishnava sect. Mayapur is the birthplace of Chaitanya Mahaprabhu, considered an Avatar of Shri Krishna. Chaitanya Mahaprabhu’s brother who is believed to be an Avatar of Balaram appeared at the same time as Mahaprabhu. Mayapur is the worldwide headquarters of the International Society for Krishna Consciousness (ISKCON).',
    },
    {
        id: 5,
        name:'Vaishnodevi',
        job:'Katra',
        img:'https://scontent.fdel27-7.fna.fbcdn.net/v/t39.30808-6/468214447_18090554389504206_1440387405699688308_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NUyTewX9cKgQ7kNvgEdC03a&_nc_zt=23&_nc_ht=scontent.fdel27-7.fna&_nc_gid=ANV4y0ozHo6HK57SuOeQ7c_&oh=00_AYBBvm4FAQ8Kx_X8cLJlhUHwgRdfzVrnvkfq_xu0fAWwmA&oe=6761FF2A',
        text:'Vaishno Devi (also known as Mata Rani, Trikuta, Ambe and Vaishnavi) is a manifestation of the Hindu mother goddess Lakshmi in some beliefs. Vaishno Devi is worshipped as a combined avatar of the goddesses Mahakali, Mahalakshmi, and Mahasarasvati.Vaishnavi is the worshipper of Vishnu who meditates to him on the Trikut mountain and awaits his arrival.'
    },
    {
        id: 6,
        name:'Khatu Shyam',
        job:'Khatu Village',
        img:'image/pk.jpg',
        text:'Khatu Shyam Temple (Rajasthani/Hindi: खाटू श्याम मंदिर) is a Hindu temple in Khatoo village, just 43 km from Sikar City in the Sikar district of the Indian State of Rajasthan. It is a pilgrimage site for worshipping the deity Krishna and Barbarika who is often venerated as a shyam baba . Devotees believe the temple houses the head of Barbarika or Khatu-shyam, a legendary warrior who sacrifices his head upon the request of Krishna during the antebellum of the Kurukshetra War.',
    },
    {
        id: 7,
        name:'Victoria Memorial',
        job:'Kolkata',
        img:'https://scontent.fdel27-6.fna.fbcdn.net/v/t39.30808-6/363413305_637286818376533_8785931500564747893_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_ohc=W5GzlizIZd8Q7kNvgHLsKSO&_nc_zt=23&_nc_ht=scontent.fdel27-6.fna&_nc_gid=AGXzwnNGS14nVHRBbf0RfOz&oh=00_AYCzOazDx129rtTGTEg5WwKtYTa-csmM2Bg_AkcWawmwgA&oe=6761EDD3',
        text:'The Victoria Memorial is a large marble monument on the Maidan in Central Kolkata, having its entrance on the Queens Way. It was built between 1906 and 1921 by the British Raj. It is dedicated to the memory of Queen Victoria, the Empress of India from 1876 to 1901. It is the largest monument to a monarch anywhere in the world. It stands at 64 acres of gardens and is now a museum under the control of the Ministry of Culture, Government of India.',
    },
    {
        id: 8,
        name:'Golden Temple',
        job:'Amritsar',
        img:'image/golden.jpg',
        text:'The Golden Temple (also known as the Harmandir Sahib,or the Darbār Sahib,or Suvaran Mandir is a gurdwara located in the city of Amritsar, Punjab, India. It is the pre-eminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.',
    },
    {
        id: 9,
        name:'Kurseong',
        job:'Near Darjeeling',
        img:'image/kuresong.jpg',
        text:`'Also known as the 'Land of White Orchids', Kurseong is a hill station located close to Darjeeling famous for its waterfalls, temples and Buddhist gompas apart from the excellent view that the place provides. Perched on the Siliguri-Darjeeling highway, Kurseong is a quiet hill station.'`,
    },
    {
        id: 10,
        name:'Tiger Hill',
        job:'Darjeeling',
        img:'image/darj.jpg',
        text:'Tiger Hill in Darjeeling, at 2,567m altitude, offers panoramic views of Mount Kanchenjunga. Visitors can reach by taxi, enjoy lush greenery, tea gardens, and photography.Tiger Hill, situated in the quaint town of Darjeeling, West Bengal, is renowned for offering one of the most spectacular sunrise views in the world. This picturesque hill station is nestled in the Himalayan foothills and attracts tourists from far and wide, all eager to witness the breathtaking spectacle of the sunrise over the majestic snow-capped peaks of the Himalayas.',
    },

];


// Selecting Item
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
console.log(img)

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// setting starting item
let currentItem = 0;

// Loading initial item
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});
// Showing person based  item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Showing next item
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
        
    }
    showPerson(currentItem);
});
// Showing previous item
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// Showing random item
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
    });  



















