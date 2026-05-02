/**
 * 翻訳データファイル
 * 各キーに original / ai / proofread / note の4フィールド。
 * proofread が ai と異なる場合、Proofreadモードで黄色ハイライト＋ツールチップを表示。
 * 校正方法は LOCALIZATION_GUIDE.md を参照。
 */

export const translations = {

  // ── Navbar ──────────────────────────────────────────────────────────────
  nav_home: {
    original: 'Home',
    ai: 'ホーム',
    proofread: 'ホーム',
  },
  nav_shop: {
    original: 'Shop',
    ai: 'ショップ',
    proofread: 'ショップ',
  },
  nav_about: {
    original: 'About',
    ai: '概要',
    proofread: '概要',
  },
  nav_contact: {
    original: 'Contact',
    ai: 'お問い合わせ',
    proofread: 'お問い合わせ',
  },
  nav_search_placeholder: {
    original: 'Search products',
    ai: '商品を検索する',
    proofread: '商品を検索',
    note: '「する」を省く。ボックス内テキストは体言止めが自然',
  },
  nav_cart: {
    original: 'Cart',
    ai: 'カート',
    proofread: 'カート',
  },
  nav_login: {
    original: 'Login',
    ai: 'ログイン',
    proofread: 'ログイン',
  },

  // ── Banner ───────────────────────────────────────────────────────────────
  banner_text: {
    original: 'Get 20% OFF on Your First Order!',
    ai: '初回注文で20%オフ！',
    proofread: '初回購入で20%OFF！',
    note: '「注文」→「購入」（ECでは「購入」が自然）、「オフ」→「OFF」（表記統一）',
  },
  banner_claim: {
    original: 'Claim Offer',
    ai: 'オファーを受け取る',
    proofread: '特典を受け取る',
    note: '「オファー」はカタカナ直訳で不自然。日本語では「特典」が一般的',
  },
  banner_toast: {
    original: 'Coupon copied to clipboard!',
    ai: 'クーポンをクリップボードにコピーしました！',
    proofread: 'クーポンをコピーしました！',
    note: '「クリップボードに」は日本語では省略するのが一般的',
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero_news_badge: {
    original: 'NEWS',
    ai: 'ニュース',
    proofread: 'ニュース',
  },
  hero_news_text: {
    original: 'Free Shipping on Orders Above $50!',
    ai: '$50以上のご注文で送料無料！',
    proofread: '$50以上のご注文で送料無料！',
  },
  hero_title: {
    original: "Gadgets you'll love. Prices you'll trust.",
    ai: 'あなたが愛するガジェット。信頼できる価格。',
    proofread: '心躍るガジェット、納得の価格。',
    note: '直訳調でコピーとして弱い。日本語ECらしいリズム感のある表現に修正',
  },
  hero_starts_from: {
    original: 'Starts from',
    ai: '最安値',
    proofread: '最安値',
  },
  hero_learn_more: {
    original: 'LEARN MORE',
    ai: '詳しく見る',
    proofread: '詳しく見る',
  },
  hero_best_products: {
    original: 'Best products',
    ai: 'おすすめ商品',
    proofread: 'おすすめ商品',
  },
  hero_view_more: {
    original: 'View more',
    ai: 'もっと見る',
    proofread: 'もっと見る',
  },
  hero_discount: {
    original: '20% discounts',
    ai: '20%割引',
    proofread: '20%OFF',
    note: '日本のECサイトでは「割引」より「OFF」表記が標準的',
  },

  // ── Categories (marquee) ─────────────────────────────────────────────────
  cat_headphones: {
    original: 'Headphones',
    ai: 'ヘッドフォン',
    proofread: 'ヘッドホン',
    note: '一般的な日本語カタカナ表記は「ヘッドホン」（フォン→ホン）',
  },
  cat_speakers: {
    original: 'Speakers',
    ai: 'スピーカー',
    proofread: 'スピーカー',
  },
  cat_watch: {
    original: 'Watch',
    ai: '時計',
    proofread: 'ウォッチ',
    note: 'ECカテゴリ文脈では「時計」より「ウォッチ」の方がブランド感がある',
  },
  cat_earbuds: {
    original: 'Earbuds',
    ai: 'イヤーバッズ',
    proofread: 'イヤーバッズ',
  },
  cat_mouse: {
    original: 'Mouse',
    ai: 'マウス',
    proofread: 'マウス',
  },
  cat_decoration: {
    original: 'Decoration',
    ai: 'デコレーション',
    proofread: 'インテリア雑貨',
    note: '「デコレーション」は広義すぎる。商品群を見ると「インテリア雑貨」が適切',
  },

  // ── Section titles (Latest / Best Selling) ───────────────────────────────
  section_latest: {
    original: 'Latest Products',
    ai: '最新商品',
    proofread: '新着商品',
    note: '「最新」は硬い。「新着」がECの定番表現',
  },
  section_best_selling: {
    original: 'Best Selling',
    ai: 'ベストセラー',
    proofread: '売れ筋商品',
    note: '「ベストセラー」は書籍文脈が強い。ECなら「売れ筋商品」や「人気商品」が自然',
  },
  section_showing_n_of_m: {
    original: 'Showing {shown} of {total} products',
    ai: '{total}件中{shown}件を表示中',
    proofread: '{total}件中{shown}件を表示中',
  },
  section_view_more: {
    original: 'View more',
    ai: 'もっと見る',
    proofread: 'もっと見る',
  },

  // ── Our Specs ─────────────────────────────────────────────────────────────
  section_our_specs: {
    original: 'Our Specifications',
    ai: '私たちの仕様',
    proofread: '安心のサービス',
    note: '「仕様」は技術文書の語。サービス特徴の紹介なので「安心のサービス」に変更',
  },
  our_specs_desc: {
    original: 'We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free.',
    ai: 'スムーズで安全、そして完全にストレスフリーなショッピング体験を保証するための最高クラスのサービスと利便性を提供します。',
    proofread: 'スムーズで安心なお買い物のために、充実したサポート体制をご用意しています。',
    note: 'AI訳は一文が長く読みにくい。短く整理し、日本語として自然なトーンに修正',
  },
  spec_free_shipping: {
    original: 'Free Shipping',
    ai: '送料無料',
    proofread: '送料無料',
  },
  spec_free_shipping_desc: {
    original: 'Enjoy fast, free delivery on every order no conditions, just reliable doorstep.',
    ai: 'すべてのご注文に条件なしの高速無料配送をお楽しみください。',
    proofread: '全商品・条件なしで送料無料。確実に玄関先までお届けします。',
    note: '「お楽しみください」は配送の説明には不自然。事実を端的に伝える形に修正',
  },
  spec_return: {
    original: '7 Days easy Return',
    ai: '7日間簡単返品',
    proofread: '7日間返品保証',
    note: '「簡単返品」より「返品保証」の方がメリット訴求として強い',
  },
  spec_return_desc: {
    original: 'Change your mind? No worries. Return any item within 7 days.',
    ai: '気が変わりましたか？ご心配なく。7日以内にどんな商品でも返品できます。',
    proofread: 'ご購入後7日以内なら、どんな商品でも返品可能です。',
    note: '「気が変わりましたか？」は日本語として不自然。シンプルに事実を伝える形に',
  },
  spec_support: {
    original: '24/7 Customer Support',
    ai: '24時間年中無休のカスタマーサポート',
    proofread: '24時間365日サポート',
    note: '「年中無休」より「365日」の方がECで一般的かつコンパクト',
  },
  spec_support_desc: {
    original: "We're here for you. Get expert help with our customer support.",
    ai: '私たちはあなたのためにここにいます。カスタマーサポートでエキスパートの助けを得てください。',
    proofread: 'いつでもお気軽にご相談ください。専門スタッフが対応します。',
    note: 'AI訳は逐語訳で不自然。「いつでも」で24/7を表現し、自然な日本語に',
  },

  // ── Newsletter ────────────────────────────────────────────────────────────
  newsletter_title: {
    original: 'Join Newsletter',
    ai: 'ニュースレターに登録する',
    proofread: 'メルマガ登録',
    note: '「メルマガ」が日本では一般的かつ親しみやすい表現',
  },
  newsletter_desc: {
    original: 'Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week.',
    ai: '毎週、独占セール、新着商品、インサイダー情報をメールでお届けします。',
    proofread: 'お得な情報・新着商品・限定キャンペーンを毎週メールでお届けします。',
    note: '「インサイダー情報」は不自然。「限定キャンペーン」に変更。全体的に自然に整理',
  },
  newsletter_placeholder: {
    original: 'Enter your email address',
    ai: 'メールアドレスを入力してください',
    proofread: 'メールアドレスを入力',
    note: '入力欄の文言は「ください」なしの体言止めがUI標準',
  },
  newsletter_button: {
    original: 'Get Updates',
    ai: '更新情報を受け取る',
    proofread: '登録する',
    note: 'ボタン文言は短く。「登録する」が最もシンプルで行動を促す',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer_desc: {
    original: 'Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.',
    ai: '最新かつ最もスマートなガジェットの究極の目的地、gocartへようこそ。スマートフォンからスマートウォッチ、必需品アクセサリーまで、イノベーションの最高峰を一か所でお届けします。',
    proofread: '最新ガジェットを探すならgocartへ。スマートフォン・スマートウォッチ・アクセサリーまで、こだわりの一台がきっと見つかります。',
    note: '「究極の目的地」「イノベーションの最高峰」は大げさで不自然。親しみやすいトーンに',
  },
  footer_products_title: {
    original: 'PRODUCTS',
    ai: '商品カテゴリ',
    proofread: '商品カテゴリ',
  },
  footer_website_title: {
    original: 'WEBSITE?',
    ai: 'ウェブサイト？',
    proofread: 'サイトについて',
    note: '「ウェブサイト？」は原文の略語をそのまま訳した結果で意味が伝わらない',
  },
  footer_contact_title: {
    original: 'CONTACT',
    ai: 'お問い合わせ',
    proofread: 'お問い合わせ',
  },
  footer_privacy: {
    original: 'Privacy Policy',
    ai: 'プライバシーポリシー',
    proofread: 'プライバシーポリシー',
  },
  footer_become_member: {
    original: 'Become Plus Member',
    ai: 'プラスメンバーになる',
    proofread: 'プラス会員に登録',
    note: '「メンバーになる」より「会員に登録」が日本語ECとして自然',
  },
  footer_create_store: {
    original: 'Create Your Store',
    ai: 'あなたのショップを作成する',
    proofread: 'ショップを開設する',
    note: '「作成する」は硬い。「開設する」がECサービスの文脈として適切',
  },
  footer_copyright: {
    original: 'Copyright 2025 © gocart All Right Reserved.',
    ai: '著作権 2025 © gocart 全著作権所有。',
    proofread: '© 2025 gocart. All Rights Reserved.',
    note: '「著作権」「全著作権所有」は不自然。英語表記のままが日本語サイトでも一般的',
  },

  // ── Shop page ─────────────────────────────────────────────────────────────
  shop_all: {
    original: 'All',
    ai: '全',
    proofread: '全',
  },
  shop_products: {
    original: 'Products',
    ai: '商品',
    proofread: '商品',
  },
  shop_loading: {
    original: 'Loading shop...',
    ai: 'ショップを読み込んでいます...',
    proofread: '読み込み中...',
    note: 'ローディング文言は短くシンプルに',
  },

  // ── Product Detail page ───────────────────────────────────────────────────
  product_reviews: {
    original: 'Reviews',
    ai: 'レビュー',
    proofread: 'レビュー',
  },
  product_save_pct: {
    original: 'Save {pct}% right now',
    ai: '今すぐ{pct}%お得',
    proofread: '今なら{pct}%OFF',
    note: '「お得」より「OFF」の方がECでは視覚的に分かりやすい',
  },
  product_add_to_cart: {
    original: 'Add to Cart',
    ai: 'カートに追加',
    proofread: 'カートに入れる',
    note: '「追加」は機能的表現。「入れる」の方が日本語として自然なEC表現',
  },
  product_view_cart: {
    original: 'View Cart',
    ai: 'カートを見る',
    proofread: 'カートへ',
    note: 'ボタンは短く。「カートへ」で十分に意図が伝わる',
  },
  product_quantity: {
    original: 'Quantity',
    ai: '数量',
    proofread: '数量',
  },
  product_free_shipping: {
    original: 'Free shipping worldwide',
    ai: '全世界送料無料',
    proofread: '全世界送料無料',
  },
  product_secured_payment: {
    original: '100% Secured Payment',
    ai: '100%安全なお支払い',
    proofread: '安全なお支払い保証',
    note: '「100%安全」は表現として硬い。「保証」をつけることでより信頼感が出る',
  },
  product_trusted: {
    original: 'Trusted by top brands',
    ai: 'トップブランドが信頼',
    proofread: '多くのブランドに選ばれています',
    note: '「トップブランドが信頼」は主語が不自然。受け身表現で自然に',
  },
  product_description_tab: {
    original: 'Description',
    ai: '商品説明',
    proofread: '商品説明',
  },
  product_by: {
    original: 'Product by',
    ai: '販売元：',
    proofread: '販売元：',
  },
  product_view_store: {
    original: 'view store',
    ai: 'ショップを見る',
    proofread: 'ショップを見る',
  },

  // ── Cart page ─────────────────────────────────────────────────────────────
  cart_title: {
    original: 'My Cart',
    ai: 'マイカート',
    proofread: 'カート',
    note: '「マイ〇〇」はカタカナ和製英語。「カート」だけで十分',
  },
  cart_items_text: {
    original: 'items in your cart',
    ai: 'カート内のアイテム',
    proofread: '点の商品が入っています',
    note: '「アイテム」より「商品」が自然。文章として「点の商品が入っています」にまとめた方が自然',
  },
  cart_add_more: {
    original: 'Add more',
    ai: '追加する',
    proofread: '買い物を続ける',
    note: '「追加する」は操作的すぎ。「買い物を続ける」がユーザー行動として自然',
  },
  cart_product_col: {
    original: 'Product',
    ai: '商品',
    proofread: '商品',
  },
  cart_quantity_col: {
    original: 'Quantity',
    ai: '数量',
    proofread: '数量',
  },
  cart_total_price_col: {
    original: 'Total Price',
    ai: '合計金額',
    proofread: '小計',
    note: 'カラム見出しは短く。「合計金額」→「小計」でより標準的なEC表記',
  },
  cart_remove_col: {
    original: 'Remove',
    ai: '削除',
    proofread: '削除',
  },
  cart_empty: {
    original: 'Your cart is empty',
    ai: 'カートは空です',
    proofread: 'カートに商品がありません',
    note: '「空です」は直訳調。「商品がありません」の方が自然なEC表現',
  },

  // ── Order Summary ─────────────────────────────────────────────────────────
  payment_summary: {
    original: 'Payment Summary',
    ai: 'お支払いの概要',
    proofread: 'ご注文内容',
    note: '「お支払いの概要」はぎこちない。日本のECでは「ご注文内容」が一般的',
  },
  payment_method_label: {
    original: 'Payment Method',
    ai: 'お支払い方法',
    proofread: 'お支払い方法',
  },
  stripe_payment: {
    original: 'Stripe Payment',
    ai: 'Stripeでお支払い',
    proofread: 'クレジットカード（Stripe）',
    note: '「Stripe」単体では日本ユーザーに分かりにくい。決済手段を明示するのが親切',
  },
  address_label: {
    original: 'Address',
    ai: '住所',
    proofread: 'お届け先',
    note: '注文フォーム内では「住所」より「お届け先」が購入者視点で自然',
  },
  select_address: {
    original: 'Select Address',
    ai: '住所を選択',
    proofread: 'お届け先を選択',
    note: '「お届け先」に統一',
  },
  add_address: {
    original: 'Add Address',
    ai: '住所を追加',
    proofread: 'お届け先を追加',
    note: '「お届け先」に統一',
  },
  subtotal_label: {
    original: 'Subtotal:',
    ai: '小計：',
    proofread: '小計：',
  },
  shipping_label: {
    original: 'Shipping:',
    ai: '送料：',
    proofread: '送料：',
  },
  coupon_label: {
    original: 'Coupon:',
    ai: 'クーポン：',
    proofread: 'クーポン：',
  },
  coupon_placeholder: {
    original: 'Coupon Code',
    ai: 'クーポンコード',
    proofread: 'クーポンコードを入力',
    note: '入力欄は何を入れるか明示した方が分かりやすい',
  },
  coupon_apply: {
    original: 'Apply',
    ai: '適用',
    proofread: '適用する',
    note: '動詞は語尾「する」をつけた方がボタンとして自然',
  },
  total_label: {
    original: 'Total:',
    ai: '合計：',
    proofread: '合計：',
  },
  place_order_btn: {
    original: 'Place Order',
    ai: '注文を確定する',
    proofread: '注文する',
    note: '「注文を確定する」は冗長。「注文する」でアクションとして十分',
  },

  // ── Orders page ───────────────────────────────────────────────────────────
  orders_title: {
    original: 'My Orders',
    ai: 'マイオーダー',
    proofread: '注文履歴',
    note: '「マイオーダー」はカタカナ直訳。「注文履歴」が日本EC標準表記',
  },
  orders_showing: {
    original: 'Showing total {count} orders',
    ai: '合計{count}件の注文',
    proofread: '合計{count}件の注文',
  },
  orders_go_home: {
    original: 'Go to home',
    ai: 'ホームに戻る',
    proofread: 'ホームへ',
    note: 'リンクテキストは短く。「ホームへ」で方向性が伝わる',
  },
  orders_product_col: {
    original: 'Product',
    ai: '商品',
    proofread: '商品',
  },
  orders_total_col: {
    original: 'Total Price',
    ai: '合計金額',
    proofread: '合計',
    note: 'テーブルヘッダーは短く',
  },
  orders_address_col: {
    original: 'Address',
    ai: '配送先',
    proofread: 'お届け先',
    note: '「配送先」より「お届け先」が消費者向けとして親しみやすい',
  },
  orders_status_col: {
    original: 'Status',
    ai: 'ステータス',
    proofread: '配送状況',
    note: '「ステータス」より「配送状況」が消費者に分かりやすい',
  },
  orders_rate_product: {
    original: 'Rate Product',
    ai: '商品を評価する',
    proofread: 'レビューを書く',
    note: '「評価する」は硬い。「レビューを書く」の方がアクションとして自然',
  },
  orders_empty: {
    original: 'You have no orders',
    ai: '注文がありません',
    proofread: 'まだ注文はありません',
    note: '「まだ」を加えることで新規ユーザーへの自然な導線になる',
  },

  // ── Address Modal ─────────────────────────────────────────────────────────
  addr_modal_title: {
    original: 'Add New',
    ai: '新しい',
    proofread: '新しい',
  },
  addr_modal_title_bold: {
    original: 'Address',
    ai: 'お届け先を追加',
    proofread: 'お届け先を追加',
    note: '「住所」より「お届け先」が注文フロー内で自然',
  },
  addr_name: {
    original: 'Enter your name',
    ai: 'お名前を入力してください',
    proofread: 'お名前',
    note: 'フォーム入力欄のプレースホルダーは体言止めが標準',
  },
  addr_email: {
    original: 'Email address',
    ai: 'メールアドレス',
    proofread: 'メールアドレス',
  },
  addr_street: {
    original: 'Street',
    ai: '番地',
    proofread: '番地・建物名',
    note: '日本住所では番地に加えて建物名が重要。プレースホルダーで示す',
  },
  addr_city: {
    original: 'City',
    ai: '市区町村',
    proofread: '市区町村',
  },
  addr_state: {
    original: 'State',
    ai: '都道府県',
    proofread: '都道府県',
  },
  addr_zip: {
    original: 'Zip code',
    ai: '郵便番号',
    proofread: '郵便番号（ハイフンなし）',
    note: '日本の郵便番号入力UIでは「ハイフンなし」の指定が慣例',
  },
  addr_country: {
    original: 'Country',
    ai: '国',
    proofread: '国',
  },
  addr_phone: {
    original: 'Phone',
    ai: '電話番号',
    proofread: '電話番号',
  },
  addr_save_btn: {
    original: 'SAVE ADDRESS',
    ai: '住所を保存する',
    proofread: '保存する',
    note: 'フォーム内ボタンは「保存する」で十分。「住所を」は文脈から自明',
  },

  // ── Create Store page ──────────────────────────────────────────────────────
  create_store_title: {
    original: 'Add Your',
    ai: 'あなたの',
    proofread: 'あなたの',
  },
  create_store_title_bold: {
    original: 'Store',
    ai: 'ショップを登録',
    proofread: 'ショップを登録',
  },
  create_store_desc: {
    original: 'To become a seller on GoCart, submit your store details for review. Your store will be activated after admin verification.',
    ai: 'GoCartで販売者になるには、ショップの詳細を審査のために送信してください。管理者の確認後、ショップが有効化されます。',
    proofread: 'GoCartで出店するには、ショップ情報を送信して審査をお待ちください。審査通過後、ショップが公開されます。',
    note: '「販売者になる」より「出店する」がECビジネス文脈で自然。「有効化」→「公開」',
  },
  create_store_logo: {
    original: 'Store Logo',
    ai: 'ショップのロゴ',
    proofread: 'ショップロゴ',
    note: 'ラベルは短く',
  },
  create_store_username: {
    original: 'Username',
    ai: 'ユーザー名',
    proofread: 'ショップID',
    note: '出店フォームでは「ユーザー名」より「ショップID」の方が文脈に合う',
  },
  create_store_username_ph: {
    original: 'Enter your store username',
    ai: 'ショップのユーザー名を入力してください',
    proofread: 'ショップIDを入力',
    note: 'プレースホルダーは体言止め＋短く',
  },
  create_store_name: {
    original: 'Name',
    ai: 'ショップ名',
    proofread: 'ショップ名',
  },
  create_store_name_ph: {
    original: 'Enter your store name',
    ai: 'ショップ名を入力してください',
    proofread: 'ショップ名を入力',
  },
  create_store_desc_label: {
    original: 'Description',
    ai: '説明',
    proofread: 'ショップ紹介',
    note: '「説明」は汎用的すぎる。「ショップ紹介」で文脈を明確に',
  },
  create_store_desc_ph: {
    original: 'Enter your store description',
    ai: 'ショップの説明を入力してください',
    proofread: 'ショップの紹介文を入力',
  },
  create_store_email: {
    original: 'Email',
    ai: 'メールアドレス',
    proofread: 'メールアドレス',
  },
  create_store_email_ph: {
    original: 'Enter your store email',
    ai: 'ショップのメールアドレスを入力してください',
    proofread: 'ショップのメールアドレス',
  },
  create_store_contact: {
    original: 'Contact Number',
    ai: '連絡先番号',
    proofread: '電話番号',
    note: '「連絡先番号」は直訳。「電話番号」で十分',
  },
  create_store_contact_ph: {
    original: 'Enter your store contact number',
    ai: 'ショップの連絡先番号を入力してください',
    proofread: 'ショップの電話番号を入力',
  },
  create_store_address: {
    original: 'Address',
    ai: '住所',
    proofread: '所在地',
    note: 'ショップの住所は「所在地」がビジネス文脈で適切',
  },
  create_store_address_ph: {
    original: 'Enter your store address',
    ai: 'ショップの住所を入力してください',
    proofread: 'ショップの所在地を入力',
  },
  create_store_submit_btn: {
    original: 'Submit',
    ai: '送信する',
    proofread: '申請する',
    note: '審査フローの文脈では「送信」より「申請」の方が正確',
  },
  create_store_redirect: {
    original: 'redirecting to dashboard in {sec} seconds',
    ai: '{sec}秒後にダッシュボードへリダイレクトします',
    proofread: '{sec}秒後にダッシュボードへ移動します',
    note: '「リダイレクト」は技術用語。「移動します」が一般ユーザー向け',
  },
}
