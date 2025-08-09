// src/data/posts.js
const posts = [
  {
    id: "1",
    title: "Yapay Zeka ve Geleceğimiz",
    slug: "yapay-zeka-ve-gelecegimiz",
    category: "Teknoloji",
    image: "https://picsum.photos/seed/ai/800/400",
    shortDescription: "Yapay zekanın hayatımızdaki yeri ve gelecekteki potansiyeli.",
    content: `
      <p>Yapay zeka (YZ), bilgisayar sistemlerinin insan benzeri zeka yetenekleri sergilemesini sağlayan bir teknoloji alanıdır. Bu yetenekler arasında öğrenme, problem çözme, karar verme ve dil anlama gibi özellikler bulunur. YZ, günümüzde birçok alanda devrim yaratmaktadır.</p>
      <p>Özellikle makine öğrenimi ve derin öğrenme teknikleri sayesinde YZ, büyük veri kümelerini analiz ederek karmaşık desenleri tanıyabilir ve tahminlerde bulunabilir. Bu, sağlık, finans, otomotiv ve eğitim gibi sektörlerde önemli ilerlemeler kaydedilmesini sağlamıştır.</p>
      <p>Gelecekte YZ'nin daha da gelişerek otonom sistemler, akıllı şehirler ve kişiselleştirilmiş hizmetler gibi alanlarda yaygınlaşması beklenmektedir. Ancak YZ'nin etik, güvenlik ve istihdam üzerindeki etkileri de dikkatle değerlendirilmelidir.</p>
      <p>Sonuç olarak, yapay zeka insanlığın karşılaştığı birçok zorluğa çözüm sunma potansiyeline sahip güçlü bir araçtır. Bu teknolojinin sorumlu bir şekilde geliştirilmesi ve kullanılması, geleceğimizi şekillendirmede kritik bir rol oynayacaktır.</p>
    `,
    author: "Ayşe Yılmaz",
    date: "2024-07-20",
    featured: true,
    recommended: true,
  },
  {
    id: "2",
    title: "Sürdürülebilir Yaşam İçin İpuçları",
    slug: "surdurulebilir-yasam-icin-ipuclari",
    category: "Yaşam",
    image: "https://picsum.photos/seed/nature/800/400",
    shortDescription: "Çevre dostu alışkanlıklarla daha iyi bir dünya.",
    content: `
      <p>Sürdürülebilir yaşam, doğal kaynakları koruyarak ve çevresel etkiyi azaltarak gelecek nesillerin ihtiyaçlarını tehlikeye atmadan bugünkü ihtiyaçlarımızı karşılamayı hedefler. Bu yaşam tarzını benimsemek için atabileceğimiz birçok küçük adım bulunmaktadır.</p>
      <p>İlk olarak, enerji tüketimimizi azaltmak önemlidir. Evlerimizde enerji verimli cihazlar kullanmak, gereksiz ışıkları kapatmak ve toplu taşımayı tercih etmek gibi alışkanlıklar büyük fark yaratabilir. Yenilenebilir enerji kaynaklarına yönelmek de uzun vadede çevresel faydalar sağlar.</p>
      <p>İkinci olarak, atık miktarını azaltmak ve geri dönüşümü teşvik etmek kritik öneme sahiptir. Tek kullanımlık ürünlerden kaçınmak, yeniden kullanılabilir çantalar ve şişeler kullanmak, kompost yapmak ve atıkları doğru şekilde ayırmak bu konuda atılabilecek adımlardır.</p>
      <p>Son olarak, bilinçli tüketim alışkanlıkları geliştirmek sürdürülebilir yaşamın temelidir. Yerel ve organik ürünleri tercih etmek, az tüketmek ve ihtiyaçlarımızı gerçekten sorgulamak, hem bütçemize hem de gezegenimize fayda sağlar.</p>
      <p>Unutmayalım ki, her bireyin küçük çabaları birleştiğinde büyük değişimler yaratabilir. Sürdürülebilir bir gelecek için hepimizin sorumluluk alması gerekmektedir.</p>
    `,
    author: "Mehmet Demir",
    date: "2024-07-18",
    featured: false,
    recommended: true,
  },
  {
    id: "3",
    title: "Dijital Pazarlamada Yeni Trendler",
    slug: "dijital-pazarlamada-yeni-trendler",
    category: "Pazarlama",
    image: "https://picsum.photos/seed/marketing/800/400",
    shortDescription: "2024 yılında dijital pazarlamayı şekillendiren yenilikler.",
    content: `
      <p>Dijital pazarlama dünyası sürekli evrim geçiren dinamik bir alandır. Her yıl yeni teknolojiler ve tüketici davranışları, pazarlama stratejilerini yeniden şekillendirir. 2024 yılında öne çıkan bazı trendler, markaların rekabette önde kalması için büyük önem taşımaktadır.</p>
      <p>Birincisi, yapay zeka (YZ) ve makine öğreniminin pazarlama otomasyonu ve kişiselleştirmedeki rolü artmaktadır. YZ destekli araçlar, müşteri verilerini analiz ederek daha hedefli reklam kampanyaları oluşturmaya ve içerik önerileri sunmaya yardımcı olmaktadır.</p>
      <p>İkincisi, kısa video içeriklerin popülaritesi hızla yükselmektedir. TikTok, Instagram Reels ve YouTube Shorts gibi platformlar, markaların genç kitlelere ulaşması için etkili kanallar sunmaktadır. Eğlenceli ve bilgilendirici kısa videolar, marka bilinirliğini artırmada kilit rol oynamaktadır.</p>
      <p>Üçüncüsü, etkileyici pazarlaması (influencer marketing) hala güçlü bir trend olmaya devam etmektedir. Mikro ve nano etkileyicilerle yapılan işbirlikleri, daha otantik ve güvenilir bir iletişim sağlamaktadır. Markalar, niş kitlelere ulaşmak için doğru etkileyicileri seçmeye özen göstermelidir.</p>
      <p>Son olarak, veri gizliliği ve şeffaflık, tüketicilerin öncelikleri arasında yer almaktadır. Markaların, veri toplama ve kullanma süreçlerinde şeffaf olması ve kullanıcıların gizlilik haklarına saygı göstermesi, güven inşa etmek için hayati öneme sahiptir.</p>
      <p>Bu trendleri takip eden ve stratejilerine entegre eden markalar, dijital pazarlama dünyasında başarılı olmaya devam edecektir.</p>
    `,
    author: "Zeynep Can",
    date: "2024-07-15",
    featured: true,
    recommended: false,
  },
  {
    id: "4",
    title: "Evde Spor Yapmanın Faydaları",
    slug: "evde-spor-yapmanin-faydalari",
    category: "Sağlık",
    image: "https://picsum.photos/seed/sport/800/400",
    shortDescription: "Ev konforunda formda kalmanın yolları.",
    content: `
      <p>Evde spor yapmak, hem zaman hem de maliyet açısından birçok avantaj sunar. Spor salonuna gitmeye gerek kalmadan, kendi programınıza ve hızınıza göre egzersiz yapma özgürlüğü sağlar. Özellikle yoğun bir yaşam tarzına sahip olanlar veya spor salonu ortamından hoşlanmayanlar için ideal bir çözümdür.</p>
      <p>Evde spor yapmanın en büyük faydalarından biri esnekliktir. İstediğiniz zaman, istediğiniz kadar egzersiz yapabilirsiniz. Sabah erken saatlerde, öğle arasında veya akşam yemeğinden sonra, tamamen size kalmış. Ayrıca, spor salonu üyeliği veya ulaşım masraflarından tasarruf edersiniz.</p>
      <p>Evde spor yaparken, kendi alanınızda rahatça hareket edebilir, istediğiniz müziği dinleyebilir ve kimsenin sizi izlemediğini bilerek daha özgür hissedebilirsiniz. Başlangıçta basit vücut ağırlığı egzersizleriyle başlayabilir, zamanla direnç bantları, dambıllar veya yoga matı gibi ekipmanlar ekleyebilirsiniz.</p>
      <p>Önemli olan düzenli olmaktır. Haftada en az 3-4 gün, 30-45 dakikalık egzersizler yapmak, fiziksel ve zihinsel sağlığınız üzerinde olumlu etkiler yaratacaktır. Unutmayın, en iyi egzersiz, yapabildiğiniz egzersizdir!</p>
    `,
    author: "Burak Kaya",
    date: "2024-07-12",
    featured: false,
    recommended: true,
  },
  {
    id: "5",
    title: "Minimalist Yaşam Tarzı Rehberi",
    slug: "minimalist-yasam-tarzi-rehberi",
    category: "Yaşam",
    image: "https://picsum.photos/seed/minimal/800/400",
    shortDescription: "Daha azla daha fazlasına sahip olmanın sırları.",
    content: `
      <p>Minimalist yaşam tarzı, gereksiz eşyalardan, taahhütlerden ve dikkat dağıtıcılardan arınarak daha anlamlı ve amaç odaklı bir hayat sürmeyi hedefler. Bu felsefe, sadece fiziksel eşyaları değil, aynı zamanda zihinsel ve duygusal yükleri de azaltmayı içerir.</p>
      <p>Minimalizme başlamak için ilk adım, eşyalarınızı gözden geçirmektir. Kullanmadığınız, sevmediğiniz veya ihtiyacınız olmayan her şeyi ayırın. Bu süreç, size gerçekten neyin önemli olduğunu anlamanızda yardımcı olacaktır. Unutmayın, amaç her şeyi atmak değil, bilinçli seçimler yapmaktır.</p>
      <p>Daha az eşyaya sahip olmak, daha az temizlik, daha az düzenleme ve daha az stres anlamına gelir. Bu da size hobilerinize, ilişkilerinize ve kişisel gelişiminize daha fazla zaman ayırma fırsatı sunar. Minimalizm, tüketim çılgınlığından uzaklaşarak deneyimlere ve anılara odaklanmayı teşvik eder.</p>
      <p>Minimalist bir yaşam tarzı benimsemek, sadece evinizi değil, aynı zamanda zihninizi de düzenlemenize yardımcı olur. Daha az dikkat dağıtıcı ile daha net düşünebilir, önceliklerinizi belirleyebilir ve hayatınızda gerçekten neyin önemli olduğuna odaklanabilirsiniz.</p>
      <p>Bu yolculuk, herkes için farklıdır ve zamanla gelişir. Önemli olan, size huzur ve mutluluk veren şeyleri bulmak ve gereksiz olanları hayatınızdan çıkarmaktır.</p>
    `,
    author: "Elif Aksoy",
    date: "2024-07-10",
    featured: false,
    recommended: false,
  },
  {
    id: "6",
    title: "Geleceğin Şehirleri: Akıllı ve Yeşil",
    slug: "gelecegin-sehirleri-akilli-ve-yesil",
    category: "Teknoloji",
    image: "https://picsum.photos/seed/city/800/400",
    shortDescription: "Teknoloji ve doğanın uyumuyla şekillenen kentler.",
    content: `
      <p>Geleceğin şehirleri, teknoloji ve sürdürülebilirlik ilkelerini bir araya getirerek daha yaşanabilir, verimli ve çevre dostu yaşam alanları yaratmayı hedefliyor. Bu konsept, "akıllı şehirler" ve "yeşil şehirler" olarak iki ana başlık altında incelenebilir.</p>
      <p>Akıllı şehirler, sensörler, IoT (Nesnelerin İnterneti) cihazları ve veri analizi gibi teknolojileri kullanarak şehir hizmetlerini optimize eder. Trafik yönetimi, enerji tüketimi, atık toplama ve kamu güvenliği gibi alanlarda verimlilik artışı sağlanır. Akıllı aydınlatma sistemleri, akıllı park çözümleri ve dijital sağlık hizmetleri, şehir sakinlerinin yaşam kalitesini yükseltir.</p>
      <p>Yeşil şehirler ise çevresel sürdürülebilirliği merkeze alır. Bu şehirlerde yeşil alanlar artırılır, yenilenebilir enerji kaynakları kullanılır, su yönetimi optimize edilir ve atık azaltma programları uygulanır. Dikey tarım, yağmur suyu hasadı ve karbon ayak izini azaltmaya yönelik projeler, yeşil şehirlerin temelini oluşturur.</p>
      <p>Geleceğin şehirleri, bu iki yaklaşımı birleştirerek hem teknolojik olarak gelişmiş hem de doğal kaynakları koruyan, insan odaklı yaşam alanları sunmayı amaçlar. Bu dönüşüm, şehir planlamacıları, teknoloji uzmanları ve vatandaşların işbirliğiyle mümkün olacaktır.</p>
    `,
    author: "Caner Yılmaz",
    date: "2024-07-08",
    featured: false,
    recommended: true,
  },
  {
    id: "7",
    title: "Evde Kahve Demleme Sanatı",
    slug: "evde-kahve-demleme-sanati",
    category: "Yaşam",
    image: "https://picsum.photos/seed/coffee/800/400",
    shortDescription: "Mükemmel kahve deneyimi için pratik bilgiler.",
    content: `
      <p>Sabahları güne zinde başlamanın veya gün içinde keyifli bir mola vermenin en güzel yollarından biri, evde özenle demlenmiş bir fincan kahvedir. Evde kahve demleme sanatı, sadece bir içecek hazırlamaktan öte, bir ritüel ve kişisel bir deneyimdir.</p>
      <p>Mükemmel kahve için birkaç temel unsura dikkat etmek gerekir: kaliteli çekirdekler, doğru öğütme, uygun su sıcaklığı ve demleme yöntemi. Çekirdeklerin taze kavrulmuş olması ve demlemeden hemen önce öğütülmesi, aromanın en üst düzeyde olmasını sağlar.</p>
      <p>Farklı demleme yöntemleri (French Press, V60, Chemex, Aeropress vb.) kahvenin tadını ve karakterini değiştirir. Her yöntemin kendine özgü bir demleme süresi ve su/kahve oranı vardır. Kendi damak zevkinize en uygun yöntemi bulmak için denemeler yapmaktan çekinmeyin.</p>
      <p>Su kalitesi de kahvenin tadını doğrudan etkiler. Klorlu veya çok sert su yerine filtrelenmiş su kullanmak, kahvenin gerçek lezzetini ortaya çıkarır. Ayrıca, suyun sıcaklığı da önemlidir; genellikle 90-96°C arası ideal kabul edilir.</p>
      <p>Evde kahve demleme, sadece bir içecek hazırlamak değil, aynı zamanda kendinize ayırdığınız keyifli bir zamandır. Bu sanatı keşfederken, her fincanda yeni bir lezzet ve deneyim bulacaksınız.</p>
    `,
    author: "Deniz Akın",
    date: "2024-07-05",
    featured: false,
    recommended: false,
  },
  {
    id: "8",
    title: "Finansal Okuryazarlık Neden Önemli?",
    slug: "finansal-okuryazarlik-neden-onemli",
    category: "Finans",
    image: "https://picsum.photos/seed/finance/800/400",
    shortDescription: "Paranızı yönetme becerisi ve geleceğinizi şekillendirme.",
    content: `
      <p>Finansal okuryazarlık, bireylerin paralarını etkili bir şekilde yönetme, bütçeleme, yatırım yapma ve finansal kararlar alma becerisidir. Günümüzün karmaşık ekonomik dünyasında, finansal okuryazarlık sadece bir avantaj değil, aynı zamanda bir zorunluluktur.</p>
      <p>Finansal okuryazarlık, bireylerin borç batağına düşmesini engeller, tasarruf alışkanlıkları kazanmalarına yardımcı olur ve geleceğe yönelik finansal hedefler belirlemelerini sağlar. Emeklilik planlaması, ev satın alma veya çocukların eğitimi gibi büyük hedeflere ulaşmak için sağlam bir finansal temel şarttır.</p>
      <p>Ayrıca, finansal okuryazarlık, bireylerin dolandırıcılıklardan korunmasına ve bilinçli yatırım kararları almasına yardımcı olur. Piyasaları anlamak, riskleri değerlendirmek ve farklı yatırım araçlarını tanımak, finansal refah için kritik öneme sahiptir.</p>
      <p>Eğitimden başlayarak, genç yaşlardan itibaren finansal okuryazarlık becerilerinin kazandırılması, toplumun genel refah seviyesini artırır. Bireylerin finansal bağımsızlıklarını kazanmaları ve ekonomik dalgalanmalara karşı dirençli olmaları, güçlü bir toplumun temelini oluşturur.</p>
      <p>Kısacası, finansal okuryazarlık, sadece kişisel refah için değil, aynı zamanda toplumsal ve ekonomik istikrar için de hayati bir beceridir. Bu beceriyi geliştirmek, daha güvenli ve bilinçli bir gelecek inşa etmemize yardımcı olacaktır.</p>
    `,
    author: "Gizem Yılmaz",
    date: "2024-07-01",
    featured: false,
    recommended: false,
  },
]

export const getPosts = () => posts
export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug)
export const getPostsByCategory = (category) => posts.filter((post) => post.category === category)
export const getFeaturedPosts = () => posts.filter((post) => post.featured)
export const getRecommendedPosts = () => posts.filter((post) => post.recommended)
export const getCategories = () => [...new Set(posts.map((post) => post.category))]
