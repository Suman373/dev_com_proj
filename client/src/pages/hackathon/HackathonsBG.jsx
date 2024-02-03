import {useState, useEffect} from 'react'

const HackathonsBG = () => {
    const HackaThonsBGHackathonSVG = () => {

        return (           
            <svg width="100%" height={svgDimensions.height / columnRepeat} viewBox={`0 0 1362 ${svgDimensions.height / columnRepeat}`} fill="none" preserveAspectRatio={`${svgAspectRatio}`} xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_17_86" maskUnits="userSpaceOnUse" x="-1" y="0" width="1375" height="160" fill="black">
                    <rect fill="white" x="-1" width="1375" height="160"/>
                    <path opacity="0.1" d="M109.445 7.36165H143.514V156.861H109.445V98.9696H34.0685V156.861H0V7.36165H34.0685V69.2818H109.445V7.36165ZM166.866 127.597C166.866 109.148 177.938 98.3334 209.877 93.8802L243.733 89.215C243.733 80.5208 236.919 75.2194 222.227 75.2194C208.6 75.2194 200.934 80.9449 200.934 90.6994H168.995C168.995 63.5563 192.204 47.6522 222.227 47.6522C251.824 47.6522 277.801 61.8599 277.801 97.0611V127.173H293.345V156.861H269.71C259.489 156.861 253.74 151.135 253.74 140.957V138.836L259.064 126.113H250.546C246.501 143.925 236.067 158.981 206.044 158.981C172.615 158.981 166.866 138.624 166.866 127.597ZM200.934 121.235C200.934 127.385 206.896 129.293 212.645 129.293C231.383 129.293 243.733 121.447 243.733 108.3L216.265 112.117C206.044 113.601 200.934 115.086 200.934 121.235ZM308.255 103.211C308.255 67.5854 332.742 47.6522 367.023 47.6522C396.407 47.6522 423.236 63.5563 424.727 94.0923H390.658C389.381 84.5498 380.65 77.3399 367.023 77.3399C350.841 77.3399 342.323 86.8824 342.323 103.211C342.323 119.751 350.841 129.293 367.023 129.293C380.65 129.293 389.381 122.084 390.658 112.541H424.727C423.236 143.077 396.407 158.981 367.023 158.981C332.742 158.981 308.255 139.048 308.255 103.211ZM530.534 156.861L503.705 115.51L480.07 126.537V156.861H446.001V1H480.07V91.5476L529.256 69.0698L528.83 49.7727H562.899V73.0988C562.899 83.2775 558.853 89.8512 549.484 94.3044L532.876 101.938L569.286 156.861H530.534ZM584.172 127.597C584.172 109.148 595.244 98.3334 627.183 93.8802L661.039 89.215C661.039 80.5208 654.225 75.2194 639.533 75.2194C625.905 75.2194 618.24 80.9449 618.24 90.6994H586.301C586.301 63.5563 609.51 47.6522 639.533 47.6522C669.13 47.6522 695.107 61.8599 695.107 97.0611V127.173H710.651V156.861H687.016C676.795 156.861 671.046 151.135 671.046 140.957V138.836L676.369 126.113H667.852C663.807 143.925 653.373 158.981 623.35 158.981C589.921 158.981 584.172 138.624 584.172 127.597ZM618.24 121.235C618.24 127.385 624.202 129.293 629.951 129.293C648.689 129.293 661.039 121.447 661.039 108.3L633.571 112.117C623.35 113.601 618.24 115.086 618.24 121.235ZM774.426 129.293L814.031 127.173V156.861L758.456 158.981C746.745 159.405 740.357 152.62 740.357 140.957V79.4605H714.806V49.7727H740.357V29.6275L774.426 19.0247V49.7727H809.772V79.4605H774.426V129.293ZM916.469 47.6522C943.937 47.6522 960.545 65.8889 960.545 98.9696V156.861H926.477V104.271C926.477 84.7619 920.728 77.3399 904.332 77.3399C885.807 77.3399 873.67 87.0945 873.67 117.206V156.861H839.602V1H873.67V62.7081L867.283 81.7931H875.8C880.058 62.7081 893.473 47.6522 916.469 47.6522ZM981.723 103.211C981.723 65.8889 1008.55 47.6522 1042.41 47.6522C1076.05 47.6522 1102.88 65.8889 1102.88 103.211C1102.88 140.744 1076.05 158.981 1042.41 158.981C1008.55 158.981 981.723 140.744 981.723 103.211ZM1015.79 103.211C1015.79 121.235 1026.22 129.293 1042.41 129.293C1058.38 129.293 1068.81 121.235 1068.81 103.211C1068.81 85.398 1058.38 77.3399 1042.41 77.3399C1026.22 77.3399 1015.79 85.398 1015.79 103.211ZM1191.06 77.3399C1172.54 77.3399 1160.4 87.0945 1160.4 117.206V156.861H1126.33V49.7727H1160.4V62.7081L1154.01 81.7931H1162.53C1166.79 62.7081 1180.2 47.6522 1203.2 47.6522C1230.67 47.6522 1247.27 65.8889 1247.27 98.9696V156.861H1213.21V104.271C1213.21 84.7619 1207.46 77.3399 1191.06 77.3399ZM1373 127.385C1373 145.41 1360.01 158.981 1322.96 158.981C1283.36 158.981 1266.32 143.077 1266.32 118.055H1300.39C1300.39 126.325 1306.14 133.535 1324.03 133.535C1333.18 133.535 1338.93 131.414 1338.93 126.325C1338.93 120.811 1332.97 119.327 1315.72 113.601C1295.71 107.028 1271.22 101.726 1271.22 77.764C1271.22 58.6791 1288.47 47.6522 1318.06 47.6522C1354.48 47.6522 1369.38 65.6769 1369.38 86.4583H1335.31C1335.31 78.8243 1329.56 73.0988 1317.85 73.0988C1309.76 73.0988 1305.29 75.0073 1305.29 79.2484C1305.29 84.3378 1315.94 87.5186 1332.97 93.032C1353.84 99.8178 1373 105.119 1373 127.385Z"/>
                </mask>
                <path opacity="0.1" d="M109.445 7.36165H143.514V156.861H109.445V98.9696H34.0685V156.861H0V7.36165H34.0685V69.2818H109.445V7.36165ZM166.866 127.597C166.866 109.148 177.938 98.3334 209.877 93.8802L243.733 89.215C243.733 80.5208 236.919 75.2194 222.227 75.2194C208.6 75.2194 200.934 80.9449 200.934 90.6994H168.995C168.995 63.5563 192.204 47.6522 222.227 47.6522C251.824 47.6522 277.801 61.8599 277.801 97.0611V127.173H293.345V156.861H269.71C259.489 156.861 253.74 151.135 253.74 140.957V138.836L259.064 126.113H250.546C246.501 143.925 236.067 158.981 206.044 158.981C172.615 158.981 166.866 138.624 166.866 127.597ZM200.934 121.235C200.934 127.385 206.896 129.293 212.645 129.293C231.383 129.293 243.733 121.447 243.733 108.3L216.265 112.117C206.044 113.601 200.934 115.086 200.934 121.235ZM308.255 103.211C308.255 67.5854 332.742 47.6522 367.023 47.6522C396.407 47.6522 423.236 63.5563 424.727 94.0923H390.658C389.381 84.5498 380.65 77.3399 367.023 77.3399C350.841 77.3399 342.323 86.8824 342.323 103.211C342.323 119.751 350.841 129.293 367.023 129.293C380.65 129.293 389.381 122.084 390.658 112.541H424.727C423.236 143.077 396.407 158.981 367.023 158.981C332.742 158.981 308.255 139.048 308.255 103.211ZM530.534 156.861L503.705 115.51L480.07 126.537V156.861H446.001V1H480.07V91.5476L529.256 69.0698L528.83 49.7727H562.899V73.0988C562.899 83.2775 558.853 89.8512 549.484 94.3044L532.876 101.938L569.286 156.861H530.534ZM584.172 127.597C584.172 109.148 595.244 98.3334 627.183 93.8802L661.039 89.215C661.039 80.5208 654.225 75.2194 639.533 75.2194C625.905 75.2194 618.24 80.9449 618.24 90.6994H586.301C586.301 63.5563 609.51 47.6522 639.533 47.6522C669.13 47.6522 695.107 61.8599 695.107 97.0611V127.173H710.651V156.861H687.016C676.795 156.861 671.046 151.135 671.046 140.957V138.836L676.369 126.113H667.852C663.807 143.925 653.373 158.981 623.35 158.981C589.921 158.981 584.172 138.624 584.172 127.597ZM618.24 121.235C618.24 127.385 624.202 129.293 629.951 129.293C648.689 129.293 661.039 121.447 661.039 108.3L633.571 112.117C623.35 113.601 618.24 115.086 618.24 121.235ZM774.426 129.293L814.031 127.173V156.861L758.456 158.981C746.745 159.405 740.357 152.62 740.357 140.957V79.4605H714.806V49.7727H740.357V29.6275L774.426 19.0247V49.7727H809.772V79.4605H774.426V129.293ZM916.469 47.6522C943.937 47.6522 960.545 65.8889 960.545 98.9696V156.861H926.477V104.271C926.477 84.7619 920.728 77.3399 904.332 77.3399C885.807 77.3399 873.67 87.0945 873.67 117.206V156.861H839.602V1H873.67V62.7081L867.283 81.7931H875.8C880.058 62.7081 893.473 47.6522 916.469 47.6522ZM981.723 103.211C981.723 65.8889 1008.55 47.6522 1042.41 47.6522C1076.05 47.6522 1102.88 65.8889 1102.88 103.211C1102.88 140.744 1076.05 158.981 1042.41 158.981C1008.55 158.981 981.723 140.744 981.723 103.211ZM1015.79 103.211C1015.79 121.235 1026.22 129.293 1042.41 129.293C1058.38 129.293 1068.81 121.235 1068.81 103.211C1068.81 85.398 1058.38 77.3399 1042.41 77.3399C1026.22 77.3399 1015.79 85.398 1015.79 103.211ZM1191.06 77.3399C1172.54 77.3399 1160.4 87.0945 1160.4 117.206V156.861H1126.33V49.7727H1160.4V62.7081L1154.01 81.7931H1162.53C1166.79 62.7081 1180.2 47.6522 1203.2 47.6522C1230.67 47.6522 1247.27 65.8889 1247.27 98.9696V156.861H1213.21V104.271C1213.21 84.7619 1207.46 77.3399 1191.06 77.3399ZM1373 127.385C1373 145.41 1360.01 158.981 1322.96 158.981C1283.36 158.981 1266.32 143.077 1266.32 118.055H1300.39C1300.39 126.325 1306.14 133.535 1324.03 133.535C1333.18 133.535 1338.93 131.414 1338.93 126.325C1338.93 120.811 1332.97 119.327 1315.72 113.601C1295.71 107.028 1271.22 101.726 1271.22 77.764C1271.22 58.6791 1288.47 47.6522 1318.06 47.6522C1354.48 47.6522 1369.38 65.6769 1369.38 86.4583H1335.31C1335.31 78.8243 1329.56 73.0988 1317.85 73.0988C1309.76 73.0988 1305.29 75.0073 1305.29 79.2484C1305.29 84.3378 1315.94 87.5186 1332.97 93.032C1353.84 99.8178 1373 105.119 1373 127.385Z" stroke="#D9D9D9" strokeWidth="2" mask="url(#path-1-outside-1_17_86)"/>
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
                setColumnRepeat(4)
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
                    <HackaThonsBGHackathonSVG columnRepeat={columnRepeat} key={index}/>
                ))
            }
        </div>
        
    )
}

export default HackathonsBG