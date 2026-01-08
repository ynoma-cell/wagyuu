
import { WagyuBrand } from './types';

export const WAGYU_DATA: WagyuBrand[] = [
  {
    id: 'shiraoi',
    name: '白老牛',
    prefecture: '北海道',
    region: '北海道',
    description: '北海道の豊かな自然と涼しい気候が育んだ、深いコクとまろやかな味わいが特徴の和牛です。厳しい寒さを乗り越えるために蓄えられた上質な脂は、口に入れた瞬間にスッと溶け出し、赤身の濃厚な旨みを引き立てます。一度食べれば忘れられない、大地の恵みを感じる至極の逸品です。',
    characteristics: ['濃厚な旨み', 'とろける食感', '自然豊かな風味'],
    recommendedCuts: ['カルビ', 'ロース'],
    priceRange: '5,000円〜18,000円',
    imageUrl: 'https://uu-hokkaido.jp/img/special/beef/shiraoi/about.jpg',
    coordinates: { x: 83, y: 18 } // 北海道・白老付近
  },
  {
    id: 'maesawa',
    name: '前沢牛',
    prefecture: '岩手県',
    region: '東北',
    description: '「陸のマグロ」と称されるほど、鮮やかで美しい霜降りが最大の特徴です。岩手の清らかな水と澄んだ空気、そして生産者の深い愛情によって育てられたその肉質は、緻密でしっとりとした質感。熱を加えると芳醇な香りが立ちのぼり、噛み締めるほどに力強い肉のコクが溢れ出します。',
    characteristics: ['鮮やかな霜降り', '濃厚なコク', '高い香気'],
    recommendedCuts: ['ステーキ', 'すき焼き'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://www.ja-town.com/img/goods/2103/C/2103-2101-22-01.jpg',
    coordinates: { x: 80, y: 38 } // 岩手
  },
  {
    id: 'yonezawa',
    name: '米沢牛',
    prefecture: '山形県',
    region: '東北',
    description: '山形県米沢盆地の厳しい寒暖差が、キメ細やかな霜降りと甘みのある脂を作り上げます。良質な植物性飼料でじっくりと肥育されたそのお肉は、融点が非常に低く、口の中で優しく解けるような食感が楽しめます。特にすき焼きでは、割り下と一体化したお肉の甘みが格別の幸福感をもたらします。',
    characteristics: ['良質な脂の旨み', 'きめ細かな霜降り', '濃厚な味わい'],
    recommendedCuts: ['すき焼き用ロース', 'ランプ'],
    priceRange: '7,000円〜20,000円',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6TjlNkzCmDyooYK7pg0SuzY7uQXoot0EoQ&s',
    coordinates: { x: 74, y: 45 } // 山形
  },
  {
    id: 'hida',
    name: '飛騨牛',
    prefecture: '岐阜県',
    region: '中部',
    description: '北アルプスの清らかな水と澄んだ空気、雄大な自然の中で育まれた岐阜の誇りです。鮮やかなピンク色の肉に、雪の結晶のように繊細に入った霜降りはまさに芸術。焼けば香ばしく、口に含めばジュワッと溢れる肉汁と、後味のしつこくない上品な脂の旨みが、贅沢なひとときを演出してくれます。',
    characteristics: ['美しい霜降り', 'コクのある味わい', '柔らかい繊維'],
    recommendedCuts: ['ロース', 'イチボ'],
    priceRange: '6,000円〜18,000円',
    imageUrl: 'https://www.g-call.com/shopping/goods/images/83429_1.jpg',
    coordinates: { x: 62, y: 62 } // 岐阜
  },
  {
    id: 'omi',
    name: '近江牛',
    prefecture: '滋賀県',
    region: '近畿',
    description: '400年以上の圧倒的な歴史を誇る、日本最古のブランド牛です。琵琶湖周辺の豊かな土壌で育つ近江牛は、肉質が非常に細かく、特有の「粘りのある脂」が旨みを逃さず閉じ込めています。究極の柔らかさと、鼻に抜ける芳醇な香りは、歴史に裏打ちされた本物の味わいを感じさせてくれます。',
    characteristics: ['きめ細かい肉質', '粘りのある脂', '芳醇な香り'],
    recommendedCuts: ['ミスジ', 'モモ'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://img.tkjm.jp/webshop/006/131/sl_21078.jpg',
    coordinates: { x: 57, y: 66 } // 滋賀
  },
  {
    id: 'matsusaka',
    name: '松阪牛',
    prefecture: '三重県',
    region: '近畿',
    description: '「肉の芸術品」として世界にその名を知られる和牛の王様。キメ細やかな霜降り（サシ）が全体に均一に入り、不飽和脂肪酸が豊富なため、指の温度で溶け出すほど繊細です。加熱した際に放たれる「和牛香」と呼ばれる甘く香ばしい香りは、食欲を刺激し、至高のグルメ体験を約束します。',
    characteristics: ['とろけるような食感', '甘い脂肪の香り', '不飽和脂肪酸が豊富'],
    recommendedCuts: ['サーロイン', 'リブロース'],
    priceRange: '15,000円〜40,000円',
    imageUrl: 'https://ushioidochu.com/test/wp-content/themes/cocoon-child-master/img/commit_cont9_img2.png',
    coordinates: { x: 60, y: 73 } // 三重
  },
  {
    id: 'kobe',
    name: '神戸ビーフ',
    prefecture: '兵庫県',
    region: '近畿',
    description: '兵庫県産の但馬牛の中でも、世界で最も厳しいとされる基準をクリアした「選ばれし牛」だけが名乗れる称号。繊細なサシが赤身の筋肉の中に細かく入り込んだ「霜降り」は、上品な旨みと絶妙に調和します。世界中のセレブリティを魅了し続ける、日本が世界に誇る究極のブランドです。',
    characteristics: ['繊細なサシ（霜降り）', '特有の旨み', '融点が低い脂'],
    recommendedCuts: ['フィレ', 'シャトーブリアン'],
    priceRange: '12,000円〜35,000円',
    imageUrl: 'https://img21.shop-pro.jp/PA01404/493/etc/kobebeef-im05.png',
    coordinates: { x: 52, y: 68 } // 兵庫
  },
  {
    id: 'olive',
    name: 'オリーブ牛',
    prefecture: '香川県',
    region: '四国',
    description: '瀬戸内の温暖な気候のなか、オリーブの搾り果実を与えて育てられた香川県独自の和牛です。オリーブに含まれるオレイン酸の効果で、脂身は驚くほどさっぱりとしており、後味が軽やか。それでいて赤身にはしっかりとしたコクがあり、健康志向の方にも愛される「美味しくてヘルシー」な新時代の和牛です。',
    characteristics: ['オレイン酸が豊富', 'さっぱりした脂身', '抗酸化作用'],
    recommendedCuts: ['赤身ステーキ', 'リブロース'],
    priceRange: '5,000円〜15,000円',
    imageUrl: 'https://www.kensanpin.org/wp-content/uploads/2019/09/905242580198194a72c03c2d190be714.jpg',
    coordinates: { x: 48, y: 78 } // 香川
  },
  {
    id: 'saga',
    name: '佐賀牛',
    prefecture: '佐賀県',
    region: '九州',
    description: '穏やかな気候と良質な水に恵まれた佐賀で育つ、最高級の和牛。厳しい格付け基準をクリアしたお肉には「艶さし（つやさし）」と呼ばれる、光り輝くような美しい霜降りが入っています。柔らかい赤身と、甘くコクのある脂のバランスが完璧で、どの調理法でもお肉のポテンシャルを最大限に感じられます。',
    characteristics: ['美しい「艶さし」', '甘みのある脂', '柔らかな赤身'],
    recommendedCuts: ['ヒレ', 'サーロイン'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 12, y: 82 } // 佐賀（九州北西）
  },
  {
    id: 'miyazaki',
    name: '宮崎牛',
    prefecture: '宮崎県',
    region: '九州',
    description: '和牛のオリンピックとも呼ばれる「全国和牛能力共進会」で史上初の4大会連続最高賞を受賞した、現代和牛の最高峰です。宮崎の豊かな太陽を浴びて健康的に育ったそのお肉は、豊潤な旨みと滑らかな舌触りが自慢。世界をも唸らせるその実力は、一口食べればその圧倒的な格の違いが分かります。',
    characteristics: ['豊潤な旨み', 'なめらかな舌触り', 'バランスの良い霜降り'],
    recommendedCuts: ['サーロイン', '肩ロース'],
    priceRange: '7,000円〜22,000円',
    imageUrl: 'https://www.kanko-miyazaki.jp/storage/special_feature_paragraphs/233/responsive_images/CrzNmkANap1w1BQtphUDpaSvVhihWFcL7tjHuALk__1742_1161.jpg',
    coordinates: { x: 20, y: 90 } // 宮崎（九州南東）
  }
];
