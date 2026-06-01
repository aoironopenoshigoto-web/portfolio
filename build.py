import os
try:
    from PIL import Image
except ImportError:
    print("❌ Pillowライブラリが見つかりません。ターミナルで 'pip install Pillow' を実行してください。")
    exit()

def process_and_compress_images(src_folder, dest_folder, max_size=800):
    if not os.path.exists(src_folder):
        return []
    
    os.makedirs(dest_folder, exist_ok=True)
    valid_exts = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    image_paths = []
    
    for filename in sorted(os.listdir(src_folder)):
        ext = os.path.splitext(filename)[1].lower()
        if ext in valid_exts:
            src_path = os.path.join(src_folder, filename)
            dest_path = os.path.join(dest_folder, filename).replace('\\', '/')
            
            try:
                with Image.open(src_path) as img:
                    if img.mode in ('RGBA', 'P') and ext in {'.jpg', '.jpeg'}:
                        img = img.convert('RGB')
                    
                    img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                    img.save(dest_path, quality=85, optimize=True)
                    image_paths.append(dest_path)
            except Exception as e:
                print(f"⚠️ 画像 {filename} の処理に失敗しました: {e}")
                
    return image_paths

def generate_gallery_block(image_paths, section_id, title):
    if not image_paths:
        return ""
    
    html = f'<h3 id="{section_id}">{title}</h3>\n'
    html += '<div class="gallery-grid">\n'
    for path in image_paths:
        html += f'''
        <div class="work-item">
            <img src="{path}" alt="{title}の画像" oncontextmenu="return false;" draggable="false">
        </div>
        '''
    html += '</div>\n'
    return html

def generate_price_block(price_data):
    """Python側で定義した料金データから、アコーディオン形式のHTMLを自動生成する"""
    html = '<div class="price-accordion">\n'
    for item in price_data:
        html += f'''
        <details class="price-item">
            <summary class="price-summary">
                <span class="price-title">
                    <span class="ja">{item['title_ja']}</span>
                    <span class="en">{item['title_en']}</span>
                </span>
                <span class="price-amount">
                    <span class="ja">{item['amount_ja']}</span>
                    <span class="en">{item['amount_en']}</span>
                </span>
            </summary>
            <div class="price-details">
        '''
        # 注意書きがある場合
        if 'note_ja' in item:
            html += f'''
                <p class="reference-note">
                    <span class="ja">{item['note_ja']}</span>
                    <span class="en">{item['note_en']}</span>
                </p>
            '''
        # 商用利用などの説明文がある場合
        elif 'desc_ja' in item:
            html += f'''
                <p style="margin-top:0;">
                    <span class="ja">{item['desc_ja']}</span>
                    <span class="en">{item['desc_en']}</span>
                </p>
            '''
        
        # オプション料金のリストがある場合
        if 'options' in item:
            html += '<ul>\n'
            for opt in item['options']:
                html += f'''
                    <li>
                        <span class="detail-label"><span class="ja">{opt['label_ja']}</span><span class="en">{opt['label_en']}</span></span>
                        <span class="detail-price"><span class="ja">{opt['price_ja']}</span><span class="en">{opt['price_en']}</span></span>
                    </li>
                '''
            html += '</ul>\n'
            
        html += '''
            </div>
        </details>
        '''
    html += '</div>\n'
    return html

def build_portfolio():
    with open('template.html', 'r', encoding='utf-8') as f:
        template = f.read()

    print("画像を最適化しています...")
    work_images = process_and_compress_images('images/work', 'images/compressed/work', max_size=800)
    hobby_images = process_and_compress_images('images/hobby', 'images/compressed/hobby', max_size=800)

    # ★ 料金表データ（ここで金額や内容を一括管理します）
    price_items = [
        {
            "title_ja": "SNSアイコン", "title_en": "SNS Icon",
            "amount_ja": "¥ 5,000 〜", "amount_en": "From ¥5,000",
            "note_ja": "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
            "note_en": "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
            "options": [
                {"label_ja": "装飾 少（シンプルな服装など）", "label_en": "Simple details (basic clothes, etc.)", "price_ja": "+ ¥ 0", "price_en": "+ ¥0"},
                {"label_ja": "装飾 中（複雑な髪型・小物など）", "label_en": "Moderate details (complex hair, accessories)", "price_ja": "+ ¥ 1,000 〜", "price_en": "+ ¥1,000~"},
                {"label_ja": "装飾 多（フリル・甲冑・武器など）", "label_en": "Heavy details (frills, armor, weapons)", "price_ja": "+ ¥ 2,500 〜", "price_en": "+ ¥2,500~"}
            ]
        },
        {
            "title_ja": "キャラクター立ち絵", "title_en": "Character Full-body Art",
            "amount_ja": "¥ 15,000 〜", "amount_en": "From ¥15,000",
            "note_ja": "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
            "note_en": "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
            "options": [
                {"label_ja": "装飾 少（制服・シンプルな私服）", "label_en": "Simple details (uniforms, basic clothes)", "price_ja": "+ ¥ 0", "price_en": "+ ¥0"},
                {"label_ja": "装飾 中（ファンタジー衣装・小物複数）", "label_en": "Moderate details (fantasy outfits, some accessories)", "price_ja": "+ ¥ 3,000 〜", "price_en": "+ ¥3,000~"},
                {"label_ja": "装飾 多（重装甲・アイドル衣装など）", "label_en": "Heavy details (heavy armor, idol outfits, etc.)", "price_ja": "+ ¥ 7,000 〜", "price_en": "+ ¥7,000~"}
            ]
        },
        {
            "title_ja": "一枚絵（背景あり）", "title_en": "Illustration (with Background)",
            "amount_ja": "¥ 25,000 〜", "amount_en": "From ¥25,000",
            "note_ja": "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
            "note_en": "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
            "options": [
                {"label_ja": "装飾 少 ＋ 背景シンプル（単色・柄など）", "label_en": "Simple details + Simple BG (solid color/pattern)", "price_ja": "+ ¥ 0", "price_en": "+ ¥0"},
                {"label_ja": "装飾 中 ＋ 背景 中（室内・自然風景など）", "label_en": "Moderate details + Standard BG (room, nature)", "price_ja": "+ ¥ 5,000 〜", "price_en": "+ ¥5,000~"},
                {"label_ja": "装飾 多 ＋ 背景 複雑（街並み・建物など）", "label_en": "Heavy details + Complex BG (cityscapes, architecture)", "price_ja": "+ ¥ 15,000 〜", "price_en": "+ ¥15,000~"}
            ]
        },
        {
            "title_ja": "商用利用・著作権譲渡", "title_en": "Commercial Use / Copyright",
            "amount_ja": "要相談", "amount_en": "Negotiable",
            "desc_ja": "グッズ化、配信での収益化、企業様からのご依頼など、用途に合わせてお見積もりいたしますので、まずはご相談ください。",
            "desc_en": "Please consult with me if you plan to monetize via merchandise, streaming, or if you are a corporate client. We will provide a custom quote based on your usage."
        }
    ]

    # ★ プロフィール・テキスト情報（ここですべての文章を管理します）
    portfolio_data = {
        "name_ja": "青筆",
        "name_en": "Aoironopen",
        "role": "Illustrator",
        "description_ja": "キャラクターイラストを中心に制作しています。「かわいく」がメインです。本ページには載せることはできませんが、企業案件の経験もございます。お気軽にご相談ください！",
        "description_en": "I mainly create character illustrations with a focus on 'cute' aesthetics. Though I cannot post them here, I also have experience with corporate commissions. Please feel free to reach out!",
        "price_desc_ja": "直接のご依頼（メール）における基本料金の目安です。<br>項目をクリックすると、装飾の量などによる詳細な参考価格をご確認いただけます。",
        "price_desc_en": "Estimated base rates for direct requests (via email).<br>Click each item to view detailed reference prices based on the amount of decoration.",
        "contact_desc_ja": "ご依頼やお問い合わせは、以下のプラットフォームまたはメールよりお願いいたします。",
        "contact_desc_en": "For requests and inquiries, please use the platforms below or email me directly.",
        "tools": "Clip Studio Paint",
        "email": "aoironopen@gmail.com",
        "skeb": "https://skeb.jp/@aoiro_no_pen",
        "tsunagu": "https://tsunagu.cloud/users/aoiro_no_pen",
        
        # HTMLブロックの生成
        "gallery_content": generate_gallery_block(work_images, "work", "Work") + 
                           generate_gallery_block(hobby_images, "hobby", "Hobby"),
        "price_content": generate_price_block(price_items)
    }

    for key, value in portfolio_data.items():
        template = template.replace(f"{{{{ {key} }}}}", str(value))

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(template)

    print("✅ 画像の最適化と index.html の生成が完了しました！")

if __name__ == "__main__":
    build_portfolio()