/**
 * 翻訳データファイル
 *
 * 各キーの構造:
 *   original  : 英語原文（変更不要）
 *   ai        : AI翻訳（変更不要）
 *   proofread : 校正後テキスト（初期値 = ai。ここを書き換えると Proofread モードでハイライト表示）
 *   note      : ハイライトホバー時に表示する校正メモ（省略可。proofread 書き換え時に追記）
 *
 * 詳細は LOCALIZATION_GUIDE.md を参照。
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
    proofread: '商品を検索する',
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
    proofread: '初回注文で20%オフ！',
  },
  banner_claim: {
    original: 'Claim Offer',
    ai: 'オファーを受け取る',
    proofread: 'オファーを受け取る',
  },
  banner_toast: {
    original: 'Coupon copied to clipboard!',
    ai: 'クーポンをクリップボードにコピーしました！',
    proofread: 'クーポンをクリップボードにコピーしました！',
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
    proofread: 'あなたが愛するガジェット。信頼できる価格。',
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
    proofread: '20%割引',
  },

  // ── Categories (marquee) ─────────────────────────────────────────────────
  cat_headphones: {
    original: 'Headphones',
    ai: 'ヘッドフォン',
    proofread: 'ヘッドフォン',
  },
  cat_speakers: {
    original: 'Speakers',
    ai: 'スピーカー',
    proofread: 'スピーカー',
  },
  cat_watch: {
    original: 'Watch',
    ai: '時計',
    proofread: '時計',
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
    proofread: 'デコレーション',
  },

  // ── Section titles ────────────────────────────────────────────────────────
  section_latest: {
    original: 'Latest Products',
    ai: '最新商品',
    proofread: '最新商品',
  },
  section_best_selling: {
    original: 'Best Selling',
    ai: 'ベストセラー',
    proofread: 'ベストセラー',
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
    proofread: '私たちの仕様',
  },
  our_specs_desc: {
    original: 'We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free.',
    ai: 'スムーズで安全、そして完全にストレスフリーなショッピング体験を保証するための最高クラスのサービスと利便性を提供します。',
    proofread: 'スムーズで安全、そして完全にストレスフリーなショッピング体験を保証するための最高クラスのサービスと利便性を提供します。',
  },
  spec_free_shipping: {
    original: 'Free Shipping',
    ai: '送料無料',
    proofread: '送料無料',
  },
  spec_free_shipping_desc: {
    original: 'Enjoy fast, free delivery on every order no conditions, just reliable doorstep.',
    ai: 'すべてのご注文に条件なしの高速無料配送をお楽しみください。',
    proofread: 'すべてのご注文に条件なしの高速無料配送をお楽しみください。',
  },
  spec_return: {
    original: '7 Days easy Return',
    ai: '7日間簡単返品',
    proofread: '7日間簡単返品',
  },
  spec_return_desc: {
    original: 'Change your mind? No worries. Return any item within 7 days.',
    ai: '気が変わりましたか？ご心配なく。7日以内にどんな商品でも返品できます。',
    proofread: '気が変わりましたか？ご心配なく。7日以内にどんな商品でも返品できます。',
  },
  spec_support: {
    original: '24/7 Customer Support',
    ai: '24時間年中無休のカスタマーサポート',
    proofread: '24時間年中無休のカスタマーサポート',
  },
  spec_support_desc: {
    original: "We're here for you. Get expert help with our customer support.",
    ai: '私たちはあなたのためにここにいます。カスタマーサポートでエキスパートの助けを得てください。',
    proofread: '私たちはあなたのためにここにいます。カスタマーサポートでエキスパートの助けを得てください。',
  },

  // ── Newsletter ────────────────────────────────────────────────────────────
  newsletter_title: {
    original: 'Join Newsletter',
    ai: 'ニュースレターに登録する',
    proofread: 'ニュースレターに登録する',
  },
  newsletter_desc: {
    original: 'Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week.',
    ai: '毎週、独占セール、新着商品、インサイダー情報をメールでお届けします。',
    proofread: '毎週、独占セール、新着商品、インサイダー情報をメールでお届けします。',
  },
  newsletter_placeholder: {
    original: 'Enter your email address',
    ai: 'メールアドレスを入力してください',
    proofread: 'メールアドレスを入力してください',
  },
  newsletter_button: {
    original: 'Get Updates',
    ai: '更新情報を受け取る',
    proofread: '更新情報を受け取る',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer_desc: {
    original: 'Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.',
    ai: '最新かつ最もスマートなガジェットの究極の目的地、gocartへようこそ。スマートフォンからスマートウォッチ、必需品アクセサリーまで、イノベーションの最高峰を一か所でお届けします。',
    proofread: '最新かつ最もスマートなガジェットの究極の目的地、gocartへようこそ。スマートフォンからスマートウォッチ、必需品アクセサリーまで、イノベーションの最高峰を一か所でお届けします。',
  },
  footer_products_title: {
    original: 'PRODUCTS',
    ai: '商品カテゴリ',
    proofread: '商品カテゴリ',
  },
  footer_website_title: {
    original: 'WEBSITE?',
    ai: 'ウェブサイト？',
    proofread: 'ウェブサイト？',
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
    proofread: 'プラスメンバーになる',
  },
  footer_create_store: {
    original: 'Create Your Store',
    ai: 'あなたのショップを作成する',
    proofread: 'あなたのショップを作成する',
  },
  footer_copyright: {
    original: 'Copyright 2025 © gocart All Right Reserved.',
    ai: '著作権 2025 © gocart 全著作権所有。',
    proofread: '著作権 2025 © gocart 全著作権所有。',
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
    proofread: 'ショップを読み込んでいます...',
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
    proofread: '今すぐ{pct}%お得',
  },
  product_add_to_cart: {
    original: 'Add to Cart',
    ai: 'カートに追加',
    proofread: 'カートに追加',
  },
  product_view_cart: {
    original: 'View Cart',
    ai: 'カートを見る',
    proofread: 'カートを見る',
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
    proofread: '100%安全なお支払い',
  },
  product_trusted: {
    original: 'Trusted by top brands',
    ai: 'トップブランドが信頼',
    proofread: 'トップブランドが信頼',
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
    proofread: 'マイカート',
  },
  cart_items_text: {
    original: 'items in your cart',
    ai: 'カート内のアイテム',
    proofread: 'カート内のアイテム',
  },
  cart_add_more: {
    original: 'Add more',
    ai: '追加する',
    proofread: '追加する',
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
    proofread: '合計金額',
  },
  cart_remove_col: {
    original: 'Remove',
    ai: '削除',
    proofread: '削除',
  },
  cart_empty: {
    original: 'Your cart is empty',
    ai: 'カートは空です',
    proofread: 'カートは空です',
  },

  // ── Order Summary ─────────────────────────────────────────────────────────
  payment_summary: {
    original: 'Payment Summary',
    ai: 'お支払いの概要',
    proofread: 'お支払いの概要',
  },
  payment_method_label: {
    original: 'Payment Method',
    ai: 'お支払い方法',
    proofread: 'お支払い方法',
  },
  stripe_payment: {
    original: 'Stripe Payment',
    ai: 'Stripeでお支払い',
    proofread: 'Stripeでお支払い',
  },
  address_label: {
    original: 'Address',
    ai: '住所',
    proofread: '住所',
  },
  select_address: {
    original: 'Select Address',
    ai: '住所を選択',
    proofread: '住所を選択',
  },
  add_address: {
    original: 'Add Address',
    ai: '住所を追加',
    proofread: '住所を追加',
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
    proofread: 'クーポンコード',
  },
  coupon_apply: {
    original: 'Apply',
    ai: '適用',
    proofread: '適用',
  },
  total_label: {
    original: 'Total:',
    ai: '合計：',
    proofread: '合計：',
  },
  place_order_btn: {
    original: 'Place Order',
    ai: '注文を確定する',
    proofread: '注文を確定する',
  },

  // ── Orders page ───────────────────────────────────────────────────────────
  orders_title: {
    original: 'My Orders',
    ai: 'マイオーダー',
    proofread: 'マイオーダー',
  },
  orders_showing: {
    original: 'Showing total {count} orders',
    ai: '合計{count}件の注文',
    proofread: '合計{count}件の注文',
  },
  orders_go_home: {
    original: 'Go to home',
    ai: 'ホームに戻る',
    proofread: 'ホームに戻る',
  },
  orders_product_col: {
    original: 'Product',
    ai: '商品',
    proofread: '商品',
  },
  orders_total_col: {
    original: 'Total Price',
    ai: '合計金額',
    proofread: '合計金額',
  },
  orders_address_col: {
    original: 'Address',
    ai: '配送先',
    proofread: '配送先',
  },
  orders_status_col: {
    original: 'Status',
    ai: 'ステータス',
    proofread: 'ステータス',
  },
  orders_rate_product: {
    original: 'Rate Product',
    ai: '商品を評価する',
    proofread: '商品を評価する',
  },
  orders_empty: {
    original: 'You have no orders',
    ai: '注文がありません',
    proofread: '注文がありません',
  },

  // ── Address Modal ─────────────────────────────────────────────────────────
  addr_modal_title_bold: {
    original: 'Address',
    ai: '新しい住所を追加',
    proofread: '新しい住所を追加',
  },
  addr_name: {
    original: 'Enter your name',
    ai: 'お名前を入力してください',
    proofread: 'お名前を入力してください',
  },
  addr_email: {
    original: 'Email address',
    ai: 'メールアドレス',
    proofread: 'メールアドレス',
  },
  addr_street: {
    original: 'Street',
    ai: '番地',
    proofread: '番地',
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
    proofread: '郵便番号',
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
    proofread: '住所を保存する',
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
    proofread: 'GoCartで販売者になるには、ショップの詳細を審査のために送信してください。管理者の確認後、ショップが有効化されます。',
  },
  create_store_logo: {
    original: 'Store Logo',
    ai: 'ショップのロゴ',
    proofread: 'ショップのロゴ',
  },
  create_store_username: {
    original: 'Username',
    ai: 'ユーザー名',
    proofread: 'ユーザー名',
  },
  create_store_username_ph: {
    original: 'Enter your store username',
    ai: 'ショップのユーザー名を入力してください',
    proofread: 'ショップのユーザー名を入力してください',
  },
  create_store_name: {
    original: 'Name',
    ai: 'ショップ名',
    proofread: 'ショップ名',
  },
  create_store_name_ph: {
    original: 'Enter your store name',
    ai: 'ショップ名を入力してください',
    proofread: 'ショップ名を入力してください',
  },
  create_store_desc_label: {
    original: 'Description',
    ai: '説明',
    proofread: '説明',
  },
  create_store_desc_ph: {
    original: 'Enter your store description',
    ai: 'ショップの説明を入力してください',
    proofread: 'ショップの説明を入力してください',
  },
  create_store_email: {
    original: 'Email',
    ai: 'メールアドレス',
    proofread: 'メールアドレス',
  },
  create_store_email_ph: {
    original: 'Enter your store email',
    ai: 'ショップのメールアドレスを入力してください',
    proofread: 'ショップのメールアドレスを入力してください',
  },
  create_store_contact: {
    original: 'Contact Number',
    ai: '連絡先番号',
    proofread: '連絡先番号',
  },
  create_store_contact_ph: {
    original: 'Enter your store contact number',
    ai: 'ショップの連絡先番号を入力してください',
    proofread: 'ショップの連絡先番号を入力してください',
  },
  create_store_address: {
    original: 'Address',
    ai: '住所',
    proofread: '住所',
  },
  create_store_address_ph: {
    original: 'Enter your store address',
    ai: 'ショップの住所を入力してください',
    proofread: 'ショップの住所を入力してください',
  },
  create_store_submit_btn: {
    original: 'Submit',
    ai: '送信する',
    proofread: '送信する',
  },
  create_store_redirect: {
    original: 'redirecting to dashboard in {sec} seconds',
    ai: '{sec}秒後にダッシュボードへリダイレクトします',
    proofread: '{sec}秒後にダッシュボードへリダイレクトします',
  },
}
