import { Project, Education, Patent, Publication, Hobby } from './types';

export const personalInfo = {
  name: "杨子鹏",
  name_eng: "Ryan",
  avatar: "https://i.imgs.ovh/2025/11/28/CqTc5h.png",
  officialAccountQr: "https://github.com/RyanY11/picx-images-hosting/raw/master/pics/公众号.3uva5k00r0.webp", // Replace with your actual QR code URL
  resume: "http://121.41.128.120/resume_yangzipeng.pdf", // Replace with your actual resume PDF path or URL
  role: "产品经理",
  tagline: "用产品连接真实的人 | 用户 × 心理学 × AI",
  location: "北京·海淀",
  hometown: "云南·昆明",
  bio: "我是一名产品经理，热爱做C端产品，喜欢创新和挑战。曾做过很多偏游戏化的、与心理认知测评和训练相关的教育、数字医疗或AI工具产品。曾就职于马上消费金融人工智能研究院下属的AI心理学部，好未来TAL的创新部门脑科学实验室，脑科学领域明星创业公司IBT无疆脑智科技等企业。自我定位是“多面手”和“点子王”，除产品本身外还涉足数据分析、算法和产品运营等。我喜欢理解和探求“人”，关注个体的独立性与特异性。",
  socials: {
    wechat: "yangzipeng11",
    zhihu: "people/yang-zi-peng-87",
    github: "RyanY11",
    email: "yzpryan@hotmail.com" // Placeholder
  }
};

export const educationData: Education[] = [
  {
    school: "University of York",
    degree: "研究生",
    field: "Cognitive Neuroscience"
  },
  {
    school: "北京体育大学",
    degree: "本科",
    field: "应用心理学"
  }
];

export const projectsData: Project[] = [
  {
    title: "AI面试 (蓝领-电话坐席岗)",
    category: "AI Tool",
    description: "结合LLM实现提问、追问，及根据候选人回答进行维度评价和对比排序。智能化面试流程，提升招聘效率。",
    tags: ["LLM", "AI Hiring", "B2B2C"],
    image: "https://i.imgs.ovh/2025/11/28/CqRY1e.png"
  },
  {
    title: "AI家庭干预助手 Copilot",
    category: "AI Tool",
    description: "探索结合AI工具，为真人家庭干预教练工作提效，辅助ADHD儿童的家庭化干预训练。大模型结合家庭印象、ADHD知识库生成点评。",
    tags: ["ADHD", "Copilot", "EduTech"],
    image: "https://i.imgs.ovh/2025/11/28/CqAohc.png"
  },
  {
    title: "进击吧！原始人",
    category: "Gamification",
    description: "主要用于注意力训练，原理类似数字疗法领域明星企业Akili公司的EndeavorRX。",
    tags: ["Cognitive Training", "Game", "Digital Therapeutics", "Attention"],
    image: "https://i.imgs.ovh/2025/12/01/C5lTXd.png",
    link: "https://cdn-adhd-games.wjbrain.com/snapshots/001-pro/jin_ji_yuan_shi_ren_sheng_ji/2024-03-20/index.html?stage=1&firstplay=1&maxScore=1&practiceStageStart=11&adaptLevelStop={%22highfreqrtGoalStage%22:1,%22lowfreqrtGoalStage%22:1,%22highfreqstimSeqStage%22:1,%22lowfreqstimSeqStage%22:1}&dailyEntryTimes=1"
  },
  {
    title: "来自星星的米粒",
    category: "Gamification",
    description: "主要用于进行呼吸训练，放松身心，结合了部分正念的理论。",
    tags: ["Training", "Mindfulness", "Breathing", "Health"],
    image: "https://i.imgs.ovh/2025/12/01/C5lVSg.png",
    link: "https://cdn-adhd-games.wjbrain.com/snapshots/001-pro/lai_zi_xing_xing_de_mi_li/2024-02-24/index.html?practiceStageStart=11"
  },
  {
    title: "蛋糕店点餐",
    category: "Gamification",
    description: "主要用于训练执行功能中的处理速度。",
    tags: ["Cognitive Training", "Execution Function"],
    image: "https://i.imgs.ovh/2025/12/01/C5lbM0.png",
    link: "https://cdn-sch-games.wjbrain.com/snapshots/2.0/dan_gao_dian_dian_can/2023-08-08/index.html?stage=1&firstplay=1&maxScore=1&practiceStageStart=11"
  },
  {
    title: "3-6岁儿童认知测评",
    category: "Gamification",
    description: "这是一组专为3-6岁儿童设计的，用于替代传统纸笔形式的认知能力测量工具。",
    tags: ["Assessment", "Kids", "Cognition"],
    image: "https://i.imgs.ovh/2025/12/01/C5Bgu4.png",
    link: "https://test-wjlab-web.wjbrain.com/",
    account: "any_test",
    password: "abc123"
  }
];

export const patentsData: Patent[] = [
  { title: "一种基于元宇宙VR的大数据人才评测系统", number: "CN202310256044.X" },
  { title: "任务完成数据分析方法、装置、电子设备和存储介质", number: "CN202311465100.7" },
  { title: "训练任务提供方法、装置、电子设备和存储介质", number: "CN202410190594.0" },
  { title: "数据处理设备及方法、非易失性存储介质、电子设备", number: "CN202411432710.1" },
];

export const publicationsData: Publication[] = [
  { authors: "杨子鹏, & 李杰.", year: "2016", title: "基于心理理论视角的点球方向决策研究", journal: "中国体育科技, 52(4), 13." },
  { authors: "闻嘉宁, 李杰, 杨子鹏, & 张禹.", year: "2020", title: "空手道训练对大学生自我控制能力的影响:来自行为和脑电的证据", journal: "应用心理学, 26(3), 10." },
  { authors: "Wen, J., Li, J., Yang, Z., et al.", year: "2020", title: "The effects of karate training and moderate aerobic exercise on college students' self-control", journal: "Archives of Budo, 16, 333-343." },
  { authors: "Che, X., Lin, J., Lu, H., Yang, Z., Hui, Q., Zhou, Q., ... & Zhang, Y.", year: "2023", title: "Long-term working memory and vagally-mediated heart rate variability in pattern recall: A study on adolescent and adult female soccer players.", journal: "" },
  { authors: "Li, J., Lu, H., Yang, Z., Li, Q., Zhou, Q., Che, X., & Zhang, Y.", year: "2024", title: "Quantity and quality of memory and guesses in pattern recall of complex soccer scenarios.", journal: "International Journal of Sport and Exercise Psychology, 1–14." },
  { authors: "李杰, 李琪, 周纤, 杨子鹏, & 张禹.", year: "2024", title: "足球运动员个体与共享情境意识的特点及其关系", journal: "上海体育大学学报(11)" },
];

export const booksData = [
  {
    title: "课堂重构，释放大脑学习潜力",
    isbn: "9787030684370",
    desc: "在好未来脑科学实验室期间与同事们一起完成的思考与总结。"
  }
];

export const hobbiesData: Hobby[] = [
  {
    name: "播客",
    description: "收听 & 制作尝试",
    details: ["临时集合", "工作在别处"]
  },
  {
    name: "半程马拉松",
    description: "PB: 1:52:06",
    details: ["享受奔跑的过程"]
  },
  {
    name: "志愿服务",
    description: "北京市海淀医院安宁疗护志愿者",
    details: ["服务时长100小时+"]
  },
  {
    name: "摄影",
    description: "记录生活瞬间",
    details: ["宾得K3III", "理光XR-10M"]
  }
];
