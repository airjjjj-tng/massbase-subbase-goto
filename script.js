
// Data
const faqData = [{"category": "top5", "q": "<span class='faq-top-badge'>TOP 1</span> 1ヶ月の料金はいくらですか？", "a": "お1人・1部屋あたりの料金です。<br>| 施設 | 内訳（1日あたり） | 30日ご利用の場合 |<br>|---|---|---|<br>| <strong>MassBASE</strong>（増田町） | 家賃1,333円＋共益費500円＋管理費500円 | <strong>69,990円</strong> |<br>| <strong>SubBASE</strong>（松山町） | 家賃1,666円＋共益費500円＋管理費500円 | <strong>79,980円</strong> |<br>- SubBASEはMassBASEより月額1万円ほど高くなります。立地（中心市街地に近い）と、<strong>各部屋に冷蔵庫がある</strong>などの設備差によるものです。"}, {"category": "payment", "q": "初期費用（敷金・礼金・保証金）はかかりますか？", "a": "<strong>敷金・礼金・保証金・退去費用は一切いただいておりません。保証人も不要です。</strong><br>ただし賃貸借契約となるため、<strong>不動産仲介業者への仲介手数料 11,000円</strong>が最初の1回だけ必要です。"}, {"category": "payment", "q": "光熱費や備品は別料金ですか？", "a": "<strong>すべて込み</strong>です。追加でいただく費用はありません。<br>- 電気・ガス・水道・<strong>Wi-Fi</strong><br>- 家具・家電一式（ベッド、テレビ、机、収納 ほか）<br>- 寝具・リネン一式（<strong>シーツ交換 週1回</strong>）<br>- <strong>バスタオル／フェイスタオル 1日1枚ずつ</strong><br>- 洗濯用洗剤、ウォーターサーバー、インスタントコーヒー・お茶<br>- 居室の簡易清掃（平日）、共用部の清掃（平日毎朝）<br>- <strong>駐車場代</strong><br>> 「<strong>着替えだけお持ちいただければ、その日から生活できます</strong>」というのが当施設のコンセプトです。"}, {"category": "facility", "q": "1ヶ月未満（2週間だけ等）でも借りられますか？", "a": "ご滞在は何日でも構いませんが、<strong>料金は最低30日分</strong>をいただきます。<br>- 賃貸借契約は法律上<strong>30日未満で結ぶことができず</strong>、30日未満は「宿泊」の扱いになるためです（近年ウィークリーマンションが少ないのはこの理由です）。<br>- 例：実際は25日のご利用でも、初月は69,990円（MassBASE）となります。"}, {"category": "facility", "q": "30日を超えた場合はどうなりますか？", "a": "<strong>1ヶ月更新・前払い</strong>で、<strong>31日目からは1日単位の日割り計算</strong>になります。<br>| 施設 | 最初の30日 | 31日目以降 |<br>|---|---|---|<br>| <strong>MassBASE</strong> | 69,990円 | <strong>2,333円／1日</strong> |<br>| <strong>SubBASE</strong> | 79,980円 | <strong>2,666円／1日</strong> |<br><strong>【例】MassBASEを45日間ご利用の場合</strong><br>69,990円（30日分）＋ 2,333円 × 15日（31〜45日目）＝ <strong>104,985円</strong><br>- 途中でご退去された場合は、<strong>前払い分のうちご利用のなかった日数を日割りで返金</strong>いたします。"}, {"category": "payment", "q": "支払い方法は？ 請求書払いはできますか？", "a": "<strong>現金・クレジットカード・請求書払い（法人可）</strong>いずれも対応しています。事前に御見積書・御請求書を発行いたします。<br>※仲介手数料11,000円は不動産仲介業者へ、賃料は有限会社セイコーへのお支払いとなります。"}, {"category": "facility", "q": "見積書はもらえますか？", "a": "可能です。会社名（宛名）・ご利用期間・部屋数をお知らせください。備考欄に含まれるサービス内容も明記いたします。"}, {"category": "contract", "q": "契約はどのような流れですか？", "a": "<strong>当社と直接ではなく、提携の不動産仲介業者を介した賃貸借契約</strong>になります。<br>1. お電話・メール・HPフォームでお問い合わせ（<strong>空室確認</strong>）<br>2. 必要に応じて<strong>御見積書</strong>をお送りします<br>3. ご契約希望のご連絡をいただく<br>4. 提携不動産仲介業者「<strong>くらす企画</strong>」（担当：斎藤）からお客様へお電話<br>5. 書類のやり取り（メール／郵送）→ 契約成立<br>6. ご入居"}, {"category": "contract", "q": "契約にどれくらい時間がかかりますか？急いでいます。", "a": "書類の往復に<strong>2週間程度</strong>みていただくと安心です。<br>ただし<strong>お急ぎの場合は、ご入居当日に現地で書類をご記入いただく対応も可能</strong>です。実際に「来週から入りたい」というお客様にも対応した実績があります。"}, {"category": "contract", "q": "法人契約・社宅代行業者経由でも大丈夫ですか？", "a": "問題ありません。<strong>ご利用の大半が法人のお客様</strong>です。社宅代行業者（スターツ様など）を挟んだご契約も受け付けております。"}, {"category": "facility", "q": "何ヶ月前から予約できますか？", "a": "<strong>3ヶ月前から</strong>承っております。1ヶ月ごとの自動更新でご契約いただいている関係上、それより先のお部屋は確定できません。"}, {"category": "other", "q": "延長はできますか？", "a": "可能です。<strong>お早めにご相談いただければ優先的にお部屋を確保</strong>いたします。<br>他のお客様からお問い合わせがあった際は、まず現入居者様に延長のご予定を確認したうえで調整いたします。"}, {"category": "other", "q": "解約（退去）はいつまでに伝えればよいですか？", "a": "<strong>できれば2週間前まで</strong>にご連絡ください（1ヶ月前だとより確実です）。"}, {"category": "facility", "q": "途中で利用する人が変わっても大丈夫ですか？", "a": "可能です。契約はご契約者様のままで、<strong>交代される方のお名前とご連絡先を当社にお知らせいただければ</strong>ご利用いただけます。<br>（例：最初の2週間はAさん、残り2週間はBさん）"}, {"category": "facility", "q": "どんな建物ですか？ アパートですか？", "a": "<strong>旅館をフルリノベーションした個室型のマンスリーアパートメント</strong>です。<br>「アパートの1室を借りる」のではなく、<strong>個室＋共用スペース</strong>という構成（シェアハウスに近いイメージ）です。<br>- <strong>個室</strong>：カードキーで施錠できます<br>- <strong>共用</strong>：リビング／キッチン／シャワー／トイレ／洗面所／ランドリー"}, {"category": "facility", "q": "部屋の広さは？ 何部屋ありますか？", "a": "<br>| 施設 | 部屋数 | 広さ |<br>|---|---|---|<br>| <strong>MassBASE</strong> | 9部屋 | 101:6.9帖 / 102:6.9帖 / 103:6.3帖 / 201:6帖 / 202:6帖 / 203:7.5帖 / 204:6帖 / 205:6帖 / 206:6帖 |<br>| <strong>SubBASE</strong> | 5部屋 | 6帖前後（部屋ごとに広さが異なります） |"}, {"category": "facility", "q": "部屋には何がありますか？", "a": "ベッド、テレビ、机（1人用）、シェルフ、物干し。<br><strong>SubBASEは各部屋に小型冷蔵庫</strong>（ビジネスホテルにあるタイプ）を設置しています。MassBASEは共用の冷蔵庫をご利用いただきます。"}, {"category": "facility", "q": "お風呂はありますか？", "a": "<strong>浴槽（お風呂）はございません。シャワーブースを各施設2箇所ずつ</strong>ご用意しています。脱衣所とシャワーが1セットになっています。"}, {"category": "facility", "q": "トイレ・キッチン・洗濯機は共用ですか？", "a": "はい、共用です。<br>- トイレ：1階・2階それぞれに大便器1・小便器1（いずれも個室）<br>- 洗面所：2箇所<br>- ランドリー：洗濯機2台・乾燥機2台（洗剤は当社でご用意）<br>- キッチン・リビング：ご自由にお使いいただけます"}, {"category": "facility", "q": "プライバシーは確保されますか？", "a": "各居室は施錠できる個室ですが、<strong>建物が木造のため、深夜の話し声などが隣室に聞こえる可能性</strong>がございます。あらかじめご了承ください。"}, {"category": "facility", "q": "食事は付いていますか？", "a": "お食事の提供はございません。<br>ただし<strong>翌朝召し上がっていただけるよう、前日の夕方までに食パンをブレッドケースにご用意</strong>しています。コーヒー・お茶もご自由にどうぞ。"}, {"category": "facility", "q": "掃除はしてもらえますか？", "a": "<strong>土日祝を除く平日</strong>に、居室の簡易清掃（掃除機がけ）と共用部の清掃を行います。シーツ交換は週1回です。<br>※夜勤明けなどでお休みの際は、お声がけいただければ清掃を見送ります。"}, {"category": "top5", "q": "<span class='faq-top-badge'>TOP 2</span> 2名で1部屋を使えますか？", "a": "<strong>原則としてお1人様1部屋（定員1名）</strong>でご案内しております。<br>シングルベッド1台を備え付けた1名様用のお部屋のため、2名様ですと手狭になります。<br><strong>ご夫婦・ご家族（親子）の場合のみ</strong>、同室でのご利用を承っております。<br>- <strong>家賃は追加不要</strong>、<strong>共益費・管理費のみお2人目分</strong>を頂戴します<br>- 2台目はエキストラベッドまたはお布団での対応となります<br><strong>【例】ご夫婦2名で1部屋を30日間ご利用（SubBASE）</strong><br>| | お1人目 | お2人目 |<br>|---|---|---|<br>| 家賃（1,666円/日×30日） | 49,980円 | ―（不要） |<br>| 共益費（500円/日×30日） | 15,000円 | 15,000円 |<br>| 管理費（500円/日×30日） | 15,000円 | 15,000円 |<br>| <strong>合計</strong> | <strong>79,980円</strong> | <strong>30,000円</strong> |<br>→ ご夫婦2名・30日間の合計：<strong>109,980円</strong>"}, {"category": "facility", "q": "男女が同じ施設に入居することはありますか？", "a": "ございます。共用部（シャワー・トイレ）は男女別ではなく2箇所ずつのご用意です。<br><strong>女性のお客様がご入居される場合は、事前に必ずご案内</strong>し、ご了承をいただいたうえで受け入れております。逆に、先に女性が入居されている場合は、後から男性のご予約をお断りする、または別施設をご案内する場合がございます。"}, {"category": "facility", "q": "団体で借りられますか？", "a": "可能です。MassBASEは9部屋、SubBASEは5部屋ございます。<br><strong>人数が多い場合は1棟貸切</strong>でのご提供も承っております。<br>※部屋数が足りない場合は、当社運営の<strong>ゲストハウスASUKA</strong>（吉田町・個室9部屋）の御案内も可能です。"}, {"category": "top5", "q": "<span class='faq-top-badge'>TOP 3</span> 駐車場はありますか？ 料金は？", "a": "<strong>無料</strong>です。追加費用はいただきません。<br>- <strong>MassBASE</strong>：建物北側に隣接する敷地。<strong>大型車・トラックも駐車可能</strong>です。<br>- <strong>SubBASE</strong>：施設前に乗用車2台／軽自動車3台分＋別途契約駐車場3台分。"}, {"category": "access", "q": "2トントラックやユニック車は停められますか？", "a": "<br>- <strong>MassBASE</strong>：問題なく駐車いただけます。<br>- <strong>SubBASE</strong>：<strong>進入路が狭く、長い車両は入れません</strong>（宅配便の小型トラック程度が限界です）。大型車でお越しの場合はMassBASEをおすすめします。"}, {"category": "access", "q": "自転車の持ち込み・駐輪場は？", "a": "専用の駐輪場はございませんが、駐車場スペースに駐輪いただけます。<strong>屋根がないため雨に濡れてしまいます</strong>（軒下に寄せてお停めの方もいらっしゃいます）。<br>※SubBASEには貸出用の自転車もございます。"}, {"category": "facility", "q": "場所はどこですか？ 現場・病院から近いですか？", "a": "<br>|        | MassBASE                     | SubBASE                 |<br>| ------ | ---------------------------- | ----------------------- |<br>| 住所     | 〒853-0027 長崎県五島市<strong>増田町407</strong>   | 長崎県五島市<strong>松山町</strong>           |<br>| 立地     | 中心市街地から車で約10分。<strong>目の前が海</strong>       | 中心市街地まで<strong>徒歩圏</strong>。買い物・飲食店が近い |<br>| 五島中央病院 | 両施設ともほぼ中間の距離                 | 同左                       |<br>| 向いている方 | <strong>釣りが趣味の方</strong>、海の近くで過ごしたい方、大きな車をお使いの方 | <strong>買い物・飲食の利便性を重視する方</strong>、徒歩で動きたい方 |<br>- 福江空港から車で約10分。<br>- 福江港からMassBASEは車で約20分、SubBASEは車で約5分。<br>- <strong>島は車で1時間ほどで一周</strong>できますので、島内どの現場でも通勤に支障はありません。<br>- コンビニまで車で5〜10分。<strong>島内では車が必須</strong>です。"}, {"category": "facility", "q": "地図で検索しても出てきません。", "a": "<strong>アルファベット表記で「MassBASE」「SUBBASE」</strong>とご入力ください。カタカナ（サブベース等）では検索にヒットしない場合があります。Googleマップでの検索を推奨しております。<br>> ⚠️ <strong>要対応</strong>：この問い合わせは実際に発生しています。HPに<strong>Googleマップ埋め込み</strong>と<strong>住所のコピーボタン</strong>を設置すべき項目です。"}, {"category": "facility", "q": "到着が夜遅く／到着時間が読めません。", "a": "問題ございません。何時でも対応いたします。<br>- 到着30分ほど前にお電話をいただければ、スタッフが現地でお待ちします。<br>- 深夜到着・スタッフ不在の場合は、<strong>玄関の暗証番号をショートメールでお送りし、お部屋にカードキーを置いておく</strong>対応も可能です。"}, {"category": "other", "q": "鍵はどうなっていますか？", "a": "玄関・居室ともに<strong>カードキー</strong>です。暗証番号での解錠にも対応しています。<br>カードを部屋に置いたまま出てしまった場合も、<strong>お電話いただければ遠隔で解錠</strong>いたします。"}, {"category": "other", "q": "退去時の鍵の返却は？", "a": "<strong>カードキーをお部屋のテーブルの上に置いてそのままご退出</strong>ください。立ち会いは不要です。"}, {"category": "other", "q": "荷物を先に送っておけますか？", "a": "可能です。ご入居前に届いた荷物はスタッフがお預かりし、お部屋に置いておきます。"}, {"category": "facility", "q": "釣り道具のレンタルはありますか？", "a": "常備はしておりませんが、<strong>ご要望をいただければご用意</strong>いたします。MassBASEは目の前が海で、お仕事帰りにすぐ釣りに行ける立地です。"}, {"category": "facility", "q": "住民票は移せますか？", "a": "可能です。実際に住所を移されたお客様がいらっしゃいます。<br>- MassBASE：長崎県五島市増田町407 ＋ 部屋番号"}, {"category": "facility", "q": "何かトラブルがあったときは？", "a": "24時間お電話で対応いたします（070-4021-4835）。鍵の不具合、設備の故障などは当社スタッフがすぐに伺います。"}, {"category": "facility", "q": "いつ頃が混みますか？", "a": "<strong>島内の公共工事が重なる時期は満室になりやすい</strong>傾向があります。近年は6月以降に問い合わせが集中しています。お早めのご相談をおすすめします。<br>| 項目 | 内容 |<br>|---|---|<br>| 運営会社 | 有限会社セイコー |<br>| 担当 | 土岐 達也 |<br>| 電話 | 070-4021-4835 |<br>| メール | info@base-goto.com |<br>| 提携不動産仲介 | くらす企画（担当：斎藤） |<br>掲載方針として確定した項目。<strong>今後の電話・メール対応もこの内容に統一</strong>してください。<br>- [x] <strong>2名利用の可否</strong> → <strong>ご夫婦・ご家族（親子）のみ承る</strong>。それ以外の2名利用はお断り。（Q4-1）<br>※家賃は追加不要、共益費・管理費のみ2人目分を頂戴する<br>- [x] <strong>SubBASEの月額表記</strong> → <strong>79,980円</strong>（30日）に統一。「79,990円」は誤りとして今後使用しない。<br>- [x] <strong>MassBASEの料金表記</strong> → <strong>69,990円／30日</strong>、<strong>31日目からは2,333円／1日</strong>の日割り。（Q1-5）<br>- [x] <strong>1泊5,000円の短期対応</strong> → <strong>HPには載せない</strong>。個別対応の例外運用として非公開のまま維持。<br>- [x] <strong>ゲストハウスASUKA</strong> → 満室時の受け皿として<strong>Q&A内で案内可</strong>。（Q4-3）<br>- [x] <strong>空室状況の確認方法</strong> → <strong>電話（070-4021-4835）または問い合わせフォーム</strong>へ誘導する。<br>※空室カレンダー等の自動表示は今回は導入しない<br>1. <strong>Q&Aは「料金」「契約」「設備」「アクセス」「入退去」のタブ／アコーディオン形式</strong>に分ける（全部縦に並べると読まれない）<br>2. <strong>各Q&AにFAQPage構造化データ（JSON-LD）を実装</strong> → Google検索のリッチリザルト＋AI検索での引用対象になる。[[【進行中】MassBASE／SubBASE _改善ロードマップ_2026-08-16]] で他ページのJSON-LD対応は完了済みのため、同じ手順で追加可能<br>3. <strong>「30日未満でも30日分」「仲介手数料11,000円」は問い合わせ前に必ず伝わる位置</strong>へ。ここが後から発覚すると成約率が落ちる<br>4. <strong>料金表は税込／1日単価／30日合計を1つの表</strong>にまとめる<br>5. MassBASE と SubBASE の<strong>比較表</strong>をQ&Aとは別に独立配置（どちらを選ぶかで迷う問い合わせが多い）<br>6. <strong>最頻出の「空いていますか？」は電話・フォーム誘導で受ける方針</strong>のため、<strong>電話番号とお問い合わせボタンを全ページのヘッダー／フッターに常時表示</strong>する。Q&A内だけに置くと見落とされる"}];

// Init FAQ
const faqContainer = document.getElementById('faq-content-container');
const faqTabs = document.querySelectorAll('.faq-tab');

function renderFAQ(filter) {
    faqContainer.innerHTML = '';
    const filtered = faqData.filter(item => item.category === filter);
    
    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <div class="faq-question">${item.q} <i data-feather="chevron-down"></i></div>
            <div class="faq-answer"><div class="faq-answer-inner" style="padding: 16px 0 24px; line-height: 1.8; color: #444;">${item.a}</div></div>
        `;
        faqContainer.appendChild(div);
    });
    
    feather.replace();
    
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            parent.classList.toggle('active');
            const icon = q.querySelector('svg');
            if(parent.classList.contains('active')) {
                icon.classList.add('rotate-180');
            } else {
                icon.classList.remove('rotate-180');
            }
        });
    });
}

// Tab Events
faqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        faqTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderFAQ(tab.dataset.target);
    });
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    if(faqTabs.length > 0) {
        faqTabs[0].classList.add('active');
        renderFAQ(faqTabs[0].dataset.target);
    }
});

// Image Gallery
function changeImage(thumb, propertyIndex) {
    const cards = document.querySelectorAll('.property-large-card');
    const mainImg = cards[propertyIndex].querySelector('.plc-main-img');
    mainImg.src = thumb.src;
}

// Simulator
const simProps = document.querySelectorAll('input[name="sim-prop"]');
const simDays = document.getElementById('sim-days');
const simDaysVal = document.getElementById('sim-days-val');
const simTotal = document.getElementById('sim-total');
const simDailyAvg = document.getElementById('sim-daily-avg');
const simHotelSavings = document.getElementById('sim-hotel-savings');

function calculatePrice() {
    const selectedProp = document.querySelector('input[name="sim-prop"]:checked').value;
    const isMass = selectedProp === 'mass';
    let days = parseInt(simDays.value) || 1;
    
    simDaysVal.innerText = days;
    
    const basePrice = isMass ? 69990 : 79980;
    const dailyPrice = isMass ? 2333 : 2666;
    
    let total = basePrice;
    if (days > 30) {
        total += (days - 30) * dailyPrice;
    }
    
    const hotelCost = days * 7500;
    const savings = hotelCost > total ? hotelCost - total : 0;
    
    simTotal.innerText = total.toLocaleString();
    
    if(simDailyAvg) simDailyAvg.innerText = Math.round(total / (days < 30 ? 30 : days)).toLocaleString();
    if(simHotelSavings) simHotelSavings.innerText = savings.toLocaleString();
    
    // Update dynamic text
    document.getElementById('sim-mass-base').innerText = '¥69,990';
    document.getElementById('sim-mass-daily').innerText = '+ ¥2,333';
}

if (simProps.length > 0 && simDays) {
    simProps.forEach(radio => radio.addEventListener('change', calculatePrice));
    simDays.addEventListener('input', calculatePrice);
    
    // Label clicks for slider
    document.querySelectorAll('.sim-marks span').forEach(span => {
        span.addEventListener('click', () => {
            const val = span.dataset.val;
            simDays.value = val;
            calculatePrice();
        });
    });
    
    calculatePrice(); // init
}
