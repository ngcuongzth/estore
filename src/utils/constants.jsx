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
    }
}