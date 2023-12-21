import wantube from "../assets/img/wantube.png";
import mbti from "../assets/img/mbti.png";
import megabox from "../assets/img/megabox.png";
import portfolio from "../assets/img/portfolio.png";
import panorama from "../assets/img/panorama.png";
import homedeco from "../assets/img/homedeco.png";


export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "front developer",
    desc: ["talent is", "found at the end of the", "effort"]
}

export const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
        title: "나에게 정직하다.",
        desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    }
]

export const siteText = [
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "비트를 이용한 사이트 제작",
        code: "https://github.com/jjongwann/port2023-vite",
        view: "https://port2023-jongs-vite.netlify.app/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/jjongwann/port2023-react",
        view: "https://port2023-jongs-react.netlify.app/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, react",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 사이트 제작",
        code: "https://github.com/jjongwann/port2023-vue",
        view: "https://port2023-jongs-vue.netlify.app/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, vue",
        ],
    },
];

export const portText = [
    {
        num: "01",
        title: "나만의 유튜브 사이트 만들기",
        desc: " 이 사이트는 React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.",
        img: wantube,
        code: "https://github.com/jjongwann/wan-youtube",
        view: "https://wan-youtube.netlify.app/",
        name: "나만의 유튜브 사이트 만들기",
    },
    {
        num: "02",
        title: "십이간지로 알아보는 연애유형MBTI",
        desc: "이 사이트는 십이간지로 알아보는 연애유형입니다. 풋풋한 연인들이 함께 하면 한층 더 가까워진 느낌을 받을 수 있는 연애MBTI사이트입니다. 총 12질문으로 구성되어있으며, 카카오톡api공유도 가능한 사이트입니다. 여러가지 프레임워크들을 활용하여 제작하였습니다.",
        img: mbti,
        code: "https://github.com/jjongwann/mbti",
        view: "https://mbti-love.netlify.app/",
        name: "십이간지로 알아보는 연애유형MBTI",
    },
    {
        num: "03",
        title: "메가박스 클론 사이트",
        desc: "이 사이트는 사람들이 좋아하고 흔히 볼 수 있는 영화 사이트입니다. HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다.",
        img: megabox,
        code: "https://github.com/jjongwann/megaClone",
        view: "https://megaclone.netlify.app/",
        name: "메가박스 클론 사이트",
    },
    {
        num: "04",
        title: "VITE 포트폴리오 사이트",
        desc: "이 사이트는 VITE로 만든 포트폴리오 사이트입니다. vite를 사용하여 사이트를 번들링하고 관리하며, gsap를 이용하여 패럴릭스 효과를 주고 lenis를 이용하여 스모스 효과를 구현하는 등 다양한 프레임워크를 활용한 사이트입니다. HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다.",
        img: portfolio,
        code: "https://github.com/jjongwann/port2023-vite",
        view: "https://port2023-jongs-vite.netlify.app/",
        name: "VITE 포트폴리오 사이트",
    },
    {
        num: "05",
        title: "파노라마 3D Company",
        desc: "이 사이트는 3D를 기반으로 만든 파노라마 회사 사이트입니다. '파노라마'란 본래는 넒은 전망을 뜻합니다. 이와 같이 360도 방향의 모든 경치를 담아낸 사이트입니다. HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다.",
        img: panorama,
        code: "https://github.com/jjongwann/panorama-company",
        view: "https://panorama-3dcompany.netlify.app/",
        name: "파노라마 3D Company",
    },
    {
        num: "06",
        title: "한솔 홈데코",
        desc: "토탈 인테리어 서비스와 인테리어 소품판매 등 인테리어 전반에 대한 서비스를 제공함으로써, 행복한 공간을 보여주는 사이트입니다. HTML5, CSS3로 제작하였습니다.",
        img: homedeco,
        code: "https://github.com/jjongwann/hansol",
        view: "https://hansol-homedecoo.netlify.app/",
        name: "한솔 홈데코",
    }
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/gXoVmSXf",
        title: "KAKAO : jongwan",
    },
    {
        link: "mailto:whddhks1121@naver.com",
        title: "mail : whddhks1121@naver.com",
    },
];

export const footerText = [
    {
        title: "youtube",
        desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/",
    },
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/jjongwann",
    },
    {
        title: "react",
        desc: "리액트로 만든 포트폴리오 사이트입니다.",
        link: "https://github.com/jjongwann/port2023-react",
    },
    {
        title: "vite",
        desc: "바이트로 만든 포트폴리오 사이트입니다.",
        link: "https://github.com/jjongwann/port2023-vite",
    },
    {
        title: "next",
        desc: "넥스트로 만든 포트폴리오 사이트입니다.",
        link: "https://github.com/jjongwann/port2023-next",
    },
];