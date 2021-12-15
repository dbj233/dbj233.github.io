let authorized = [
    "laixingzhi", "wangtian", "chensilu", "sunyixiao", "zhangjiaqiao", "gongchenyu"
]

function check(input) {
    for (let i in authorized) {
        if (input.endsWith(authorized[i])) {
            return input.substr(0, input.length - authorized[i].length)
        }
    }
    return "-1"
}


let 名人名言 = [
    "我们要学会[专时专用]，不该写作业的时候就不写作业，下课就该好好放松，",
    "你们下课写出来的作业，[有过质量吗]？你们就像教室里的写作业机器、行尸走肉，",
    "为什么[没有一个班委]出面解决问题？全体班委起立！一个个来说！",
    "现在，解决主题的问题，是[非常重要]的，这牵扯到我们班级里的[每一个]同学。所以，",
    "主题这件事很可能成成为我们班的一个[滑铁卢]，我们不得不面对 6 班[少有]的嘲笑。",
    "最近我们班级在各个方面出现了[种种漏洞]，包括主题等等。",
    "出现主题，就是因为班委丝毫起不到[带头作用]，一个人不作为，[全班不作为]！",
    "对老师要有[基本的尊重]，我不配拥有姓名吗？",
    "[我不是你妈]，我就算是你妈也养不出来你这样的！",
    "你们在我的课上[都敢讲话]！更不要说其他的课了！",
    "其他什么[乱七八糟]的课外班，能看回放的都去[看回放]！",
    "你们是戴着[红领巾]的学生！你们觉得主题[合适]吗！",
    "主题就像你们不带作业不带备忘录回家，这是你们从预初到现在还没改掉的[坏习惯]！",
    "为什么你们做那么简单一件事情就是做不好啊，",
    "你来学校是[做学生]的，老师教育你还是你教育老师啊？",
    "黄老师是我的老师级别的人物，我看你们谁敢欺负他！",
    "你看你[重视]起来了，自然就好了，",
    "中午饭[竟然]敢不吃了，",
    "你以为你谁啊？和我那么熟，是我朋友啊？",
    "主题，你看看，所以是不是就像我说的那样？",
    "你还[理直气壮]的？你不应该[低下头承认错误]吗？",
    "每次进来[都]是看到你们几个！",
    "谁想在[这么乱]，甚至还发生主题的班级里生活啊？",
    "你看班级里现在[散成什么样]了！",
    "我的课不是你[随意玩耍]的时候，",
    "关于主题，学校里[没有一个老师]规定过是允许的！",
    "这次，被我抓到主题了，我相信平时班级里[还有更多]，",
    "主题是[极其重大]、[危险]的安全问题！",
    "你们现在像主题这样懒散，是不是就在上课的时候也一样随意，",
    "主题这件事，你们没有自己的立场吗？没有一点[严肃性]吗？",
    "现在懒散成主题这样，以后就会遭受[社会的毒打]！",
    "老师在上面讲，你们在下面说？",
    "主题发生以后，你想想我们班批评多还是表扬多？几乎都没有表扬的，[全是批评]！",
    "天天沾着 7 班的光环，你们为 7 班作贡献了吗？都是在主题这种事上天天给班集体[拖后腿]！",
    "像主题这样出去，自己给自己班级丢脸！",
    "连指认同学都不敢，当什么班委？",
    "诶你们集体主题是什么意思啊？"
];

let 后面垫话 = [
    "是吗？",
    "对吧？",
    "邓老师都说过多少遍了，还是有人[不理解]！",
    "只考虑着自己，没有一点[集体意识]。",
    "这就是不[专时专用]的后果。",
    "就是这样。",
    "[自私自利]，完全不顾他人感受！",
    "我接下来会好好观察你们几个的表现。",
    "好好提高[思想觉悟]！",
    "这终将会体现在你们的[学习成绩]上！",
    "你们像是 7 班的[样子]吗？",
    "年级里的其他班级都在[笑话我们]！",
    "毫无[责任心]！",
    "7 班怎么了？",
    "我这次说完以后，我倒要看看谁再敢[顶风作案]！",
    "给低年级的同学们做一个[好的榜样]！",
    "写下来，以后要用的！",
    "这就是一些同学[自以为是]的后果。",
    "这不符合[科学的规律]！",
    "我跟你说！",
    "批评！",
    "跟小混混有什么区别？",
    "从这一点联想出去那么多，都是[一样的]！",
    "是不是还要再来一遍预初的入学教育啊？"
];

let 前面垫话 = [
    "[作为华育的学生]，",
    "作为 7 班的[优秀]学生，",
    "青春期正是你们[荷尔蒙最旺盛]的时候，",
    "我再强调一遍，",
    "体委，你给我起立！",
    "你们不要不信邪，",
    "进入初二年级，我们更应该学会调整自己的[学习状态]，",
    "非要我这么凶是吗？",
    "今天我真的是气死了！",
    "还在那里[沾沾自喜]？",
    "我又看到有人在下面[嬉闹]！",
    "自己想想，",
    "那些主题的人，你们最好给我头[低下去]一点！",
    "主题这件事，我还一直没来得及教育你们呢，"
];

function 随便取一句(列表, 主题) {
    let 坐标 = Math.floor(Math.random() * 列表.length);
    return 列表[坐标].replace(RegExp("\\[", "g"), "<strong>").replace(RegExp("\\]", "g"), "</strong>").replace(RegExp("主题", "g"), 主题);
};

function 随便取一个数(最小值 = 0, 最大值 = 100) {
    let 数字 = Math.random() * (最大值 - 最小值) + 最小值;
    return 数字;
}

function 来点论述(主题) {
    let 名言 = 随便取一句(名人名言, 主题)
    名言 = 随便取一句(前面垫话, 主题) + 名言 + 随便取一句(后面垫话, 主题)
    return 名言;
}

function 增加段落(章节) {
    if (章节[章节.length - 1] === " ") {
        章节 = 章节.slice(0, -2)
    }
    return "　　" + 章节
}

function 生成文章(主题) {
    let 文章 = []
    for (var i = 0; i < 4; ++i) {
        let 章节 = "";
        let 章节长度 = 0;
        while (章节长度 < 1000) {
            let 随机数 = 随便取一个数();
            if (随机数 < 5 && 章节.length > 200) {
                章节 = 增加段落(章节);
                文章.push(章节);
                章节 = "";
            } else {
                let 句子 = 来点论述(主题);
                章节长度 = 章节长度 + 句子.length;
                章节 = 章节 + 句子;
            }
        }
        章节 = 增加段落(章节);
        文章.push(章节);
    }
    return 文章.join("\n");
}
