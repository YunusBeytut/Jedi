const questions = [
    {
        category: "Programlama",
        questions: [
            {
                question: "HTML neyin kısaltmasıdır?",
                options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
                correctAnswer: 2
            },
            {
                question: "CSS ile ilgili hangisi doğrudur?",
                options: ["Veritabanı yönetiminde kullanılır", "Web sayfası tasarımı için stil tanımlar", "Sunucu taraflı kodlama dilidir", "Mobil uygulama geliştirmede zorunludur"],
                correctAnswer: 1
            },
            {
                question: "JavaScript hangi tür bir programlama dilidir?",
                options: ["Derleyici dili", "Sunucu taraflı", "İstemci taraflı betik dili", "Makine dili"],
                correctAnswer: 2
            },
            {
                question: "Bir değişkenin türünü belirtmeden tanımlayabileceğiniz dil hangisidir?",
                options: ["C++", "Java", "Python", "C#"],
                correctAnswer: 2
            },
            {
                question: "Java'da tüm sınıfların kök sınıfı hangisidir?",
                options: ["Class", "Main", "Base", "Object"],
                correctAnswer: 3
            },
            {
                question: "React hangi dili temel alır?",
                options: ["Java", "Python", "JavaScript", "Ruby"],
                correctAnswer: 2
            },
            {
                question: "Python'da yorum satırı nasıl başlatılır?",
                options: ["//", "#", "--", "/*"],
                correctAnswer: 1
            },
            {
                question: "C dilinde kodun çalışmaya başladığı fonksiyon hangisidir?",
                options: ["start()", "run()", "main()", "init()"],
                correctAnswer: 2
            },
            {
                question: "Hangisi bir programlama dili değildir?",
                options: ["Ruby", "HTML", "Swift", "Kotlin"],
                correctAnswer: 1
            },
            {
                question: "SQL ne için kullanılır?",
                options: ["Grafik çizimi", "Veri tabanı sorgulama", "Oyun motoru", "Sunucu yönetimi"],
                correctAnswer: 1
            },
            {
                question: "Hangisi bir JavaScript framework'üdür?",
                options: ["React", "Laravel", "Django", "Flask"],
                correctAnswer: 0
            },
            {
                question: "Git komutu olan `git clone` ne işe yarar?",
                options: ["Değişiklikleri gönderir", "Yeni bir repo oluşturur", "Var olan bir repoyu kopyalar", "Commit mesajı yazar"],
                correctAnswer: 2
            },
            {
                question: "Python'da `len()` fonksiyonu ne işe yarar?",
                options: ["Sayı toplar", "Liste sıralar", "Uzunluk döner", "Tür dönüşümü yapar"],
                correctAnswer: 2
            },
            {
                question: "CSS’de bir elementi seçmek için hangisi kullanılır?",
                options: [".class", "function()", "loop", "var"],
                correctAnswer: 0
            },
            {
                question: "`console.log()` hangi dilde kullanılır?",
                options: ["Java", "C++", "Python", "JavaScript"],
                correctAnswer: 3
            },
            {
                question: "Hangisi bir döngü yapısı değildir?",
                options: ["for", "while", "loop", "if"],
                correctAnswer: 3
            },
            {
                question: "HTML’de bir bağlantı (link) oluşturmak için hangi etiket kullanılır?",
                options: ["<p>", "<link>", "<a>", "<href>"],
                correctAnswer: 2
            },
            {
                question: "Web sayfalarında stil tanımlamak için kullanılan teknoloji nedir?",
                options: ["CSS", "JS", "HTML", "PHP"],
                correctAnswer: 0
            },
            {
                question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
                options: ["function myFunc()", "func myFunc()", "def myFunc()", "create myFunc()"],
                correctAnswer: 0
            },
            {
                question: "Python'da `range(5)` ifadesi ne üretir?",
                options: ["1'den 5'e kadar sayı", "0'dan 4'e kadar sayı", "1'den 4'e kadar sayı", "0'dan 5'e kadar sayı"],
                correctAnswer: 1
            },
            {
                question: "Hangisi bir versiyon kontrol sistemidir?",
                options: ["Linux", "Apache", "Git", "Node.js"],
                correctAnswer: 2
            },
            {
                question: "Bir dosyanın uzantısı `.py` ise hangi dille yazılmıştır?",
                options: ["Java", "Python", "PHP", "Ruby"],
                correctAnswer: 1
            },
            {
                question: "`npm` ne için kullanılır?",
                options: ["Node.js paket yönetimi", "Veritabanı yönetimi", "Sunucu kurulumu", "HTML düzenleme"],
                correctAnswer: 0
            },
            {
                question: "`===` operatörü JavaScript'te ne anlama gelir?",
                options: ["Sadece eşitlik", "Tip kontrolü yapmadan eşitlik", "Tip kontrolü ile eşitlik", "Atama işlemi"],
                correctAnswer: 2
            },
            {
                question: "C++ dilinde `cout` ne için kullanılır?",
                options: ["Girdi almak", "Yorum eklemek", "Ekrana çıktı vermek", "Fonksiyon çağırmak"],
                correctAnswer: 2
            }
        ]
    }
    ,
    {
        category: "Eğlence",
        questions: [
            {
                question: "Oscar ödüllerini dağıtan kuruluş hangisidir?",
                options: ["Hollywood Film Akademisi", "Academy of Motion Picture Arts and Sciences", "Amerikan Film Enstitüsü", "Golden Globe Komitesi"],
                correctAnswer: 1
            },
            {
                question: "Game of Thrones dizisinde 'Demir Taht' için mücadele eden hanedanlardan biri değildir:",
                options: ["Stark", "Lannister", "Baratheon", "Gondor"],
                correctAnswer: 3
            },
            {
                question: "Marvel evreninde 'Iron Man'in gerçek adı nedir?",
                options: ["Bruce Wayne", "Steve Rogers", "Tony Stark", "Clark Kent"],
                correctAnswer: 2
            },
            {
                question: "Dünyaca ünlü 'Friends' dizisinde Joey'nin en çok söylediği replik hangisidir?",
                options: ["How you doin'?", "Could I BE wearing any more clothes?", "Oh. My. God.", "We were on a break!"],
                correctAnswer: 0
            },
            {
                question: "Hangi film en çok Oscar ödülü kazanarak rekor kırmıştır?",
                options: ["Titanic", "The Godfather", "Ben-Hur", "The Lord of the Rings: Return of the King"],
                correctAnswer: 3
            },
            {
                question: "Hangi sanatçı 2020'de 'Folklore' albümüyle Grammy kazandı?",
                options: ["Beyoncé", "Taylor Swift", "Adele", "Billie Eilish"],
                correctAnswer: 1
            },
            {
                question: "Netflix'te büyük ilgi gören 'La Casa de Papel'de Profesör'ün gerçek adı nedir?",
                options: ["Raquel", "Andrés", "Sergio", "Arturo"],
                correctAnswer: 2
            },
            {
                question: "En uzun soluklu Amerikan çizgi dizisi hangisidir?",
                options: ["Family Guy", "The Simpsons", "South Park", "Rick and Morty"],
                correctAnswer: 1
            },
            {
                question: "Harry Potter evreninde büyücü olmayan insanlar ne olarak adlandırılır?",
                options: ["Nomaj", "Muggle", "No-Witch", "Norn"],
                correctAnswer: 1
            },
            {
                question: "Star Wars evreninde Yoda hangi türdendir?",
                options: ["Jedi", "Sith", "Yoda'nın türü bilinmiyor", "Wookie"],
                correctAnswer: 2
            },
            {
                question: "Dünyanın en çok oynanan mobil oyunlarından biri olan 'Subway Surfers' hangi ülkede geliştirilmiştir?",
                options: ["ABD", "Hindistan", "Danimarka", "Çin"],
                correctAnswer: 2
            },
            {
                question: "Yüzüklerin Efendisi filminde 'Gollum' karakteri neyi sürekli tekrar eder?",
                options: ["The Ring", "Precious", "Master", "Power"],
                correctAnswer: 1
            },
            {
                question: "2023 Eurovision Şarkı Yarışmasını kazanan ülke hangisidir?",
                options: ["İsveç", "Ukrayna", "İngiltere", "İtalya"],
                correctAnswer: 0
            },
            {
                question: "Breaking Bad dizisinde Walter White’ın takma adı nedir?",
                options: ["Heisenberg", "Walt", "Jesse", "Gus"],
                correctAnswer: 0
            },
            {
                question: "Hangi filmde Leonardo DiCaprio bir rüyadan uyanmaya çalışır?",
                options: ["Titanic", "Inception", "Shutter Island", "The Revenant"],
                correctAnswer: 1
            },
            {
                question: "K-Pop grubu BTS kaç üyeden oluşur?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "SpongeBob kare pantolon nerede yaşar?",
                options: ["Mercan Ormanı", "Atlantis", "Bikini Bottom", "Kare Deniz"],
                correctAnswer: 2
            },
            {
                question: "Sherlock Holmes'un sadık yardımcısının adı nedir?",
                options: ["Watson", "Moriarty", "Lestrade", "Hudson"],
                correctAnswer: 0
            },
            {
                question: "En yüksek hasılat yapan film hangisidir? (2023 itibariyle)",
                options: ["Titanic", "Avengers: Endgame", "Avatar", "Frozen II"],
                correctAnswer: 2
            },
            {
                question: "Mona Lisa tablosunun sanatçısı kimdir?",
                options: ["Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Van Gogh"],
                correctAnswer: 1
            },
            {
                question: "The Witcher dizisinde Geralt karakterini kim canlandırmıştır?",
                options: ["Henry Cavill", "Tom Hardy", "Chris Hemsworth", "Matt Damon"],
                correctAnswer: 0
            },
            {
                question: "Stranger Things dizisinde Eleven karakteri hangi güçlere sahiptir?",
                options: ["Görünmezlik", "Zihin gücü", "Zaman yolculuğu", "Telepati"],
                correctAnswer: 1
            },
            {
                question: "Hangi dizi bir kimya öğretmeninin uyuşturucu baronuna dönüşümünü anlatır?",
                options: ["Narcos", "Breaking Bad", "Ozark", "Better Call Saul"],
                correctAnswer: 1
            },
            {
                question: "‘The Mandalorian’ dizisinde sevilen karakter Grogu'nun takma adı nedir?",
                options: ["Baby Jedi", "Lil Yoda", "Yodito", "Baby Yoda"],
                correctAnswer: 3
            },
            {
                question: "Leonardo DiCaprio hangi filmle ilk Oscar’ını kazanmıştır?",
                options: ["The Revenant", "Inception", "The Wolf of Wall Street", "Blood Diamond"],
                correctAnswer: 0
            }
        ]
    }
    ,
    {
        category: "Coğrafya",
        questions: [
            {
                question: "Dünyanın en büyük okyanusu hangisidir?",
                options: ["Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Pasifik Okyanusu"],
                correctAnswer: 3
            },
            {
                question: "Türkiye'nin en uzun nehri hangisidir?",
                options: ["Kızılırmak", "Fırat", "Dicle", "Sakarya"],
                correctAnswer: 0
            },
            {
                question: "Amazon Nehri hangi kıtada yer alır?",
                options: ["Afrika", "Asya", "Güney Amerika", "Kuzey Amerika"],
                correctAnswer: 2
            },
            {
                question: "En fazla ülkeyle sınırı olan ülke hangisidir?",
                options: ["Çin", "Rusya", "Almanya", "Fransa"],
                correctAnswer: 1
            },
            {
                question: "Aşağıdakilerden hangisi bir kıta değildir?",
                options: ["Afrika", "Avustralya", "Arktika", "Antarktika"],
                correctAnswer: 2
            },
            {
                question: "Türkiye'nin en yüksek dağı hangisidir?",
                options: ["Erciyes", "Kaçkar", "Ağrı Dağı", "Süphan"],
                correctAnswer: 2
            },
            {
                question: "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
                options: ["Karadeniz ve Marmara", "Ege ve Akdeniz", "Marmara ve Ege", "Karadeniz ve Ege"],
                correctAnswer: 0
            },
            {
                question: "Ekvator aşağıdakilerden hangisidir?",
                options: ["Bir ülke", "Bir nehir", "Bir çizgi", "Bir dağ"],
                correctAnswer: 2
            },
            {
                question: "Nil Nehri hangi kıtadadır?",
                options: ["Asya", "Avrupa", "Güney Amerika", "Afrika"],
                correctAnswer: 3
            },
            {
                question: "Hangi ülke hem Asya hem Avrupa kıtasında yer alır?",
                options: ["Mısır", "Türkiye", "Yunanistan", "İran"],
                correctAnswer: 1
            },
            {
                question: "Dünyanın en yüksek dağı hangisidir?",
                options: ["K2", "Kilimanjaro", "Everest", "Alpler"],
                correctAnswer: 2
            },
            {
                question: "Akdeniz’e kıyısı olan ülkelerden biri değildir?",
                options: ["İtalya", "Fransa", "Almanya", "İspanya"],
                correctAnswer: 2
            },
            {
                question: "En fazla adaya sahip ülke hangisidir?",
                options: ["Endonezya", "Filipinler", "Norveç", "Japonya"],
                correctAnswer: 0
            },
            {
                question: "Avrupa'nın yüzölçümü en büyük ülkesi hangisidir?",
                options: ["Almanya", "Fransa", "Ukrayna", "Rusya"],
                correctAnswer: 3
            },
            {
                question: "Türkiye kaç coğrafi bölgeye ayrılmıştır?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "Dünya üzerinde en fazla nüfusa sahip ülke hangisidir? (2024)",
                options: ["Hindistan", "Çin", "ABD", "Endonezya"],
                correctAnswer: 0
            },
            {
                question: "Göller Yöresi Türkiye'nin hangi bölgesindedir?",
                options: ["Marmara", "Ege", "Karadeniz", "Akdeniz"],
                correctAnswer: 3
            },
            {
                question: "Ege Bölgesi’nin en büyük ili hangisidir?",
                options: ["Aydın", "Muğla", "Manisa", "İzmir"],
                correctAnswer: 3
            },
            {
                question: "Kutup noktalarına en uzak yer neresidir?",
                options: ["Avustralya", "Afrika", "Güney Amerika", "Endonezya"],
                correctAnswer: 0
            },
            {
                question: "İklimi en soğuk olan kıta hangisidir?",
                options: ["Asya", "Antarktika", "Avrupa", "Kuzey Amerika"],
                correctAnswer: 1
            },
            {
                question: "Hangi ülkenin başkenti deniz seviyesinin altındadır?",
                options: ["Hollanda", "İsviçre", "Belçika", "Avusturya"],
                correctAnswer: 0
            },
            {
                question: "Türkiye'nin en büyük gölü hangisidir?",
                options: ["Tuz Gölü", "Beyşehir Gölü", "Van Gölü", "Eğirdir Gölü"],
                correctAnswer: 2
            },
            {
                question: "Dünyanın en uzun nehri hangisidir?",
                options: ["Amazon", "Nil", "Yangtze", "Mississippi"],
                correctAnswer: 1
            },
            {
                question: "Hangi ülke sadece bir şehirden oluşur?",
                options: ["Monako", "San Marino", "Vatikan", "Andorra"],
                correctAnswer: 2
            },
            {
                question: "Karadeniz'e kıyısı olan ülkelerden biri değildir?",
                options: ["Romanya", "Ukrayna", "Yunanistan", "Türkiye"],
                correctAnswer: 2
            },
        ],
    },
    {
        category: "Tarih",
        questions: [
            {
                question: "İlk Türk devleti hangisidir?",
                options: ["Göktürkler", "Hunlar", "Uygurlar", "Selçuklular"],
                correctAnswer: 1
            },
            {
                question: "Malazgirt Meydan Muharebesi hangi yıl yapılmıştır?",
                options: ["1071", "1453", "1299", "1923"],
                correctAnswer: 0
            },
            {
                question: "Türkiye Cumhuriyeti ne zaman kuruldu?",
                options: ["1920", "1921", "1923", "1938"],
                correctAnswer: 2
            },
            {
                question: "Kurtuluş Savaşı'nın lideri kimdir?",
                options: ["Enver Paşa", "Mustafa Kemal Atatürk", "İsmet İnönü", "Kazım Karabekir"],
                correctAnswer: 1
            },
            {
                question: "İstanbul'un fethi hangi padişah döneminde gerçekleşmiştir?",
                options: ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Mehmet", "I. Murat"],
                correctAnswer: 2
            },
            {
                question: "Osmanlı Devleti ne zaman sona ermiştir?",
                options: ["1922", "1923", "1918", "1919"],
                correctAnswer: 0
            },
            {
                question: "Lozan Antlaşması hangi yıl imzalanmıştır?",
                options: ["1919", "1920", "1923", "1924"],
                correctAnswer: 2
            },
            {
                question: "Birinci Dünya Savaşı hangi tarihte başladı?",
                options: ["1912", "1914", "1918", "1920"],
                correctAnswer: 1
            },
            {
                question: "Fransız İhtilali hangi yılda gerçekleşmiştir?",
                options: ["1789", "1815", "1765", "1848"],
                correctAnswer: 0
            },
            {
                question: "Roma İmparatorluğu’nun resmi dini ne zaman Hristiyanlık olmuştur?",
                options: ["313", "395", "476", "1453"],
                correctAnswer: 0
            },
            {
                question: "Tarihte yazının ilk kez kullanıldığı uygarlık hangisidir?",
                options: ["Mısırlar", "Sümerler", "Hititler", "Asurlar"],
                correctAnswer: 1
            },
            {
                question: "Atatürk'ün 'Nutuk' adlı eseri hangi yılları kapsamaktadır?",
                options: ["1919-1923", "1920-1938", "1923-1930", "1915-1927"],
                correctAnswer: 0
            },
            {
                question: "İkinci Dünya Savaşı kaç yılında sona ermiştir?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                question: "Türk Dil Kurumu (TDK) ne zaman kurulmuştur?",
                options: ["1928", "1932", "1935", "1938"],
                correctAnswer: 1
            },
            {
                question: "Fatih Sultan Mehmet kaç yaşında tahta çıkmıştır?",
                options: ["12", "18", "21", "25"],
                correctAnswer: 0
            },
            {
                question: "Osmanlı Devleti kaç yıl hüküm sürmüştür?",
                options: ["600 yıl", "500 yıl", "400 yıl", "700 yıl"],
                correctAnswer: 0
            },
            {
                question: "Mustafa Kemal Atatürk'ün soyadı ne zaman verilmiştir?",
                options: ["1923", "1930", "1934", "1938"],
                correctAnswer: 2
            },
            {
                question: "Tanzimat Fermanı hangi yıl ilan edilmiştir?",
                options: ["1839", "1856", "1876", "1908"],
                correctAnswer: 0
            },
            {
                question: "Türkiye'nin ilk çok partili seçimi hangi yıl yapılmıştır?",
                options: ["1945", "1946", "1950", "1954"],
                correctAnswer: 1
            },
            {
                question: "Savaşta atom bombası kullanılan ilk şehir hangisidir?",
                options: ["Tokyo", "Hiroşima", "Nagasaki", "Kyoto"],
                correctAnswer: 1
            },
            {
                question: "Mustafa Kemal Atatürk hangi cephede 'Anafartalar Kahramanı' unvanını almıştır?",
                options: ["Kafkas", "Suriye", "Çanakkale", "Trablusgarp"],
                correctAnswer: 2
            },
            {
                question: "Türkiye'nin ilk Cumhurbaşkanı kimdir?",
                options: ["İsmet İnönü", "Celal Bayar", "Mustafa Kemal Atatürk", "Adnan Menderes"],
                correctAnswer: 2
            },
            {
                question: "Osmanlı Devleti'nin başkenti ilk neresiydi?",
                options: ["İstanbul", "Bursa", "Edirne", "Ankara"],
                correctAnswer: 1
            },
            {
                question: "Cumhuriyet rejimi Türkiye'de hangi tarihte ilan edilmiştir?",
                options: ["29 Ekim 1923", "23 Nisan 1920", "30 Ağustos 1922", "3 Mart 1924"],
                correctAnswer: 0
            },
            {
                question: "Kavimler Göçü sonucunda hangi büyük imparatorluk yıkılmıştır?",
                options: ["Roma İmparatorluğu", "Bizans", "Osmanlı", "Sasani"],
                correctAnswer: 0
            }
        ]
    }


];
