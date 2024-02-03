import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2'
import { useState, useEffect, useRef } from 'react'
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

import NavBar from "../../constants/NavBar"
import ProfileBG from "./ProfileBG"

import './profile.css'

import { DummyUser, DummyUserData } from "../../data/DummyUser"
import { ProjectExpCard, WorkExpCard, WorkExpCardTag, coloredSvgsForProjectCard } from "../../assets/ForProfile"
import { BehanceIconSvg, GitHubIconSvg } from '../../assets/ForHackathonCard';

const Profile = () => {

    const radiiSet = [
        "7.22rem", "10.88rem", "14.56rem", "18.22rem", "21.72rem" 
    ]

    const randomPosition = (index) => {
        const radiiSetNum = [
            7.22, 10.88, 14.56, 18.22
        ]
        let minAngle = 0, maxAngle = Math.PI * 2
        let randomAngle = Math.random() * (maxAngle - minAngle)
        const position = {
            x: radiiSetNum[index] * Math.cos(randomAngle),
            y: radiiSetNum[index] * Math.sin(randomAngle)
        }
        return position
    }

    const skillSetSvgs = [
        (
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M20.5004 18.1937C22.1456 18.1937 23.4793 16.86 23.4793 15.2148C23.4793 13.5696 22.1456 12.2359 20.5004 12.2359C18.8552 12.2359 17.5215 13.5696 17.5215 15.2148C17.5215 16.86 18.8552 18.1937 20.5004 18.1937Z" fill="#5BD45C"/>
                <path d="M20.5002 26.1695C22.8385 28.4437 25.1447 29.7891 27.0025 29.7891C27.6111 29.7891 28.1877 29.6609 28.6682 29.3727C30.3338 28.4117 30.9424 26.0094 30.3658 22.582C30.2697 21.9734 30.1416 21.3648 29.9814 20.7242C30.6221 20.516 31.1986 20.3398 31.7752 20.1477C35.0104 18.8984 36.8041 17.1687 36.8041 15.2789C36.8041 13.357 35.0104 11.6273 31.7752 10.4102C31.1986 10.1859 30.6221 9.99375 29.9814 9.83359C30.1416 9.19297 30.2697 8.58437 30.3658 7.97578C30.9104 4.48437 30.3018 2.05 28.6361 1.08906C28.1557 0.800778 27.5791 0.672653 26.9705 0.672653C25.1447 0.672653 22.8064 2.01797 20.4682 4.29218C18.1619 2.01797 15.8557 0.672653 13.9979 0.672653C13.3893 0.672653 12.8127 0.800778 12.3322 1.08906C10.6666 2.05 10.058 4.45234 10.6346 7.87968C10.7307 8.48828 10.8588 9.09687 11.0189 9.7375C10.3783 9.92968 9.80176 10.1219 9.22519 10.3141C5.99004 11.5633 4.19629 13.293 4.19629 15.1828C4.19629 17.1047 5.99004 18.8344 9.22519 20.0516C9.80176 20.2758 10.3783 20.468 11.0189 20.6281C10.8588 21.2687 10.7307 21.8773 10.6346 22.4859C10.09 25.9133 10.6986 28.3477 12.3322 29.2766C12.8127 29.5648 13.3893 29.693 13.9979 29.693C15.8557 29.757 18.1619 28.4117 20.5002 26.1695ZM18.7064 21.8453C19.283 21.8773 19.8916 21.8773 20.5002 21.8773C21.1088 21.8773 21.7174 21.8773 22.2939 21.8453C21.7174 22.6141 21.1088 23.3187 20.5002 23.9914C19.8916 23.3187 19.283 22.6141 18.7064 21.8453ZM14.7346 18.5461C15.0549 19.0906 15.3432 19.6031 15.6955 20.1156C14.7025 19.9875 13.7736 19.8273 12.8768 19.6352C13.165 18.7703 13.4854 17.8734 13.8697 16.9766C14.126 17.4891 14.4143 18.0336 14.7346 18.5461ZM12.8768 10.8266C13.7736 10.6344 14.7025 10.4742 15.6955 10.3461C15.3752 10.8586 15.0549 11.3711 14.7346 11.9156C14.4143 12.4602 14.126 12.9727 13.8697 13.5172C13.4533 12.5883 13.133 11.6914 12.8768 10.8266ZM14.6385 15.2148C15.0549 14.35 15.5033 13.4852 16.0158 12.6203C16.4963 11.7875 17.0408 10.9547 17.5854 10.1219C18.5463 10.0578 19.5072 10.0258 20.5002 10.0258C21.5252 10.0258 22.4861 10.0578 23.415 10.1219C23.9916 10.9547 24.5041 11.7875 24.9846 12.6203C25.4971 13.4852 25.9455 14.35 26.3619 15.2148C25.9455 16.0797 25.4971 16.9445 24.9846 17.8094C24.5041 18.6422 23.9596 19.475 23.415 20.3078C22.4541 20.3719 21.4932 20.4039 20.5002 20.4039C19.4752 20.4039 18.5143 20.3719 17.5854 20.3078C17.0088 19.475 16.4963 18.6422 16.0158 17.8094C15.5033 16.9445 15.0549 16.0797 14.6385 15.2148ZM27.1627 13.4852L26.2979 11.8836C25.9775 11.3391 25.6893 10.8266 25.3369 10.3141C26.3299 10.4422 27.2588 10.6023 28.1557 10.7945C27.8674 11.6914 27.5471 12.5883 27.1627 13.4852ZM27.1627 16.9445C27.5471 17.8414 27.8674 18.7383 28.1557 19.6031C27.2588 19.7953 26.3299 19.9555 25.3369 20.0836C25.6572 19.5711 25.9775 19.0586 26.2979 18.5141C26.5861 18.0336 26.8744 17.4891 27.1627 16.9445ZM27.8994 28.0594C27.6432 28.2195 27.3229 28.2836 26.9705 28.2836C25.401 28.2836 23.4471 27.0023 21.5252 25.0805C22.4541 24.0875 23.351 22.9664 24.2479 21.7172C25.7533 21.5891 27.1947 21.3648 28.54 21.0445C28.7002 21.6211 28.7963 22.1977 28.8924 22.7742C29.3408 25.4969 28.9885 27.4508 27.8994 28.0594ZM29.565 11.1789C33.1525 12.2039 35.2986 13.7734 35.2986 15.2148C35.2986 16.4641 33.8252 17.7133 31.2307 18.7062C30.7182 18.8984 30.1416 19.0906 29.565 19.2508C29.1486 17.9375 28.6361 16.5922 27.9955 15.2148C28.6361 13.8375 29.1807 12.4922 29.565 11.1789ZM27.0025 2.14609C27.3549 2.14609 27.6432 2.21015 27.9314 2.37031C28.9885 2.9789 29.3729 4.90078 28.9244 7.65547C28.8283 8.2 28.7002 8.77656 28.5721 9.38515C27.2268 9.09687 25.7854 8.87265 24.2799 8.7125C23.415 7.46328 22.4861 6.34218 21.5572 5.34922C23.4791 3.45937 25.433 2.14609 27.0025 2.14609ZM22.2939 8.58437C21.7174 8.55234 21.1088 8.55234 20.5002 8.55234C19.8916 8.55234 19.283 8.55234 18.7064 8.58437C19.283 7.81562 19.8916 7.11093 20.5002 6.43828C21.1088 7.11093 21.7174 7.84765 22.2939 8.58437ZM13.101 2.37031C13.3572 2.21015 13.6775 2.14609 14.0299 2.14609C15.5994 2.14609 17.5533 3.42734 19.4752 5.34922C18.5463 6.34218 17.6494 7.46328 16.7525 8.7125C15.2471 8.84062 13.8057 9.06484 12.4604 9.38515C12.3002 8.80859 12.2041 8.23203 12.108 7.65547C11.6596 4.93281 12.0119 3.01093 13.101 2.37031ZM11.4354 19.2508C7.84785 18.2258 5.70176 16.6562 5.70176 15.2148C5.70176 13.9656 7.17519 12.7164 9.76973 11.7234C10.2822 11.5312 10.8588 11.3391 11.4354 11.1789C11.8518 12.4922 12.3643 13.8375 13.0049 15.2148C12.3643 16.5922 11.8197 17.9695 11.4354 19.2508ZM12.108 22.7742C12.2041 22.2297 12.3322 21.6531 12.4604 21.0445C13.8057 21.3328 15.2471 21.557 16.7525 21.7172C17.6174 22.9664 18.5463 24.0875 19.4752 25.0805C17.5533 26.9703 15.5994 28.2836 14.0299 28.2836C13.6775 28.2836 13.3893 28.2195 13.101 28.0594C12.0119 27.4508 11.6596 25.4969 12.108 22.7742ZM10.7627 35.9711C11.4674 35.1062 11.4994 34.1453 11.115 33.1844C10.7307 32.2234 9.92988 31.775 8.93691 31.743C7.75176 31.7109 6.53457 31.743 5.34941 31.743H5.1252V40.0391H6.08613V36.9H7.5916C7.78379 36.9 7.94395 36.9641 8.04004 37.1242L9.96191 40.1031C9.99395 40.1672 10.09 40.2633 10.1541 40.2633H11.4033C10.6346 39.0781 9.89785 37.957 9.1291 36.8039C9.80176 36.7078 10.3783 36.4836 10.7627 35.9711ZM6.08613 35.907V32.7359H6.43848C7.1752 32.7359 7.94395 32.7039 8.68066 32.768C9.54551 32.8 10.1541 33.4727 10.1541 34.3375C10.1541 35.2023 9.44941 35.875 8.58457 35.907C7.81582 35.9391 7.04707 35.907 6.08613 35.907ZM18.4822 36.3234C17.9697 34.0812 15.9197 33.5047 14.3502 34.2094C13.133 34.7539 12.5885 35.8109 12.5564 37.1242C12.5244 38.1172 12.8127 39.0141 13.5814 39.6867C14.4463 40.4555 15.5033 40.5516 16.5924 40.3594C17.201 40.2312 17.7455 39.943 18.1619 39.4945C18.0018 39.2703 17.8416 39.0461 17.6814 38.8539C16.7846 39.6227 15.7916 39.8789 14.7025 39.3664C13.9979 39.0141 13.6455 38.1492 13.5814 37.5086H18.5463V37.0922C18.5783 36.8039 18.5463 36.5477 18.4822 36.3234ZM13.6455 36.8359C13.5494 35.875 14.5104 34.85 15.5674 34.85C16.7846 34.818 17.5533 35.5547 17.5854 36.8359H13.6455ZM23.4791 34.0492C22.9986 33.9531 22.4861 33.9211 22.0057 33.9531C21.2369 34.0172 20.5643 34.3695 20.0197 34.9461C20.1799 35.1703 20.308 35.3945 20.5002 35.6508C20.5643 35.5867 20.6283 35.5227 20.6924 35.4906C21.2049 35.0102 21.8135 34.7539 22.5502 34.818C23.1268 34.85 23.6713 35.0422 23.8314 35.6187C23.9596 36.0672 23.9275 36.5477 23.9596 37.0281C23.8635 37.0281 23.8314 36.9961 23.7994 36.9641C23.0307 36.3234 22.1658 36.1953 21.2369 36.4195C20.3721 36.6437 19.8275 37.3164 19.7635 38.1812C19.6994 39.1742 20.1479 39.9109 21.0127 40.2633C21.5572 40.4875 22.1658 40.4875 22.7424 40.3594C23.1908 40.2633 23.383 40.007 24.0236 39.6547V40.0711H24.9205C24.9205 38.7898 24.9525 37.2203 24.9205 35.7469C24.9205 34.818 24.376 34.2414 23.4791 34.0492ZM23.9275 38.0852C23.8955 38.1812 23.9275 38.2773 23.9275 38.3734C23.9275 39.0461 23.7674 39.2703 23.1268 39.5266C22.6783 39.6867 22.1979 39.7508 21.7174 39.5906C21.1729 39.4305 20.7885 38.95 20.7885 38.4055C20.7564 37.8609 21.1088 37.3164 21.6533 37.1562C22.39 36.9 23.0627 37.0602 23.6713 37.5086C23.8635 37.6687 23.9916 37.8289 23.9275 38.0852ZM28.9244 34.9141C29.7572 34.6578 30.526 34.818 31.1025 35.5227L31.1986 35.5867C31.4229 35.3945 31.615 35.2023 31.8713 34.9781C31.7752 34.882 31.7432 34.818 31.6791 34.7219C30.7502 33.7289 28.9244 33.6008 27.8033 34.4016C26.2338 35.5547 26.2658 37.7969 27.0346 38.982C27.7713 40.1031 28.8283 40.4875 30.0775 40.3273C30.8143 40.2312 31.4229 39.8789 31.9033 39.2703C31.6791 39.0781 31.4549 38.8859 31.2307 38.6617C31.1666 38.7258 31.1346 38.7578 31.1025 38.8219C30.2377 39.7828 28.7963 39.6867 28.0275 38.6617C27.5791 38.0531 27.483 37.3484 27.6111 36.6437C27.6752 35.843 28.0916 35.2023 28.9244 34.9141ZM35.5869 39.2703C35.5229 39.3023 35.4908 39.3344 35.4908 39.3344C35.2346 39.5266 34.9783 39.5586 34.69 39.4625C34.4018 39.3344 34.3697 39.0781 34.3377 38.8219V35.1703C34.3377 35.1062 34.3377 35.2344 34.3697 34.9141H35.5869V33.9531H34.3057V32.3516H33.3447V34.0812H32.5119C32.4479 34.0812 32.3518 34.1453 32.3518 34.2094C32.3197 34.4336 32.3518 34.5937 32.3518 34.9141H33.3768V39.0141C33.3768 39.5266 33.5049 39.975 33.9533 40.2312C34.4338 40.5195 35.3627 40.4555 35.7791 40.1031C35.8432 40.0711 35.8752 39.943 35.8752 39.9109C35.7791 39.7187 35.683 39.4945 35.5869 39.2703Z" fill="#5BD45C"/>
            </svg>
        ),
        (
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <g clipPath="url(#clip0_49_149)">
                    <path d="M33.9295 8.85031L19.2681 0.366562C18.4236 -0.122188 17.0414 -0.122188 16.1968 0.366562L1.53567 8.85031C0.691015 9.33906 0 10.5388 0 11.5163V28.4838C0.0657108 29.6222 0.645883 30.565 1.53559 31.1497L16.197 39.6334C17.0415 40.1222 18.4236 40.1222 19.2682 39.6334L33.9295 31.1497C34.8842 30.5133 35.4277 29.5553 35.4652 28.4838V11.5163C35.4309 10.4877 34.8164 9.45039 33.9296 8.85031H33.9295ZM5.91085 20.0001C5.8414 8.43055 21.3026 3.32195 27.97 14.0721L22.8539 17.0393C19.7655 11.9195 12.0969 13.7502 11.8217 20.0001C11.9043 25.7602 19.4415 28.4359 22.8543 22.9604L27.9704 25.9276C22.0944 36.1512 6.20706 32.4729 5.91085 20.0001ZM29.5543 20.6582H28.2407V21.9748H26.9274V20.6582H25.6138V19.3418H26.9274V18.0254H28.2408V19.3418H29.5543V20.6582H29.5543ZM34.48 20.6582H33.1664V21.9748H31.853V20.6582H30.5395V19.3418H31.8531V18.0254H33.1665V19.3418H34.4801L34.48 20.6582Z" fill="#5BD45C"/>
                </g>
                <defs>
                    <clipPath id="clip0_49_149">
                    <rect width="41" height="41" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        (
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <g clipPath="url(#clip0_49_144)">
                    <path d="M0 0H40V40H0V0Z" fill="#5BD45C"/>
                    <path d="M10.5177 33.4269L13.5787 31.5744C14.1693 32.6214 14.7065 33.5073 15.9951 33.5073C17.2302 33.5073 18.0091 33.0242 18.0091 31.1448V18.3639H21.768V31.198C21.768 35.0913 19.4859 36.8634 16.1562 36.8634C13.1491 36.8634 11.4037 35.3061 10.5176 33.4266M23.8098 33.0241L26.8704 31.252C27.6762 32.5678 28.7234 33.5344 30.5759 33.5344C32.1335 33.5344 33.1266 32.7556 33.1266 31.6816C33.1266 30.3928 32.1063 29.9363 30.3879 29.1847L29.4484 28.7816C26.7363 27.6273 24.9374 26.1773 24.9374 23.1164C24.9374 20.297 27.0854 18.1489 30.4418 18.1489C32.8315 18.1489 34.5499 18.9814 35.7849 21.1563L32.858 23.0359C32.2135 21.8814 31.5157 21.425 30.4416 21.425C29.3407 21.425 28.6426 22.1231 28.6426 23.0359C28.6426 24.1636 29.3407 24.6203 30.9516 25.3184L31.8913 25.7211C35.0866 27.0906 36.8855 28.4867 36.8855 31.628C36.8855 35.0114 34.2274 36.8639 30.6563 36.8639C27.1659 36.8639 24.9104 35.1992 23.8096 33.0242" fill="#181A1B"/>
                </g>
                <defs>
                    <clipPath id="clip0_49_144">
                        <rect width="40" height="40" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        (
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M21.0414 37.8078C21.0414 37.8078 19.4514 38.7755 22.148 39.0523C25.4042 39.4672 27.1259 39.3978 30.7206 38.707C30.7206 38.707 31.6882 39.3299 33.0021 39.8133C24.9123 43.2699 14.6804 39.6059 21.0414 37.8078ZM20.0044 33.3142C20.0044 33.3142 18.2757 34.628 20.9721 34.904C24.4974 35.2496 27.264 35.3189 32.0344 34.3519C32.0344 34.3519 32.6573 35.0436 33.6937 35.3891C23.9461 38.2927 13.0217 35.6651 20.0044 33.3148V33.3142ZM39.0865 41.1959C39.0865 41.1959 40.2616 42.1636 37.7727 42.9246C33.1401 44.3072 18.3451 44.7227 14.1968 42.9246C12.7457 42.3017 15.5108 41.4025 16.4091 41.2653C17.308 41.0578 17.7917 41.0578 17.7917 41.0578C16.2017 39.9514 7.21341 43.3393 13.2285 44.3142C29.7523 47.0112 43.3729 43.1391 39.0859 41.2029L39.0865 41.1959ZM21.8019 28.6123C21.8019 28.6123 14.2655 30.4104 19.1047 31.0319C21.1789 31.3079 25.2578 31.2394 29.0606 30.9626C32.1719 30.6864 35.2902 30.133 35.2902 30.133C35.2902 30.133 34.1836 30.617 33.4234 31.1006C25.7427 33.1074 11.0164 32.2085 15.234 30.1342C18.8301 28.4055 21.8019 28.6123 21.8019 28.6123ZM35.2829 36.1485C43.0273 32.1383 39.4312 28.2668 36.9423 28.751C36.3193 28.8891 36.0433 29.0272 36.0433 29.0272C36.0433 29.0272 36.2506 28.6123 36.7348 28.4751C41.6433 26.7464 45.5156 33.6604 35.145 36.3568C35.145 36.3568 35.2144 36.2874 35.2829 36.1493V36.1485ZM22.5621 47.0715C30.0291 47.5557 41.4367 46.7953 41.7135 43.2685C41.7135 43.2685 41.1614 44.651 35.5605 45.6883C29.2001 46.8634 21.3176 46.7253 16.6859 45.9643C16.6859 45.9643 17.6536 46.7938 22.5627 47.0706L22.5621 47.0715Z" fill="#5BD45C"/>
                <path d="M30.5755 5.79688C30.5755 5.79688 34.8618 10.1526 26.4965 16.7198C19.79 22.043 24.9746 25.0856 26.4965 28.5415C22.5557 25.0162 19.7221 21.9043 21.6568 19.0005C24.4983 14.7164 32.3098 12.6422 30.5755 5.79688ZM28.3633 25.6392C30.368 27.9206 27.8112 29.9949 27.8112 29.9949C27.8112 29.9949 32.9271 27.3685 30.5769 24.1179C28.4333 21.0066 26.7742 19.4854 35.7622 14.2994C35.7622 14.2994 21.5889 17.8248 28.3648 25.6377L28.3633 25.6392Z" fill="#F58219"/>
            </svg>
        )
    ]

    // NECESSARIES FOR CHART  
    
    const chartRef = useRef(null)

    const [skillDataArray, setSkillDataArray] = useState([
        10, 12, 14, 16, 18
    ])
    const [chartHeight, setChartHeight] = useState()

    useEffect(() => {
        setTimeout(() => {
            setChartHeight(chartRef.current.height)
        }, 50)
    }, [])

    const data = {
        labels: Array(skillDataArray?.length).fill(' '),
        datasets: [
            {
                label: '',
                data: skillDataArray,
                backgroundColor: [
                    'rgba(91, 212, 92, 0.12)'
                ],
                borderColor: 'rgba(91, 212, 92, 0.44)',
                borderWidth: 1
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            hover: {
                mode: null
            }
        },
        scales: {
            r: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        }
    }

    const findMaxInArray = (array) => {
        let max = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i]
            }
        }
        return max
    }

    const [maxInDataArray, setMaxInDataArray] = useState(findMaxInArray(skillDataArray))

    useEffect(() => {
        setMaxInDataArray(findMaxInArray(skillDataArray))
    }, [skillDataArray])

    const getChartSvgPosition = (index) => {
        let unitHeight = (chartHeight / 2) / maxInDataArray
        let segmentAngle = Math.PI * 2 / skillDataArray.length
        let position = {
            x: (unitHeight * skillDataArray[index] * 3 / 5) * Math.cos(((index + 0.5) * segmentAngle) - Math.PI / 2),
            y: (unitHeight * skillDataArray[index] * 3 / 5) * Math.sin(((index + 0.5) * segmentAngle) - Math.PI / 2)
        }
        return position
    }

    return (
        <div className="nav-blur noscroll w-screen h-screen overflow-y-auto">
            <ProfileBG/>
            <NavBar currentPath={window.location.pathname}/>
            <div className="noscroll absolute pt-20 w-full h-full flex flex-col items-center justify-start gap-20 font-devcom z-0 overflow-y-auto">
                <section className="profile-hero-1 w-full h-[calc(100vh-5rem)] flex-grow-0 flex-shrink-0 flex items-center">
                    <div className="about-me w-1/4 h-full px-10 py-32 flex flex-col items-center gap-16">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">About me</p>
                            <p className=" text-left" style={{color: '#D9D9D9'}}>
                                {DummyUserData.about}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Location</p>
                            <p className="text-left" style={{color: '#D9D9D9'}}>
                                {DummyUserData.location}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center ">
                        <div className="h-full w-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40rem" height="40rem">
                                {/* <circle cx="20rem" cy="20rem" r="21.72rem" stroke="#5BD45C" opacity="0.05" fill="none"/> */}
                                <circle cx="20rem" cy="20rem" r="18.22rem" stroke="#5BD45C" opacity="0.2" fill="none"/>
                                <circle cx="20rem" cy="20rem" r="14.56rem" stroke="#5BD45C" opacity="0.4" fill="none"/>
                                <circle cx="20rem" cy="20rem" r="10.88rem" stroke="#5BD45C" opacity="0.6" fill="none"/>
                                <circle cx="20rem" cy="20rem" r="7.22rem" stroke="#5BD45C" opacity="1" fill="none"/>
                                {/* <circle cx="20rem" cy="20rem" r="1px" stroke="#fff" opacity="1" fill="none"/> */}
                            </svg>
                            
                        </div>
                        <div className="absolute w-10 h-10 z-10">
                            {
                                skillSetSvgs.map((svg, index) => {
                                    let position = randomPosition(index)
                                    return (
                                        <div className="absolute border border-custom-green rounded-full w-16 h-16 p-2 z-10 flex items-center justify-center" key={index} style={{
                                            transform: `translateX(${position.x}rem) translateY(${position.y}rem)`
                                        }}>
                                            {svg}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="w-1/4 h-full px-10 py-32 flex flex-col items-center gap-16">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Portfolio</p>
                            <p className="text-left underline hover:cursor-pointer hover:text-sky-900" style={{color: '#D9D9D9'}}>
                                {DummyUserData.portfolio}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Hack Streak</p>
                            <div className="grid grid-cols-11 gap-1">
                                {
                                    Array(44).fill().map((_, index) => {
                                        return (
                                            <div key={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height={26} width={26}>
                                                    <circle cx="13" cy="13" r="10" fill={`${(index % 2 !== 0) ? '#5BD45C' : '#42403b'}`}/>
                                                </svg>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="profile-hero-2 w-full min-h-[calc(100vh-5rem)] max-h-fit flex justify-between flex-grow-0 flex-shrink-0 items-start px-12 overflow-auto">
                    <div 
                        className="chart w-[30rem] h-[30rem] mt-10 flex items-center justify-center"
                    >
                        <PolarArea 
                            ref={chartRef}
                            data={data}
                            options={options}
                            className='h-full w-full flex justify-center items-center'
                        />
                        <div className="absolute w-10 h-10">
                            {
                                skillDataArray.map((_,index) => {
                                    let position = getChartSvgPosition(index)
                                    return (
                                        <div 
                                            className='absolute border border-custom-green w-16 h-16 rounded-full flex justify-center items-center'
                                            key={index}
                                            style={{
                                                transform: `translateX(calc(${position.x - 16}px)) translateY(calc(${position.y - 16}px))`
                                            }}
                                        >
                                            {skillSetSvgs[index]}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-3/5 min-h-full max-h-fit p-10 flex flex-col justify-start items-center gap-10">
                        <div className="w-full h-fit grid grid-cols-3">
                            <div className="w-1/4 h-full flex flex-col gap-4">
                                <span className='text-white text-2xl'>Projects</span>
                                <span className='font-devcombold text-5xl text-custom-green'>
                                    {
                                        (DummyUserData.totalProjects > 10) ? `${DummyUserData.totalProjects}` : `0${DummyUserData.totalProjects}` 
                                    }
                                </span>
                            </div>
                            <div className="w-1/4 h-full flex flex-col gap-4">
                                <span className='text-white text-2xl'>Hackathons</span>
                                <span className='font-devcombold text-5xl text-custom-green'>
                                    {
                                        (DummyUserData.totalHackathons > 10) ? `${DummyUserData.totalHackathons}` : `0${DummyUserData.totalHackathons}` 
                                    }
                                </span>
                            </div>
                            <div className="w-1/4 h-full flex flex-col gap-4">
                                <span className='text-white text-2xl'>Collabs</span>
                                <span className='font-devcombold text-5xl text-custom-green'>
                                    {
                                        (DummyUserData.totalCollabs > 10) ? `${DummyUserData.totalCollabs}` : `0${DummyUserData.totalCollabs}` 
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-5">
                            <span className='text-2xl text-white'>Experiences</span>
                            <div className="h-[228px] grid grid-cols-3 ">
                                {
                                    DummyUserData.internshipsArray.map((internship, index) => {
                                        return (
                                            <div className='relative w-fit h-fit flex' key={index}>
                                                <WorkExpCard/>
                                                <div className="absolute w-full h-fit flex justify-end">
                                                    <WorkExpCardTag/>
                                                    <span className='absolute px-3 text-right w-full text-white text-xs font-thin'>Intern</span>
                                                </div>
                                                <div className="absolute internship-card-content w-full h-full py-10 px-6 flex flex-col justify-between">
                                                    <div className="flex flex-col">
                                                        <p className='w-full line-clamp-3 text-ellipsis overflow-hidden text-custom-green'>
                                                            {internship.jobTitle}
                                                        </p>
                                                        <span className='text-xs font-thin text-gray-500'>
                                                            @{internship.organization}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className='text-xs font-thin text-gray-500'>Tech:</span>
                                                        <div className="flex gap-[5px]">
                                                            {
                                                                internship.stackRequired.map((tech, index) =>
                                                                    <span className='w-full text-xs text-sky-400' key={index}>
                                                                        {tech} 
                                                                        {
                                                                            (index !== internship.stackRequired.length - 1) && ','
                                                                        }
                                                                    </span>    
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-5">
                            <span className='text-2xl text-white'>Projects</span>
                            <div className="grid grid-cols-2">
                                {
                                    DummyUserData.projectsArray.map((project, index) => {
                                        return (
                                            <div className='relative w-fit h-fit flex' key={index}>
                                                <ProjectExpCard/>
                                                <div className="absolute project-card-content w-full h-full py-3 px-4 flex flex-col justify-between">
                                                    <div className="flex justify-between">
                                                        <div className='flex flex-col'>
                                                            <span className='text-custom-green font-devcombold'>
                                                                {project.title}
                                                            </span>
                                                            <span className='text-white text-sm'>
                                                                {project.desc}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col justify-between gap-3">
                                                            <GitHubIconSvg/>
                                                            <BehanceIconSvg/>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 justify-start items-end pt-2">
                                                        {
                                                            project.stackUsed.map((stack, index2) => {
                                                                return (
                                                                    <span className='w-10 h-10 ' key={index2}>
                                                                        {coloredSvgsForProjectCard[index2]}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile