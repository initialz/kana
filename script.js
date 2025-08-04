// N4单词数据
const N4_WORDS = [
    // A行
    {kanji: '挨拶', kana: 'あいさつ', romaji: 'aisatsu', meaning: '问候、打招呼', type: 'noun'},
    {kanji: '間', kana: 'あいだ', romaji: 'aida', meaning: '之间、期间', type: 'noun'},
    {kanji: '合う', kana: 'あう', romaji: 'au', meaning: '合适、相配', type: 'verb'},
    {kanji: '案内', kana: 'あんない', romaji: 'annai', meaning: '向导、指南', type: 'noun'},
    {kanji: '安心', kana: 'あんしん', romaji: 'anshin', meaning: '安心、放心', type: 'noun'},
    {kanji: '安全', kana: 'あんぜん', romaji: 'anzen', meaning: '安全的', type: 'adj'},
    {kanji: '味', kana: 'あじ', romaji: 'aji', meaning: '味道', type: 'noun'},
    {kanji: '厚い', kana: 'あつい', romaji: 'atsui', meaning: '厚的', type: 'adj'},
    {kanji: '集まる', kana: 'あつまる', romaji: 'atsumaru', meaning: '聚集', type: 'verb'},
    {kanji: '集める', kana: 'あつめる', romaji: 'atsumeru', meaning: '收集', type: 'verb'},
    {kanji: '温かい', kana: 'あたたかい', romaji: 'atatakai', meaning: '温暖的', type: 'adj'},
    {kanji: '頭', kana: 'あたま', romaji: 'atama', meaning: '头部', type: 'noun'},
    {kanji: '新しい', kana: 'あたらしい', romaji: 'atarashii', meaning: '新的', type: 'adj'},
    {kanji: '当たる', kana: 'あたる', romaji: 'ataru', meaning: '碰到、中奖', type: 'verb'},
    {kanji: '後', kana: 'あと', romaji: 'ato', meaning: '后面、之后', type: 'noun'},
    
    // B行
    {kanji: '場合', kana: 'ばあい', romaji: 'baai', meaning: '情况、场合', type: 'noun'},
    {kanji: '番組', kana: 'ばんぐみ', romaji: 'bangumi', meaning: '节目', type: 'noun'},
    {kanji: '別', kana: 'べつ', romaji: 'betsu', meaning: '别的、不同的', type: 'adj'},
    {kanji: '別れる', kana: 'わかれる', romaji: 'wakareru', meaning: '分别、分手', type: 'verb'},
    {kanji: '便利', kana: 'べんり', romaji: 'benri', meaning: '方便的', type: 'adj'},
    {kanji: '勉強', kana: 'べんきょう', romaji: 'benkyou', meaning: '学习', type: 'noun'},
    {kanji: '文化', kana: 'ぶんか', romaji: 'bunka', meaning: '文化', type: 'noun'},
    {kanji: '文学', kana: 'ぶんがく', romaji: 'bungaku', meaning: '文学', type: 'noun'},
    {kanji: '部長', kana: 'ぶちょう', romaji: 'buchou', meaning: '部长', type: 'noun'},
    {kanji: '豚肉', kana: 'ぶたにく', romaji: 'butaniku', meaning: '猪肉', type: 'noun'},
    
    // C行
    {kanji: '注意', kana: 'ちゅうい', romaji: 'chuui', meaning: '注意、小心', type: 'noun'},
    {kanji: '中止', kana: 'ちゅうし', romaji: 'chuushi', meaning: '中止', type: 'noun'},
    {kanji: '中学校', kana: 'ちゅうがっこう', romaji: 'chuugakkou', meaning: '中学', type: 'noun'},
    {kanji: '調べる', kana: 'しらべる', romaji: 'shiraberu', meaning: '调查', type: 'verb'},
    {kanji: '治療', kana: 'ちりょう', romaji: 'chiryou', meaning: '治疗', type: 'noun'},
    {kanji: '地図', kana: 'ちず', romaji: 'chizu', meaning: '地图', type: 'noun'},
    {kanji: '地震', kana: 'じしん', romaji: 'jishin', meaning: '地震', type: 'noun'},
    {kanji: '自信', kana: 'じしん', romaji: 'jishin', meaning: '自信', type: 'noun'},
    {kanji: '自然', kana: 'しぜん', romaji: 'shizen', meaning: '自然', type: 'noun'},
    {kanji: '自由', kana: 'じゆう', romaji: 'jiyuu', meaning: '自由', type: 'noun'},
    
    // D行
    {kanji: '大学生', kana: 'だいがくせい', romaji: 'daigakusei', meaning: '大学生', type: 'noun'},
    {kanji: '代表', kana: 'だいひょう', romaji: 'daihyou', meaning: '代表', type: 'noun'},
    {kanji: '大切', kana: 'たいせつ', romaji: 'taisetsu', meaning: '重要的', type: 'adj'},
    {kanji: '大体', kana: 'だいたい', romaji: 'daitai', meaning: '大致、大概', type: 'adv'},
    {kanji: '男性', kana: 'だんせい', romaji: 'dansei', meaning: '男性', type: 'noun'},
    {kanji: '段々', kana: 'だんだん', romaji: 'dandan', meaning: '渐渐地', type: 'adv'},
    {kanji: '電報', kana: 'でんぽう', romaji: 'denpou', meaning: '电报', type: 'noun'},
    {kanji: '伝統', kana: 'でんとう', romaji: 'dentou', meaning: '传统', type: 'noun'},
    {kanji: '出席', kana: 'しゅっせき', romaji: 'shusseki', meaning: '出席', type: 'noun'},
    {kanji: '出発', kana: 'しゅっぱつ', romaji: 'shuppatsu', meaning: '出发', type: 'noun'},
    
    // E行
    {kanji: '駅員', kana: 'えきいん', romaji: 'ekiin', meaning: '车站员工', type: 'noun'},
    {kanji: '選ぶ', kana: 'えらぶ', romaji: 'erabu', meaning: '选择', type: 'verb'},
    {kanji: '遠慮', kana: 'えんりょ', romaji: 'enryo', meaning: '客气、谦让', type: 'noun'},
    {kanji: '演奏', kana: 'えんそう', romaji: 'ensou', meaning: '演奏', type: 'noun'},
    {kanji: '枝', kana: 'えだ', romaji: 'eda', meaning: '树枝', type: 'noun'},
    {kanji: '絵画', kana: 'かいが', romaji: 'kaiga', meaning: '绘画', type: 'noun'},
    {kanji: '説明', kana: 'せつめい', romaji: 'setsumei', meaning: '说明', type: 'noun'},
    {kanji: '衛生', kana: 'えいせい', romaji: 'eisei', meaning: '卫生', type: 'noun'},
    {kanji: '栄養', kana: 'えいよう', romaji: 'eiyou', meaning: '营养', type: 'noun'},
    {kanji: '影響', kana: 'えいきょう', romaji: 'eikyou', meaning: '影响', type: 'noun'},
    
    // F行
    {kanji: '普通', kana: 'ふつう', romaji: 'futsuu', meaning: '普通的', type: 'adj'},
    {kanji: '不便', kana: 'ふべん', romaji: 'fuben', meaning: '不方便的', type: 'adj'},
    {kanji: '複雑', kana: 'ふくざつ', romaji: 'fukuzatsu', meaning: '复杂的', type: 'adj'},
    {kanji: '夫婦', kana: 'ふうふ', romaji: 'fuufu', meaning: '夫妇', type: 'noun'},
    {kanji: '風景', kana: 'ふうけい', romaji: 'fuukei', meaning: '风景', type: 'noun'},
    {kanji: '増える', kana: 'ふえる', romaji: 'fueru', meaning: '增加', type: 'verb'},
    {kanji: '深い', kana: 'ふかい', romaji: 'fukai', meaning: '深的', type: 'adj'},
    {kanji: '服装', kana: 'ふくそう', romaji: 'fukusou', meaning: '服装', type: 'noun'},
    {kanji: '不足', kana: 'ふそく', romaji: 'fusoku', meaning: '不足', type: 'noun'},
    {kanji: '船', kana: 'ふね', romaji: 'fune', meaning: '船', type: 'noun'},
    
    // G行
    {kanji: '外国人', kana: 'がいこくじん', romaji: 'gaikokujin', meaning: '外国人', type: 'noun'},
    {kanji: '学期', kana: 'がっき', romaji: 'gakki', meaning: '学期', type: 'noun'},
    {kanji: '学者', kana: 'がくしゃ', romaji: 'gakusha', meaning: '学者', type: 'noun'},
    {kanji: '頑張る', kana: 'がんばる', romaji: 'ganbaru', meaning: '努力、加油', type: 'verb'},
    {kanji: '議論', kana: 'ぎろん', romaji: 'giron', meaning: '议论、讨论', type: 'noun'},
    {kanji: '技術', kana: 'ぎじゅつ', romaji: 'gijutsu', meaning: '技术', type: 'noun'},
    {kanji: '銀座', kana: 'ぎんざ', romaji: 'ginza', meaning: '银座', type: 'noun'},
    {kanji: '牛肉', kana: 'ぎゅうにく', romaji: 'gyuuniku', meaning: '牛肉', type: 'noun'},
    {kanji: '牛乳', kana: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: '牛奶', type: 'noun'},
    {kanji: '具合', kana: 'ぐあい', romaji: 'guai', meaning: '情况、身体状况', type: 'noun'},
    
    // H行
    {kanji: '始める', kana: 'はじめる', romaji: 'hajimeru', meaning: '开始', type: 'verb'},
    {kanji: '発見', kana: 'はっけん', romaji: 'hakken', meaning: '发现', type: 'noun'},
    {kanji: '発表', kana: 'はっぴょう', romaji: 'happyou', meaning: '发表', type: 'noun'},
    {kanji: '反対', kana: 'はんたい', romaji: 'hantai', meaning: '反对', type: 'noun'},
    {kanji: '恥ずかしい', kana: 'はずかしい', romaji: 'hazukashii', meaning: '害羞的', type: 'adj'},
    {kanji: '変', kana: 'へん', romaji: 'hen', meaning: '奇怪的', type: 'adj'},
    {kanji: '返事', kana: 'へんじ', romaji: 'henji', meaning: '回答', type: 'noun'},
    {kanji: '必要', kana: 'ひつよう', romaji: 'hitsuyou', meaning: '必要的', type: 'adj'},
    {kanji: '一人', kana: 'ひとり', romaji: 'hitori', meaning: '一个人', type: 'noun'},
    {kanji: '暇', kana: 'ひま', romaji: 'hima', meaning: '空闲', type: 'noun'},
    
    // I行
    {kanji: '以上', kana: 'いじょう', romaji: 'ijou', meaning: '以上', type: 'noun'},
    {kanji: '以下', kana: 'いか', romaji: 'ika', meaning: '以下', type: 'noun'},
    {kanji: '以外', kana: 'いがい', romaji: 'igai', meaning: '以外', type: 'noun'},
    {kanji: '意見', kana: 'いけん', romaji: 'iken', meaning: '意见', type: 'noun'},
    {kanji: '医者', kana: 'いしゃ', romaji: 'isha', meaning: '医生', type: 'noun'},
    {kanji: '印象', kana: 'いんしょう', romaji: 'inshou', meaning: '印象', type: 'noun'},
    {kanji: '一生懸命', kana: 'いっしょうけんめい', romaji: 'isshoukenmei', meaning: '全力以赴', type: 'adv'},
    {kanji: '急ぐ', kana: 'いそぐ', romaji: 'isogu', meaning: '着急', type: 'verb'},
    {kanji: '忙しい', kana: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的', type: 'adj'},
    {kanji: '一般', kana: 'いっぱん', romaji: 'ippan', meaning: '一般的', type: 'adj'},
    
    // J行
    {kanji: '事故', kana: 'じこ', romaji: 'jiko', meaning: '事故', type: 'noun'},
    {kanji: '時間', kana: 'じかん', romaji: 'jikan', meaning: '时间', type: 'noun'},
    {kanji: '事件', kana: 'じけん', romaji: 'jiken', meaning: '事件', type: 'noun'},
    {kanji: '実際', kana: 'じっさい', romaji: 'jissai', meaning: '实际上', type: 'adv'},
    {kanji: '準備', kana: 'じゅんび', romaji: 'junbi', meaning: '准备', type: 'noun'},
    {kanji: '授業', kana: 'じゅぎょう', romaji: 'jugyou', meaning: '授课', type: 'noun'},
    {kanji: '十分', kana: 'じゅうぶん', romaji: 'juubun', meaning: '充分的', type: 'adj'},
    {kanji: '住所', kana: 'じゅうしょ', romaji: 'juusho', meaning: '住址', type: 'noun'},
    {kanji: '人口', kana: 'じんこう', romaji: 'jinkou', meaning: '人口', type: 'noun'},
    {kanji: '人生', kana: 'じんせい', romaji: 'jinsei', meaning: '人生', type: 'noun'},
    
    // K行
    {kanji: '会議', kana: 'かいぎ', romaji: 'kaigi', meaning: '会议', type: 'noun'},
    {kanji: '会話', kana: 'かいわ', romaji: 'kaiwa', meaning: '会话', type: 'noun'},
    {kanji: '科学', kana: 'かがく', romaji: 'kagaku', meaning: '科学', type: 'noun'},
    {kanji: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '经验', type: 'noun'},
    {kanji: '計画', kana: 'けいかく', romaji: 'keikaku', meaning: '计划', type: 'noun'},
    {kanji: '結婚', kana: 'けっこん', romaji: 'kekkon', meaning: '结婚', type: 'noun'},
    {kanji: '研究', kana: 'けんきゅう', romaji: 'kenkyuu', meaning: '研究', type: 'noun'},
    {kanji: '見学', kana: 'けんがく', romaji: 'kengaku', meaning: '参观', type: 'noun'},
    {kanji: '健康', kana: 'けんこう', romaji: 'kenkou', meaning: '健康', type: 'noun'},
    {kanji: '今度', kana: 'こんど', romaji: 'kondo', meaning: '这次', type: 'noun'},
    
    // L-M行
    {kanji: '毎日', kana: 'まいにち', romaji: 'mainichi', meaning: '每天', type: 'noun'},
    {kanji: '毎年', kana: 'まいとし', romaji: 'maitoshi', meaning: '每年', type: 'noun'},
    {kanji: '毎週', kana: 'まいしゅう', romaji: 'maishuu', meaning: '每周', type: 'noun'},
    {kanji: '祭り', kana: 'まつり', romaji: 'matsuri', meaning: '节日', type: 'noun'},
    {kanji: '間違える', kana: 'まちがえる', romaji: 'machigaeru', meaning: '弄错', type: 'verb'},
    {kanji: '迎える', kana: 'むかえる', romaji: 'mukaeru', meaning: '迎接', type: 'verb'},
    {kanji: '無理', kana: 'むり', romaji: 'muri', meaning: '勉强、不合理', type: 'adj'},
    {kanji: '昔', kana: 'むかし', romaji: 'mukashi', meaning: '从前', type: 'noun'},
    {kanji: '向こう', kana: 'むこう', romaji: 'mukou', meaning: '对面', type: 'noun'},
    {kanji: '娘', kana: 'むすめ', romaji: 'musume', meaning: '女儿', type: 'noun'},
    
    // N行
    {kanji: '内容', kana: 'ないよう', romaji: 'naiyou', meaning: '内容', type: 'noun'},
    {kanji: '中身', kana: 'なかみ', romaji: 'nakami', meaning: '内容物', type: 'noun'},
    {kanji: '泣く', kana: 'なく', romaji: 'naku', meaning: '哭', type: 'verb'},
    {kanji: '直す', kana: 'なおす', romaji: 'naosu', meaning: '修理', type: 'verb'},
    {kanji: '慣れる', kana: 'なれる', romaji: 'nareru', meaning: '习惯', type: 'verb'},
    {kanji: '人気', kana: 'にんき', romaji: 'ninki', meaning: '人气', type: 'noun'},
    {kanji: '日記', kana: 'にっき', romaji: 'nikki', meaning: '日记', type: 'noun'},
    {kanji: '入学', kana: 'にゅうがく', romaji: 'nyuugaku', meaning: '入学', type: 'noun'},
    {kanji: '入院', kana: 'にゅういん', romaji: 'nyuuin', meaning: '住院', type: 'noun'},
    {kanji: '認める', kana: 'みとめる', romaji: 'mitomeru', meaning: '承认', type: 'verb'},
    
    // O行
    {kanji: '億', kana: 'おく', romaji: 'oku', meaning: '亿', type: 'number'},
    {kanji: '奥さん', kana: 'おくさん', romaji: 'okusan', meaning: '太太', type: 'noun'},
    {kanji: '行う', kana: 'おこなう', romaji: 'okonau', meaning: '进行', type: 'verb'},
    {kanji: '起こす', kana: 'おこす', romaji: 'okosu', meaning: '引起', type: 'verb'},
    {kanji: '起こる', kana: 'おこる', romaji: 'okoru', meaning: '发生', type: 'verb'},
    {kanji: '贈り物', kana: 'おくりもの', romaji: 'okurimono', meaning: '礼物', type: 'noun'},
    {kanji: '落ちる', kana: 'おちる', romaji: 'ochiru', meaning: '掉落', type: 'verb'},
    {kanji: '踊り', kana: 'おどり', romaji: 'odori', meaning: '舞蹈', type: 'noun'},
    {kanji: '踊る', kana: 'おどる', romaji: 'odoru', meaning: '跳舞', type: 'verb'},
    {kanji: '驚く', kana: 'おどろく', romaji: 'odoroku', meaning: '惊讶', type: 'verb'},
    
    // P-R行
    {kanji: '理由', kana: 'りゆう', romaji: 'riyuu', meaning: '理由', type: 'noun'},
    {kanji: '利用', kana: 'りよう', romaji: 'riyou', meaning: '利用', type: 'noun'},
    {kanji: '留学', kana: 'りゅうがく', romaji: 'ryuugaku', meaning: '留学', type: 'noun'},
    {kanji: '料理', kana: 'りょうり', romaji: 'ryouri', meaning: '料理', type: 'noun'},
    {kanji: '両方', kana: 'りょうほう', romaji: 'ryouhou', meaning: '双方', type: 'noun'},
    {kanji: '旅館', kana: 'りょかん', romaji: 'ryokan', meaning: '旅馆', type: 'noun'},
    {kanji: '連絡', kana: 'れんらく', romaji: 'renraku', meaning: '联系', type: 'noun'},
    {kanji: '練習', kana: 'れんしゅう', romaji: 'renshuu', meaning: '练习', type: 'noun'},
    {kanji: '歴史', kana: 'れきし', romaji: 'rekishi', meaning: '历史', type: 'noun'},
    {kanji: '礼儀', kana: 'れいぎ', romaji: 'reigi', meaning: '礼仪', type: 'noun'},
    
    // S行
    {kanji: '最近', kana: 'さいきん', romaji: 'saikin', meaning: '最近', type: 'adv'},
    {kanji: '最後', kana: 'さいご', romaji: 'saigo', meaning: '最后', type: 'noun'},
    {kanji: '最初', kana: 'さいしょ', romaji: 'saisho', meaning: '最初', type: 'noun'},
    {kanji: '探す', kana: 'さがす', romaji: 'sagasu', meaning: '寻找', type: 'verb'},
    {kanji: '下がる', kana: 'さがる', romaji: 'sagaru', meaning: '下降', type: 'verb'},
    {kanji: '作家', kana: 'さっか', romaji: 'sakka', meaning: '作家', type: 'noun'},
    {kanji: '作品', kana: 'さくひん', romaji: 'sakuhin', meaning: '作品', type: 'noun'},
    {kanji: '参加', kana: 'さんか', romaji: 'sanka', meaning: '参加', type: 'noun'},
    {kanji: '散歩', kana: 'さんぽ', romaji: 'sanpo', meaning: '散步', type: 'noun'},
    {kanji: '世界', kana: 'せかい', romaji: 'sekai', meaning: '世界', type: 'noun'},
    
    // T行
    {kanji: '大変', kana: 'たいへん', romaji: 'taihen', meaning: '非常、困难', type: 'adj'},
    {kanji: '確か', kana: 'たしか', romaji: 'tashika', meaning: '确实', type: 'adv'},
    {kanji: '助ける', kana: 'たすける', romaji: 'tasukeru', meaning: '帮助', type: 'verb'},
    {kanji: '建物', kana: 'たてもの', romaji: 'tatemono', meaning: '建筑物', type: 'noun'},
    {kanji: '例えば', kana: 'たとえば', romaji: 'tatoeba', meaning: '例如', type: 'adv'},
    {kanji: '訪ねる', kana: 'たずねる', romaji: 'tazuneru', meaning: '拜访', type: 'verb'},
    {kanji: '手袋', kana: 'てぶくろ', romaji: 'tebukuro', meaning: '手套', type: 'noun'},
    {kanji: '点数', kana: 'てんすう', romaji: 'tensuu', meaning: '分数', type: 'noun'},
    {kanji: '特別', kana: 'とくべつ', romaji: 'tokubetsu', meaning: '特别', type: 'adj'},
    {kanji: '取る', kana: 'とる', romaji: 'toru', meaning: '拿、取', type: 'verb'},
    
    // U-W行
    {kanji: '受ける', kana: 'うける', romaji: 'ukeru', meaning: '接受、参加', type: 'verb'},
    {kanji: '生まれる', kana: 'うまれる', romaji: 'umareru', meaning: '出生', type: 'verb'},
    {kanji: '運転', kana: 'うんてん', romaji: 'unten', meaning: '驾驶', type: 'noun'},
    {kanji: '運動', kana: 'うんどう', romaji: 'undou', meaning: '运动', type: 'noun'},
    {kanji: '売る', kana: 'うる', romaji: 'uru', meaning: '卖', type: 'verb'},
    {kanji: '忘れる', kana: 'わすれる', romaji: 'wasureru', meaning: '忘记', type: 'verb'},
    {kanji: '笑う', kana: 'わらう', romaji: 'warau', meaning: '笑', type: 'verb'},
    {kanji: '割る', kana: 'わる', romaji: 'waru', meaning: '打破', type: 'verb'},
    {kanji: '渡る', kana: 'わたる', romaji: 'wataru', meaning: '过河', type: 'verb'},
    {kanji: '和食', kana: 'わしょく', romaji: 'washoku', meaning: '日式料理', type: 'noun'},
    
    // Y行
    {kanji: '約束', kana: 'やくそく', romaji: 'yakusoku', meaning: '约定', type: 'noun'},
    {kanji: '野菜', kana: 'やさい', romaji: 'yasai', meaning: '蔬菜', type: 'noun'},
    {kanji: '優しい', kana: 'やさしい', romaji: 'yasashii', meaning: '温柔的', type: 'adj'},
    {kanji: '痩せる', kana: 'やせる', romaji: 'yaseru', meaning: '变瘦', type: 'verb'},
    {kanji: '休む', kana: 'やすむ', romaji: 'yasumu', meaning: '休息', type: 'verb'},
    {kanji: '夢', kana: 'ゆめ', romaji: 'yume', meaning: '梦想', type: 'noun'},
    {kanji: '有名', kana: 'ゆうめい', romaji: 'yuumei', meaning: '有名的', type: 'adj'},
    {kanji: '郵便局', kana: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaning: '邮局', type: 'noun'},
    {kanji: '夕方', kana: 'ゆうがた', romaji: 'yuugata', meaning: '傍晚', type: 'noun'},
    {kanji: '輸出', kana: 'ゆしゅつ', romaji: 'yushutsu', meaning: '出口', type: 'noun'},
    
    // Z行
    {kanji: '材料', kana: 'ざいりょう', romaji: 'zairyou', meaning: '材料', type: 'noun'},
    {kanji: '残念', kana: 'ざんねん', romaji: 'zannen', meaning: '遗憾', type: 'adj'},
    {kanji: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaning: '全部', type: 'noun'},
    {kanji: '絶対', kana: 'ぜったい', romaji: 'zettai', meaning: '绝对', type: 'adv'},
    {kanji: '随分', kana: 'ずいぶん', romaji: 'zuibun', meaning: '相当、很', type: 'adv'},
    {kanji: '頭痛', kana: 'ずつう', romaji: 'zutsuu', meaning: '头痛', type: 'noun'},
    {kanji: '是非', kana: 'ぜひ', romaji: 'zehi', meaning: '务必', type: 'adv'}
];

// N5单词数据 - 扩展版本
const N5_WORDS = [
    // A行
    {kanji: '会う', kana: 'あう', romaji: 'au', meaning: '见面', type: 'verb'},
    {kanji: '浴びる', kana: 'あびる', romaji: 'abiru', meaning: '洗澡、淋浴', type: 'verb'},
    {kanji: '危ない', kana: 'あぶない', romaji: 'abunai', meaning: '危险的', type: 'adj'},
    {kanji: 'あっち', kana: 'あっち', romaji: 'acchi', meaning: '那边', type: 'pronoun'},
    {kanji: 'あちら', kana: 'あちら', romaji: 'achira', meaning: '那里', type: 'pronoun'},
    {kanji: '上げる', kana: 'あげる', romaji: 'ageru', meaning: '提高、给予', type: 'verb'},
    {kanji: '赤', kana: 'あか', romaji: 'aka', meaning: '红色', type: 'noun'},
    {kanji: '赤い', kana: 'あかい', romaji: 'akai', meaning: '红的', type: 'adj'},
    {kanji: '明るい', kana: 'あかるい', romaji: 'akarui', meaning: '明亮的', type: 'adj'},
    {kanji: '開ける', kana: 'あける', romaji: 'akeru', meaning: '打开', type: 'verb'},
    {kanji: '秋', kana: 'あき', romaji: 'aki', meaning: '秋天', type: 'noun'},
    {kanji: '開く', kana: 'あく', romaji: 'aku', meaning: '打开', type: 'verb'},
    {kanji: '甘い', kana: 'あまい', romaji: 'amai', meaning: '甜的', type: 'adj'},
    {kanji: '雨', kana: 'あめ', romaji: 'ame', meaning: '雨', type: 'noun'},
    {kanji: '飴', kana: 'あめ', romaji: 'ame', meaning: '糖果', type: 'noun'},
    {kanji: 'あなた', kana: 'あなた', romaji: 'anata', meaning: '你', type: 'pronoun'},
    {kanji: '姉', kana: 'あね', romaji: 'ane', meaning: '姐姐', type: 'noun'},
    {kanji: '兄', kana: 'あに', romaji: 'ani', meaning: '哥哥', type: 'noun'},
    {kanji: 'あの', kana: 'あの', romaji: 'ano', meaning: '那个', type: 'determiner'},
    {kanji: '青', kana: 'あお', romaji: 'ao', meaning: '蓝色', type: 'noun'},
    {kanji: '青い', kana: 'あおい', romaji: 'aoi', meaning: '蓝的', type: 'adj'},
    {kanji: 'アパート', kana: 'アパート', romaji: 'apaato', meaning: '公寓', type: 'noun'},
    {kanji: '洗う', kana: 'あらう', romaji: 'arau', meaning: '洗', type: 'verb'},
    {kanji: 'あれ', kana: 'あれ', romaji: 'are', meaning: '那个', type: 'pronoun'},
    {kanji: 'ある', kana: 'ある', romaji: 'aru', meaning: '有、存在', type: 'verb'},
    {kanji: '歩く', kana: 'あるく', romaji: 'aruku', meaning: '走路', type: 'verb'},
    {kanji: '朝', kana: 'あさ', romaji: 'asa', meaning: '早晨', type: 'noun'},
    {kanji: '朝ご飯', kana: 'あさごはん', romaji: 'asagohan', meaning: '早餐', type: 'noun'},
    {kanji: '明後日', kana: 'あさって', romaji: 'asatte', meaning: '后天', type: 'noun'},
    {kanji: '足', kana: 'あし', romaji: 'ashi', meaning: '脚', type: 'noun'},
    {kanji: '明日', kana: 'あした', romaji: 'ashita', meaning: '明天', type: 'noun'},
    {kanji: '遊ぶ', kana: 'あそぶ', romaji: 'asobu', meaning: '玩', type: 'verb'},
    {kanji: '熱い', kana: 'あつい', romaji: 'atsui', meaning: '热的', type: 'adj'},
    {kanji: '厚い', kana: 'あつい', romaji: 'atsui', meaning: '厚的', type: 'adj'},
    {kanji: 'あっ', kana: 'あっ', romaji: 'a', meaning: '啊', type: 'interjection'},
    {kanji: '後', kana: 'あと', romaji: 'ato', meaning: '后面', type: 'noun'},
    
    // B-D行
    {kanji: '番号', kana: 'ばんごう', romaji: 'bangou', meaning: '号码', type: 'noun'},
    {kanji: 'ビール', kana: 'ビール', romaji: 'biiru', meaning: '啤酒', type: 'noun'},
    {kanji: '病気', kana: 'びょうき', romaji: 'byouki', meaning: '生病', type: 'noun'},
    {kanji: '病院', kana: 'びょういん', romaji: 'byouin', meaning: '医院', type: 'noun'},
    {kanji: 'バス', kana: 'バス', romaji: 'basu', meaning: '公共汽车', type: 'noun'},
    {kanji: 'ちいさい', kana: 'ちいさい', romaji: 'chiisai', meaning: '小的', type: 'adj'},
    {kanji: '違う', kana: 'ちがう', romaji: 'chigau', meaning: '不同', type: 'verb'},
    {kanji: '近い', kana: 'ちかい', romaji: 'chikai', meaning: '近的', type: 'adj'},
    {kanji: '地下鉄', kana: 'ちかてつ', romaji: 'chikatetsu', meaning: '地铁', type: 'noun'},
    {kanji: '父', kana: 'ちち', romaji: 'chichi', meaning: '父亲', type: 'noun'},
    {kanji: 'ちょっと', kana: 'ちょっと', romaji: 'chotto', meaning: '一点', type: 'adv'},
    {kanji: '大学', kana: 'だいがく', romaji: 'daigaku', meaning: '大学', type: 'noun'},
    {kanji: '大丈夫', kana: 'だいじょうぶ', romaji: 'daijoubu', meaning: '没关系', type: 'adj'},
    {kanji: '大好き', kana: 'だいすき', romaji: 'daisuki', meaning: '非常喜欢', type: 'adj'},
    {kanji: 'だめ', kana: 'だめ', romaji: 'dame', meaning: '不行', type: 'adj'},
    {kanji: '誰', kana: 'だれ', romaji: 'dare', meaning: '谁', type: 'pronoun'},
    {kanji: '出る', kana: 'でる', romaji: 'deru', meaning: '出来', type: 'verb'},
    {kanji: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: '电车', type: 'noun'},
    {kanji: '電話', kana: 'でんわ', romaji: 'denwa', meaning: '电话', type: 'noun'},
    {kanji: 'デパート', kana: 'デパート', romaji: 'depaato', meaning: '百货商店', type: 'noun'},
    {kanji: '出かける', kana: 'でかける', romaji: 'dekakeru', meaning: '出门', type: 'verb'},
    {kanji: 'できる', kana: 'できる', romaji: 'dekiru', meaning: '能做', type: 'verb'},
    {kanji: 'どこ', kana: 'どこ', romaji: 'doko', meaning: '哪里', type: 'pronoun'},
    {kanji: 'どちら', kana: 'どちら', romaji: 'dochira', meaning: '哪个', type: 'pronoun'},
    {kanji: '動物', kana: 'どうぶつ', romaji: 'doubutsu', meaning: '动物', type: 'noun'},
    {kanji: 'どうして', kana: 'どうして', romaji: 'doushite', meaning: '为什么', type: 'adv'},
    {kanji: 'どれ', kana: 'どれ', romaji: 'dore', meaning: '哪个', type: 'pronoun'},
    {kanji: '土曜日', kana: 'どようび', romaji: 'doyoubi', meaning: '星期六', type: 'noun'},
    
    // E-G行
    {kanji: '映画', kana: 'えいが', romaji: 'eiga', meaning: '电影', type: 'noun'},
    {kanji: '映画館', kana: 'えいがかん', romaji: 'eigakan', meaning: '电影院', type: 'noun'},
    {kanji: '英語', kana: 'えいご', romaji: 'eigo', meaning: '英语', type: 'noun'},
    {kanji: '駅', kana: 'えき', romaji: 'eki', meaning: '车站', type: 'noun'},
    {kanji: 'エレベーター', kana: 'エレベーター', romaji: 'erebeetaa', meaning: '电梯', type: 'noun'},
    {kanji: '降りる', kana: 'おりる', romaji: 'oriru', meaning: '下车', type: 'verb'},
    {kanji: '終わる', kana: 'おわる', romaji: 'owaru', meaning: '结束', type: 'verb'},
    {kanji: '学校', kana: 'がっこう', romaji: 'gakkou', meaning: '学校', type: 'noun'},
    {kanji: '学生', kana: 'がくせい', romaji: 'gakusei', meaning: '学生', type: 'noun'},
    {kanji: '元気', kana: 'げんき', romaji: 'genki', meaning: '精神好', type: 'adj'},
    {kanji: '月曜日', kana: 'げつようび', romaji: 'getsuyoubi', meaning: '星期一', type: 'noun'},
    {kanji: '銀行', kana: 'ぎんこう', romaji: 'ginkou', meaning: '银行', type: 'noun'},
    {kanji: 'ご飯', kana: 'ごはん', romaji: 'gohan', meaning: '米饭', type: 'noun'},
    {kanji: '午前', kana: 'ごぜん', romaji: 'gozen', meaning: '上午', type: 'noun'},
    {kanji: '午後', kana: 'ごご', romaji: 'gogo', meaning: '下午', type: 'noun'},
    
    // H-I行
    {kanji: '始まる', kana: 'はじまる', romaji: 'hajimaru', meaning: '开始', type: 'verb'},
    {kanji: '始めて', kana: 'はじめて', romaji: 'hajimete', meaning: '第一次', type: 'adv'},
    {kanji: '働く', kana: 'はたらく', romaji: 'hataraku', meaning: '工作', type: 'verb'},
    {kanji: '話す', kana: 'はなす', romaji: 'hanasu', meaning: '说话', type: 'verb'},
    {kanji: '早い', kana: 'はやい', romaji: 'hayai', meaning: '早的、快的', type: 'adj'},
    {kanji: '春', kana: 'はる', romaji: 'haru', meaning: '春天', type: 'noun'},
    {kanji: '母', kana: 'はは', romaji: 'haha', meaning: '母亲', type: 'noun'},
    {kanji: '入る', kana: 'はいる', romaji: 'hairu', meaning: '进入', type: 'verb'},
    {kanji: '箸', kana: 'はし', romaji: 'hashi', meaning: '筷子', type: 'noun'},
    {kanji: '橋', kana: 'はし', romaji: 'hashi', meaning: '桥', type: 'noun'},
    {kanji: '晴れ', kana: 'はれ', romaji: 'hare', meaning: '晴天', type: 'noun'},
    {kanji: '半分', kana: 'はんぶん', romaji: 'hanbun', meaning: '一半', type: 'noun'},
    {kanji: '人', kana: 'ひと', romaji: 'hito', meaning: '人', type: 'noun'},
    {kanji: '一人', kana: 'ひとり', romaji: 'hitori', meaning: '一个人', type: 'noun'},
    {kanji: 'ひま', kana: 'ひま', romaji: 'hima', meaning: '空闲', type: 'adj'},
    {kanji: '昼', kana: 'ひる', romaji: 'hiru', meaning: '中午', type: 'noun'},
    {kanji: '昼ご飯', kana: 'ひるごはん', romaji: 'hirugohan', meaning: '午餐', type: 'noun'},
    {kanji: '広い', kana: 'ひろい', romaji: 'hiroi', meaning: '宽广的', type: 'adj'},
    {kanji: '本', kana: 'ほん', romaji: 'hon', meaning: '书', type: 'noun'},
    {kanji: '本当', kana: 'ほんとう', romaji: 'hontou', meaning: '真的', type: 'adj'},
    {kanji: 'ホテル', kana: 'ホテル', romaji: 'hoteru', meaning: '酒店', type: 'noun'},
    {kanji: '一日', kana: 'いちにち', romaji: 'ichinichi', meaning: '一天', type: 'noun'},
    {kanji: 'いい', kana: 'いい', romaji: 'ii', meaning: '好的', type: 'adj'},
    {kanji: '家', kana: 'いえ', romaji: 'ie', meaning: '家', type: 'noun'},
    {kanji: '行く', kana: 'いく', romaji: 'iku', meaning: '去', type: 'verb'},
    {kanji: 'いくら', kana: 'いくら', romaji: 'ikura', meaning: '多少钱', type: 'pronoun'},
    {kanji: 'いくつ', kana: 'いくつ', romaji: 'ikutsu', meaning: '几个', type: 'pronoun'},
    {kanji: '今', kana: 'いま', romaji: 'ima', meaning: '现在', type: 'noun'},
    {kanji: '意味', kana: 'いみ', romaji: 'imi', meaning: '意思', type: 'noun'},
    {kanji: '妹', kana: 'いもうと', romaji: 'imouto', meaning: '妹妹', type: 'noun'},
    {kanji: '犬', kana: 'いぬ', romaji: 'inu', meaning: '狗', type: 'noun'},
    {kanji: '色', kana: 'いろ', romaji: 'iro', meaning: '颜色', type: 'noun'},
    {kanji: 'いろいろ', kana: 'いろいろ', romaji: 'iroiro', meaning: '各种各样', type: 'adj'},
    {kanji: '入口', kana: 'いりぐち', romaji: 'iriguchi', meaning: '入口', type: 'noun'},
    {kanji: '椅子', kana: 'いす', romaji: 'isu', meaning: '椅子', type: 'noun'},
    {kanji: '忙しい', kana: 'いそがしい', romaji: 'isogashii', meaning: '忙的', type: 'adj'},
    {kanji: '一緒', kana: 'いっしょ', romaji: 'issho', meaning: '一起', type: 'adv'},
    {kanji: 'いつ', kana: 'いつ', romaji: 'itsu', meaning: '什么时候', type: 'pronoun'},
    {kanji: 'いつも', kana: 'いつも', romaji: 'itsumo', meaning: '总是', type: 'adv'},
    
    // J-K行
    {kanji: '自分', kana: 'じぶん', romaji: 'jibun', meaning: '自己', type: 'pronoun'},
    {kanji: '時間', kana: 'じかん', romaji: 'jikan', meaning: '时间', type: 'noun'},
    {kanji: '辞書', kana: 'じしょ', romaji: 'jisho', meaning: '词典', type: 'noun'},
    {kanji: '自転車', kana: 'じてんしゃ', romaji: 'jitensha', meaning: '自行车', type: 'noun'},
    {kanji: '自動車', kana: 'じどうしゃ', romaji: 'jidousha', meaning: '汽车', type: 'noun'},
    {kanji: '上手', kana: 'じょうず', romaji: 'jouzu', meaning: '擅长', type: 'adj'},
    {kanji: '十分', kana: 'じゅうぶん', romaji: 'juubun', meaning: '充分', type: 'adj'},
    {kanji: '家族', kana: 'かぞく', romaji: 'kazoku', meaning: '家族', type: 'noun'},
    {kanji: '風', kana: 'かぜ', romaji: 'kaze', meaning: '风', type: 'noun'},
    {kanji: '風邪', kana: 'かぜ', romaji: 'kaze', meaning: '感冒', type: 'noun'},
    {kanji: '帰る', kana: 'かえる', romaji: 'kaeru', meaning: '回去', type: 'verb'},
    {kanji: '買う', kana: 'かう', romaji: 'kau', meaning: '买', type: 'verb'},
    {kanji: '書く', kana: 'かく', romaji: 'kaku', meaning: '写', type: 'verb'},
    {kanji: '学校', kana: 'がっこう', romaji: 'gakkou', meaning: '学校', type: 'noun'},
    {kanji: '鍵', kana: 'かぎ', romaji: 'kagi', meaning: '钥匙', type: 'noun'},
    {kanji: '階段', kana: 'かいだん', romaji: 'kaidan', meaning: '楼梯', type: 'noun'},
    {kanji: '会社', kana: 'かいしゃ', romaji: 'kaisha', meaning: '公司', type: 'noun'},
    {kanji: 'かかる', kana: 'かかる', romaji: 'kakaru', meaning: '花费', type: 'verb'},
    {kanji: '神様', kana: 'かみさま', romaji: 'kamisama', meaning: '神', type: 'noun'},
    {kanji: '紙', kana: 'かみ', romaji: 'kami', meaning: '纸', type: 'noun'},
    {kanji: '火曜日', kana: 'かようび', romaji: 'kayoubi', meaning: '星期二', type: 'noun'},
    {kanji: '体', kana: 'からだ', romaji: 'karada', meaning: '身体', type: 'noun'},
    {kanji: '辛い', kana: 'からい', romaji: 'karai', meaning: '辣的', type: 'adj'},
    {kanji: '借りる', kana: 'かりる', romaji: 'kariru', meaning: '借', type: 'verb'},
    {kanji: '軽い', kana: 'かるい', romaji: 'karui', meaning: '轻的', type: 'adj'},
    {kanji: '貸す', kana: 'かす', romaji: 'kasu', meaning: '借出', type: 'verb'},
    {kanji: '切る', kana: 'きる', romaji: 'kiru', meaning: '切', type: 'verb'},
    {kanji: '着る', kana: 'きる', romaji: 'kiru', meaning: '穿', type: 'verb'},
    {kanji: '聞く', kana: 'きく', romaji: 'kiku', meaning: '听', type: 'verb'},
    {kanji: '黄色い', kana: 'きいろい', romaji: 'kiiroi', meaning: '黄色的', type: 'adj'},
    {kanji: '綺麗', kana: 'きれい', romaji: 'kirei', meaning: '美丽', type: 'adj'},
    {kanji: '嫌い', kana: 'きらい', romaji: 'kirai', meaning: '讨厌', type: 'adj'},
    {kanji: '切手', kana: 'きって', romaji: 'kitte', meaning: '邮票', type: 'noun'},
    {kanji: '喫茶店', kana: 'きっさてん', romaji: 'kissaten', meaning: '咖啡店', type: 'noun'},
    {kanji: 'きっと', kana: 'きっと', romaji: 'kitto', meaning: '一定', type: 'adv'},
    {kanji: '昨日', kana: 'きのう', romaji: 'kinou', meaning: '昨天', type: 'noun'},
    {kanji: '今日', kana: 'きょう', romaji: 'kyou', meaning: '今天', type: 'noun'},
    {kanji: '教室', kana: 'きょうしつ', romaji: 'kyoushitsu', meaning: '教室', type: 'noun'},
    {kanji: '去年', kana: 'きょねん', romaji: 'kyonen', meaning: '去年', type: 'noun'},
    {kanji: '嫌', kana: 'いや', romaji: 'iya', meaning: '讨厌', type: 'adj'},
    {kanji: '薬', kana: 'くすり', romaji: 'kusuri', meaning: '药', type: 'noun'},
    {kanji: '果物', kana: 'くだもの', romaji: 'kudamono', meaning: '水果', type: 'noun'},
    {kanji: '靴', kana: 'くつ', romaji: 'kutsu', meaning: '鞋', type: 'noun'},
    {kanji: '靴下', kana: 'くつした', romaji: 'kutsushita', meaning: '袜子', type: 'noun'},
    {kanji: '国', kana: 'くに', romaji: 'kuni', meaning: '国家', type: 'noun'},
    {kanji: '曇り', kana: 'くもり', romaji: 'kumori', meaning: '阴天', type: 'noun'},
    {kanji: '来る', kana: 'くる', romaji: 'kuru', meaning: '来', type: 'verb'},
    {kanji: '車', kana: 'くるま', romaji: 'kuruma', meaning: '汽车', type: 'noun'},
    {kanji: '黒い', kana: 'くろい', romaji: 'kuroi', meaning: '黑的', type: 'adj'},
    
    // M-N行
    {kanji: '毎日', kana: 'まいにち', romaji: 'mainichi', meaning: '每天', type: 'noun'},
    {kanji: '毎朝', kana: 'まいあさ', romaji: 'maiasa', meaning: '每天早上', type: 'noun'},
    {kanji: '毎晩', kana: 'まいばん', romaji: 'maiban', meaning: '每天晚上', type: 'noun'},
    {kanji: '前', kana: 'まえ', romaji: 'mae', meaning: '前面', type: 'noun'},
    {kanji: '曲がる', kana: 'まがる', romaji: 'magaru', meaning: '转弯', type: 'verb'},
    {kanji: '待つ', kana: 'まつ', romaji: 'matsu', meaning: '等待', type: 'verb'},
    {kanji: '町', kana: 'まち', romaji: 'machi', meaning: '城镇', type: 'noun'},
    {kanji: '間違える', kana: 'まちがえる', romaji: 'machigaeru', meaning: '弄错', type: 'verb'},
    {kanji: 'まだ', kana: 'まだ', romaji: 'mada', meaning: '还', type: 'adv'},
    {kanji: '窓', kana: 'まど', romaji: 'mado', meaning: '窗户', type: 'noun'},
    {kanji: '丸い', kana: 'まるい', romaji: 'marui', meaning: '圆的', type: 'adj'},
    {kanji: '万', kana: 'まん', romaji: 'man', meaning: '万', type: 'number'},
    {kanji: '見る', kana: 'みる', romaji: 'miru', meaning: '看', type: 'verb'},
    {kanji: '水', kana: 'みず', romaji: 'mizu', meaning: '水', type: 'noun'},
    {kanji: '道', kana: 'みち', romaji: 'michi', meaning: '道路', type: 'noun'},
    {kanji: '右', kana: 'みぎ', romaji: 'migi', meaning: '右', type: 'noun'},
    {kanji: '短い', kana: 'みじかい', romaji: 'mijikai', meaning: '短的', type: 'adj'},
    {kanji: 'みんな', kana: 'みんな', romaji: 'minna', meaning: '大家', type: 'pronoun'},
    {kanji: '耳', kana: 'みみ', romaji: 'mimi', meaning: '耳朵', type: 'noun'},
    {kanji: '店', kana: 'みせ', romaji: 'mise', meaning: '商店', type: 'noun'},
    {kanji: '見せる', kana: 'みせる', romaji: 'miseru', meaning: '给看', type: 'verb'},
    {kanji: '問題', kana: 'もんだい', romaji: 'mondai', meaning: '问题', type: 'noun'},
    {kanji: 'もう', kana: 'もう', romaji: 'mou', meaning: '已经', type: 'adv'},
    {kanji: 'もっと', kana: 'もっと', romaji: 'motto', meaning: '更多', type: 'adv'},
    {kanji: '持つ', kana: 'もつ', romaji: 'motsu', meaning: '拿', type: 'verb'},
    {kanji: '持って来る', kana: 'もってくる', romaji: 'mottekuru', meaning: '带来', type: 'verb'},
    {kanji: '持って行く', kana: 'もっていく', romaji: 'motteiku', meaning: '带去', type: 'verb'},
    {kanji: 'もちろん', kana: 'もちろん', romaji: 'mochiron', meaning: '当然', type: 'adv'},
    {kanji: '森', kana: 'もり', romaji: 'mori', meaning: '森林', type: 'noun'},
    {kanji: '山', kana: 'やま', romaji: 'yama', meaning: '山', type: 'noun'},
    {kanji: '難しい', kana: 'むずかしい', romaji: 'muzukashii', meaning: '难的', type: 'adj'},
    {kanji: '村', kana: 'むら', romaji: 'mura', meaning: '村庄', type: 'noun'},
    {kanji: '紫', kana: 'むらさき', romaji: 'murasaki', meaning: '紫色', type: 'noun'},
    {kanji: '昔', kana: 'むかし', romaji: 'mukashi', meaning: '从前', type: 'noun'},
    {kanji: '向こう', kana: 'むこう', romaji: 'mukou', meaning: '对面', type: 'noun'},
    {kanji: '名前', kana: 'なまえ', romaji: 'namae', meaning: '名字', type: 'noun'},
    {kanji: '何', kana: 'なに', romaji: 'nani', meaning: '什么', type: 'pronoun'},
    {kanji: '夏', kana: 'なつ', romaji: 'natsu', meaning: '夏天', type: 'noun'},
    {kanji: '夏休み', kana: 'なつやすみ', romaji: 'natsuyasumi', meaning: '暑假', type: 'noun'},
    {kanji: '長い', kana: 'ながい', romaji: 'nagai', meaning: '长的', type: 'adj'},
    {kanji: '中', kana: 'なか', romaji: 'naka', meaning: '里面', type: 'noun'},
    {kanji: '泣く', kana: 'なく', romaji: 'naku', meaning: '哭', type: 'verb'},
    {kanji: '無くす', kana: 'なくす', romaji: 'nakusu', meaning: '丢失', type: 'verb'},
    {kanji: '並ぶ', kana: 'ならぶ', romaji: 'narabu', meaning: '排队', type: 'verb'},
    {kanji: '習う', kana: 'ならう', romaji: 'narau', meaning: '学习', type: 'verb'},
    {kanji: '肉', kana: 'にく', romaji: 'niku', meaning: '肉', type: 'noun'},
    {kanji: '西', kana: 'にし', romaji: 'nishi', meaning: '西', type: 'noun'},
    {kanji: '荷物', kana: 'にもつ', romaji: 'nimotsu', meaning: '行李', type: 'noun'},
    {kanji: '人間', kana: 'にんげん', romaji: 'ningen', meaning: '人类', type: 'noun'},
    {kanji: 'ニュース', kana: 'ニュース', romaji: 'nyuusu', meaning: '新闻', type: 'noun'},
    {kanji: '脱ぐ', kana: 'ぬぐ', romaji: 'nugu', meaning: '脱', type: 'verb'},
    {kanji: '温い', kana: 'ぬるい', romaji: 'nurui', meaning: '温的', type: 'adj'},
    {kanji: '猫', kana: 'ねこ', romaji: 'neko', meaning: '猫', type: 'noun'},
    {kanji: '寝る', kana: 'ねる', romaji: 'neru', meaning: '睡觉', type: 'verb'},
    {kanji: '熱', kana: 'ねつ', romaji: 'netsu', meaning: '发烧', type: 'noun'},
    {kanji: '年', kana: 'ねん', romaji: 'nen', meaning: '年', type: 'noun'},
    {kanji: '眠い', kana: 'ねむい', romaji: 'nemui', meaning: '困', type: 'adj'},
    {kanji: '登る', kana: 'のぼる', romaji: 'noboru', meaning: '爬', type: 'verb'},
    {kanji: '喉', kana: 'のど', romaji: 'nodo', meaning: '喉咙', type: 'noun'},
    {kanji: '飲む', kana: 'のむ', romaji: 'nomu', meaning: '喝', type: 'verb'},
    {kanji: '乗る', kana: 'のる', romaji: 'noru', meaning: '乘坐', type: 'verb'},
    
    // O-R行
    {kanji: 'お茶', kana: 'おちゃ', romaji: 'ocha', meaning: '茶', type: 'noun'},
    {kanji: 'お金', kana: 'おかね', romaji: 'okane', meaning: '钱', type: 'noun'},
    {kanji: 'お母さん', kana: 'おかあさん', romaji: 'okaasan', meaning: '妈妈', type: 'noun'},
    {kanji: 'お父さん', kana: 'おとうさん', romaji: 'otousan', meaning: '爸爸', type: 'noun'},
    {kanji: 'お風呂', kana: 'おふろ', romaji: 'ofuro', meaning: '洗澡', type: 'noun'},
    {kanji: '美味しい', kana: 'おいしい', romaji: 'oishii', meaning: '好吃的', type: 'adj'},
    {kanji: '大きい', kana: 'おおきい', romaji: 'ookii', meaning: '大的', type: 'adj'},
    {kanji: '多い', kana: 'おおい', romaji: 'ooi', meaning: '多的', type: 'adj'},
    {kanji: '大勢', kana: 'おおぜい', romaji: 'oozei', meaning: '很多人', type: 'noun'},
    {kanji: '起きる', kana: 'おきる', romaji: 'okiru', meaning: '起床', type: 'verb'},
    {kanji: '置く', kana: 'おく', romaji: 'oku', meaning: '放', type: 'verb'},
    {kanji: '奥さん', kana: 'おくさん', romaji: 'okusan', meaning: '太太', type: 'noun'},
    {kanji: '音楽', kana: 'おんがく', romaji: 'ongaku', meaning: '音乐', type: 'noun'},
    {kanji: '男', kana: 'おとこ', romaji: 'otoko', meaning: '男人', type: 'noun'},
    {kanji: '男の子', kana: 'おとこのこ', romaji: 'otokonoko', meaning: '男孩', type: 'noun'},
    {kanji: '弟', kana: 'おとうと', romaji: 'otouto', meaning: '弟弟', type: 'noun'},
    {kanji: '一昨日', kana: 'おととい', romaji: 'ototoi', meaning: '前天', type: 'noun'},
    {kanji: '去年', kana: 'きょねん', romaji: 'kyonen', meaning: '去年', type: 'noun'},
    {kanji: '女', kana: 'おんな', romaji: 'onna', meaning: '女人', type: 'noun'},
    {kanji: '女の子', kana: 'おんなのこ', romaji: 'onnanoko', meaning: '女孩', type: 'noun'},
    {kanji: '面白い', kana: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的', type: 'adj'},
    {kanji: '重い', kana: 'おもい', romaji: 'omoi', meaning: '重的', type: 'adj'},
    {kanji: '思う', kana: 'おもう', romaji: 'omou', meaning: '想', type: 'verb'},
    {kanji: '泳ぐ', kana: 'およぐ', romaji: 'oyogu', meaning: '游泳', type: 'verb'},
    {kanji: '終わる', kana: 'おわる', romaji: 'owaru', meaning: '结束', type: 'verb'},
    {kanji: '遅い', kana: 'おそい', romaji: 'osoi', meaning: '迟的、慢的', type: 'adj'},
    {kanji: 'パン', kana: 'パン', romaji: 'pan', meaning: '面包', type: 'noun'},
    {kanji: 'パーティー', kana: 'パーティー', romaji: 'paatii', meaning: '聚会', type: 'noun'},
    {kanji: 'プール', kana: 'プール', romaji: 'puuru', meaning: '游泳池', type: 'noun'},
    {kanji: 'ポケット', kana: 'ポケット', romaji: 'poketto', meaning: '口袋', type: 'noun'},
    {kanji: 'ポスト', kana: 'ポスト', romaji: 'posuto', meaning: '邮箱', type: 'noun'},
    {kanji: 'ラジオ', kana: 'ラジオ', romaji: 'rajio', meaning: '收音机', type: 'noun'},
    {kanji: '来月', kana: 'らいげつ', romaji: 'raigetsu', meaning: '下个月', type: 'noun'},
    {kanji: '来年', kana: 'らいねん', romaji: 'rainen', meaning: '明年', type: 'noun'},
    {kanji: '来週', kana: 'らいしゅう', romaji: 'raishuu', meaning: '下周', type: 'noun'},
    {kanji: '理由', kana: 'りゆう', romaji: 'riyuu', meaning: '理由', type: 'noun'},
    {kanji: '料理', kana: 'りょうり', romaji: 'ryouri', meaning: '料理', type: 'noun'},
    {kanji: '旅行', kana: 'りょこう', romaji: 'ryokou', meaning: '旅行', type: 'noun'},
    {kanji: '両親', kana: 'りょうしん', romaji: 'ryoushin', meaning: '父母', type: 'noun'},
    {kanji: 'レストラン', kana: 'レストラン', romaji: 'resutoran', meaning: '餐厅', type: 'noun'},
    {kanji: '練習', kana: 'れんしゅう', romaji: 'renshuu', meaning: '练习', type: 'noun'},
    
    // S行
    {kanji: '魚', kana: 'さかな', romaji: 'sakana', meaning: '鱼', type: 'noun'},
    {kanji: '先', kana: 'さき', romaji: 'saki', meaning: '前面', type: 'noun'},
    {kanji: '咲く', kana: 'さく', romaji: 'saku', meaning: '开花', type: 'verb'},
    {kanji: '砂糖', kana: 'さとう', romaji: 'satou', meaning: '糖', type: 'noun'},
    {kanji: '寒い', kana: 'さむい', romaji: 'samui', meaning: '冷的', type: 'adj'},
    {kanji: '散歩', kana: 'さんぽ', romaji: 'sanpo', meaning: '散步', type: 'noun'},
    {kanji: '騒がしい', kana: 'さわがしい', romaji: 'sawagashii', meaning: '吵闹的', type: 'adj'},
    {kanji: '触る', kana: 'さわる', romaji: 'sawaru', meaning: '触摸', type: 'verb'},
    {kanji: '先生', kana: 'せんせい', romaji: 'sensei', meaning: '老师', type: 'noun'},
    {kanji: '先月', kana: 'せんげつ', romaji: 'sengetsu', meaning: '上个月', type: 'noun'},
    {kanji: '先週', kana: 'せんしゅう', romaji: 'senshuu', meaning: '上周', type: 'noun'},
    {kanji: '洗濯', kana: 'せんたく', romaji: 'sentaku', meaning: '洗衣服', type: 'noun'},
    {kanji: '説明', kana: 'せつめい', romaji: 'setsumei', meaning: '说明', type: 'noun'},
    {kanji: '写真', kana: 'しゃしん', romaji: 'shashin', meaning: '照片', type: 'noun'},
    {kanji: 'シャツ', kana: 'シャツ', romaji: 'shatsu', meaning: '衬衫', type: 'noun'},
    {kanji: 'シャワー', kana: 'シャワー', romaji: 'shawaa', meaning: '淋浴', type: 'noun'},
    {kanji: '塩', kana: 'しお', romaji: 'shio', meaning: '盐', type: 'noun'},
    {kanji: '知る', kana: 'しる', romaji: 'shiru', meaning: '知道', type: 'verb'},
    {kanji: '白い', kana: 'しろい', romaji: 'shiroi', meaning: '白的', type: 'adj'},
    {kanji: '親切', kana: 'しんせつ', romaji: 'shinsetsu', meaning: '亲切', type: 'adj'},
    {kanji: '心配', kana: 'しんぱい', romaji: 'shinpai', meaning: '担心', type: 'noun'},
    {kanji: '質問', kana: 'しつもん', romaji: 'shitsumon', meaning: '问题', type: 'noun'},
    {kanji: '仕事', kana: 'しごと', romaji: 'shigoto', meaning: '工作', type: 'noun'},
    {kanji: '市', kana: 'し', romaji: 'shi', meaning: '市', type: 'noun'},
    {kanji: '死ぬ', kana: 'しぬ', romaji: 'shinu', meaning: '死', type: 'verb'},
    {kanji: '新聞', kana: 'しんぶん', romaji: 'shinbun', meaning: '报纸', type: 'noun'},
    {kanji: '食堂', kana: 'しょくどう', romaji: 'shokudou', meaning: '食堂', type: 'noun'},
    {kanji: '醤油', kana: 'しょうゆ', romaji: 'shouyu', meaning: '酱油', type: 'noun'},
    {kanji: '小学校', kana: 'しょうがっこう', romaji: 'shougakkou', meaning: '小学', type: 'noun'},
    {kanji: '宿題', kana: 'しゅくだい', romaji: 'shukudai', meaning: '作业', type: 'noun'},
    {kanji: '趣味', kana: 'しゅみ', romaji: 'shumi', meaning: '爱好', type: 'noun'},
    {kanji: '春', kana: 'はる', romaji: 'haru', meaning: '春天', type: 'noun'},
    {kanji: '出発', kana: 'しゅっぱつ', romaji: 'shuppatsu', meaning: '出发', type: 'noun'},
    {kanji: 'そう', kana: 'そう', romaji: 'sou', meaning: '那样', type: 'adv'},
    {kanji: '掃除', kana: 'そうじ', romaji: 'souji', meaning: '打扫', type: 'noun'},
    {kanji: '外', kana: 'そと', romaji: 'soto', meaning: '外面', type: 'noun'},
    {kanji: '空', kana: 'そら', romaji: 'sora', meaning: '天空', type: 'noun'},
    {kanji: '素晴らしい', kana: 'すばらしい', romaji: 'subarashii', meaning: '很棒', type: 'adj'},
    {kanji: 'すぐ', kana: 'すぐ', romaji: 'sugu', meaning: '马上', type: 'adv'},
    {kanji: '好き', kana: 'すき', romaji: 'suki', meaning: '喜欢', type: 'adj'},
    {kanji: '少ない', kana: 'すくない', romaji: 'sukunai', meaning: '少的', type: 'adj'},
    {kanji: '住む', kana: 'すむ', romaji: 'sumu', meaning: '住', type: 'verb'},
    {kanji: 'スポーツ', kana: 'スポーツ', romaji: 'supootsu', meaning: '运动', type: 'noun'},
    {kanji: 'する', kana: 'する', romaji: 'suru', meaning: '做', type: 'verb'},
    {kanji: '座る', kana: 'すわる', romaji: 'suwaru', meaning: '坐', type: 'verb'},
    
    // T行
    {kanji: '食べる', kana: 'たべる', romaji: 'taberu', meaning: '吃', type: 'verb'},
    {kanji: '食べ物', kana: 'たべもの', romaji: 'tabemono', meaning: '食物', type: 'noun'},
    {kanji: 'たくさん', kana: 'たくさん', romaji: 'takusan', meaning: '很多', type: 'adv'},
    {kanji: 'タクシー', kana: 'タクシー', romaji: 'takushii', meaning: '出租车', type: 'noun'},
    {kanji: '高い', kana: 'たかい', romaji: 'takai', meaning: '高的、贵的', type: 'adj'},
    {kanji: '立つ', kana: 'たつ', romaji: 'tatsu', meaning: '站', type: 'verb'},
    {kanji: '建物', kana: 'たてもの', romaji: 'tatemono', meaning: '建筑物', type: 'noun'},
    {kanji: '畳', kana: 'たたみ', romaji: 'tatami', meaning: '榻榻米', type: 'noun'},
    {kanji: '正しい', kana: 'ただしい', romaji: 'tadashii', meaning: '正确的', type: 'adj'},
    {kanji: '楽しい', kana: 'たのしい', romaji: 'tanoshii', meaning: '快乐的', type: 'adj'},
    {kanji: '頼む', kana: 'たのむ', romaji: 'tanomu', meaning: '拜托', type: 'verb'},
    {kanji: '誕生日', kana: 'たんじょうび', romaji: 'tanjoubi', meaning: '生日', type: 'noun'},
    {kanji: '大変', kana: 'たいへん', romaji: 'taihen', meaning: '辛苦', type: 'adj'},
    {kanji: '台風', kana: 'たいふう', romaji: 'taifuu', meaning: '台风', type: 'noun'},
    {kanji: '太陽', kana: 'たいよう', romaji: 'taiyou', meaning: '太阳', type: 'noun'},
    {kanji: '手', kana: 'て', romaji: 'te', meaning: '手', type: 'noun'},
    {kanji: '手紙', kana: 'てがみ', romaji: 'tegami', meaning: '信', type: 'noun'},
    {kanji: 'テーブル', kana: 'テーブル', romaji: 'teeburu', meaning: '桌子', type: 'noun'},
    {kanji: 'テレビ', kana: 'テレビ', romaji: 'terebi', meaning: '电视', type: 'noun'},
    {kanji: '天気', kana: 'てんき', romaji: 'tenki', meaning: '天气', type: 'noun'},
    {kanji: '天ぷら', kana: 'てんぷら', romaji: 'tenpura', meaning: '天妇罗', type: 'noun'},
    {kanji: '図書館', kana: 'としょかん', romaji: 'toshokan', meaning: '图书馆', type: 'noun'},
    {kanji: '友達', kana: 'ともだち', romaji: 'tomodachi', meaning: '朋友', type: 'noun'},
    {kanji: '取る', kana: 'とる', romaji: 'toru', meaning: '拿', type: 'verb'},
    {kanji: '鳥', kana: 'とり', romaji: 'tori', meaning: '鸟', type: 'noun'},
    {kanji: '遠い', kana: 'とおい', romaji: 'tooi', meaning: '远的', type: 'adj'},
    {kanji: '十', kana: 'とお', romaji: 'too', meaning: '十', type: 'number'},
    {kanji: '通る', kana: 'とおる', romaji: 'tooru', meaning: '通过', type: 'verb'},
    {kanji: '時計', kana: 'とけい', romaji: 'tokei', meaning: '钟表', type: 'noun'},
    {kanji: '所', kana: 'ところ', romaji: 'tokoro', meaning: '地方', type: 'noun'},
    {kanji: '特に', kana: 'とくに', romaji: 'toku ni', meaning: '特别', type: 'adv'},
    {kanji: '隣', kana: 'となり', romaji: 'tonari', meaning: '旁边', type: 'noun'},
    {kanji: 'とても', kana: 'とても', romaji: 'totemo', meaning: '非常', type: 'adv'},
    {kanji: '使う', kana: 'つかう', romaji: 'tsukau', meaning: '使用', type: 'verb'},
    {kanji: '疲れる', kana: 'つかれる', romaji: 'tsukareru', meaning: '疲劳', type: 'verb'},
    {kanji: '着く', kana: 'つく', romaji: 'tsuku', meaning: '到达', type: 'verb'},
    {kanji: '作る', kana: 'つくる', romaji: 'tsukuru', meaning: '做、制作', type: 'verb'},
    {kanji: '机', kana: 'つくえ', romaji: 'tsukue', meaning: '桌子', type: 'noun'},
    {kanji: '月', kana: 'つき', romaji: 'tsuki', meaning: '月亮', type: 'noun'},
    {kanji: '続ける', kana: 'つづける', romaji: 'tsuzukeru', meaning: '继续', type: 'verb'},
    {kanji: '包む', kana: 'つつむ', romaji: 'tsutsumu', meaning: '包', type: 'verb'},
    {kanji: '冷たい', kana: 'つめたい', romaji: 'tsumetai', meaning: '冷的', type: 'adj'},
    {kanji: 'つまらない', kana: 'つまらない', romaji: 'tsumaranai', meaning: '无聊的', type: 'adj'},
    {kanji: '強い', kana: 'つよい', romaji: 'tsuyoi', meaning: '强的', type: 'adj'},
    
    // U-W行
    {kanji: '上', kana: 'うえ', romaji: 'ue', meaning: '上面', type: 'noun'},
    {kanji: '生まれる', kana: 'うまれる', romaji: 'umareru', meaning: '出生', type: 'verb'},
    {kanji: '海', kana: 'うみ', romaji: 'umi', meaning: '海', type: 'noun'},
    {kanji: '運転', kana: 'うんてん', romaji: 'unten', meaning: '驾驶', type: 'noun'},
    {kanji: '運転手', kana: 'うんてんしゅ', romaji: 'untenshu', meaning: '司机', type: 'noun'},
    {kanji: '歌う', kana: 'うたう', romaji: 'utau', meaning: '唱歌', type: 'verb'},
    {kanji: '歌', kana: 'うた', romaji: 'uta', meaning: '歌', type: 'noun'},
    {kanji: '美しい', kana: 'うつくしい', romaji: 'utsukushii', meaning: '美丽的', type: 'adj'},
    {kanji: '売る', kana: 'うる', romaji: 'uru', meaning: '卖', type: 'verb'},
    {kanji: 'うるさい', kana: 'うるさい', romaji: 'urusai', meaning: '吵', type: 'adj'},
    {kanji: '後ろ', kana: 'うしろ', romaji: 'ushiro', meaning: '后面', type: 'noun'},
    {kanji: '薄い', kana: 'うすい', romaji: 'usui', meaning: '薄的', type: 'adj'},
    {kanji: '野菜', kana: 'やさい', romaji: 'yasai', meaning: '蔬菜', type: 'noun'},
    {kanji: '安い', kana: 'やすい', romaji: 'yasui', meaning: '便宜的', type: 'adj'},
    {kanji: '休む', kana: 'やすむ', romaji: 'yasumu', meaning: '休息', type: 'verb'},
    {kanji: '休み', kana: 'やすみ', romaji: 'yasumi', meaning: '休息', type: 'noun'},
    {kanji: '優しい', kana: 'やさしい', romaji: 'yasashii', meaning: '温和的', type: 'adj'},
    {kanji: '山', kana: 'やま', romaji: 'yama', meaning: '山', type: 'noun'},
    {kanji: 'やる', kana: 'やる', romaji: 'yaru', meaning: '做', type: 'verb'},
    {kanji: '夜', kana: 'よる', romaji: 'yoru', meaning: '夜晚', type: 'noun'},
    {kanji: '呼ぶ', kana: 'よぶ', romaji: 'yobu', meaning: '叫', type: 'verb'},
    {kanji: '読む', kana: 'よむ', romaji: 'yomu', meaning: '读', type: 'verb'},
    {kanji: 'よく', kana: 'よく', romaji: 'yoku', meaning: '经常', type: 'adv'},
    {kanji: '良い', kana: 'よい', romaji: 'yoi', meaning: '好的', type: 'adj'},
    {kanji: '洋服', kana: 'ようふく', romaji: 'youfuku', meaning: '衣服', type: 'noun'},
    {kanji: '用事', kana: 'ようじ', romaji: 'youji', meaning: '事情', type: 'noun'},
    {kanji: '雪', kana: 'ゆき', romaji: 'yuki', meaning: '雪', type: 'noun'},
    {kanji: 'ゆっくり', kana: 'ゆっくり', romaji: 'yukkuri', meaning: '慢慢地', type: 'adv'},
    {kanji: '有名', kana: 'ゆうめい', romaji: 'yuumei', meaning: '有名', type: 'adj'},
    {kanji: '夕飯', kana: 'ゆうはん', romaji: 'yuuhan', meaning: '晚餐', type: 'noun'},
    {kanji: '郵便局', kana: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaning: '邮局', type: 'noun'},
    {kanji: '悪い', kana: 'わるい', romaji: 'warui', meaning: '坏的', type: 'adj'},
    {kanji: '忘れる', kana: 'わすれる', romaji: 'wasureru', meaning: '忘记', type: 'verb'},
    {kanji: '私', kana: 'わたし', romaji: 'watashi', meaning: '我', type: 'pronoun'},
    {kanji: '渡る', kana: 'わたる', romaji: 'wataru', meaning: '过', type: 'verb'},
    {kanji: '笑う', kana: 'わらう', romaji: 'warau', meaning: '笑', type: 'verb'},
    {kanji: '若い', kana: 'わかい', romaji: 'wakai', meaning: '年轻的', type: 'adj'},
    {kanji: '分かる', kana: 'わかる', romaji: 'wakaru', meaning: '明白', type: 'verb'},
    {kanji: 'ワイン', kana: 'ワイン', romaji: 'wain', meaning: '葡萄酒', type: 'noun'},
    
    // 数字
    {kanji: '一', kana: 'いち', romaji: 'ichi', meaning: '一', type: 'number'},
    {kanji: '二', kana: 'に', romaji: 'ni', meaning: '二', type: 'number'},
    {kanji: '三', kana: 'さん', romaji: 'san', meaning: '三', type: 'number'},
    {kanji: '四', kana: 'よん', romaji: 'yon', meaning: '四', type: 'number'},
    {kanji: '五', kana: 'ご', romaji: 'go', meaning: '五', type: 'number'},
    {kanji: '六', kana: 'ろく', romaji: 'roku', meaning: '六', type: 'number'},
    {kanji: '七', kana: 'なな', romaji: 'nana', meaning: '七', type: 'number'},
    {kanji: '八', kana: 'はち', romaji: 'hachi', meaning: '八', type: 'number'},
    {kanji: '九', kana: 'きゅう', romaji: 'kyuu', meaning: '九', type: 'number'},
    {kanji: '十', kana: 'じゅう', romaji: 'juu', meaning: '十', type: 'number'},
    {kanji: '百', kana: 'ひゃく', romaji: 'hyaku', meaning: '百', type: 'number'},
    {kanji: '千', kana: 'せん', romaji: 'sen', meaning: '千', type: 'number'},
    {kanji: '万', kana: 'まん', romaji: 'man', meaning: '万', type: 'number'},
    
    // 其他常用词汇
    {kanji: 'コーヒー', kana: 'コーヒー', romaji: 'koohii', meaning: '咖啡', type: 'noun'},
    {kanji: '子供', kana: 'こども', romaji: 'kodomo', meaning: '孩子', type: 'noun'},
    {kanji: 'この', kana: 'この', romaji: 'kono', meaning: '这个', type: 'determiner'},
    {kanji: 'その', kana: 'その', romaji: 'sono', meaning: '那个', type: 'determiner'},
    {kanji: 'どの', kana: 'どの', romaji: 'dono', meaning: '哪个', type: 'determiner'},
    {kanji: 'ここ', kana: 'ここ', romaji: 'koko', meaning: '这里', type: 'pronoun'},
    {kanji: 'そこ', kana: 'そこ', romaji: 'soko', meaning: '那里', type: 'pronoun'},
    {kanji: 'あそこ', kana: 'あそこ', romaji: 'asoko', meaning: '那里', type: 'pronoun'},
    {kanji: 'こちら', kana: 'こちら', romaji: 'kochira', meaning: '这边', type: 'pronoun'},
    {kanji: 'そちら', kana: 'そちら', romaji: 'sochira', meaning: '那边', type: 'pronoun'},
    {kanji: 'こっち', kana: 'こっち', romaji: 'kocchi', meaning: '这边', type: 'pronoun'},
    {kanji: 'そっち', kana: 'そっち', romaji: 'socchi', meaning: '那边', type: 'pronoun'},
    {kanji: 'これ', kana: 'これ', romaji: 'kore', meaning: '这个', type: 'pronoun'},
    {kanji: 'それ', kana: 'それ', romaji: 'sore', meaning: '那个', type: 'pronoun'},
    {kanji: 'どれ', kana: 'どれ', romaji: 'dore', meaning: '哪个', type: 'pronoun'}
];

// 假名数据
const KANA_DATA = {
    hiragana: [
        {char: 'あ', romaji: 'a', example: 'あさ(朝)'}, {char: 'い', romaji: 'i', example: 'いえ(家)'}, {char: 'う', romaji: 'u', example: 'うみ(海)'}, {char: 'え', romaji: 'e', example: 'えき(駅)'}, {char: 'お', romaji: 'o', example: 'おかし(お菓子)'},
        {char: 'か', romaji: 'ka', example: 'かぞく(家族)'}, {char: 'き', romaji: 'ki', example: 'きのう(昨日)'}, {char: 'く', romaji: 'ku', example: 'くるま(車)'}, {char: 'け', romaji: 'ke', example: 'けさ(今朝)'}, {char: 'こ', romaji: 'ko', example: 'こども(子供)'},
        {char: 'が', romaji: 'ga', example: 'がっこう(学校)'}, {char: 'ぎ', romaji: 'gi', example: 'ぎんこう(銀行)'}, {char: 'ぐ', romaji: 'gu', example: 'ぐあい(具合)'}, {char: 'げ', romaji: 'ge', example: 'げつようび(月曜日)'}, {char: 'ご', romaji: 'go', example: 'ごはん(ご飯)'},
        {char: 'さ', romaji: 'sa', example: 'さかな(魚)'}, {char: 'し', romaji: 'shi', example: 'しごと(仕事)'}, {char: 'す', romaji: 'su', example: 'すし(寿司)'}, {char: 'せ', romaji: 'se', example: 'せんせい(先生)'}, {char: 'そ', romaji: 'so', example: 'そら(空)'},
        {char: 'ざ', romaji: 'za', example: 'ざっし(雑誌)'}, {char: 'じ', romaji: 'ji', example: 'じかん(時間)'}, {char: 'ず', romaji: 'zu', example: 'みず(水)'}, {char: 'ぜ', romaji: 'ze', example: 'ぜんぶ(全部)'}, {char: 'ぞ', romaji: 'zo', example: 'ぞう(象)'},
        {char: 'た', romaji: 'ta', example: 'たべもの(食べ物)'}, {char: 'ち', romaji: 'chi', example: 'ちち(父)'}, {char: 'つ', romaji: 'tsu', example: 'つき(月)'}, {char: 'て', romaji: 'te', example: 'てがみ(手紙)'}, {char: 'と', romaji: 'to', example: 'ともだち(友達)'},
        {char: 'だ', romaji: 'da', example: 'だいがく(大学)'}, {char: 'ぢ', romaji: 'ji', example: 'ちぢ(乳)'}, {char: 'づ', romaji: 'zu', example: 'つづく(続く)'}, {char: 'で', romaji: 'de', example: 'でんわ(電話)'}, {char: 'ど', romaji: 'do', example: 'どようび(土曜日)'},
        {char: 'な', romaji: 'na', example: 'なまえ(名前)'}, {char: 'に', romaji: 'ni', example: 'にほん(日本)'}, {char: 'ぬ', romaji: 'nu', example: 'いぬ(犬)'}, {char: 'ね', romaji: 'ne', example: 'ねこ(猫)'}, {char: 'の', romaji: 'no', example: 'のみもの(飲み物)'},
        {char: 'は', romaji: 'ha', example: 'はな(花)'}, {char: 'ひ', romaji: 'hi', example: 'ひと(人)'}, {char: 'ふ', romaji: 'fu', example: 'ふゆ(冬)'}, {char: 'へ', romaji: 'he', example: 'へや(部屋)'}, {char: 'ほ', romaji: 'ho', example: 'ほん(本)'},
        {char: 'ば', romaji: 'ba', example: 'ばん(晩)'}, {char: 'び', romaji: 'bi', example: 'びょういん(病院)'}, {char: 'ぶ', romaji: 'bu', example: 'ぶんがく(文学)'}, {char: 'べ', romaji: 'be', example: 'べんきょう(勉強)'}, {char: 'ぼ', romaji: 'bo', example: 'ぼうし(帽子)'},
        {char: 'ぱ', romaji: 'pa', example: 'ぱん(パン)'}, {char: 'ぴ', romaji: 'pi', example: 'ぴあの(ピアノ)'}, {char: 'ぷ', romaji: 'pu', example: 'ぷれぜんと(プレゼント)'}, {char: 'ぺ', romaji: 'pe', example: 'ぺん(ペン)'}, {char: 'ぽ', romaji: 'po', example: 'ぽすと(ポスト)'},
        {char: 'ま', romaji: 'ma', example: 'まち(町)'}, {char: 'み', romaji: 'mi', example: 'みせ(店)'}, {char: 'む', romaji: 'mu', example: 'むし(虫)'}, {char: 'め', romaji: 'me', example: 'め(目)'}, {char: 'も', romaji: 'mo', example: 'もの(物)'},
        {char: 'や', romaji: 'ya', example: 'やま(山)'}, {char: 'ゆ', romaji: 'yu', example: 'ゆき(雪)'}, {char: 'よ', romaji: 'yo', example: 'よる(夜)'},
        {char: 'ら', romaji: 'ra', example: 'らいねん(来年)'}, {char: 'り', romaji: 'ri', example: 'りんご(林檎)'}, {char: 'る', romaji: 'ru', example: 'るす(留守)'}, {char: 'れ', romaji: 're', example: 'れいぞうこ(冷蔵庫)'}, {char: 'ろ', romaji: 'ro', example: 'ろく(六)'},
        {char: 'わ', romaji: 'wa', example: 'わたし(私)'}, {char: 'を', romaji: 'wo', example: 'を(助詞)'}, {char: 'ん', romaji: 'n', example: 'ほん(本)'}
    ],
    katakana: [
        {char: 'ア', romaji: 'a', example: 'アメリカ(美国)'}, {char: 'イ', romaji: 'i', example: 'イタリア(意大利)'}, {char: 'ウ', romaji: 'u', example: 'ウィスキー(威士忌)'}, {char: 'エ', romaji: 'e', example: 'エレベーター(電梯)'}, {char: 'オ', romaji: 'o', example: 'オレンジ(橙子)'},
        {char: 'カ', romaji: 'ka', example: 'カメラ(相机)'}, {char: 'キ', romaji: 'ki', example: 'キッチン(厨房)'}, {char: 'ク', romaji: 'ku', example: 'クリーム(奶油)'}, {char: 'ケ', romaji: 'ke', example: 'ケーキ(蛋糕)'}, {char: 'コ', romaji: 'ko', example: 'コーヒー(咖啡)'},
        {char: 'ガ', romaji: 'ga', example: 'ガラス(玻璃)'}, {char: 'ギ', romaji: 'gi', example: 'ギター(吉他)'}, {char: 'グ', romaji: 'gu', example: 'グループ(小组)'}, {char: 'ゲ', romaji: 'ge', example: 'ゲーム(游戏)'}, {char: 'ゴ', romaji: 'go', example: 'ゴルフ(高尔夫)'},
        {char: 'サ', romaji: 'sa', example: 'サッカー(足球)'}, {char: 'シ', romaji: 'shi', example: 'シャツ(衬衫)'}, {char: 'ス', romaji: 'su', example: 'スポーツ(运动)'}, {char: 'セ', romaji: 'se', example: 'セーター(毛衣)'}, {char: 'ソ', romaji: 'so', example: 'ソファ(沙发)'},
        {char: 'ザ', romaji: 'za', example: 'ザッシ(雑誌)'}, {char: 'ジ', romaji: 'ji', example: 'ジュース(果汁)'}, {char: 'ズ', romaji: 'zu', example: 'ズボン(裤子)'}, {char: 'ゼ', romaji: 'ze', example: 'ゼロ(零)'}, {char: 'ゾ', romaji: 'zo', example: 'ゾウ(大象)'},
        {char: 'タ', romaji: 'ta', example: 'タクシー(出租车)'}, {char: 'チ', romaji: 'chi', example: 'チーズ(奶酪)'}, {char: 'ツ', romaji: 'tsu', example: 'ツアー(旅行)'}, {char: 'テ', romaji: 'te', example: 'テレビ(电视)'}, {char: 'ト', romaji: 'to', example: 'トラック(卡车)'},
        {char: 'ダ', romaji: 'da', example: 'ダンス(舞蹈)'}, {char: 'ヂ', romaji: 'ji', example: 'チヂ(乳)'}, {char: 'ヅ', romaji: 'zu', example: 'ヅラ(多拉特别的)'}, {char: 'デ', romaji: 'de', example: 'デザート(甜点)'}, {char: 'ド', romaji: 'do', example: 'ドア(门)'},
        {char: 'ナ', romaji: 'na', example: 'ナイフ(刺刀)'}, {char: 'ニ', romaji: 'ni', example: 'ニュース(新闻)'}, {char: 'ヌ', romaji: 'nu', example: 'ヌードル(面条)'}, {char: 'ネ', romaji: 'ne', example: 'ネット(网络)'}, {char: 'ノ', romaji: 'no', example: 'ノート(笔记本)'},
        {char: 'ハ', romaji: 'ha', example: 'ハンバーガー(汉堡包)'}, {char: 'ヒ', romaji: 'hi', example: 'ヒーター(暖气机)'}, {char: 'フ', romaji: 'fu', example: 'ファイル(文件)'}, {char: 'ヘ', romaji: 'he', example: 'ヘルメット(头盔)'}, {char: 'ホ', romaji: 'ho', example: 'ホテル(酒店)'},
        {char: 'バ', romaji: 'ba', example: 'バス(公共汽车)'}, {char: 'ビ', romaji: 'bi', example: 'ビール(啤酒)'}, {char: 'ブ', romaji: 'bu', example: 'ブラシ(刻子)'}, {char: 'ベ', romaji: 'be', example: 'ベッド(床)'}, {char: 'ボ', romaji: 'bo', example: 'ボール(球)'},
        {char: 'パ', romaji: 'pa', example: 'パーティー(派对)'}, {char: 'ピ', romaji: 'pi', example: 'ピクニック(野餐)'}, {char: 'プ', romaji: 'pu', example: 'プール(泳池)'}, {char: 'ペ', romaji: 'pe', example: 'ペット(宠物)'}, {char: 'ポ', romaji: 'po', example: 'ポケット(口袋)'},
        {char: 'マ', romaji: 'ma', example: 'マウス(鼠标)'}, {char: 'ミ', romaji: 'mi', example: 'ミルク(牛奶)'}, {char: 'ム', romaji: 'mu', example: 'ムービー(电影)'}, {char: 'メ', romaji: 'me', example: 'メール(邮件)'}, {char: 'モ', romaji: 'mo', example: 'モニター(显示器)'},
        {char: 'ヤ', romaji: 'ya', example: 'ヤクザ(黑手党)'}, {char: 'ユ', romaji: 'yu', example: 'ユニフォーム(制服)'}, {char: 'ヨ', romaji: 'yo', example: 'ヨーグルト(酸奶)'},
        {char: 'ラ', romaji: 'ra', example: 'ラジオ(收音机)'}, {char: 'リ', romaji: 'ri', example: 'リモコン(遥控器)'}, {char: 'ル', romaji: 'ru', example: 'ルール(规则)'}, {char: 'レ', romaji: 're', example: 'レストラン(餐厅)'}, {char: 'ロ', romaji: 'ro', example: 'ロビー(大厅)'},
        {char: 'ワ', romaji: 'wa', example: 'ワイン(红酒)'}, {char: 'ヲ', romaji: 'wo', example: 'ヲ(助詞)'}, {char: 'ン', romaji: 'n', example: 'ラーメン(拉面)'}
    ]
};

// 全局状态
let currentUser = null;
let currentMode = null;
let currentQuestion = null;
let sessionStats = {correct: 0, wrong: 0};

// 记忆算法类
class MemorySystem {
    constructor() {
        this.intervals = [1, 2, 4, 8, 16]; // 间隔天数
    }

    initUserProgress(username, mode) {
        const data = KANA_DATA[mode];
        const progress = {};
        
        data.forEach(item => {
            progress[item.char] = {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
        });
        
        return progress;
    }

    updateProgress(username, mode, char, isCorrect) {
        const userData = this.getUserData(username);
        const progress = userData[mode + 'Progress'];
        const item = progress[char];
        
        item.totalReviews++;
        
        if (isCorrect) {
            item.correctCount++;
            item.level = Math.min(5, item.level + 1);
        } else {
            item.level = 1;
        }
        
        // 计算下次复习时间
        const intervalDays = this.intervals[item.level - 1];
        item.nextReview = Date.now() + (intervalDays * 24 * 60 * 60 * 1000);
        
        // 更新每日统计
        this.updateDailyStats(userData, mode, isCorrect);
        
        this.saveUserData(username, userData);
    }

    updateDailyStats(userData, mode, isCorrect) {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD格式
        
        // 确保dailyStats存在
        if (!userData.dailyStats) userData.dailyStats = {};
        
        // 初始化今日统计
        if (!userData.dailyStats[today]) {
            userData.dailyStats[today] = {
                total: 0,
                correct: 0,
                hiragana: { total: 0, correct: 0 },
                katakana: { total: 0, correct: 0 }
            };
        }
        
        const todayStats = userData.dailyStats[today];
        
        // 更新总体统计
        todayStats.total++;
        if (isCorrect) todayStats.correct++;
        
        // 更新模式统计
        todayStats[mode].total++;
        if (isCorrect) todayStats[mode].correct++;
    }

    getNextQuestion(username, mode) {
        const userData = this.getUserData(username);
        const progress = userData[mode + 'Progress'];
        const now = Date.now();
        
        // 获取所有需要复习的项目
        const dueItems = [];
        const lowLevelItems = [];
        const allItems = [];
        
        Object.keys(progress).forEach(char => {
            const item = progress[char];
            allItems.push({char, ...item});
            
            if (item.nextReview <= now) {
                dueItems.push({char, ...item});
            } else if (item.level <= 2) {
                lowLevelItems.push({char, ...item});
            }
        });
        
        // 选择策略：优先到期项目，其次低等级项目，最后随机
        let selectedItems = dueItems.length > 0 ? dueItems : 
                           lowLevelItems.length > 0 ? lowLevelItems : allItems;
        
        // 按等级和上次复习时间排序
        selectedItems.sort((a, b) => {
            if (a.level !== b.level) return a.level - b.level;
            return a.nextReview - b.nextReview;
        });
        
        // 从前50%中随机选择
        const topHalf = selectedItems.slice(0, Math.max(1, Math.floor(selectedItems.length * 0.5)));
        const selected = topHalf[Math.floor(Math.random() * topHalf.length)];
        
        // 返回完整的假名数据
        const kanaData = KANA_DATA[mode].find(item => item.char === selected.char);
        
        // 如果找不到数据（可能是旧的古字数据），重新初始化进度
        if (!kanaData) {
            // 清理无效的字符数据
            const userData = this.getUserData(username);
            const progress = userData[mode + 'Progress'];
            delete progress[selected.char];
            this.saveUserData(username, userData);
            
            // 递归调用重新选择
            return this.getNextQuestion(username, mode);
        }
        
        return kanaData;
    }

    getUserData(username) {
        const allData = JSON.parse(localStorage.getItem('kanaMemoryData') || '{}');
        return allData.users[username] || {};
    }

    saveUserData(username, userData) {
        const allData = JSON.parse(localStorage.getItem('kanaMemoryData') || '{}');
        if (!allData.users) allData.users = {};
        allData.users[username] = userData;
        localStorage.setItem('kanaMemoryData', JSON.stringify(allData));
    }

    // N5单词相关方法
    initVocabProgress(username) {
        const progress = {};
        
        N5_WORDS.forEach(word => {
            progress[word.kanji] = {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
        });
        
        return progress;
    }

    // N4单词相关方法
    initN4VocabProgress(username) {
        const progress = {};
        
        N4_WORDS.forEach(word => {
            progress[word.kanji] = {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
        });
        
        return progress;
    }

    getNextVocabQuestion(username) {
        const userData = this.getUserData(username);
        
        // 确保N5词汇进度存在
        if (!userData.n5VocabProgress) {
            userData.n5VocabProgress = this.initVocabProgress(username);
            this.saveUserData(username, userData);
        }
        
        const progress = userData.n5VocabProgress;
        const now = Date.now();
        
        // 获取所有需要复习的单词
        const dueWords = [];
        const lowLevelWords = [];
        const allWords = [];
        
        N5_WORDS.forEach(word => {
            const wordProgress = progress[word.kanji] || {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
            
            allWords.push({...word, progress: wordProgress});
            
            if (wordProgress.nextReview <= now) {
                dueWords.push({...word, progress: wordProgress});
            } else if (wordProgress.level <= 2) {
                lowLevelWords.push({...word, progress: wordProgress});
            }
        });
        
        // 选择策略：优先到期单词，其次低等级单词，最后随机
        let selectedWords = dueWords.length > 0 ? dueWords : 
                           lowLevelWords.length > 0 ? lowLevelWords : allWords;
        
        // 按等级和上次复习时间排序
        selectedWords.sort((a, b) => {
            if (a.progress.level !== b.progress.level) return a.progress.level - b.progress.level;
            return a.progress.nextReview - b.progress.nextReview;
        });
        
        // 从前50%中随机选择
        const topHalf = selectedWords.slice(0, Math.max(1, Math.floor(selectedWords.length * 0.5)));
        const selected = topHalf[Math.floor(Math.random() * topHalf.length)];
        
        return selected;
    }

    updateVocabProgress(username, kanji, isCorrect) {
        const userData = this.getUserData(username);
        
        // 确保N5词汇进度存在
        if (!userData.n5VocabProgress) {
            userData.n5VocabProgress = this.initVocabProgress(username);
        }
        
        const progress = userData.n5VocabProgress;
        
        // 确保该单词的进度数据存在
        if (!progress[kanji]) {
            progress[kanji] = {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
        }
        
        const item = progress[kanji];
        
        item.totalReviews++;
        
        if (isCorrect) {
            item.correctCount++;
            item.level = Math.min(5, item.level + 1);
        } else {
            item.level = 1;
        }
        
        // 计算下次复习时间
        const intervalDays = this.intervals[item.level - 1];
        item.nextReview = Date.now() + (intervalDays * 24 * 60 * 60 * 1000);
        
        // 更新每日统计（添加N5单词统计）
        this.updateVocabDailyStats(userData, isCorrect);
        
        this.saveUserData(username, userData);
    }

    updateVocabDailyStats(userData, isCorrect) {
        const today = new Date().toISOString().split('T')[0];
        
        if (!userData.dailyStats) userData.dailyStats = {};
        
        if (!userData.dailyStats[today]) {
            userData.dailyStats[today] = {
                total: 0,
                correct: 0,
                hiragana: { total: 0, correct: 0 },
                katakana: { total: 0, correct: 0 },
                n5vocab: { total: 0, correct: 0 }
            };
        }
        
        const todayStats = userData.dailyStats[today];
        
        // 更新总体统计
        todayStats.total++;
        if (isCorrect) todayStats.correct++;
        
        // 更新N5单词统计
        if (!todayStats.n5vocab) {
            todayStats.n5vocab = { total: 0, correct: 0 };
        }
        todayStats.n5vocab.total++;
        if (isCorrect) todayStats.n5vocab.correct++;
    }

    getNextN4VocabQuestion(username) {
        const userData = this.getUserData(username);
        
        // 确保N4词汇进度存在
        if (!userData.n4VocabProgress) {
            userData.n4VocabProgress = this.initN4VocabProgress(username);
            this.saveUserData(username, userData);
        }
        
        const progress = userData.n4VocabProgress;
        const now = Date.now();
        
        // 获取所有需要复习的单词
        const dueWords = [];
        const lowLevelWords = [];
        const allWords = [];
        
        N4_WORDS.forEach(word => {
            const wordProgress = progress[word.kanji] || {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
            
            allWords.push({...word, progress: wordProgress});
            
            if (wordProgress.nextReview <= now) {
                dueWords.push({...word, progress: wordProgress});
            } else if (wordProgress.level <= 2) {
                lowLevelWords.push({...word, progress: wordProgress});
            }
        });
        
        // 选择策略：优先到期单词，其次低等级单词，最后随机
        let selectedWords = dueWords.length > 0 ? dueWords : 
                           lowLevelWords.length > 0 ? lowLevelWords : allWords;
        
        // 按等级和上次复习时间排序
        selectedWords.sort((a, b) => {
            if (a.progress.level !== b.progress.level) return a.progress.level - b.progress.level;
            return a.progress.nextReview - b.progress.nextReview;
        });
        
        // 从前50%中随机选择
        const topHalf = selectedWords.slice(0, Math.max(1, Math.floor(selectedWords.length * 0.5)));
        const selected = topHalf[Math.floor(Math.random() * topHalf.length)];
        
        return selected;
    }

    updateN4VocabProgress(username, kanji, isCorrect) {
        const userData = this.getUserData(username);
        
        // 确保N4词汇进度存在
        if (!userData.n4VocabProgress) {
            userData.n4VocabProgress = this.initN4VocabProgress(username);
        }
        
        const progress = userData.n4VocabProgress;
        
        // 确保该单词的进度数据存在
        if (!progress[kanji]) {
            progress[kanji] = {
                level: 1,
                nextReview: Date.now(),
                totalReviews: 0,
                correctCount: 0
            };
        }
        
        const item = progress[kanji];
        
        item.totalReviews++;
        
        if (isCorrect) {
            item.correctCount++;
            item.level = Math.min(5, item.level + 1);
        } else {
            item.level = 1;
        }
        
        // 计算下次复习时间
        const intervalDays = this.intervals[item.level - 1];
        item.nextReview = Date.now() + (intervalDays * 24 * 60 * 60 * 1000);
        
        // 更新每日统计（添加N4单词统计）
        this.updateN4VocabDailyStats(userData, isCorrect);
        
        this.saveUserData(username, userData);
    }

    updateN4VocabDailyStats(userData, isCorrect) {
        const today = new Date().toISOString().split('T')[0];
        
        if (!userData.dailyStats) userData.dailyStats = {};
        
        if (!userData.dailyStats[today]) {
            userData.dailyStats[today] = {
                total: 0,
                correct: 0,
                hiragana: { total: 0, correct: 0 },
                katakana: { total: 0, correct: 0 },
                n5vocab: { total: 0, correct: 0 },
                n4vocab: { total: 0, correct: 0 }
            };
        }
        
        const todayStats = userData.dailyStats[today];
        
        // 更新总体统计
        todayStats.total++;
        if (isCorrect) todayStats.correct++;
        
        // 更新N4单词统计
        if (!todayStats.n4vocab) {
            todayStats.n4vocab = { total: 0, correct: 0 };
        }
        todayStats.n4vocab.total++;
        if (isCorrect) todayStats.n4vocab.correct++;
    }
}

// 用户管理类
class UserManager {
    constructor() {
        this.memorySystem = new MemorySystem();
        this.loadUsers();
    }

    loadUsers() {
        const data = JSON.parse(localStorage.getItem('kanaMemoryData') || '{}');
        if (!data.users) data.users = {};
        if (!data.currentUser) data.currentUser = null;
        
        localStorage.setItem('kanaMemoryData', JSON.stringify(data));
        return data;
    }

    createUser(username) {
        if (!username.trim()) return false;
        
        const data = this.loadUsers();
        if (data.users[username]) return false;
        
        data.users[username] = {
            hiraganaProgress: this.memorySystem.initUserProgress(username, 'hiragana'),
            katakanaProgress: this.memorySystem.initUserProgress(username, 'katakana'),
            n5VocabProgress: this.memorySystem.initVocabProgress(username),
            n4VocabProgress: this.memorySystem.initN4VocabProgress(username),
            stats: {
                hiraganaTotal: 0,
                hiraganaCorrect: 0,
                katakanaTotal: 0,
                katakanaCorrect: 0
            },
            dailyStats: {}  // 格式: "YYYY-MM-DD": {total: n, correct: n, hiragana: {total: n, correct: n}, katakana: {total: n, correct: n}, n5vocab: {total: n, correct: n}, n4vocab: {total: n, correct: n}}
        };
        
        localStorage.setItem('kanaMemoryData', JSON.stringify(data));
        return true;
    }

    getUsers() {
        const data = this.loadUsers();
        return Object.keys(data.users);
    }

    setCurrentUser(username) {
        const data = this.loadUsers();
        data.currentUser = username;
        localStorage.setItem('kanaMemoryData', JSON.stringify(data));
        currentUser = username;
    }

    getCurrentUser() {
        const data = this.loadUsers();
        return data.currentUser;
    }

    getUserProgress(username) {
        const userData = this.memorySystem.getUserData(username);
        const hiraganaProgress = userData.hiraganaProgress || {};
        const katakanaProgress = userData.katakanaProgress || {};
        const n5VocabProgress = userData.n5VocabProgress || {};
        const n4VocabProgress = userData.n4VocabProgress || {};
        
        const getProgressStats = (progress, total) => {
            const mastered = Object.values(progress).filter(item => item.level >= 4).length;
            return `${mastered}/${total}`;
        };
        
        return {
            hiragana: getProgressStats(hiraganaProgress, KANA_DATA.hiragana.length),
            katakana: getProgressStats(katakanaProgress, KANA_DATA.katakana.length),
            n5vocab: getProgressStats(n5VocabProgress, N5_WORDS.length),
            n4vocab: getProgressStats(n4VocabProgress, N4_WORDS.length)
        };
    }
}

// 应用控制类
class KanaApp {
    constructor() {
        this.userManager = new UserManager();
        this.memorySystem = new MemorySystem();
        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.showUserSelection();
        this.loadUserList();
        
        // 检查是否有当前用户
        const savedUser = this.userManager.getCurrentUser();
        if (savedUser) {
            this.setCurrentUser(savedUser);
        }
    }

    bindEvents() {
        // 用户管理事件
        document.getElementById('create-user').addEventListener('click', () => this.createUser());
        document.getElementById('switch-user').addEventListener('click', () => this.showUserSelection());
        
        // 模式选择事件
        document.getElementById('hiragana-mode').addEventListener('click', () => this.startPractice('hiragana'));
        document.getElementById('katakana-mode').addEventListener('click', () => this.startPractice('katakana'));
        document.getElementById('n5-vocab-mode').addEventListener('click', () => this.startVocabPractice());
        document.getElementById('n4-vocab-mode').addEventListener('click', () => this.startN4VocabPractice());
        document.getElementById('stats-mode').addEventListener('click', () => this.showStats());
        
        // 练习事件
        document.getElementById('back-to-modes').addEventListener('click', () => this.showModeSelection());
        document.getElementById('submit-answer').addEventListener('click', () => this.submitAnswer());
        document.getElementById('next-question').addEventListener('click', () => this.nextQuestion());
        
        // N5背单词事件
        document.getElementById('back-to-modes-from-vocab').addEventListener('click', () => this.showModeSelection());
        document.getElementById('vocab-next-question').addEventListener('click', () => this.nextVocabQuestion());

        // N4背单词事件
        document.getElementById('back-to-modes-from-n4vocab').addEventListener('click', () => this.showModeSelection());
        document.getElementById('n4vocab-next-question').addEventListener('click', () => this.nextN4VocabQuestion());
        
        // N5选择题按钮事件
        document.querySelectorAll('.choice-btn:not(.n4-choice)').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    btn.classList.add('selected');
                    this.submitVocabChoice(index);
                }
            });
        });

        // N4选择题按钮事件
        document.querySelectorAll('.n4-choice').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    btn.classList.add('selected');
                    this.submitN4VocabChoice(index);
                }
            });
        });
        
        // 统计事件
        document.getElementById('back-to-modes-from-stats').addEventListener('click', () => this.showModeSelection());
        
        // 进度详情事件
        document.getElementById('hiragana-detail').addEventListener('click', () => this.showProgressDetail('hiragana'));
        document.getElementById('katakana-detail').addEventListener('click', () => this.showProgressDetail('katakana'));
        document.getElementById('n5vocab-detail').addEventListener('click', () => this.showVocabProgressDetail());
        document.getElementById('n4vocab-detail').addEventListener('click', () => this.showN4VocabProgressDetail());
        document.getElementById('back-to-modes-from-detail').addEventListener('click', () => this.showModeSelection());
        
        // 筛选按钮事件
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e.target.closest('.filter-btn')));
        });

        // 图表过滤事件
        document.querySelectorAll('.chart-filters input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateAccuracyChart());
        });
        
        // 回车提交答案
        document.getElementById('romaji-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !document.getElementById('romaji-input').disabled) {
                this.submitAnswer();
            }
        });
        
        // 选择题键盘快捷键 (1-4数字键)
        document.addEventListener('keypress', (e) => {
            const key = e.key;
            if (['1', '2', '3', '4'].includes(key)) {
                const index = parseInt(key) - 1;
                
                // N5背单词界面
                if (!document.getElementById('vocab-practice-screen').classList.contains('hidden')) {
                    const btn = document.getElementById(`choice-${index}`);
                    if (btn && !btn.disabled) {
                        btn.classList.add('selected');
                        this.submitVocabChoice(index);
                    }
                }
                
                // N4背单词界面
                if (!document.getElementById('n4-vocab-practice-screen').classList.contains('hidden')) {
                    const btn = document.getElementById(`n4choice-${index}`);
                    if (btn && !btn.disabled) {
                        btn.classList.add('selected');
                        this.submitN4VocabChoice(index);
                    }
                }
            }
        });
        
        // 新用户名回车创建
        document.getElementById('new-user-name').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.createUser();
        });
        
        // 反馈页面回车进入下一题
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                // 假名练习反馈页面
                if (!document.getElementById('feedback').classList.contains('hidden') &&
                    document.getElementById('romaji-input').disabled) {
                    this.nextQuestion();
                }
                
                // N5背单词反馈页面
                if (!document.getElementById('vocab-feedback').classList.contains('hidden')) {
                    this.nextVocabQuestion();
                }
                
                // N4背单词反馈页面
                if (!document.getElementById('n4vocab-feedback').classList.contains('hidden')) {
                    this.nextN4VocabQuestion();
                }
            }
        });
    }

    createUser() {
        const username = document.getElementById('new-user-name').value;
        if (this.userManager.createUser(username)) {
            document.getElementById('new-user-name').value = '';
            this.loadUserList();
            this.selectUserAndStart(username);
            alert('用户创建成功！正在进入学习界面...');
        } else {
            alert('用户名无效或已存在');
        }
    }

    loadUserList() {
        const userList = document.getElementById('user-list');
        const users = this.userManager.getUsers();
        
        userList.innerHTML = '';
        
        if (users.length === 0) {
            userList.innerHTML = '<div class="no-users">暂无用户，请创建新用户开始学习</div>';
            return;
        }
        
        users.forEach(user => {
            const userButton = document.createElement('button');
            userButton.className = 'user-button';
            userButton.textContent = user;
            userButton.addEventListener('click', () => this.selectUserAndStart(user));
            userList.appendChild(userButton);
        });
    }

    selectUserAndStart(username) {
        this.setCurrentUser(username);
        setTimeout(() => {
            this.showModeSelection();
        }, 100);
    }


    setCurrentUser(username) {
        currentUser = username;
        this.userManager.setCurrentUser(username);
    }

    showUserSelection() {
        document.getElementById('user-selection').classList.remove('hidden');
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
    }

    showModeSelection() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        document.getElementById('user-selection').classList.add('hidden');
        document.getElementById('mode-selection').classList.remove('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('vocab-practice-screen').classList.add('hidden');
        document.getElementById('n4-vocab-practice-screen').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.add('hidden');
        
        document.getElementById('current-user').textContent = currentUser;
        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        const progress = this.userManager.getUserProgress(currentUser);
        document.getElementById('hiragana-progress').textContent = progress.hiragana;
        document.getElementById('katakana-progress').textContent = progress.katakana;
        document.getElementById('n5vocab-progress').textContent = progress.n5vocab;
        document.getElementById('n4vocab-progress').textContent = progress.n4vocab;
    }

    startPractice(mode) {
        currentMode = mode;
        sessionStats = {correct: 0, wrong: 0};
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('practice-screen').classList.remove('hidden');
        document.getElementById('vocab-practice-screen').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.add('hidden');
        
        document.getElementById('practice-title').textContent = 
            mode === 'hiragana' ? '平假名练习' : '片假名练习';
        
        this.updateSessionStats();
        this.nextQuestion();
    }

    startVocabPractice() {
        currentMode = 'n5-vocab';
        sessionStats = {correct: 0, wrong: 0};
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('vocab-practice-screen').classList.remove('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.add('hidden');
        
        this.updateVocabSessionStats();
        this.nextVocabQuestion();
    }

    nextQuestion() {
        currentQuestion = this.memorySystem.getNextQuestion(currentUser, currentMode);
        document.getElementById('current-kana').textContent = currentQuestion.char;
        document.getElementById('romaji-input').value = '';
        
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('submit-answer').style.display = 'inline-block';
        document.getElementById('romaji-input').disabled = false;
        
        // 确保输入框获得焦点
        setTimeout(() => {
            document.getElementById('romaji-input').focus();
        }, 100);
    }

    submitAnswer() {
        // 安全检查
        if (!currentQuestion || !currentQuestion.romaji) {
            console.error('Invalid question data');
            this.nextQuestion();
            return;
        }
        
        const userAnswer = document.getElementById('romaji-input').value.trim().toLowerCase();
        const correctAnswer = currentQuestion.romaji.toLowerCase();
        const isCorrect = userAnswer === correctAnswer;
        
        // 更新记忆系统
        this.memorySystem.updateProgress(currentUser, currentMode, currentQuestion.char, isCorrect);
        
        // 更新会话统计
        if (isCorrect) {
            sessionStats.correct++;
        } else {
            sessionStats.wrong++;
        }
        
        document.getElementById('submit-answer').style.display = 'none';
        document.getElementById('romaji-input').disabled = true;
        
        // 确保在输入框禁用后再显示反馈
        setTimeout(() => {
            this.showFeedback(isCorrect, correctAnswer);
        }, 50);
        
        this.updateSessionStats();
    }

    showFeedback(isCorrect, correctAnswer) {
        const feedback = document.getElementById('feedback');
        const feedbackText = document.getElementById('feedback-text');
        
        // 确保反馈显示
        feedback.classList.remove('hidden');
        feedback.classList.remove('correct', 'wrong');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        
        // 找到对应的假名
        const oppositeMode = currentMode === 'hiragana' ? 'katakana' : 'hiragana';
        const oppositeKana = KANA_DATA[oppositeMode].find(item => item.romaji === currentQuestion.romaji);
        const oppositeChar = oppositeKana ? oppositeKana.char : '';
        const oppositeExample = oppositeKana ? oppositeKana.example : '';
        
        // 构建反馈内容，紧凑布局
        const statusText = isCorrect ? '<span style="color: #28a745;">✓ 正确！</span>' : '<span style="color: #dc3545;">✗ 错误</span>';
        
        feedbackText.innerHTML = `
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
                <span style="font-size: 2.5em; color: #667eea; font-weight: bold;">${currentQuestion.char}</span>
                <div style="flex: 1;">
                    ${statusText}<br>
                    <strong>读音:</strong> ${correctAnswer}
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px;">
                <div><strong>平假名:</strong> ${currentMode === 'hiragana' ? currentQuestion.char : (oppositeChar || '无')}<br>
                <span style="color: #666;">${currentMode === 'hiragana' ? this.getExampleWithRomaji(currentQuestion.example) : (oppositeExample ? this.getExampleWithRomaji(oppositeExample) : '')}</span></div>
                <div><strong>片假名:</strong> ${currentMode === 'katakana' ? currentQuestion.char : (oppositeChar || '无')}<br>
                <span style="color: #666;">${currentMode === 'katakana' ? this.getExampleWithRomaji(currentQuestion.example) : (oppositeExample ? this.getExampleWithRomaji(oppositeExample) : '')}</span></div>
            </div>
            <div style="text-align: center; font-size: 12px; color: #999; margin-top: 15px;">
                按回车键继续 →
            </div>
        `;
    }

    getExampleWithRomaji(example) {
        if (!example) return '';
        
        // 创建罗马音映射
        const romajiMap = {};
        [...KANA_DATA.hiragana, ...KANA_DATA.katakana].forEach(item => {
            romajiMap[item.char] = item.romaji;
        });
        
        // 提取日文部分和中文部分
        const match = example.match(/^([^\(]+)(\([^\)]+\))?$/);
        if (!match) return example;
        
        const japanese = match[1];
        const chinese = match[2] || '';
        
        // 转换假名为罗马音
        let romaji = '';
        for (let char of japanese) {
            if (romajiMap[char]) {
                romaji += romajiMap[char];
            } else {
                romaji += char; // 保留非假名字符
            }
        }
        
        return `${japanese} (${romaji}) ${chinese}`;
    }

    updateSessionStats() {
        document.getElementById('correct-count').textContent = sessionStats.correct;
        document.getElementById('wrong-count').textContent = sessionStats.wrong;
        
        const total = sessionStats.correct + sessionStats.wrong;
        const percentage = total > 0 ? Math.round((sessionStats.correct / total) * 100) : 0;
        
        document.getElementById('progress-fill').style.width = percentage + '%';
        document.getElementById('progress-text').textContent = `正确率: ${percentage}%`;
    }

    showStats() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('stats-screen').classList.remove('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('vocab-practice-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.add('hidden');
        
        document.getElementById('stats-current-user').textContent = currentUser;
        this.updateStatsDisplay();
    }

    nextVocabQuestion() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        // 使用记忆系统获取下一个单词
        currentQuestion = this.memorySystem.getNextVocabQuestion(currentUser);
        
        document.getElementById('vocab-current-kana').textContent = currentQuestion.kana;
        
        // 词性翻译
        const typeMap = {
            'verb': '动词',
            'noun': '名词', 
            'adj': '形容词',
            'pronoun': '代词',
            'determiner': '限定词',
            'number': '数词',
            'adv': '副词',
            'interjection': '感叹词'
        };
        document.getElementById('vocab-current-type').textContent = typeMap[currentQuestion.type] || currentQuestion.type;
        
        // 生成4选1选择题
        this.generateChoices();
        
        document.getElementById('vocab-feedback').classList.add('hidden');
        
        // 重置选择按钮状态
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'wrong');
            btn.disabled = false;
        });
    }

    generateChoices() {
        const correctAnswer = currentQuestion.meaning;
        const choices = [correctAnswer];
        
        // 生成3个错误选项
        const wrongChoices = [];
        const allWords = N5_WORDS.filter(word => 
            word.kanji !== currentQuestion.kanji && 
            word.meaning !== correctAnswer
        );
        
        // 优先选择同类型的词作为干扰项
        const sameTypeWords = allWords.filter(word => word.type === currentQuestion.type);
        const otherWords = allWords.filter(word => word.type !== currentQuestion.type);
        
        // 从同类型词中选择干扰项
        while (wrongChoices.length < 3 && sameTypeWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * sameTypeWords.length);
            const randomWord = sameTypeWords.splice(randomIndex, 1)[0];
            if (!wrongChoices.includes(randomWord.meaning)) {
                wrongChoices.push(randomWord.meaning);
            }
        }
        
        // 如果同类型词不够，从其他词中选择
        while (wrongChoices.length < 3 && otherWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherWords.length);
            const randomWord = otherWords.splice(randomIndex, 1)[0];
            if (!wrongChoices.includes(randomWord.meaning)) {
                wrongChoices.push(randomWord.meaning);
            }
        }
        
        // 将正确答案和错误选项合并并打乱
        choices.push(...wrongChoices);
        
        // Fisher-Yates 洗牌算法
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }
        
        // 记录正确答案的位置
        this.correctChoiceIndex = choices.indexOf(correctAnswer);
        
        // 设置选择按钮文本
        choices.forEach((choice, index) => {
            document.getElementById(`choice-${index}`).textContent = choice;
        });
    }

    submitVocabChoice(selectedIndex) {
        const isCorrect = selectedIndex === this.correctChoiceIndex;
        const correctAnswer = currentQuestion.meaning;
        
        // 使用记忆系统更新单词学习进度
        this.memorySystem.updateVocabProgress(currentUser, currentQuestion.kanji, isCorrect);
        
        // 更新会话统计
        if (isCorrect) {
            sessionStats.correct++;
        } else {
            sessionStats.wrong++;
        }
        
        // 显示答案反馈
        document.querySelectorAll('.choice-btn').forEach((btn, index) => {
            btn.disabled = true;
            if (index === this.correctChoiceIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        this.showVocabFeedback(isCorrect, correctAnswer);
        this.updateVocabSessionStats();
    }

    showVocabFeedback(isCorrect, correctAnswer) {
        const feedback = document.getElementById('vocab-feedback');
        const feedbackText = document.getElementById('vocab-feedback-text');
        
        feedback.classList.remove('hidden');
        feedback.classList.remove('correct', 'wrong');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        
        const statusText = isCorrect ? '<span style="color: #28a745;">✓ 正确！</span>' : '<span style="color: #dc3545;">✗ 错误</span>';
        
        feedbackText.innerHTML = `
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
                <div style="text-align: center;">
                    <div style="font-size: 2.5em; color: #667eea; font-weight: bold; margin-bottom: 5px;">${currentQuestion.kanji}</div>
                    <div style="font-size: 1.5em; color: #666;">${currentQuestion.kana}</div>
                </div>
                <div style="flex: 1;">
                    ${statusText}<br>
                    <strong>正确意思:</strong> ${correctAnswer}<br>
                    <strong>罗马音:</strong> ${currentQuestion.romaji}
                </div>
            </div>
            <div style="text-align: center; font-size: 12px; color: #999; margin-top: 15px;">
                点击"下一个单词"继续 →
            </div>
        `;
    }

    updateVocabSessionStats() {
        document.getElementById('vocab-correct-count').textContent = sessionStats.correct;
        document.getElementById('vocab-wrong-count').textContent = sessionStats.wrong;
        
        const total = sessionStats.correct + sessionStats.wrong;
        const percentage = total > 0 ? Math.round((sessionStats.correct / total) * 100) : 0;
        
        document.getElementById('vocab-progress-fill').style.width = percentage + '%';
        document.getElementById('vocab-progress-text').textContent = `正确率: ${percentage}%`;
    }

    // N4背单词相关方法
    startN4VocabPractice() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }

        sessionStats = {correct: 0, wrong: 0};
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('n4-vocab-practice-screen').classList.remove('hidden');
        document.getElementById('vocab-practice-screen').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.add('hidden');
        
        this.nextN4VocabQuestion();
    }

    nextN4VocabQuestion() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        // 使用记忆系统获取下一个N4单词
        currentQuestion = this.memorySystem.getNextN4VocabQuestion(currentUser);
        
        document.getElementById('n4vocab-current-kana').textContent = currentQuestion.kana;
        
        // 词性翻译
        const typeMap = {
            'verb': '动词',
            'noun': '名词', 
            'adj': '形容词',
            'pronoun': '代词',
            'determiner': '限定词',
            'number': '数词',
            'adv': '副词',
            'interjection': '感叹词'
        };
        document.getElementById('n4vocab-current-type').textContent = typeMap[currentQuestion.type] || currentQuestion.type;
        
        // 生成4选1选择题
        this.generateN4Choices();
        
        document.getElementById('n4vocab-feedback').classList.add('hidden');
        
        // 重置选择按钮状态
        document.querySelectorAll('.n4-choice').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'wrong');
            btn.disabled = false;
        });
    }

    generateN4Choices() {
        const correctAnswer = currentQuestion.meaning;
        const choices = [correctAnswer];
        
        // 生成3个错误选项
        const wrongChoices = [];
        const allWords = N4_WORDS.filter(word => 
            word.kanji !== currentQuestion.kanji && 
            word.meaning !== correctAnswer
        );
        
        // 优先选择同类型的词作为干扰项
        const sameTypeWords = allWords.filter(word => word.type === currentQuestion.type);
        const otherWords = allWords.filter(word => word.type !== currentQuestion.type);
        
        // 从同类型词中选择干扰项
        while (wrongChoices.length < 3 && sameTypeWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * sameTypeWords.length);
            const randomWord = sameTypeWords.splice(randomIndex, 1)[0];
            if (!wrongChoices.includes(randomWord.meaning)) {
                wrongChoices.push(randomWord.meaning);
            }
        }
        
        // 如果同类型词不够，从其他词中选择
        while (wrongChoices.length < 3 && otherWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherWords.length);
            const randomWord = otherWords.splice(randomIndex, 1)[0];
            if (!wrongChoices.includes(randomWord.meaning)) {
                wrongChoices.push(randomWord.meaning);
            }
        }
        
        // 将正确答案和错误选项合并并打乱
        choices.push(...wrongChoices);
        
        // Fisher-Yates 洗牌算法
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }
        
        // 记录正确答案的位置
        this.correctN4ChoiceIndex = choices.indexOf(correctAnswer);
        
        // 设置选择按钮文本
        choices.forEach((choice, index) => {
            document.getElementById(`n4choice-${index}`).textContent = choice;
        });
    }

    submitN4VocabChoice(selectedIndex) {
        const isCorrect = selectedIndex === this.correctN4ChoiceIndex;
        const correctAnswer = currentQuestion.meaning;
        
        // 使用记忆系统更新单词学习进度
        this.memorySystem.updateN4VocabProgress(currentUser, currentQuestion.kanji, isCorrect);
        
        // 更新会话统计
        if (isCorrect) {
            sessionStats.correct++;
        } else {
            sessionStats.wrong++;
        }
        
        // 显示答案反馈
        document.querySelectorAll('.n4-choice').forEach((btn, index) => {
            btn.disabled = true;
            if (index === this.correctN4ChoiceIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        this.showN4VocabFeedback(isCorrect, correctAnswer);
        this.updateN4VocabSessionStats();
    }

    showN4VocabFeedback(isCorrect, correctAnswer) {
        const feedback = document.getElementById('n4vocab-feedback');
        const feedbackText = document.getElementById('n4vocab-feedback-text');
        
        feedback.classList.remove('hidden');
        feedback.classList.remove('correct', 'wrong');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        
        const statusText = isCorrect ? '<span style="color: #28a745;">✓ 正确！</span>' : '<span style="color: #dc3545;">✗ 错误</span>';
        
        feedbackText.innerHTML = `
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
                <div style="text-align: center;">
                    <div style="font-size: 2.5em; color: #667eea; font-weight: bold; margin-bottom: 5px;">${currentQuestion.kanji}</div>
                    <div style="font-size: 1.5em; color: #666;">${currentQuestion.kana}</div>
                </div>
                <div style="flex: 1;">
                    ${statusText}<br>
                    <strong>正确意思:</strong> ${correctAnswer}<br>
                    <strong>罗马音:</strong> ${currentQuestion.romaji}
                </div>
            </div>
            <div style="text-align: center; font-size: 12px; color: #999; margin-top: 15px;">
                点击"下一个单词"继续 →
            </div>
        `;
    }

    updateN4VocabSessionStats() {
        document.getElementById('n4vocab-correct-count').textContent = sessionStats.correct;
        document.getElementById('n4vocab-wrong-count').textContent = sessionStats.wrong;
        
        const total = sessionStats.correct + sessionStats.wrong;
        const percentage = total > 0 ? Math.round((sessionStats.correct / total) * 100) : 0;
        
        document.getElementById('n4vocab-progress-fill').style.width = percentage + '%';
        document.getElementById('n4vocab-progress-text').textContent = `正确率: ${percentage}%`;
    }

    showN4VocabProgressDetail() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.remove('hidden');
        
        document.getElementById('detail-mode-title').textContent = 'N4单词进度详情';
        document.getElementById('detail-current-user').textContent = currentUser;
        
        this.updateN4VocabProgressDetailDisplay();
    }

    updateN4VocabProgressDetailDisplay() {
        const userData = this.memorySystem.getUserData(currentUser);
        const progress = userData.n4VocabProgress || {};
        
        // 收集所有N4单词的详细信息
        const vocabDetails = N4_WORDS.map(word => {
            const progressData = progress[word.kanji] || {
                level: 1,
                totalReviews: 0,
                correctCount: 0
            };
            
            const errorRate = progressData.totalReviews > 0 
                ? Math.round(((progressData.totalReviews - progressData.correctCount) / progressData.totalReviews) * 100)
                : 0;
            
            const accuracy = progressData.totalReviews > 0 
                ? Math.round((progressData.correctCount / progressData.totalReviews) * 100)
                : 0;
            
            let status;
            if (progressData.level >= 4) {
                status = 'mastered';
            } else if (progressData.level >= 2) {
                status = 'learning';
            } else {
                status = 'not-started';
            }
            
            return {
                char: word.kanji,
                romaji: word.kana,
                example: word.meaning,
                level: progressData.level,
                totalReviews: progressData.totalReviews,
                correctCount: progressData.correctCount,
                errorRate: errorRate,
                accuracy: accuracy,
                status: status
            };
        });
        
        // 按错误率排序（错误率高的在前）
        vocabDetails.sort((a, b) => {
            if (b.errorRate !== a.errorRate) {
                return b.errorRate - a.errorRate;
            }
            // 错误率相同时，按总复习次数排序
            return b.totalReviews - a.totalReviews;
        });
        
        // 保存数据以供筛选使用
        this.currentKanaDetails = vocabDetails;
        
        // 计算统计数据
        const masteredCount = vocabDetails.filter(v => v.status === 'mastered').length;
        const learningCount = vocabDetails.filter(v => v.status === 'learning').length;
        const notStartedCount = vocabDetails.filter(v => v.status === 'not-started').length;
        
        const totalReviews = vocabDetails.reduce((sum, v) => sum + v.totalReviews, 0);
        const totalCorrect = vocabDetails.reduce((sum, v) => sum + v.correctCount, 0);
        const overallAccuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
        
        // 更新统计显示
        document.getElementById('total-count').textContent = vocabDetails.length;
        document.getElementById('mastered-count').textContent = masteredCount;
        document.getElementById('learning-count').textContent = learningCount;
        document.getElementById('not-started-count').textContent = notStartedCount;
        document.getElementById('overall-accuracy-rate').textContent = overallAccuracy + '%';
        
        // 重置筛选状态
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        // 显示所有单词
        this.filterKanaList('all');
    }

    showProgressDetail(mode) {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.remove('hidden');
        
        document.getElementById('detail-mode-title').textContent = 
            mode === 'hiragana' ? '平假名进度详情' : '片假名进度详情';
        document.getElementById('detail-current-user').textContent = currentUser;
        
        this.updateProgressDetailDisplay(mode);
    }

    showVocabProgressDetail() {
        if (!currentUser) {
            alert('请先选择用户');
            return;
        }
        
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('stats-screen').classList.add('hidden');
        document.getElementById('practice-screen').classList.add('hidden');
        document.getElementById('progress-detail-screen').classList.remove('hidden');
        
        document.getElementById('detail-mode-title').textContent = 'N5单词进度详情';
        document.getElementById('detail-current-user').textContent = currentUser;
        
        this.updateVocabProgressDetailDisplay();
    }

    updateVocabProgressDetailDisplay() {
        const userData = this.memorySystem.getUserData(currentUser);
        const progress = userData.n5VocabProgress || {};
        
        // 收集所有N5单词的详细信息
        const vocabDetails = N5_WORDS.map(word => {
            const progressData = progress[word.kanji] || {
                level: 1,
                totalReviews: 0,
                correctCount: 0
            };
            
            const errorRate = progressData.totalReviews > 0 
                ? Math.round(((progressData.totalReviews - progressData.correctCount) / progressData.totalReviews) * 100)
                : 0;
            
            const accuracy = progressData.totalReviews > 0 
                ? Math.round((progressData.correctCount / progressData.totalReviews) * 100)
                : 0;
            
            let status;
            if (progressData.level >= 4) {
                status = 'mastered';
            } else if (progressData.level >= 2) {
                status = 'learning';
            } else {
                status = 'not-started';
            }
            
            return {
                char: word.kanji,
                romaji: word.kana,
                example: word.meaning,
                level: progressData.level,
                totalReviews: progressData.totalReviews,
                correctCount: progressData.correctCount,
                errorRate: errorRate,
                accuracy: accuracy,
                status: status
            };
        });
        
        // 按错误率排序（错误率高的在前）
        vocabDetails.sort((a, b) => {
            if (b.errorRate !== a.errorRate) {
                return b.errorRate - a.errorRate;
            }
            // 错误率相同时，按总复习次数排序
            return b.totalReviews - a.totalReviews;
        });
        
        // 保存数据以供筛选使用
        this.currentKanaDetails = vocabDetails;
        
        // 计算统计数据
        const masteredCount = vocabDetails.filter(v => v.status === 'mastered').length;
        const learningCount = vocabDetails.filter(v => v.status === 'learning').length;
        const notStartedCount = vocabDetails.filter(v => v.status === 'not-started').length;
        
        const totalReviews = vocabDetails.reduce((sum, v) => sum + v.totalReviews, 0);
        const totalCorrect = vocabDetails.reduce((sum, v) => sum + v.correctCount, 0);
        const overallAccuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
        
        // 更新统计显示
        document.getElementById('total-count').textContent = vocabDetails.length;
        document.getElementById('mastered-count').textContent = masteredCount;
        document.getElementById('learning-count').textContent = learningCount;
        document.getElementById('not-started-count').textContent = notStartedCount;
        document.getElementById('overall-accuracy-rate').textContent = overallAccuracy + '%';
        
        // 重置筛选状态
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        // 显示所有单词
        this.filterKanaList('all');
    }

    updateProgressDetailDisplay(mode) {
        const userData = this.memorySystem.getUserData(currentUser);
        const progress = userData[mode + 'Progress'] || {};
        const kanaData = KANA_DATA[mode];
        
        // 收集所有假名的详细信息
        const kanaDetails = kanaData.map(kana => {
            const progressData = progress[kana.char] || {
                level: 1,
                totalReviews: 0,
                correctCount: 0
            };
            
            const errorRate = progressData.totalReviews > 0 
                ? Math.round(((progressData.totalReviews - progressData.correctCount) / progressData.totalReviews) * 100)
                : 0;
            
            const accuracy = progressData.totalReviews > 0 
                ? Math.round((progressData.correctCount / progressData.totalReviews) * 100)
                : 0;
            
            let status;
            if (progressData.level >= 4) {
                status = 'mastered';
            } else if (progressData.level >= 2) {
                status = 'learning';
            } else {
                status = 'not-started';
            }
            
            return {
                char: kana.char,
                romaji: kana.romaji,
                example: kana.example,
                level: progressData.level,
                totalReviews: progressData.totalReviews,
                correctCount: progressData.correctCount,
                errorRate: errorRate,
                accuracy: accuracy,
                status: status
            };
        });
        
        // 按错误率排序（错误率高的在前）
        kanaDetails.sort((a, b) => {
            if (b.errorRate !== a.errorRate) {
                return b.errorRate - a.errorRate;
            }
            // 错误率相同时，按总复习次数排序
            return b.totalReviews - a.totalReviews;
        });
        
        // 保存数据以供筛选使用
        this.currentKanaDetails = kanaDetails;
        
        // 计算统计数据
        const masteredCount = kanaDetails.filter(k => k.status === 'mastered').length;
        const learningCount = kanaDetails.filter(k => k.status === 'learning').length;
        const notStartedCount = kanaDetails.filter(k => k.status === 'not-started').length;
        
        const totalReviews = kanaDetails.reduce((sum, k) => sum + k.totalReviews, 0);
        const totalCorrect = kanaDetails.reduce((sum, k) => sum + k.correctCount, 0);
        const overallAccuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
        
        // 更新统计显示
        document.getElementById('total-count').textContent = kanaDetails.length;
        document.getElementById('mastered-count').textContent = masteredCount;
        document.getElementById('learning-count').textContent = learningCount;
        document.getElementById('not-started-count').textContent = notStartedCount;
        document.getElementById('overall-accuracy-rate').textContent = overallAccuracy + '%';
        
        // 重置筛选状态
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        // 显示所有假名
        this.filterKanaList('all');
    }

    handleFilterClick(button) {
        // 更新按钮状态
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 获取筛选类型
        const filter = button.getAttribute('data-filter');
        
        // 应用筛选
        this.filterKanaList(filter);
    }

    filterKanaList(filter) {
        if (!this.currentKanaDetails) return;
        
        // 根据筛选条件过滤数据
        let filteredDetails;
        if (filter === 'all') {
            filteredDetails = this.currentKanaDetails;
        } else {
            filteredDetails = this.currentKanaDetails.filter(kana => kana.status === filter);
        }
        
        // 更新假名列表
        const listContainer = document.getElementById('kana-detail-list');
        listContainer.innerHTML = '';
        
        if (filteredDetails.length === 0) {
            listContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: #666;">暂无相关数据</div>';
            return;
        }
        
        filteredDetails.forEach(kana => {
            const item = document.createElement('div');
            item.className = `kana-item ${kana.status}`;
            
            const statusText = {
                'mastered': '已掌握',
                'learning': '学习中',
                'not-started': '未开始'
            }[kana.status];
            
            item.innerHTML = `
                <div class="kana-char">${kana.char}</div>
                <div class="kana-info">
                    <div class="kana-romaji">${kana.romaji}</div>
                    <div class="kana-example">${kana.example}</div>
                </div>
                <div class="kana-stats">
                    <div class="stat-row">
                        <span class="stat-label">状态:</span>
                        <span class="stat-value status-${kana.status}">${statusText}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">等级:</span>
                        <span class="stat-value">${kana.level}/5</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">练习次数:</span>
                        <span class="stat-value">${kana.totalReviews}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">正确率:</span>
                        <span class="stat-value">${kana.accuracy}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">错误率:</span>
                        <span class="stat-value error-rate">${kana.errorRate}%</span>
                    </div>
                </div>
            `;
            
            listContainer.appendChild(item);
        });
    }

    updateStatsDisplay() {
        const userData = this.memorySystem.getUserData(currentUser);
        const dailyStats = userData.dailyStats || {};
        
        // 计算总体统计
        const stats = this.calculateOverallStats(dailyStats);
        
        // 更新显示
        document.getElementById('total-days').textContent = stats.totalDays;
        document.getElementById('total-questions').textContent = stats.totalQuestions;
        document.getElementById('overall-accuracy').textContent = stats.overallAccuracy + '%';
        document.getElementById('streak-days').textContent = stats.streakDays + '天';
        
        // 更新图表
        this.dailyStats = dailyStats; // 保存数据供图表过滤使用
        this.updateAccuracyChart();
        this.updateRecentStats(dailyStats);
    }

    calculateOverallStats(dailyStats) {
        const dates = Object.keys(dailyStats).sort();
        let totalQuestions = 0;
        let totalCorrect = 0;
        
        dates.forEach(date => {
            const dayStats = dailyStats[date];
            totalQuestions += dayStats.total;
            totalCorrect += dayStats.correct;
        });
        
        const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        
        // 计算连续练习天数
        const streakDays = this.calculateStreakDays(dates);
        
        return {
            totalDays: dates.length,
            totalQuestions,
            overallAccuracy,
            streakDays
        };
    }

    calculateStreakDays(sortedDates) {
        if (sortedDates.length === 0) return 0;
        
        const today = new Date().toISOString().split('T')[0];
        let streak = 0;
        let currentDate = new Date(today);
        
        // 从今天开始往前数连续天数
        while (true) {
            const dateStr = currentDate.toISOString().split('T')[0];
            if (sortedDates.includes(dateStr)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
    }

    updateAccuracyChart() {
        const chart = document.getElementById('accuracy-chart');
        chart.innerHTML = '';
        
        if (!this.dailyStats) return;
        
        // 获取过滤状态
        const filters = {
            hiragana: document.getElementById('filter-hiragana').checked,
            katakana: document.getElementById('filter-katakana').checked,
            n5vocab: document.getElementById('filter-n5vocab').checked,
            n4vocab: document.getElementById('filter-n4vocab').checked
        };
        
        // 获取最近7天的数据
        const last7Days = this.getLast7Days();
        const chartWidth = chart.offsetWidth || 400;
        const chartHeight = 180;
        const padding = { top: 20, right: 20, bottom: 40, left: 40 };
        const plotWidth = chartWidth - padding.left - padding.right;
        const plotHeight = chartHeight - padding.top - padding.bottom;
        
        // 创建SVG容器
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', chartWidth);
        svg.setAttribute('height', chartHeight);
        svg.style.background = 'white';
        
        // 准备数据
        const categories = ['hiragana', 'katakana', 'n5vocab', 'n4vocab'];
        const categoryColors = {
            hiragana: '#667eea',
            katakana: '#28a745',
            n5vocab: '#ffc107',
            n4vocab: '#dc3545'
        };
        
        const categoryNames = {
            hiragana: '平假名',
            katakana: '片假名',
            n5vocab: 'N5单词',
            n4vocab: 'N4单词'
        };
        
        // 绘制网格线和坐标轴
        const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        gridGroup.setAttribute('class', 'grid');
        
        // Y轴网格线 (0%, 25%, 50%, 75%, 100%)
        for (let i = 0; i <= 4; i++) {
            const y = padding.top + (plotHeight * i / 4);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', padding.left);
            line.setAttribute('y1', y);
            line.setAttribute('x2', padding.left + plotWidth);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', '#e0e0e0');
            line.setAttribute('stroke-width', '1');
            gridGroup.appendChild(line);
            
            // Y轴标签
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', padding.left - 10);
            text.setAttribute('y', y + 4);
            text.setAttribute('text-anchor', 'end');
            text.setAttribute('font-size', '10');
            text.setAttribute('fill', '#666');
            text.textContent = `${100 - i * 25}%`;
            gridGroup.appendChild(text);
        }
        
        // X轴
        const xAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        xAxisLine.setAttribute('x1', padding.left);
        xAxisLine.setAttribute('y1', padding.top + plotHeight);
        xAxisLine.setAttribute('x2', padding.left + plotWidth);
        xAxisLine.setAttribute('y2', padding.top + plotHeight);
        xAxisLine.setAttribute('stroke', '#333');
        xAxisLine.setAttribute('stroke-width', '1');
        gridGroup.appendChild(xAxisLine);
        
        // Y轴
        const yAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        yAxisLine.setAttribute('x1', padding.left);
        yAxisLine.setAttribute('y1', padding.top);
        yAxisLine.setAttribute('x2', padding.left);
        yAxisLine.setAttribute('y2', padding.top + plotHeight);
        yAxisLine.setAttribute('stroke', '#333');
        yAxisLine.setAttribute('stroke-width', '1');
        gridGroup.appendChild(yAxisLine);
        
        svg.appendChild(gridGroup);
        
        // 绘制各类别的折线
        categories.forEach(category => {
            if (!filters[category]) return;
            
            const points = [];
            let hasData = false;
            
            last7Days.forEach((date, index) => {
                const dayStats = this.dailyStats[date];
                const categoryStats = dayStats?.[category];
                
                if (categoryStats && categoryStats.total > 0) {
                    const accuracy = Math.round((categoryStats.correct / categoryStats.total) * 100);
                    const x = padding.left + (plotWidth * index / (last7Days.length - 1));
                    const y = padding.top + plotHeight - (plotHeight * accuracy / 100);
                    points.push({ x, y, accuracy, total: categoryStats.total });
                    hasData = true;
                } else {
                    // 没有数据的点，使用null标记
                    points.push(null);
                }
            });
            
            if (!hasData) return;
            
            // 创建路径
            let pathData = '';
            let firstPoint = true;
            
            points.forEach((point, index) => {
                if (point !== null) {
                    if (firstPoint) {
                        pathData += `M ${point.x} ${point.y}`;
                        firstPoint = false;
                    } else {
                        pathData += ` L ${point.x} ${point.y}`;
                    }
                }
            });
            
            if (pathData) {
                // 绘制折线
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', pathData);
                path.setAttribute('stroke', categoryColors[category]);
                path.setAttribute('stroke-width', '2');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                svg.appendChild(path);
                
                // 绘制数据点
                points.forEach((point, index) => {
                    if (point !== null) {
                        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        circle.setAttribute('cx', point.x);
                        circle.setAttribute('cy', point.y);
                        circle.setAttribute('r', '4');
                        circle.setAttribute('fill', categoryColors[category]);
                        circle.setAttribute('stroke', 'white');
                        circle.setAttribute('stroke-width', '2');
                        circle.style.cursor = 'pointer';
                        
                        // 添加提示信息
                        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                        title.textContent = `${categoryNames[category]}: ${point.accuracy}% (${point.total}题)`;
                        circle.appendChild(title);
                        
                        svg.appendChild(circle);
                    }
                });
            }
        });
        
        // 添加X轴日期标签
        last7Days.forEach((date, index) => {
            const x = padding.left + (plotWidth * index / (last7Days.length - 1));
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x);
            text.setAttribute('y', padding.top + plotHeight + 20);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10');
            text.setAttribute('fill', '#666');
            text.textContent = this.formatDateShort(date);
            svg.appendChild(text);
        });
        
        chart.appendChild(svg);
    }

    getCategoryName(category) {
        const names = {
            hiragana: '平假名',
            katakana: '片假名',
            n5vocab: 'N5单词',
            n4vocab: 'N4单词'
        };
        return names[category] || category;
    }

    updateRecentStats(dailyStats) {
        const recentList = document.getElementById('recent-stats');
        recentList.innerHTML = '';
        
        const sortedDates = Object.keys(dailyStats).sort().reverse().slice(0, 7);
        
        if (sortedDates.length === 0) {
            recentList.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">暂无练习记录</div>';
            return;
        }
        
        sortedDates.forEach(date => {
            const dayStats = dailyStats[date];
            const accuracy = Math.round((dayStats.correct / dayStats.total) * 100);
            
            const item = document.createElement('div');
            item.className = 'recent-item';
            
            const accuracyClass = accuracy >= 90 ? 'excellent' : 
                                 accuracy >= 80 ? 'good' : 
                                 accuracy >= 70 ? 'average' : 'poor';
            
            const n5VocabStats = dayStats.n5vocab || { total: 0, correct: 0 };
            const n4VocabStats = dayStats.n4vocab || { total: 0, correct: 0 };
            
            item.innerHTML = `
                <div>
                    <div class="recent-date">${this.formatDate(date)}</div>
                    <div class="recent-stats-detail">
                        平假名: ${dayStats.hiragana.total}题 | 片假名: ${dayStats.katakana.total}题 | N5单词: ${n5VocabStats.total}题 | N4单词: ${n4VocabStats.total}题
                    </div>
                </div>
                <div class="recent-accuracy ${accuracyClass}">
                    ${accuracy}%
                </div>
            `;
            
            recentList.appendChild(item);
        });
    }

    getLast7Days() {
        const days = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            days.push(date.toISOString().split('T')[0]);
        }
        
        return days;
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        
        if (dateStr === today.toISOString().split('T')[0]) {
            return '今天';
        } else if (dateStr === yesterday.toISOString().split('T')[0]) {
            return '昨天';
        } else {
            return `${date.getMonth() + 1}月${date.getDate()}日`;
        }
    }

    formatDateShort(dateStr) {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    new KanaApp();
});