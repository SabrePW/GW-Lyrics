// Add future songs to this array. The interface and navigation update automatically.
const songs = [
  {
    id: "ndp-medley",
    number: "01",
    title: "NDP Medley",
    subtitle: "",
    verses: [
      [
        { section: "We Are Singapore" },
        { english: "We are Singapore, we are Singapore" },
        { english: "We will stand together, hear the lion roar" },
        { english: "We are Singapore, we are Singapore" },
        { english: "We're a nation strong and free forevermore" }
      ],
      [
        { english: "This is my country, this is my flag" },
        { english: "This is my future, this is my life" },
        { english: "This is my family, these are my friends" },
        { english: "We are Singapore, Singaporeans" }
      ],
      [
        { section: "Stand Up for Singapore" },
        { english: "Stand up, stand up for Singapore" }
      ],
      [
        { english: "Stand up for Singapore" },
        { english: "Do the best you can" },
        { english: "Reach out for your fellow man" },
        { english: "You've got to make a stand" }
      ],
      [
        { english: "Recognise you can play your part" },
        { english: "Let it come right from your heart" },
        { english: "Be prepared to give a little more" },
        { english: "Stand up, stand up for Singapore" }
      ],
      [
        { section: "小人物的心声" },
        { chinese: "也许我一个人 不能成就一番大事业" },
        { chinese: "让我尽力贡献一份微薄的力量" },
        { chinese: "也许我自己 不能发出万丈光和亮" },
        { chinese: "但我能为斗室带来足够的光芒" }
      ],
      [
        { chinese: "我从来就不在乎" },
        { chinese: "自己不是一个大人物" },
        { chinese: "因为平凡也是一种幸福" },
        { chinese: "看到名人总是忙忙碌碌" },
        { chinese: "我的时间由我控制" },
        { chinese: "平凡日子一样会充实" }
      ],
      [
        { section: "家" },
        { chinese: "我的家 收藏" },
        { chinese: "我的欢喜悲伤" },
        { chinese: "只要点燃希望" },
        { chinese: "梦就会自由飞翔" }
      ],
      [
        { chinese: "我的家 给我" },
        { chinese: "一双坚定翅膀" },
        { chinese: "我的梦 不论在何方" },
        { chinese: "一生的爱唯有家" }
      ]
    ]
  },
  {
    id: "hao-xi-huan",
    number: "02",
    title: "好喜歡與你在一起",
    subtitle: "Hao Xi Huan Yu Ni Zai Yi Qi",
    verses: [
      [
        { chinese: "謝謝你牽著我手 高山低谷陪我走", pinyin: "Xie Xie Ni Qian Zhe Wo Shou · Gao Shan Di Gu Pei Wo Zou" },
        { chinese: "從不放棄我 真誠愛我 接納我", pinyin: "Cong Bu Fang Qi Wo · Zhen Cheng Ai Wo · Jie Na Wo" },
        { chinese: "一起做夢 一起笑", pinyin: "Yi Qi Zuo Meng · Yi Qi Xiao" },
        { chinese: "一起敬拜和禱告", pinyin: "Yi Qi Jing Bai He Dao Gao" },
        { chinese: "一起慶賀 每個生命的奇蹟", pinyin: "Yi Qi Qing He · Mei Ge Shen Ming De Qi Ji" }
      ],
      [
        { chinese: "好喜歡與你在一起 分享生活 分享愛", pinyin: "Hao Xi Huan Yu Ni Zai Yi Qi · Fen Xiang Sheng Huo · Fen Xiang Ai" },
        { chinese: "沒有批判和論斷 心完全敞開", pinyin: "Mei You Pi Pan He Lun Duan · Xin Wan Quan Chang Kai" },
        { chinese: "好喜歡與你在一起 像耶穌一樣地愛", pinyin: "Hao Xi Huan Yu Ni Zai Yi Qi · Xiang Ye Su Yi Yang Di Ai" },
        { chinese: "你我不孤單 這裡有愛", pinyin: "Ni Wo Bu Gu Dan · Zhe Li You Ai" }
      ]
    ]
  },
  {
    id: "jin-jia-ho",
    number: "03",
    title: "真正好",
    subtitle: "Jin Jia Ho",
    verses: [
      [
        { chinese: "真正好 来信耶稣真正好", pinyin: "Jin Jia Ho · Lai Sin Ya So Jin Jia Ho" },
        { chinese: "真正好 来信耶稣真正好", pinyin: "Jin Jia Ho · Lai Sin Ya So Jin Jia Ho" },
        { chinese: "我 拜一 拜二 拜三", pinyin: "Gua · Pai Yit · Pai Ji · Pai Sa" },
        { chinese: "拜四 拜五 拜六 整个礼拜", pinyin: "Pai Si · Pai Gor · Pai Lak · Kui Eh Lay Bai" },
        { chinese: "真正好 来信耶稣真正好", pinyin: "Jin Jia Ho · Lai Sin Ya So Jin Jia Ho" }
      ],
      [
        { chinese: "真正好 信了耶稣真正好", pinyin: "Jin Jia Ho · Sin Liao Ya So Jin Jia Ho" },
        { chinese: "真正好 信了耶稣真正好", pinyin: "Jin Jia Ho · Sin Liao Ya So Jin Jia Ho" },
        { chinese: "我 拜一 拜二 拜三", pinyin: "Gua · Pai Yit · Pai Ji · Pai Sa" },
        { chinese: "拜四 拜五 拜六 整个礼拜", pinyin: "Pai Si · Pai Gor · Pai Lak · Kui Eh Lay Bai" },
        { chinese: "真正好 信了耶稣真正好", pinyin: "Jin Jia Ho · Sin Liao Ya So Jin Jia Ho" }
      ],
      [
        { chinese: "主耶稣真好 我要来赞美", pinyin: "Zu Ya So Jin Ho · Gua Beh Lai O Lo" },
        { chinese: "我的耶稣 对我真好", pinyin: "Gua Eh Ya So · Dui Gua Jin Ho" },
        { chinese: "拿掉我的烦恼 让我每日笑", pinyin: "Teh Diao Gua Eh Huan Lo · Ho Gua Tak Jit Chio" },
        { chinese: "我的耶稣 对我真好", pinyin: "Gua Eh Ya So · Dui Gua Jin Ho" }
      ]
    ]
  },
  {
    id: "da-dan-xuan-gao",
    number: "04",
    title: "大胆宣告",
    subtitle: "",
    verses: [
      [
        { chinese: "岁数越大 力量越大 全是耶稣祝福我", pinyin: "Sui Shu Yue Da · Li Liang Yue Da · Quan Shi Ye Su Zhu Fu Wo" },
        { chinese: "我脚也有力 手也有力 全是耶稣祝福我", pinyin: "Wo Jiao Ye You Li · Shou Ye You Li · Quan Shi Ye Su Zhu Fu Wo" },
        { chinese: "血路都通暢啊 身体又硬朗", pinyin: "Xue Lu Dou Tong Chang Ah · Shen Ti You Ying Lang" },
        { chinese: "我脚也有力 手也有力 全是耶稣祝福我", pinyin: "Wo Jiao Ye You Li · Shou Ye You Li · Quan Shi Ye Su Zhu Fu Wo" }
      ],
      [
        { chinese: "我眼睛明亮 脸又漂亮", pinyin: "Wo Yan Jing Ming Liang · Lian You Piao Liang" },
        { chinese: "一看就是年轻样", pinyin: "Yi Kan Jiu Shi Nian Qing Yang" },
        { chinese: "我能吃能睡 真幸福", pinyin: "Wo Neng Chi Neng Shui · Zhen Xing Fu" },
        { chinese: "出入平安 感谢祢", pinyin: "Chu Ru Ping An · Gan Xie Ni" }
      ]
    ]
  },
  {
    id: "gua-su-yao-li",
    number: "05",
    title: "我需要祢",
    subtitle: "Gua Su Yao Li",
    verses: [
      [
        { chinese: "日时，有祢的笑脸", pinyin: "Lit See · Wu Li Eh Chio Bin" },
        { chinese: "夜时，有祢的保庇", pinyin: "Meh See · Wu Li Eh Po Pi" },
        { chinese: "我出，我进", pinyin: "Gua Chut · Gua Jip" },
        { chinese: "不曾离开我…身边", pinyin: "Mm Pat Li Kui Gua · Sim Bi" }
      ],
      [
        { chinese: "烦恼，祢让我欢喜", pinyin: "Huan Lo · Li Cho Gua Hua Hee" },
        { chinese: "心碎，有祢来医治", pinyin: "Sim Cui · Wu Li Lai Yee Di" },
        { chinese: "我站，我坐", pinyin: "Gua Kia · Gua Zay" },
        { chinese: "我睡，我醒", pinyin: "Gua Koon · Gua Cean" }
      ],
      [
        { chinese: "主，我真需要祢", pinyin: "Zhu · Gua Jin Su Yao Li" },
        { chinese: "我不能没有祢", pinyin: "Gua Beh Tang Bo Wu Li" },
        { chinese: "若是没有祢", pinyin: "Na See Bo Wu Li" },
        { chinese: "我不知要怎样活下去", pinyin: "Gua Mm Zai Beh An Zua Wa Lo Kee" },
        { chinese: "主，我真感谢祢", pinyin: "Zhu · Gua Jin Kam Sia Li" },
        { chinese: "我永远赞美祢", pinyin: "Gua Eng Guan O Lo Li" },
        { chinese: "因为祢救我，洗我清洁", pinyin: "Yin Wee Li Kew Gua · Say Gua Cheng Ki" },
        { chinese: "不记念我过去的事情", pinyin: "Bo Kee Liam Gua Gue Kee Eh Dai Ji" }
      ],
      [
        { chinese: "鱼不能没有水，云不能没有天", pinyin: "Hir Beh Lang Bo Wu Zui · Hun Beh Lang Bo Wu Thi" },
        { chinese: "人不能没有神，我不能没有祢", pinyin: "Lang Beh Tang Wu Xin · Gua Beh Lang Bo Wu Li" }
      ]
    ]
  },
  {
    id: "ye-su-ji-du-ni-shi-zhu",
    number: "06",
    title: "耶稣基督祢是主",
    subtitle: "",
    verses: [
      [
        { chinese: "因为祢是万王之王", pinyin: "Yin Wei Ni Shi Wan Wang Zhi Wang" },
        { chinese: "因为祢是万主之主", pinyin: "Yin Wei Ni Shi Wan Zhu Zhi Zhu" },
        { chinese: "唯有祢从死里复活", pinyin: "Wei You Ni Cong Si Li Fu Huo" },
        { chinese: "我要敬拜祢", pinyin: "Wo Yao Jing Bai Ni" }
      ],
      [
        { chinese: "万膝要跪拜 万口要承认", pinyin: "Wan Qi Yao Gui Bai · Wan Kou Yao Cheng Ren" },
        { chinese: "耶稣基督祢是主", pinyin: "Ye Su Ji Du Ni Shi Zhu" },
        { chinese: "万膝要跪拜 万口要承认", pinyin: "Wan Qi Yao Gui Bai · Wan Kou Yao Cheng Ren" },
        { chinese: "耶稣基督祢是主", pinyin: "Ye Su Ji Du Ni Shi Zhu" }
      ],
      [
        { chinese: "高唱荣耀 哈利路亚", pinyin: "Gao Chang Rong Yao · Ha Li Lu Ya" },
        { chinese: "欢呼荣耀 哈利路亚", pinyin: "Huan Hu Rong Yao · Ha Li Lu Ya" },
        { chinese: "祢是我的主 我的王", pinyin: "Ni Shi Wo De Zhu · Wo De Wang" },
        { chinese: "我要敬拜祢", pinyin: "Wo Yao Jing Bai Ni" }
      ],
      [
        { chinese: "哈利路亚 哈利路亚", pinyin: "Ha Li Lu Ya · Ha Li Lu Ya" },
        { chinese: "耶稣基督祢是主", pinyin: "Ye Su Ji Du Ni Shi Zhu" },
        { chinese: "哈利路亚 哈利路亚", pinyin: "Ha Li Lu Ya · Ha Li Lu Ya" },
        { chinese: "耶稣基督祢是主", pinyin: "Ye Su Ji Du Ni Shi Zhu" }
      ]
    ]
  },
  {
    id: "yue-chang-yue-kuai-huo",
    number: "07",
    title: "越唱越快活",
    subtitle: "Nat Chiu Nat Kua Wua",
    verses: [
      [
        { chinese: "有时有很多烦恼，心肝真辛苦", pinyin: "Wu Si Wu Jin Zueh Huan Lo · Sim Kua Jia Kan Ko" },
        { chinese: "有时有很多事情，我看不清楚", pinyin: "Wu Si Wu Jin Zueh Dai Zi · Gua Kua Beh Cheng Cho" },
        { chinese: "有时人讲东讲西，误会上 误会下", pinyin: "Wu Si Lang Gong Tang Gong Sai · Gor Hui Ki · Gor Hui Lo" },
        { chinese: "遇到这么样的时间", pinyin: "Du Dio An Ni Kuan Eh Si Kan" },
        { chinese: "第一好是来赞美", pinyin: "Teh Yit Ho Si Lai O Lo" }
      ],
      [
        { chinese: "来唱啦… 唱哈利路亚", pinyin: "Lai Chiu Lalala · Chiu Ha Le Lu Yah" },
        { chinese: "来唱啦… 给主耶稣听", pinyin: "Lai Chiu Lalala · Hor Zhu Ya Sor Tia" },
        { chinese: "来唱啦… 唱歌给主听", pinyin: "Lai Chiu Lalala · Chiu Kua Hor Zhu Tia" },
        { chinese: "来唱啦… 越唱越快活", pinyin: "Lai Chiu Lalala · Na Chiu Na Kua Gua" }
      ]
    ]
  },
  {
    id: "ye-su-zhang-quan",
    number: "08",
    title: "耶稣掌权",
    subtitle: "",
    verses: [
      [
        { chinese: "洪水泛滥的时候 耶稣掌权", pinyin: "Hong Shui Fan Lan De Shi Hou · Ye Su Zhang Quan" },
        { chinese: "四面受敌的时候 耶稣掌权", pinyin: "Si Mian Shou Di De Shi Hou · Ye Su Zhang Quan" },
        { chinese: "不看环境 只要全心来相信", pinyin: "Bu Kan Huan Jing · Zhi Yao Quan Xin Lai Xiang Xin" },
        { chinese: "耶稣掌权 祂凡事都掌权", pinyin: "Ye Su Zhang Quan · Ta Fan Shi Dou Zhang Quan" }
      ],
      [
        { chinese: "高唱哈利路亚 哈利路亚", pinyin: "Gao Chang Ha Li Lu Ya · Ha Li Lu Ya" },
        { chinese: "用赞美和感谢 迎接每一天", pinyin: "Yong Zan Mei He Gan Xie · Ying Jie Mei Yi Tian" },
        { chinese: "高唱哈利路亚 哈利路亚", pinyin: "Gao Chang Ha Li Lu Ya · Ha Li Lu Ya" },
        { chinese: "祂掌权在每一天", pinyin: "Ta Zhang Quan Zai Mei Yi Tian" },
        { chinese: "耶稣正掌权", pinyin: "Ye Su Zheng Zhang Quan" }
      ]
    ]
  },
  {
    id: "man-you-neng-li",
    number: "09",
    title: "满有能力",
    subtitle: "",
    verses: [
      [
        { chinese: "我的盼望 就在耶稣基督里", pinyin: "Wo Di Pan Wang · Jiu Zai Ye Su Ji Du Li" },
        { chinese: "在祢里面满有平安", pinyin: "Zai Ni Li Mian Man You Ping An" },
        { chinese: "生命泉源 就在耶稣基督里", pinyin: "Sheng Ming Quan Yuan · Jiu Zai Ye Su Ji Du Li" },
        { chinese: "有主在我里面活着", pinyin: "You Zhu Zai Wo Li Mian Huo Zhe" }
      ],
      [
        { chinese: "我宣告在我里面的 比世上一切更有能力", pinyin: "Wo Xuan Gao Zai Wo Li Mian Di · Bi Shi Shang Yi Qie Geng You Neng Li" },
        { chinese: "我不属这世界 我高举耶稣的名", pinyin: "Wo Bu Shu Zhe Shi Jie · Wo Gao Ju Ye Su Di Ming" },
        { chinese: "我宣告在我里面有 活水涌流满有能力", pinyin: "Wo Xuan Gao Zao Wo Li Mian You · Huo Shui Yong Liu Man You Neng Li" },
        { chinese: "有耶稣在我里面活着 我勇敢站立", pinyin: "You Ye Su Zai Wo Li Mian Huo Zhe · Wo Yong Gan Zhan Li" }
      ],
      [
        { chinese: "有主在我里面 没有惧怕 能战胜仇敌", pinyin: "You Zhu Zai Wo Li Mian · Mei You Ju Pa · Neng Zhan Sheng Chou Di" },
        { chinese: "有主在我里面 没有惧怕 还得胜有余", pinyin: "You Zhu Zai Wo Li Mian · Mei You Ju Pa · Hai De Sheng You Yu" }
      ]
    ]
  },
  {
    id: "kan-jian-shen-de-ai",
    number: "10",
    title: "看见神的爱",
    subtitle: "",
    verses: [
      [
        { chinese: "我看见神的爱 在温暖的阳光", pinyin: "Wo Kan Jian Shen De Ai · Zai Wen Nuan De Yang Guang" },
        { chinese: "我看见神的爱 在澎湃的海洋", pinyin: "Wo Kan Jian Shen De Ai · Zai Peng Pai De Hai Yang" },
        { chinese: "我看见神的爱 在怜悯的心肠", pinyin: "Wo Kan Jian Shen De Ai · Zai Lian Ming De Xin Chang" },
        { chinese: "我看见神的爱 在你我的脸上", pinyin: "Wo Kan Jian Shen De Ai · Zai Ni Wo De Lian Shang" }
      ],
      [
        { chinese: "在每个微笑 在每个拥抱", pinyin: "Zai Mei Ge Wei Xiao · Zai Mei Ge Yong Bao" },
        { chinese: "在每个祈祷 我能看见神的爱", pinyin: "Zai Mei Ge Qi Dao · Wo Neng Kan Jian Shen De Ai" },
        { chinese: "在每个微笑 在每个拥抱", pinyin: "Zai Mei Ge Wei Xiao · Zai Mei Ge Yong Bao" },
        { chinese: "在每个祈祷 我能看见神的爱", pinyin: "Zai Mei Ge Qi Dao · Wo Neng Kan Jian Shen De Ai" },
        { chinese: "我能看见 神的爱", pinyin: "Wo Neng Kan Jian · Shen De Ai" }
      ]
    ]
  }
];

const root = document.documentElement;
const songSelect = document.querySelector("#songSelect");
const songList = document.querySelector("#songList");
let lyricScale = Number(localStorage.getItem("gw-lyric-scale")) || 1;

const createSong = (song, index) => {
  const article = document.createElement("article");
  article.className = "song-sheet";
  article.id = song.id;

  const heading = document.createElement("header");
  heading.className = "song-heading";
  const meta = document.createElement("div");
  meta.className = "song-meta";
  const position = document.createElement("span");
  position.textContent = `Song ${index + 1} of ${songs.length}`;
  const number = document.createElement("span");
  number.className = "song-number";
  number.textContent = song.number;
  meta.append(position, number);

  const progress = document.createElement("div");
  progress.className = "progress";
  progress.setAttribute("aria-hidden", "true");
  const progressBar = document.createElement("span");
  progressBar.style.width = `${((index + 1) / songs.length) * 100}%`;
  progress.append(progressBar);

  const title = document.createElement("h1");
  title.textContent = song.title;
  heading.append(meta, progress, title);
  if (song.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.className = "song-subtitle";
    subtitle.textContent = song.subtitle;
    heading.append(subtitle);
  }

  const lyrics = document.createElement("div");
  lyrics.className = "lyrics";
  lyrics.append(...song.verses.map((verse) => {
    const verseElement = document.createElement("section");
    verseElement.className = "verse";
    verseElement.append(...verse.map((line) => {
      if (line.section) {
        const heading = document.createElement("h2");
        heading.className = "section-label";
        heading.textContent = line.section;
        return heading;
      }
      const lineElement = document.createElement("div");
      lineElement.className = "line";
      const parts = [
        ["chinese", "line__chinese", "zh-Hans"],
        ["english", "line__english", "en"],
        ["pinyin", "line__pinyin", "zh-Latn"]
      ];
      parts.forEach(([key, className, lang]) => {
        if (!line[key]) return;
        const paragraph = document.createElement("p");
        paragraph.className = className;
        paragraph.lang = lang;
        paragraph.textContent = line[key];
        lineElement.append(paragraph);
      });
      return lineElement;
    }));
    return verseElement;
  }));
  article.append(heading, lyrics);
  return article;
};

songs.forEach((song) => {
  const option = document.createElement("option");
  option.value = song.id;
  option.textContent = `${song.number} · ${song.title}${song.subtitle ? ` — ${song.subtitle}` : ""}`;
  songSelect.append(option);
});
songList.append(...songs.map(createSong));

const scrollToSong = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};

songSelect.addEventListener("change", () => {
  if (songSelect.value === "home") {
    history.replaceState(null, "", location.pathname + location.search);
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
  scrollToSong(songSelect.value);
});
document.querySelector("#homeButton").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const applyScale = () => {
  root.style.setProperty("--lyric-scale", lyricScale.toFixed(2));
  localStorage.setItem("gw-lyric-scale", lyricScale);
  document.querySelector("#fontDown").disabled = lyricScale <= .8;
  document.querySelector("#fontUp").disabled = lyricScale >= 1.4;
};
document.querySelector("#fontDown").addEventListener("click", () => { lyricScale = Math.max(.8, lyricScale - .1); applyScale(); });
document.querySelector("#fontUp").addEventListener("click", () => { lyricScale = Math.min(1.4, lyricScale + .1); applyScale(); });

const themeButton = document.querySelector("#themeToggle");
const applyTheme = (theme) => {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  themeButton.setAttribute("aria-pressed", dark);
  themeButton.setAttribute("aria-label", dark ? "Use light mode" : "Use dark mode");
  themeButton.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#0d2138" : "#174d8c";
  localStorage.setItem("gw-theme", theme);
};
const savedTheme = localStorage.getItem("gw-theme");
const requestedTheme = new URLSearchParams(location.search).get("theme");
applyTheme(requestedTheme === "light" || requestedTheme === "dark"
  ? requestedTheme
  : savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeButton.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));

document.querySelector("#posterImage").addEventListener("error", (event) => { event.currentTarget.hidden = true; });

applyScale();
const requestedSong = location.hash.slice(1);
if (songs.some((song) => song.id === requestedSong)) {
  songSelect.value = requestedSong;
  requestAnimationFrame(() => document.getElementById(requestedSong).scrollIntoView());
}

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) songSelect.value = visible.target.id;
}, { rootMargin: "-20% 0px -55%", threshold: [0, .25, .5] });
document.querySelectorAll(".song-sheet").forEach((song) => observer.observe(song));
