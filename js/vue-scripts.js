const vueAppParalaxWeb = new Vue({
    el: '#paralaxWeb',
    data: {
        name: 'Mayank Shaan Dhania',
        activeParalax: null,
    },
    methods: {
        parseQueryParams() {
            var params = new URLSearchParams (document.location.search.substring(1));
            var paralax = params.get("paralax");
            if (paralax) {
                this.activeParalax = paralax;
            } else {
                this.activeParalax = 'pushkar';
            }
        },
        updateParalax() {
            var url = window.location.origin;    
            if(!this.activeParalax || this.activeParalax == 'pushkar') {
                url += '?paralax=kashmir'
            } else {
                url += '?paralax=pushkar'
            } 
            window.location.href = url;
        }
    },
    mounted() {
        this.parseQueryParams();
    },
    computed: {
        supportsWebPComputed: function () {
            return window && window.Modernizr && window.Modernizr.webplossless;
        },
    }
});

const vueAppParalaxMobile = new Vue({
    el: '#paralaxMobile',
    data: {
        name: 'Mayank Shaan Dhania',
        currentPost: 'I am a developer/designer',
        currentPostIndex: 0,
        posts: ['designer', 'artist', 'abc', 'asdas', 'asdasd']
    },
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

const projectTypeConst = {
    ALL: 'all',
    WEBSITE: 'webSite',
    WEBAPP: 'webApp',
    OTHER: 'other',
};

var angelThumbnailSize = 'width=400,height=400';
var angelThumbnailURL = `https://angel.co/cdn-cgi/image/${angelThumbnailSize},format=auto,fit=scale-down/https://s3.amazonaws.com/poly-screenshots.angel.co/Project/`;
// var angelThumbnailSize = 'width=auto,height=auto';

const vueAppFolio = new Vue({
    el: '#folio',
    methods: {
        mouseOver: function(name){
            this.mouseoverActive = name;
        },
        handleJumpToProject: function(link){
            console.log('mouseover', link);
            window.open(link, "_blank")
        },
        shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
        }
    },
    data: {
        mouseoverActive: false,
        navBarTitles: [
            {
                name: 'All',
                type: projectTypeConst.ALL,
            },
            {
                name: 'Web Apps',
                type: projectTypeConst.WEBAPP,
            },
            {
                name: 'Web Sites',
                type: projectTypeConst.WEBSITE,
            },
            {
                name: 'Other cool stuff',
                type: projectTypeConst.OTHER,
            },
        ],
        projects: [
            {
                name: 'Masmic',
                type: projectTypeConst.WEBAPP,
                title: "A platform to crowd source users Opinions, Ideas and Wisdom",
                description: "Masmic is an online social media Q&A platform where users are incentivized for answering the questions asked by other users. Best answers are voted by the masmic community which are also incentivized for their voting activity.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/94/1128595/86f20a48308379812386f28c15446410-original.png',
                thumbnail: `${angelThumbnailURL}94/1128595/86f20a48308379812386f28c15446410-original.png`,
                action: '',
                link: 'https://angel.co/projects/1128595-masmic',
            },
            {
                name: 'MSMEx',
                type: projectTypeConst.WEBAPP + ' ' + projectTypeConst.WEBSITE,
                title: "Experts sharing their insights through interactive videos.",
                description: "The project connects industry experts with small and medium scale company promoters. The interaction happens online via video and audio conferencing which works on android, mobile and web browser. The video interaction supports both one-to-one and one-to-many format.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/14/1139732/a7af107f17c3fe55cfea01a2e557fcf7-original.png',
                thumbnail: `${angelThumbnailURL}14/1139732/a7af107f17c3fe55cfea01a2e557fcf7-original.png`,
                action: '',
                link: 'https://www.msmex.in/',
            },
            {
                name: 'Swiflearn',
                type: projectTypeConst.WEBAPP + ' ' + projectTypeConst.WEBSITE,
                title: "An Online Tuition platform, Face-to-Face and LIVE",
                description: "Swiflearn is an Online Tuition platform providing Face-to-Face LIVE Classes for Grades 5-10, Math, Science & English.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/28/1139736/c7c230a630d5abd10a93b9e4881b181a-original.jpg',
                thumbnail: `${angelThumbnailURL}28/1139736/c7c230a630d5abd10a93b9e4881b181a-original.jpg`,
                action: '',
                link: 'https://swiflearn.com/',
            },
            {
                name: 'KoinOK',
                type: projectTypeConst.WEBAPP,
                title: "Cryptocurrency Exchange",
                description: "A cryptocurrency exchange which we have deployed for multiple clients based out of India, China and Singapore. As part of the white-label exchange setup, you will get the blockchain nodes setup for popular cryptocurrencies like bitcoin, ethereum, ripple, etc., configurable KYC module, highly secured wallets, infra setup on AWS with Auto-Scaling ensuring high availability, and a comprehensive admin dashboard.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/cd/1139740/0b1d8268e272512fe41dd2a2734a6a15-original.png',
                thumbnail: `${angelThumbnailURL}cd/1139740/0b1d8268e272512fe41dd2a2734a6a15-original.png`,
                action: '',
                link: 'https://angel.co/projects/1139740-koinok',
            },
            {
                name: 'hireXP',
                type: projectTypeConst.WEBAPP + ' ' + projectTypeConst.WEBSITE,
                title: "A new age recruitment & candidate experience software",
                description: "hireXP is a new age recruitment solution that empowers you to hire the right candidate; every single time. Backed by a strong analytics framework, hireXP takes all the guesswork out of recruiting; allowing you to intelligently customize and automate key hiring processes, as per your evolving needs.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/f7/716194/fe199c7c5c294304fb0d3e111f51071e-original.jpg',
                thumbnail: `${angelThumbnailURL}f7/716194/fe199c7c5c294304fb0d3e111f51071e-original.jpg`,
                action: '',
                link: 'https://www.hirexp.com/',
            },
            {
                name: 'CanXP',
                type: projectTypeConst.WEBAPP,
                title: "Tool for capturing feedback of candidates applying for a job",
                description: "CanXP is a voice platform that enables you to keep your candidates engaged and informed at every stage of the hiring process.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/32/755139/9835cec3937d6202be0eba8711e374ba-original.png',
                thumbnail: `${angelThumbnailURL}32/755139/9835cec3937d6202be0eba8711e374ba-original.png`,
                action: '',
                link: 'https://www.hirexp.com/candidate-experience-software.html',
            },
            {
                name: 'Smart Mirror (IoT)',
                type: projectTypeConst.OTHER,
                title: "It is a smart mirror. Based on Raspberry pi",
                description: "With the help of Raspberry pi and good people at Github. created this awesome product which can tell - date,time,weather forecast,temperature,live news and a few other good things.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/69/533320/d5b04d9cfdbd2706a7cc31f7708cd37b-original.jpg',
                thumbnail: `${angelThumbnailURL}69/533320/d5b04d9cfdbd2706a7cc31f7708cd37b-original.jpg`,
                action: '',
                link: 'https://angel.co/projects/533320-smart-mirror-iot',
            },
            {
                name: "'Kriti' - Magazine (2015, 2016)",
                type: projectTypeConst.OTHER,
                title: "Kriti is annual magazine of TIT&s. published every year to reflect the culture of the institution",
                description: "After team collected all the data to be published, it was proofread and passed on to my team. Using tools like Corel Draw and Adobe Photoshop, My role was to make everything in the magazine look amazing.",
                image: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/71/645519/d87f91d6c91c308e546c681d4d8003eb-original.jpg',
                thumbnail: `${angelThumbnailURL}71/645519/d87f91d6c91c308e546c681d4d8003eb-original.jpg`,
                action: '',
                link: 'https://angel.co/projects/645519-kriti-annual-magazine-edition-2015-edition-2016',
            },
            {
                name: "Pro Sports 11",
                type: projectTypeConst.WEBSITE,
                title: "ProSports11 is one of the India's fastest growing fantasy cricket app",
                description: "",
                image: 'https://ihdfantasy.com/wp-content/uploads/2019/04/prosports11-fantasy-cricket.jpg',
                thumbnail: `https://solutions-assets.sftcdn.net/uploads/00000558085.jpg`,
                action: '',
                link: 'https://www.prosports11.com/',
            },
            {
                name: "Holi celebrations in India",
                type: projectTypeConst.OTHER,
                title: "Holi celebrations in India | Braj | Nandgaon | Vrindavan | 2020 | MSD Media | Project Gulaal",
                description: "Joy paints itself on everything, as the Holi hues spread across Braj, India. Though a widely celebrated festival throughout the country, Holi celebrations are unmatched here, spanning upto 10 days. The air is alive with abir and gulal, folk songs from the bards and happiness. Come to Braj on Holi, and get sketched in the colors of life.",
                image: '',
                thumbnail: `https://i.ytimg.com/vi/IJ0I0GqE9Vc/mqdefault.jpg`,
                action: 'IFRAME',
                link: 'https://www.youtube.com/embed/IJ0I0GqE9Vc?autoplay=0&rel=0',
            },
            {
                name: "Anki Ki galati | Short Film",
                type: projectTypeConst.OTHER,
                description: "This film was completely made in 50 HOURS. Story, Scripting, Casting, Shooting, Dubbing, Editing, Music, Rendering... Everything !",
                title: "",
                image: '',
                thumbnail: `https://i.ytimg.com/vi/zSV0m3fBXlQ/mqdefault.jpg`,
                action: 'IFRAME',
                link: 'https://www.youtube.com/embed/zSV0m3fBXlQ?autoplay=0&rel=0',
            },
            {
                name: "Kashmir - Vlog 2019",
                type: projectTypeConst.OTHER,
                description: "We recently went to Srinagar for the holidays. It was a short trip so I tried to cover as many places as possible like Gulmarg, Pahalgam, and places in Srinagar like Dal lake and Mughal gardens. You’ll get to see beautiful valleys and greenery all around. Overall its a very beautiful place and we didn’t face any issues.",
                title: "",
                image: '',
                thumbnail: `https://i.ytimg.com/vi/mBK3ZgenNKg/mqdefault.jpg`,
                action: 'IFRAME',
                link: 'https://www.youtube.com/embed/mBK3ZgenNKg?autoplay=0&rel=0',
            },
            {
                name: "Google Home Mini vs Amazon Echo Dot",
                type: projectTypeConst.OTHER,
                description: "An objective comparison between the Google Home and Amazon Echo always-listening speakers.",
                title: "",
                image: '',
                thumbnail: `https://i.ytimg.com/vi/uKKSVCf7BpU/mqdefault.jpg`,
                action: 'IFRAME',
                link: 'https://www.youtube.com/embed/uKKSVCf7BpU?autoplay=0&rel=0',
            },
        ],
    },
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
            image: "media/designer/testimonials/patlani-old.jpg",
            post: "<p class='text-muted'>Partner technology at <span class='orange'>hireXP</span></p>",
            message: "Working with Mayank was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients..",
            classes: "item active"
        },
        {
            name: "Ashwani Agarwal",
            image: "media/designer/testimonials/ashwani.jpg",
            post: "<p class='text-muted'>Senior Software Developer at <span class='orange'>Airtel</span></p>",
            message: "The sheer passion to get things done is what put him on the cream layer of developers. He is a quick learner, creative, logical, get-it-done kind of person. We (as in Developers) often complain about context-switching deteriorates productivity, Mayank has managed to surpass that barrier. He is evenly considerate of the non-development aspects of building and launching a product.",
            classes: "item"
        },
        {
            name: "Barak Obama",
            image: "media/designer/testimonials/obama.jpg",
            post: "<p class='text-muted'>Former president at <span class='orange'>The United states of America</span></p>",
            message: "We have the fortune of working with Mayank on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.",
            classes: "item"
        },
        {
            name: "Rohit Jindal",
            image: "media/designer/testimonials/rohit.jpg",
            post: "<p class='text-muted'>Head of Marketing and Growth at <span class='orange'>Swiflearn</span></p>",
            message: "Mayank was responsible for front-end development of Masmic platform. I had a great time working with him. He is very talented, always curious to learn more and has a sense of ownership for his work. Happy to recommend him!",
            classes: "item"
        },
        {
            name: "Akshay",
            image: "media/designer/testimonials/akshay.jpg",
            post: "<p class='text-muted'>Partner technology at <span class='orange'>hireXP</span></p>",
            message: "Mayank has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site.",
            classes: "item"
        },
        // {
        //     name: "Mark",
        //     image: "media/designer/testimonials/mark.jpg",
        //     post: "<p class='text-muted'>CEO at <span class='orange'>Facebook</span></p>",
        //     message: "Mayank is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.",
        //     classes: "item"
        // },
    ],
}
})

const vueAppTimeline = new Vue({
el: '#timeline',
data: { 
    timelineEvents: [
        {
            title: "Software Engineer III at Walmart Labs",
            duration: "August 2020 - present",
            description: "<p>Walmart Labs is the technology arm of <b>Walmart</b>. Reimagining retail for our 260 million daily shoppers</p>",
            eventClass: "event-item",
        },
        {
            title: "Hugged Shah Rukh Khan ❤️",
            duration: "December 17 2018",
            description: "<p>Yes that actually happend. <a class='customAnchor' href='https://www.facebook.com/photo.php?fbid=2157405180978918&set=a.123091254410331&type=3&theater' target='_blank'> Check for yourself 😛 </a> </p>",
            eventClass: "event-item",
        },
        {
            title: "Senior Software Developer at Lightstone Labs",
            duration: "August 2018 - August 2020",
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
            eventClass: "event-item marginless",
        },
    ],
}
})