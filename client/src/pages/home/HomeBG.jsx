import { useEffect, useState } from "react"

const HomeBG = () => {

    const HomeBGDevComSVG = () => {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={svgDimensions.height / columnRepeat} viewBox={`0 0 1362 ${svgDimensions.height / columnRepeat}`} fill="none" preserveAspectRatio={`${svgAspectRatio}`}>
                <path opacity="0.1" d="M0.5 217.966V218.466H1H79.9006C108.449 218.466 137.713 214.75 159.845 199.411C182.015 184.045 196.931 157.089 196.931 110.848C196.931 64.7584 182.015 37.8783 159.844 22.5508C137.712 7.25013 108.449 3.53448 79.9006 3.53448H1H0.5V4.03448V217.966ZM373.31 152.01H373.81V151.51V136.338C373.81 112.997 365.415 94.1945 350.998 81.2316C336.588 68.2742 316.204 61.1896 292.285 61.1896C268.362 61.1896 248.051 68.5045 233.716 81.9596C219.377 95.4184 211.064 114.978 211.064 139.372C211.064 161.17 217.848 181.708 232.063 196.801C246.284 211.901 267.894 221.5 297.444 221.5C350.795 221.5 376.198 186.423 379.268 164.02L379.345 163.452H378.772H330.218H329.833L329.734 163.824C326.791 175.009 314.376 181.052 297.444 181.052C283.703 181.052 273.739 177.956 267.22 172.741C260.842 167.638 257.705 160.463 257.587 152.01H373.31ZM514.902 64.2241H514.51L514.417 64.6041L479.612 205.328H468.256L433.148 64.6031L433.054 64.2241H432.663H384.716H384.072L384.231 64.8479L423.378 218.089L423.474 218.466H423.863H524.006H524.395L524.49 218.088L563.334 64.847L563.492 64.2241H562.849H514.902ZM796.644 87.0724H797.208L797.141 86.5125C793.941 59.9976 782.429 38.4819 764.186 23.5988C745.948 8.71876 721.021 0.5 691.039 0.5C656.929 0.5 629.331 12.4561 610.261 32.2496C591.194 52.0403 580.685 79.632 580.685 110.848C580.685 142.216 591.193 169.883 610.261 189.712C629.331 209.544 656.929 221.5 691.039 221.5C721.021 221.5 745.948 213.281 764.187 198.363C782.429 183.442 793.941 161.85 797.141 135.184L797.208 134.624H796.644H748.09H747.669L747.597 135.039C745.19 149.03 738.428 159.762 728.674 167.002C718.914 174.246 706.127 178.017 691.646 178.017C673.089 178.017 657.755 172.212 647.058 160.952C636.358 149.69 630.239 132.91 630.239 110.848C630.239 88.9396 636.358 72.2351 647.057 61.0105C657.754 49.7884 673.089 43.9828 691.646 43.9828C706.13 43.9828 718.917 47.6788 728.676 54.8478C738.429 62.0119 745.19 72.6673 747.597 86.6572L747.669 87.0724H748.09H796.644ZM1261.75 218.466H1262.25V217.966V138.159C1262.25 117.492 1259.29 98.2727 1251.38 84.2031C1243.44 70.0929 1230.53 61.1896 1210.77 61.1896C1195.79 61.1896 1184.8 65.858 1176.81 74.0084C1168.9 82.066 1163.96 93.4811 1160.91 107.01H1152.93C1150.63 93.793 1146.45 82.3862 1139.23 74.2542C1131.91 66.0169 1121.53 61.1896 1106.99 61.1896C1092 61.1896 1080.95 65.8578 1072.87 74.0067C1064.89 82.0638 1059.87 93.4789 1056.82 107.01H1045.78L1054.66 80.3581L1054.69 80.2811V80.2V64.7241V64.2241H1054.19H1005.63H1005.13V64.7241V217.966V218.466H1005.63H1054.19H1054.69V217.966V164.255C1054.69 145.749 1056.21 130.826 1060.97 120.541C1063.35 115.411 1066.53 111.454 1070.71 108.775C1074.9 106.097 1080.13 104.672 1086.66 104.672C1095.54 104.672 1101 106.701 1104.32 112.17C1107.69 117.725 1108.92 126.919 1108.92 141.497V217.966V218.466H1109.42H1157.97H1158.47V217.966V164.255C1158.47 145.749 1159.99 130.826 1164.76 120.541C1167.14 115.411 1170.31 111.454 1174.5 108.775C1178.68 106.097 1183.91 104.672 1190.44 104.672C1199.32 104.672 1204.79 106.701 1208.11 112.17C1211.48 117.725 1212.7 126.919 1212.7 141.497V217.966V218.466H1213.2H1261.75ZM147.377 110.848C147.377 141.584 139.881 157.534 127.829 165.854C115.726 174.21 98.8955 174.983 79.9006 174.983H50.0542V47.0173H79.9006C98.8954 47.0173 115.726 47.79 127.83 56.1086C139.882 64.3912 147.377 80.2654 147.377 110.848ZM257.589 123.7C257.704 118.23 259.738 112.825 264.868 108.736C270.17 104.509 278.842 101.638 292.285 101.638C305.727 101.638 314.477 104.509 319.857 108.738C325.062 112.83 327.165 118.235 327.285 123.7H257.589ZM898.163 61.1896C873.953 61.1896 852.205 67.7364 836.502 81.0322C820.786 94.3379 811.175 114.36 811.175 141.193C811.175 168.177 820.786 188.275 836.501 201.619C852.205 214.953 873.953 221.5 898.163 221.5C922.221 221.5 943.893 214.953 959.559 201.619C975.236 188.275 984.846 168.177 984.846 141.193C984.846 114.36 975.235 94.3382 959.558 81.0326C943.893 67.7368 922.221 61.1896 898.163 61.1896ZM898.163 178.017C886.708 178.017 877.364 175.154 870.887 169.161C864.417 163.174 860.73 153.993 860.73 141.193C860.73 128.546 864.416 119.442 870.886 113.492C877.363 107.536 886.708 104.672 898.163 104.672C909.464 104.672 918.733 107.535 925.173 113.491C931.606 119.441 935.292 128.546 935.292 141.193C935.292 153.993 931.605 163.175 925.172 169.162C918.732 175.154 909.464 178.017 898.163 178.017ZM1294.74 187.317C1294.74 196.984 1297.88 205.534 1303.67 211.671C1309.47 217.812 1317.87 221.5 1328.32 221.5C1348.63 221.5 1362.5 206.702 1362.5 187.317C1362.5 168.534 1348.62 153.741 1328.32 153.741C1317.87 153.741 1309.47 157.429 1303.68 163.493C1297.89 169.552 1294.74 177.95 1294.74 187.317Z" stroke="gray"/>
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
                setColumnRepeat(7)
            } else if (screenWidth <= 768) {
                setColumnRepeat(5)
            } else if (screenWidth <= 1200) {
                setColumnRepeat(4)
                setSvgAspectRatio('xMidYMid meet')
            } else {
                setSvgAspectRatio('none')
                setColumnRepeat(3)
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
        <div className="h-screen w-screen fixed -z-10 bg-custom-dark overflow-hidden">
            {
                Array.from({length: columnRepeat}, (_, index) => (
                    <HomeBGDevComSVG columnRepeat={columnRepeat} key={index}/>
                    
                ))
            }
        </div>
        
    )
}

export default HomeBG