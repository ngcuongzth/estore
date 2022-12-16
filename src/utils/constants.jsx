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



export const navLinks = [
    {
        id: 1,
        title: "Trang chủ",
        link: "/",
        icon: HomeIcon
    },
    {
        id: 2,
        title: "Sản phẩm",
        link: "/store",
        icon: ProductIcon
    },
    {
        id: 3,
        title: "Giới thiệu",
        link: "/about",
        icon : AboutIcon
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
        icon : facebook
    },
    {
        id: 2,
        link: "/",
        title: "messenger",
        icon : messenger
    },
    {
        id: 3,
        link: "/",
        title: "twitter",
        icon : twitter
    },
    {
        id: 4,
        link: "/",
        title: "instagram",
        icon : instagram
    },
    {
        id: 5,
        link: "/",
        title: "youtube",
        icon : youtube
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