import { HomeIcon, AboutIcon, ProductIcon } from "./icons"
import img1 from '../assets/videos/vcover1.png';
import img2 from '../assets/videos/vcover2.png';
import img3 from '../assets/videos/vcover3.png';
import video from '../assets/videos/video_1.mp4'
import facebook from '../assets/svg/facebook.svg'
import twitter from '../assets/svg/twitter.svg'
import instagram from '../assets/svg/instagram.svg'
import messenger from '../assets/svg/messenger.svg'
import youtube from '../assets/svg/youtube.svg'
import offer_1 from '../assets/svg/offer_1.png'
import offer_2 from '../assets/svg/offer_2.png'
import offer_3 from '../assets/svg/offer_3.png'
import offer_4 from '../assets/svg/offer_4.png'
import offer_title_1 from '../assets/svg/offer_title_1.gif'
import offer_title_2 from '../assets/svg/offer_title_2.gif'
import offer_title_3 from '../assets/svg/offer_title_3.gif'
import offer_title_4 from '../assets/svg/offer_title_4.gif'
import ad_1 from '../assets/images/ad_1.png'
import ad_2 from '../assets/images/ad_2.png'
import ad_3 from '../assets/images/ad_3.png'
import ad_4 from '../assets/images/ad_4.png'
import footer_1 from '../assets/images/footer_1.png'
import footer_2 from '../assets/images/footer_2.png'
import footer_3 from '../assets/images/footer_3.png'
import footer_4 from '../assets/images/footer_4.png'




export const navLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: HomeIcon
    },
    {
        id: 2,
        title: "Store",
        link: "/store",
        icon: ProductIcon
    },
    {
        id: 3,
        title: "About",
        link: "/about",
        icon: AboutIcon
    }
]


export const heroVideos = [
    {
        id: 1,
        img: img1,
        video: video
    },
    {
        id: 2,
        img: img2,
        video: video
    },
    {
        id: 3,
        img: img3,
        video: video
    }
]

export const socialLinks = [
    {
        id: 1,
        link: "/",
        title: "facebook",
        icon: facebook
    },
    {
        id: 2,
        link: "/",
        title: "messenger",
        icon: messenger
    },
    {
        id: 3,
        link: "/",
        title: "twitter",
        icon: twitter
    },
    {
        id: 4,
        link: "/",
        title: "instagram",
        icon: instagram
    },
    {
        id: 5,
        link: "/",
        title: "youtube",
        icon: youtube
    }
]


export const offerContents = [
    {
        id: 1,
        label: "24/7 Support",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.",
        thumb: offer_1,
        thumb_title: offer_title_1
    },
    {
        id: 2,
        label: "Cash Back",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.",
        thumb: offer_2,
        thumb_title: offer_title_2
    },
    {
        id: 3,
        label: "Monthly Offer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.",
        thumb: offer_3,
        thumb_title: offer_title_3
    },
    {
        id: 4,
        label: "Membership",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat ipsum corrupti molestias.",
        thumb: offer_4,
        thumb_title: offer_title_4
    }
]

export const advertisements = {
    advertisement_1: {
        id: 1,
        img: ad_1,
        content: {
            f_title: "HIGHLIGHTS",
            s_title: "NIKE AIR WITH LIMITLESS CHOICES",
            desc: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
            content_btn: "Explore More"
        }
    },
    advertisement_2: {
        id: 2,
        img: ad_2,
        content: {
            f_title: "FEATURED",
            s_title: "NIKE SNEAKERS AIR LANCING SHOES",
            desc: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
            content_btn: "Explore More"
        }
    },
    advertisement_3: {
        id: 3,
        img: ad_3,
        content: {
            f_title: "FEATURED",
            s_title: "Nike Adapt BB Pro",
            desc: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
            content_btn: "Explore More"
        }
    },
    advertisement_4: {
        id: 4,
        img: ad_4,
        content: {
            f_title: "HIGHLIGHTS",
            s_title: "Air Jordan PR3",
            desc: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
            content_btn: "Explore More"
        }
    },
}

export const footer_contacts = [
    {
        id: 1,
        link: '/',
        icon: footer_1,
    },
    {
        id: 2,
        link: '/',
        icon: footer_2,
    },
    {
        id: 3,
        link: '/',
        icon: footer_3,
    },
    {
        id: 4,
        link: '/',
        icon: footer_4,
    }
]

export const footer_links = [
    {
        id: 1,
        title: "Company",
        subLinks: [
            {
                id: 1,
                text: "About Us",
                link: "/"
            },
            {
                id: 2,
                text: "Press",
                link: "/"
            },
            {
                id: 3,
                text: "Support",
                link: "/"
            },
            {
                id: 4,
                text: "Contact",
                link: "/"
            }
        ]
    },
    {
        id: 2,
        title: "Cloneables",
        subLinks: [
            {
                id: 1,
                text: "All product",
                link: "/"
            },
            {
                id: 2,
                text: "Templates",
                link: "/"
            },
            {
                id: 3,
                text: "Assets",
                link: "/"
            },
            {
                id: 4,
                text: "UI Kits",
                link: "/"
            }
        ]
    },
    {
        id: 3,
        title: "Resources",
        subLinks: [
            {
                id: 1,
                text: "Learning centre",
                link: "/"
            },
            {
                id: 2,
                text: "Promotion",
                link: "/"
            },
            {
                id: 3,
                text: "Inspiration",
                link: "/"
            },
            {
                id: 4,
                text: "Videos",
                link: "/"
            }
        ]
    },
    {
        id: 4,
        title: "Store",
        subLinks: [
            {
                id: 1,
                text: "View the Store",
                link: "/"
            },
            {
                id: 2,
                text: "Forest UI Kit",
                link: "/"
            },
            {
                id: 3,
                text: "Otto Template",
                link: "/"
            }
        ]
    }
]

