import {useState, useEffect} from 'react'

const ArticlesBG = () => {
    const ArticlesBGArticlesSVG = () => {
        return (       
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={svgDimensions.height / columnRepeat} viewBox={`0 0 560 ${svgDimensions.height / columnRepeat}`} fill="none" preserveAspectRatio={`${svgAspectRatio}`}>
                <path opacity="0.1" d="M69.5535 90.9018L69.6562 91.2661H70.0347H89.7662H90.4306L90.2467 90.6276L65.3996 4.39854L65.2954 4.03699H64.9191H24.7253H24.3485L24.2447 4.39917L-0.480632 90.6283L-0.663519 91.2661H0H19.7315H20.1116L20.2133 90.8998L27.785 63.6238H61.861L69.5535 90.9018ZM101.488 90.7661V91.2661H101.988H121.476H121.976V90.7661V45.9006L152.767 46.6225L153.278 46.6345V46.1226V28.9991V28.5111L152.791 28.4993L112.475 27.5208L112.472 27.5207C109.032 27.4579 106.268 28.3686 104.364 30.2318C102.459 32.0952 101.488 34.84 101.488 38.2948V90.7661ZM215.609 73.1433L193.481 74.3379V46.6226H213.199H213.699V46.1226V28.9991V28.4991H213.199H193.481V11.2641V10.5831L192.831 10.787L173.343 16.9026L172.993 17.0125V17.3796V28.4991H158.877H158.377V28.9991V46.1226V46.6226H158.877H172.993V81.5928C172.993 85.0422 173.93 87.8451 175.8 89.7551C177.674 91.6698 180.413 92.6148 183.864 92.4888L183.865 92.4888L215.655 91.2657L216.135 91.2472V90.7661V73.6426V73.1148L215.609 73.1433ZM224.891 90.7661V91.2661H225.391H278.983H279.483V90.7661V73.6426V73.1426H278.983H262.065V38.0501C262.065 34.538 261.096 31.7304 259.174 29.8496C257.25 27.9662 254.448 27.0881 250.942 27.2767L227.8 28.4998L227.327 28.5249V28.9991V46.1226V46.6477L227.851 46.622L242.308 45.9139V73.1426H225.391H224.891V73.6426V90.7661ZM351.664 55.0621H352.188L352.163 54.5379C351.729 45.575 347.6 38.7429 341.441 34.1631C335.295 29.5918 327.145 27.276 318.656 27.276C308.756 27.276 300.221 30.179 294.157 35.7241C288.086 41.2748 284.539 49.4276 284.539 59.8214C284.539 70.2756 288.085 78.459 294.156 84.0253C300.221 89.5861 308.756 92.4892 318.656 92.4892C327.145 92.4892 335.295 90.1734 341.441 85.6021C347.6 81.0223 351.729 74.1902 352.163 65.2273L352.188 64.7031H351.664H332.176H331.738L331.68 65.1373C330.991 70.3273 326.273 74.3657 318.656 74.3657C314.128 74.3657 310.744 73.0224 308.487 70.5817C306.225 68.1347 305.027 64.512 305.027 59.8214C305.027 55.1936 306.224 51.6015 308.486 49.1693C310.743 46.7429 314.128 45.3995 318.656 45.3995C326.273 45.3995 330.991 49.4379 331.68 54.6279L331.738 55.0621H332.176H351.664ZM358.433 90.7661V91.2661H358.933H412.524H413.024V90.7661V73.6426V73.1426H412.524H395.972V10.2856C395.972 6.77265 395.003 3.99485 393.08 2.12942C391.157 0.263528 388.358 -0.613714 384.858 -0.48819L384.858 -0.48818L361.35 0.367999L360.868 0.385547V0.867668V17.9912V18.5169L361.394 18.4905L375.484 17.783V73.1426H358.933H358.433V73.6426V90.7661ZM483.529 64.48H484.029V63.98V57.8645C484.029 48.3813 480.63 40.7189 474.774 35.4316C468.925 30.1495 460.667 27.276 451.008 27.276C441.345 27.276 433.114 30.2439 427.295 35.7293C421.472 41.2182 418.109 49.1848 418.109 59.0876C418.109 67.9331 420.851 76.2897 426.618 82.4393C432.392 88.5954 441.15 92.4892 453.079 92.4892C474.641 92.4892 484.964 78.2417 486.216 69.0623L486.294 68.4948H485.721H466.233H465.847L465.749 68.868C464.622 73.1696 459.836 75.5888 453.079 75.5888C447.604 75.5888 443.681 74.3494 441.136 72.3049C438.73 70.3721 437.503 67.6778 437.388 64.48H483.529ZM492.979 67.8832H492.479V68.3832C492.479 75.7217 494.962 81.7829 500.375 85.9931C505.767 90.1865 513.994 92.4892 525.377 92.4892C536.021 92.4892 543.3 90.5258 547.929 87.1809C552.586 83.8157 554.5 79.0966 554.5 73.7649C554.5 70.4801 553.798 67.7942 552.536 65.5558C551.275 63.3191 549.471 61.5571 547.307 60.0951C543.341 57.4161 538.099 55.7069 532.655 53.932C532.191 53.7805 531.724 53.6285 531.258 53.4754L531.257 53.4752C530.791 53.3231 530.333 53.1741 529.885 53.0281C525.631 51.6431 522.186 50.5212 519.735 49.4271C518.379 48.8222 517.368 48.2427 516.701 47.6579C516.04 47.0777 515.768 46.5384 515.768 46.0003C515.768 45.481 515.902 45.0556 516.15 44.7003C516.401 44.3407 516.789 44.0238 517.341 43.7608C518.457 43.2283 520.163 42.9533 522.454 42.9533C525.727 42.9533 528.097 43.7601 529.641 45.0398C531.174 46.3112 531.942 48.0904 531.942 50.1589V50.6589H532.442H551.929H552.429V50.1589C552.429 44.0422 550.25 38.3002 545.39 34.0945C540.537 29.8949 533.068 27.276 522.576 27.276C514.059 27.276 507.252 28.8739 502.557 31.9124C497.838 34.9671 495.28 39.4644 495.28 45.1442C495.28 48.6896 496.18 51.5683 497.728 53.9445C499.274 56.3154 501.447 58.1599 503.957 59.669C508.034 62.1206 513.079 63.7277 517.884 65.2584C518.965 65.6028 520.034 65.9434 521.077 66.2888C521.873 66.5551 522.625 66.805 523.335 67.0412C527.055 68.2773 529.635 69.1348 531.353 69.9787C532.371 70.4783 533.031 70.9483 533.438 71.4461C533.831 71.9262 534.012 72.4606 534.012 73.1533C534.012 73.7873 533.837 74.3083 533.514 74.7442C533.188 75.1858 532.69 75.5669 532.006 75.8784C530.627 76.5066 528.581 76.8119 525.986 76.8119C520.927 76.8119 517.675 75.7818 515.697 74.2418C513.739 72.7177 512.966 70.6441 512.966 68.3832V67.8832H512.466H492.979ZM56.8303 45.5003H32.8141L42.7655 9.92942H46.8789L56.8303 45.5003ZM238.654 13.0987C238.654 16.398 239.765 18.9958 241.862 20.7589C243.946 22.5109 246.938 23.3836 250.603 23.3836C254.268 23.3836 257.318 22.511 259.461 20.7637C261.618 19.0045 262.796 16.4071 262.796 13.0987C262.796 9.84916 261.616 7.25385 259.462 5.48105C257.321 3.71891 254.272 2.81388 250.603 2.81388C246.934 2.81388 243.943 3.71902 241.86 5.48587C239.767 7.26259 238.654 9.85828 238.654 13.0987ZM461.889 46.9737C463.802 48.4844 464.63 50.4517 464.745 52.472H437.393C437.504 50.4472 438.307 48.4803 440.191 46.9716C442.246 45.3264 445.65 44.1764 451.008 44.1764C456.366 44.1764 459.802 45.3263 461.889 46.9737Z" stroke="#D9D9D9"/>
            </svg>
        )
    }

    const [columnRepeat, setColumnRepeat] = useState()
    const [svgDimensions, setSvgDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [svgAspectRatio, setSvgAspectRatio] = useState()

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth
            if (screenWidth <= 576) {
                setColumnRepeat(9)
            } else if (screenWidth <= 768) {
                setColumnRepeat(7)
            } else if (screenWidth <= 1200) {
                setColumnRepeat(6)
                setSvgAspectRatio('xMidYMid meet')
            } else {
                setSvgAspectRatio('none')
                setColumnRepeat(5)
            }
            setSvgDimensions({
                width: document.documentElement.clientWidth,
                height: window.innerHeight
            })
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="h-screen w-screen fixed flex flex-col justify-center items-center pt-10 -z-10 bg-custom-dark overflow-hidden">
            {
                Array.from({length: columnRepeat}, (_, index) => (
                    <div className='flex justify-between w-full gap-10' key={index}>
                        <ArticlesBGArticlesSVG columnRepeat={columnRepeat}/>
                        <ArticlesBGArticlesSVG columnRepeat={columnRepeat}/>
                    </div>
                ))
            }
        </div>
        
    )
}

export default ArticlesBG