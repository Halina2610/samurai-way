import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

export const messagesData = [
    { id: 1, message: 'Hi, it\'s great to see you again!' },
    { id: 2, message: 'Hey! Yes, it\'s been a while. How have you been?' },
    { id: 3, message: 'I\'ve been doing well, thanks. How about you?' },
    { id: 4, message: 'Not too bad, thanks for asking. What have you been up to lately?' },
];

export const usersData = [
    { name: 'Murkiss', id: 1},
    { name: 'Miu', id: 2 },
    { name: 'Kitty', id: 3 },
];

export const postData = [
    {
        id: 1, name: 'Murkiss',
        title: 'Exploring the Cosmos',
        post: `<div>
            <p>Hello, fellow Earthlings! 🌎 As a proud cat astronaut, I'm here to share my incredible journey through the cosmos. 🚀✨</p>
            <p>Today, I had the privilege of floating weightlessly in space, surrounded by countless stars and galaxies. The view was absolutely breathtaking! 😻🌌</p>
            <p>I can't help but marvel at the vastness and beauty of the universe. It's a reminder of how small we are in the grand scheme of things. But hey, even us cats can reach for the stars! 🐾⭐</p>
            <p>Stay tuned for more updates from my cosmic adventures. Until then, remember to always dream big and reach for the moon! 🌙✨</p>
        </div>`,
        likeCount: 22,
        img: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/picture-575475-9b2fd.jpg'
    },
    {
        id: 1, name: 'Kitty',
        title: 'A Day in the Life of a Gentleman Cat',
        post: `<div>
            <p>Greetings, dear friends! Allow me, the sophisticated Gentleman Cat, to take you on a journey through elegance and refinement. 🎩🐾</p>
            <p>Today, I started my day with a luxurious grooming session, ensuring that every strand of fur is perfectly in place. A gentleman must always look his best, you know! 😺💼</p>
            <p>After my grooming routine, I proceeded to savor a delightful cup of afternoon tea, accompanied by a plate of freshly caught salmon. Ah, the pleasures of fine dining! 🍵🐟</p>
            <p>As the sun sets, I retire to my cozy armchair, where I indulge in a captivating novel by the fireplace. The literary world is my escape, transporting me to far-off lands and captivating adventures. 📚🔥</p>
            <p>Remember, my dear companions, it takes more than just a suit and a hat to be a true gentleman. It requires grace, charm, and a deep appreciation for the finer things in life. Until next time, stay classy! 🎩✨</p>
        </div>`,
        likeCount: 21,
        img: 'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg'
    },

    {
        id: 1, name: 'Miu',
        title: 'Adventures of a Feline Explorer',
        post: `<div>
            <p>Meow there, fellow adventurers! 🌍🐾 Join me, the intrepid Cat Traveler, as I embark on thrilling escapades around the globe!</p>
            <p>Today, I found myself wandering through the ancient ruins of Machu Picchu. The air was filled with mystery and the whispers of the past. What a sight to behold! 😺⛰️</p>
            <p>From there, I ventured into the dense jungles of the Amazon, where I encountered fascinating wildlife and soaked in the vibrant colors of nature. It was a true feast for the senses! 🌴🐆</p>
            <p>As the sun sets, I find solace in the bustling streets of Tokyo, immersing myself in the captivating blend of tradition and modernity. The world truly is a tapestry of wonders! 🏯🌸</p>
            <p>Remember, my curious companions, there's a whole world out there waiting to be explored. So pack your bags, follow your whiskers, and let the adventures begin! 🌎✈️</p>
        </div>`,
        likeCount: 7,
        img: 'https://sneg.top/uploads/posts/2023-06/1687572964_sneg-top-p-avi-dlya-standoffa-koti-instagram-7.jpg'
    },
]