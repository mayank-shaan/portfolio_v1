const vueAppIntro = new Vue({
    el: '#scene2',
    computed: {
        supportsWebPComputed: function () {
            return window && window.Modernizr && window.Modernizr.webplossless;
        },
    }
});

const vueAppIntroMobile = new Vue({
    el: '#scene',
    computed: {
        supportsWebPComputed: function () {
            return window && window.Modernizr && window.Modernizr.webplossless;
        },
    }
});

const vueAppSkills = new Vue({
el: '#skills',
data: { 
    display: 'redbox', 
    skills: [
        {
            name: 'Vue Js',
            percentage: '98%',
        },
        {
            name: 'React Js',
            percentage: '92%',
        },
        {
            name: 'Nuxtjs',
            percentage: '97%',
        },
        {
            name: 'Node js',
            percentage: '84%',
        },
        {
            name: 'Angularjs',
            percentage: '73%',
        },
        {
            name: 'javascript',
            percentage: '90%',
        },
    ],
}
})

const vueAppTestimonials = new Vue({
el: '#testimonials',
data: {
    title: "What my friends say",
    testimonials: [
        {
            name: "Shubham Patlani",
            image: "media/designer/patlani-old.jpg",
            post: "<p class='text-muted'>Partner technology at <span class='orange'>hireXP</span></p>",
            message: "Working with Mayank was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients..",
            classes: "item active"
        },
        {
            name: "Mark",
            image: "media/designer/mark.jpg",
            post: "<p class='text-muted'>CEO at <span class='orange'>Facebook</span></p>",
            message: "Mayank is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.",
            classes: "item"
        },
        {
            name: "Akshay",
            image: "media/designer/akshay.jpg",
            post: "<p class='text-muted'>Partner technology at <span class='orange'>hireXP</span></p>",
            message: "Mayank has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site.",
            classes: "item"
        },
        {
            name: "Barak Obama",
            image: "media/designer/obama.jpg",
            post: "<p class='text-muted'>Former president at <span class='orange'>The United states of America</span></p>",
            message: "We have the fortune of working with Mayank on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.",
            classes: "item"
        },
    ],
}
})

const vueAppTimeline = new Vue({
el: '#timeline',
data: { 
    timelineEvents: [
        {
            title: "Senior Frontend Developer at Oye! Rickshaw",
            duration: "June 2020 - present",
            description: "<p> Oye! Rickshaw provides an app-based e-rickshaw booking facility to the users. We connect people with public transportation and nearby public places. </p>",
            eventClass: "event-item",
        },
        {
            title: "Hugged Shah Rukh Khan ❤️",
            duration: "December 17 2018",
            description: "<p>Yes that actually happend. <a class='customAnchor' href='https://www.facebook.com/photo.php?fbid=2157405180978918&set=a.123091254410331&type=3&theater' target='_blank'> Check for yourslef 😛 </a> </p>",
            eventClass: "event-item",
        },
        {
            title: "Senior Software Developer at Lightstone Labs",
            duration: "August 2018 - July 2020",
            description: "<p> During my two years at Lightstone Labs, I worked on numerous projects across several different domains. Here are some of the notable products. </p>",
            products: "Products:" +
                        "<a class='customAnchor' href='https://angel.co/projects/1128595-masmic' target='_blank'>Masmic</a>," +
                        "<a class='customAnchor' href='https://angel.co/projects/1139736-swiflearn' target='_blank'>Swiflearn</a>," +
                        "<a class='customAnchor' href='https://angel.co/projects/1139732-msmex' target='_blank'>MSMEx</a>," +
                        "<a class='customAnchor' href='https://angel.co/projects/1139740-koinok' target='_blank'>KoinOK</a>,",
            eventClass: "event-item",
        },
        {
            title: "Frontend Engineer at HireXP",
            duration: "May 2017 - June 2018",
            description: "<p> Founding team member at <a class='customAnchor' href='https://www.hirexp.com/' target='_blank'>hireXP</a>. Developed a solution which streamlines recruitment process and gives you complete control & visibility into your recruitment process. </p>",
            eventClass: "event-item",
        },
        {
            title: "System Engineer at Infosys",
            duration: "2017",
            description: "<p> From college, I got placed in Infosys. I made some great friends, Travelled a lot, met some amazing people, And started my career as a Developer. </p>",
            eventClass: "event-item",
        },
        {
            title: "Redhat Certified Engineer",
            duration: "2015",
            description: "<p> Completed <span style='font-weight: bold;'>\"Red Hat Certified System Administrator (RHCSA®)\"</span> and <span style='font-weight: bold;'>Red Hat Certified Engineer (RHCE®)</span> under mentorship of <a class='customAnchor' href='https://www.linkedin.com/in/codeburster/' target='_blank'>Mr. Mayank Sachan</a> who helped me took away my phobia of terminals and CLI. </p>",
            eventClass: "event-item",
        },
        {
            title: "Certified Ethical Hacker",
            duration: "2014",
            description: "<p>Became a professional ethical hacker under merntorship of <a class='customAnchor' href='https://www.linkedin.com/in/viditbaxi/' target='_blank'>Mr. Vidit Baxi</a> who showed me how awesome things are done in real world.</p>",
            eventClass: "event-item",
        },
        {
            title: "Persued Engineering from TIT&s",
            duration: "2013-2017",
            description: "<p>Tits, Yup, No kidding! Completed my batchelor's in computer science from TITS (The Technological Institute of Textile & Sciences)</p>",
            eventClass: "event-item",
        },
        {
            title: "Stuidied at Jain Public School",
            duration: "1998 - 2013",
            description: "<p> Memories have been the part and parcel of my life, much like everyone else. Some of the good memories in life are definitely of my school life. </p>",
            eventClass: "event-item",
        },
        {
            title: "Swim champion 27<sup>th</sup> Aug 1995",
            duration: "1995 - present",
            description: "<p>I was born with a twin sister, She is 7 minutes older then me. Which unfortunately makes me the youngest in my family.</p>",
            eventClass: "event-item",
        },
    ],
}
})