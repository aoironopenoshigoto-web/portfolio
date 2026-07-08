import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import img1 from "@/imports/1.jpg";
import img2 from "@/imports/2.jpg";
import img3 from "@/imports/3.jpg";
import img4 from "@/imports/4.jpg";
import imgHappy from "@/imports/HJpgY0FaQAAusFa.jpg";
import imgKimono from "@/imports/HJUva8yb0AATQRU.jpg";
import imgLive from "@/imports/d3fe79bc-b6f5-46d6-8f95-40f9b686d2b8.jpg";
import imgIchigo from "@/imports/HGL6X_UaIAEFkve.jpg";
import imgPute from "@/imports/HGqz4S0a4AA1hRT.jpg";
import imgMatsumae from "@/imports/HHeT4YVa0AA2ZrO.jpg";
import imgMichaka from "@/imports/HIRztclawAABc3B.jpg";
import imgKeito from "@/imports/HJKdN9qboAAG6ho.jpg";
import imgIcyRayne from "@/imports/IcyRayne.jpg";
import imgNila from "@/imports/Nila.jpg";
import uibunnygarden from "@/imports/HLvSJLuaAAAFA8c.jpg"

// =============================================================
// アートワーク画像の設定
// 画像をアップロード後、以下のように Base64 文字列を定義してください:
// const IMAGE_01 = "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
//
// 各 artwork オブジェクトの image プロパティに定数を設定します。
// 作品数は ARTWORKS の件数から自動で集計されます。

// =============================================================

// ↓ ここに Base64 画像を追加してください
// const IMAGE_01 = "data:image/...;base64,...";
// const IMAGE_02 = "data:image/...;base64,...";

const ARTWORKS = [
  {
    id: "01",
    title: "バニーガールズ",
    tags: [
      "バニーガール",
      "しぐれうい様",
      "角巻わため様",
      "大空スバル様",
    ],
    image: img1,
    wide: true,
  },
  {
    id: "02",
    title: "バニーガール　しぐれうい様",
    tags: ["バニーガール", "しぐれうい様"],
    image: img2,
    wide: false,
  },
  {
    id: "03",
    title: "バニーガール　角巻わため様",
    tags: ["バニーガール", "角巻わため様"],
    image: img3,
    wide: false,
  },
  {
    id: "04",
    title: "バニーガール　大空スバル様",
    tags: ["バニーガール", "大空スバル様"],
    image: img4,
    wide: false,
  },
  {
    id: "05",
    title: "Happy Birthday!!",
    tags: ["ファンアート", "しぐれうい様"],
    image: imgHappy,
    wide: false,
  },
  {
    id: "06",
    title: "お正月",
    tags: ["ファンアート", "しぐれうい様"],
    image: imgKimono,
    wide: false,
  },
  {
    id: "07",
    title: "ライブよかった！！",
    tags: ["ファンアート", "しぐれうい様"],
    image: imgLive,
    wide: false,
  },
  {
    id: "08",
    title: "For Ichigo Miruku",
    tags: ["ご依頼", "Skeb"],
    image: imgIchigo,
    wide: false,
  },
  {
    id: "09",
    title: "For ぷて・あいえー様",
    tags: ["ご依頼", "Skeb"],
    image: imgPute,
    wide: false,
  },
  {
    id: "10",
    title: "For マツマエ様",
    tags: ["ご依頼", "Skeb"],
    image: imgMatsumae,
    wide: false,
  },
  {
    id: "11",
    title: "For みちゃか様",
    tags: ["ご依頼", "Skeb"],
    image: imgMichaka,
    wide: false,
  },
  {
    id: "12",
    title: "For ケイト様",
    tags: ["ご依頼", "Skeb"],
    image: imgKeito,
    wide: false,
  },
  {
    id: "13",
    title: "For IcyRayne",
    tags: ["ご依頼", "Skeb"],
    image: imgIcyRayne,
    wide: false,
  },
  {
    id: "14",
    title: "For Nila",
    tags: ["ご依頼", "Skeb"],
    image: imgNila,
    wide: false,
  },
  {
    id: "15",
    title: "バニーガーデン しぐれうい様",
    tags: ["バニーガーデン", "しぐれうい様", "二次創作"],
    image: uibunnygarden,
    wide: false,
  },
];

type PriceOption = {
  label_ja: string;
  label_en: string;
  price_ja: string;
  price_en: string;
};
type PriceItem = {
  title_ja: string;
  title_en: string;
  amount_ja: string;
  amount_en: string;
  note_ja?: string;
  note_en?: string;
  desc_ja?: string;
  desc_en?: string;
  options?: PriceOption[];
};

const PRICE_ITEMS: PriceItem[] = [
  {
    title_ja: "SNSアイコン",
    title_en: "SNS Icon",
    amount_ja: "¥ 5,000 〜",
    amount_en: "From ¥5,000",
    note_ja:
      "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
    note_en:
      "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
    options: [
      {
        label_ja: "装飾 少（シンプルな服装など）",
        label_en: "Simple details (basic clothes, etc.)",
        price_ja: "+ ¥ 0",
        price_en: "+ ¥0",
      },
      {
        label_ja: "装飾 中（複雑な髪型・小物など）",
        label_en:
          "Moderate details (complex hair, accessories)",
        price_ja: "+ ¥ 1,000 〜",
        price_en: "+ ¥1,000~",
      },
      {
        label_ja: "装飾 多（フリル・甲冑・武器など）",
        label_en: "Heavy details (frills, armor, weapons)",
        price_ja: "+ ¥ 2,500 〜",
        price_en: "+ ¥2,500~",
      },
    ],
  },
  {
    title_ja: "キャラクター立ち絵",
    title_en: "Character Full-body Art",
    amount_ja: "¥ 15,000 〜",
    amount_en: "From ¥15,000",
    note_ja:
      "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
    note_en:
      "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
    options: [
      {
        label_ja: "装飾 少（制服・シンプルな私服）",
        label_en: "Simple details (uniforms, basic clothes)",
        price_ja: "+ ¥ 0",
        price_en: "+ ¥0",
      },
      {
        label_ja: "装飾 中（ファンタジー衣装・小物複数）",
        label_en:
          "Moderate details (fantasy outfits, some accessories)",
        price_ja: "+ ¥ 3,000 〜",
        price_en: "+ ¥3,000~",
      },
      {
        label_ja: "装飾 多（重装甲・アイドル衣装など）",
        label_en:
          "Heavy details (heavy armor, idol outfits, etc.)",
        price_ja: "+ ¥ 7,000 〜",
        price_en: "+ ¥7,000~",
      },
    ],
  },
  {
    title_ja: "一枚絵（背景あり）",
    title_en: "Illustration (with Background)",
    amount_ja: "¥ 25,000 〜",
    amount_en: "From ¥25,000",
    note_ja:
      "※以下の詳細料金はあくまで参考目安です。ご要望に合わせてお見積もりいたします。",
    note_en:
      "*The detailed prices below are for reference only. Quotes will be adjusted based on your requests.",
    options: [
      {
        label_ja: "装飾 少 ＋ 背景シンプル（単色・柄など）",
        label_en:
          "Simple details + Simple BG (solid color/pattern)",
        price_ja: "+ ¥ 0",
        price_en: "+ ¥0",
      },
      {
        label_ja: "装飾 中 ＋ 背景 中（室内・自然風景など）",
        label_en:
          "Moderate details + Standard BG (room, nature)",
        price_ja: "+ ¥ 5,000 〜",
        price_en: "+ ¥5,000~",
      },
      {
        label_ja: "装飾 多 ＋ 背景 複雑（街並み・建物など）",
        label_en:
          "Heavy details + Complex BG (cityscapes, architecture)",
        price_ja: "+ ¥ 15,000 〜",
        price_en: "+ ¥15,000~",
      },
    ],
  },
  {
    title_ja: "商用利用・著作権譲渡",
    title_en: "Commercial Use / Copyright",
    amount_ja: "要相談",
    amount_en: "Negotiable",
    desc_ja:
      "グッズ化、配信での収益化、企業様からのご依頼など、用途に合わせてお見積もりいたしますので、まずはご相談ください。",
    desc_en:
      "Please consult with me if you plan to monetize via merchandise, streaming, or if you are a corporate client. We will provide a custom quote based on your usage.",
  },
];

const CONTACT_LINKS = [
  {
    label: "メール",
    value: "aoironopen.oshigoto@gmail.com",
    href: "mailto:aoironopen.oshigoto@gmail.com",
  },
  {
    label: "X (旧Twitter)",
    value: "@aoiro_no_pen",
    href: "https://x.com/aoiro_no_pen",
  },
  {
    label: "Skeb",
    value: "@aoiro_no_pen",
    href: "https://skeb.jp/@aoiro_no_pen",
  },
  {
    label: "Tsunagu",
    value: "aoiro_no_pen",
    href: "https://tsunagu.cloud/users/aoiro_no_pen",
  },
];

// パレット定数
const C = {
  purple: "#c45aff",
  pink: "#ff6eb4",
  cyan: "#5af0e8",
  yellow: "#ffe566",
  bg: "#fdf6ff",
  dark: "#2d1f3d",
  muted: "#9575b5",
  card: "#ffffff",
  border: "rgba(180,120,220,0.2)",
};

function PlaceholderImage({ id }: { id: string }) {
  const hues = ["#f3d8ff", "#ffd8f0", "#d8f3ff", "#fff8d8"];
  const bg = hues[(parseInt(id, 10) - 1) % hues.length];
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2"
      style={{
        background: `linear-gradient(135deg, ${bg} 0%, #ffffff 100%)`,
      }}
    >
      <div style={{ fontSize: "2.4rem", lineHeight: 1 }}>
        🎨
      </div>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          color: C.muted,
          fontSize: "0.6rem",
          letterSpacing: "0.14em",
        }}
      >
        IMAGE_{id}
      </div>
      <div
        style={{
          fontFamily: "'M PLUS Rounded 1c', sans-serif",
          color: C.muted,
          fontSize: "0.62rem",
        }}
      >
        後ほど追加
      </div>
    </div>
  );
}

// ふわっとした装飾バブル
function Bubble({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default function App() {
  const mobileGalleryQuery = "(max-width: 768px)";
  const [hoveredId, setHoveredId] = useState<string | null>(
    null,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<
    number | null
  >(null);
  const [isMobileGallery, setIsMobileGallery] = useState(() =>
    window.matchMedia(mobileGalleryQuery).matches,
  );
  const [landscapeById, setLandscapeById] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileGalleryQuery);
    const onChange = (event: MediaQueryListEvent) =>
      setIsMobileGallery(event.matches);
    setIsMobileGallery(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () =>
      mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadOrientations = async () => {
      const results = await Promise.all(
        ARTWORKS.filter((work) => work.image).map(
          (work) =>
            new Promise<[string, boolean]>((resolve) => {
              const image = new window.Image();
              image.onload = () => {
                resolve([
                  work.id,
                  image.naturalWidth > image.naturalHeight,
                ]);
              };
              image.onerror = () => resolve([work.id, false]);
              image.src = work.image as string;
            }),
        ),
      );

      if (cancelled) return;

      const nextLandscapeById: Record<string, boolean> = {};
      for (const [id, isLandscape] of results) {
        nextLandscapeById[id] = isLandscape;
      }
      setLandscapeById(nextLandscapeById);
    };

    loadOrientations();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft" && lightboxIndex > 0)
        setLightboxIndex((i) => i! - 1);
      if (
        e.key === "ArrowRight" &&
        lightboxIndex < ARTWORKS.length - 1
      )
        setLightboxIndex((i) => i! + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  const workCount = ARTWORKS.length;

  return (
    <div
      className="min-h-screen"
      style={{
        background: C.bg,
        color: C.dark,
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null &&
        (() => {
          const work = ARTWORKS[lightboxIndex];
          const hasPrev = lightboxIndex > 0;
          const hasNext = lightboxIndex < ARTWORKS.length - 1;
          return (
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 200,
                background: "rgba(20,10,30,0.93)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  zIndex: 20,
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  cursor: "pointer",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(196,90,255,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.12)")
                }
                aria-label="閉じる"
              >
                ✕
              </button>

              {/* Prev */}
              {hasPrev && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => i! - 1);
                  }}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    cursor: "pointer",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(196,90,255,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.1)")
                  }
                  aria-label="前の作品"
                >
                  ‹
                </button>
              )}

              {/* Next */}
              {hasNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => i! + 1);
                  }}
                  style={{
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    cursor: "pointer",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(196,90,255,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.1)")
                  }
                  aria-label="次の作品"
                >
                  ›
                </button>
              )}

              {/* Image */}
              <div
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {work.image && (
                  <img
                    src={work.image as string}
                    alt={work.title}
                    style={{
                      maxWidth: "90vw",
                      maxHeight: "85vh",
                      objectFit: "contain",
                      borderRadius: 16,
                      boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
                      display: "block",
                    }}
                  />
                )}
                {/* Caption */}
                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "'Zen Maru Gothic', sans-serif",
                      fontWeight: 900,
                      color: "#fff",
                      fontSize: "1rem",
                    }}
                  >
                    {work.title}
                  </span>
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(196,90,255,0.6)",
                        color: "#fff",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        padding: "2px 9px",
                        borderRadius: 999,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* Counter */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 8,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {lightboxIndex + 1} / {ARTWORKS.length}
                </div>
              </div>
            </div>
          );
        })()}

      {/* ===== NAV ===== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: 60,
          background: "rgba(253,246,255,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: `2px solid ${C.border}`,
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            ✏️
          </div>
          <span
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              fontSize: "1.15rem",
              color: C.dark,
              letterSpacing: "0.06em",
            }}
          >
            青筆
          </span>
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ gap: 32, alignItems: "center" }}
        >
          {[
            { label: "作品ギャラリー", href: "#gallery" },
            { label: "プロフィール", href: "#about" },
            { label: "料金表", href: "#price" },
            { label: "ご依頼", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontWeight: 700,
                fontSize: "0.82rem",
                color: C.muted,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = C.purple)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = C.muted)
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.78rem",
              padding: "7px 18px",
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: `0 4px 14px rgba(196,90,255,0.35)`,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = "1")
            }
          >
            お仕事依頼 ✨
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="メニュー"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2.5,
                background: C.purple,
                borderRadius: 2,
                transition: "all 0.25s",
                transform: menuOpen
                  ? i === 0
                    ? "translateY(7.5px) rotate(45deg)"
                    : i === 2
                      ? "translateY(-7.5px) rotate(-45deg)"
                      : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(253,246,255,0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {[
            { label: "作品ギャラリー", href: "#gallery" },
            { label: "プロフィール", href: "#about" },
            { label: "料金表", href: "#price" },
            { label: "ご依頼", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontWeight: 900,
                fontSize: "1.6rem",
                color: C.dark,
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* ===== HERO ===== */}
      <section
        id="top"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 2rem 60px",
          overflow: "hidden",
        }}
      >
        {/* スライドショー用CSS */}
        <style>{`
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .bg-marquee-container {
            display: flex;
            width: max-content;
            animation: slide-left 60s linear infinite;
            gap: 16px;
            padding-right: 16px;
          }
          .bg-marquee-img {
            height: 240px;
            width: auto;
            border-radius: 16px;
            object-fit: cover;
            /* 透明度を上げる（例: 0.15 → 0.6） */
            opacity: 0.6; 
            /* filter: grayscale(30%); は削除し元の色彩を出す */
          }
        `}</style>

        {/* 背景スライドショー */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
            transform:
              "rotate(-5deg) scale(1.2)" /* 少し傾けてダイナミックな印象にする */,
            pointerEvents: "none",
          }}
        >
          {/* 画面を埋めるために2行配置し、それぞれ異なる速度・開始位置にする */}
          <div
            className="bg-marquee-container"
            style={{ animationDuration: "60s" }}
          >
            {[...ARTWORKS, ...ARTWORKS].map((work, i) =>
              work.image ? (
                <img
                  key={`row1-${i}`}
                  src={work.image as string}
                  className="bg-marquee-img"
                  alt=""
                />
              ) : (
                <div
                  key={`row1-ph-${i}`}
                  className="bg-marquee-img"
                  style={{ background: "#eee", width: "180px" }}
                ></div>
              ),
            )}
          </div>
          <div
            className="bg-marquee-container"
            style={{
              animationDuration: "60s",
              transform: "translateX(-10%)",
            }}
          >
            {[...ARTWORKS, ...ARTWORKS]
              .reverse()
              .map((work, i) =>
                work.image ? (
                  <img
                    key={`row2-${i}`}
                    src={work.image as string}
                    className="bg-marquee-img"
                    alt=""
                  />
                ) : (
                  <div
                    key={`row2-ph-${i}`}
                    className="bg-marquee-img"
                    style={{
                      background: "#eee",
                      width: "180px",
                    }}
                  ></div>
                ),
              )}
          </div>
        </div>

        {/* コンテンツを背景の上に表示するためのラッパー */}
        {/* rgba(253,246,255,0.8) の 0.8（透明度）を 0.4 などに下げて白濁を弱める */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(circle, transparent 20%, rgba(253,246,255,0.4) 80%)",
          }}
        />

        {/* Decorative bubbles (z-indexを上げて背景の上に配置) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <Bubble
            size={380}
            color="rgba(196,90,255,0.08)"
            style={{ top: -80, right: -80 }}
          />
          <Bubble
            size={240}
            color="rgba(255,110,180,0.1)"
            style={{ bottom: 60, left: -60 }}
          />
          <Bubble
            size={120}
            color="rgba(90,240,232,0.15)"
            style={{ top: "40%", right: "15%" }}
          />
          <Bubble
            size={60}
            color={C.yellow}
            style={{ top: "20%", left: "20%", opacity: 0.6 }}
          />
          <Bubble
            size={40}
            color={C.pink}
            style={{
              bottom: "25%",
              right: "30%",
              opacity: 0.5,
            }}
          />

          {/* Star decorations */}
          {["✦", "✧", "⋆", "✦"].map((s, i) => (
            <div
              key={i}
              aria-hidden
              style={{
                position: "absolute",
                fontSize: [
                  "1.2rem",
                  "0.8rem",
                  "1.5rem",
                  "1rem",
                ][i],
                color: [C.purple, C.cyan, C.pink, C.yellow][i],
                opacity: 0.5,
                top: ["15%", "65%", "30%", "80%"][i],
                left: ["75%", "12%", "55%", "68%"][i],
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* メインコンテンツ (z-indexを上げる) */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 700,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `linear-gradient(135deg, rgba(196,90,255,0.12), rgba(255,110,180,0.12))`,
              border: `1.5px solid rgba(196,90,255,0.3)`,
              borderRadius: 999,
              padding: "5px 14px",
              marginBottom: 24,
              backdropFilter: "blur(4px)",
            }}
          >
            <span style={{ fontSize: "0.75rem" }}>🎨</span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                color: C.purple,
                fontWeight: 500,
              }}
            >
              Vtuber & Anime Illustrator
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: "clamp(3.2rem,10vw,6.5rem)",
                display: "block",
                background: `linear-gradient(135deg, ${C.purple} 0%, ${C.pink} 60%, ${C.yellow} 100%)`,
                WebkitTextStroke: "2px #ffffff",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              青筆
            </span>
            <span
              style={{
                fontSize: "clamp(0.9rem,2.5vw,1.3rem)",
                color: C.muted,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Aofude Illustration
            </span>
          </h1>

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: C.muted,
              maxWidth: 420,
              letterSpacing: "0.04em",
              marginBottom: 36,
              textShadow:
                "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
            }}
          >
            VTuber・アニメ系イラストを中心に活動中のイラストレーターです
            <br />
            Clip Studio Paint
            でデジタルイラストを制作しています！
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.88rem",
                padding: "12px 28px",
                borderRadius: 999,
                textDecoration: "none",
                letterSpacing: "0.04em",
                boxShadow: `0 6px 24px rgba(196,90,255,0.4)`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 10px 28px rgba(196,90,255,0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = `0 6px 24px rgba(196,90,255,0.4)`;
              }}
            >
              作品を見る
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background:
                  "rgba(253,246,255,0.8)" /* 半透明の背景を追加し視認性を向上 */,
                color: C.purple,
                fontWeight: 800,
                fontSize: "0.88rem",
                padding: "11px 28px",
                borderRadius: 999,
                textDecoration: "none",
                letterSpacing: "0.04em",
                border: `2px solid ${C.purple}`,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.purple;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(253,246,255,0.8)";
                e.currentTarget.style.color = C.purple;
              }}
            >
              ✨ ご依頼はこちら
            </a>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section
        id="gallery"
        style={{ padding: "80px 2rem", position: "relative" }}
      >
        <Bubble
          size={300}
          color="rgba(90,240,232,0.07)"
          style={{ top: 0, right: -100 }}
        />

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `linear-gradient(135deg, rgba(90,240,232,0.15), rgba(196,90,255,0.15))`,
              border: `1.5px solid rgba(196,90,255,0.25)`,
              borderRadius: 999,
              padding: "4px 14px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                color: C.purple,
              }}
            >
              GALLERY
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem,5vw,2.8rem)",
              color: C.dark,
            }}
          >
            作品ギャラリー
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "0.85rem",
              marginTop: 8,
            }}
          >
            全 {workCount} 作品
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobileGallery
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: isMobileGallery ? 10 : 16,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {ARTWORKS.map((work) => {
            const isWideInCurrentLayout = isMobileGallery
              ? Boolean(landscapeById[work.id])
              : work.wide;

            return (
              <div
                key={work.id}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  aspectRatio: isWideInCurrentLayout
                    ? "16/9"
                    : "3/4",
                  gridColumn: isWideInCurrentLayout
                    ? "span 2"
                    : "span 1",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow:
                    hoveredId === work.id
                      ? `0 12px 40px rgba(196,90,255,0.3)`
                      : `0 4px 20px rgba(196,90,255,0.1)`,
                  transform:
                    hoveredId === work.id
                      ? "translateY(-4px) scale(1.01)"
                      : "none",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  border: `2px solid ${hoveredId === work.id ? C.purple : C.border}`,
                }}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() =>
                  setLightboxIndex(
                    ARTWORKS.findIndex((a) => a.id === work.id),
                  )
                }
              >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transition:
                    "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform:
                    hoveredId === work.id
                      ? "scale(1.05)"
                      : "scale(1)",
                }}
              >
                {work.image ? (
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <PlaceholderImage id={work.id} />
                )}
              </div>

              {/* Hover info */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(45,31,61,0.85) 0%, transparent 55%)",
                  opacity: hoveredId === work.id ? 1 : 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 16,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontWeight: 900,
                    fontSize: "1rem",
                    color: "#fff",
                    marginBottom: 6,
                  }}
                >
                  {work.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                  }}
                >
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `rgba(196,90,255,0.7)`,
                        color: "#fff",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: 999,
                        letterSpacing: "0.06em",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ID badge */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.5rem",
                  background: "rgba(255,255,255,0.7)",
                  color: C.muted,
                  padding: "2px 7px",
                  borderRadius: 999,
                }}
              >
                {work.id}
              </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        id="about"
        style={{ padding: "80px 2rem", position: "relative" }}
      >
        <Bubble
          size={260}
          color="rgba(255,229,102,0.15)"
          style={{ bottom: 40, left: -60 }}
        />

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Section title */}
          <div
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: `rgba(255,110,180,0.12)`,
                border: `1.5px solid rgba(255,110,180,0.3)`,
                borderRadius: 999,
                padding: "4px 14px",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: C.pink,
                }}
              >
                PROFILE
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem,5vw,2.8rem)",
                color: C.dark,
              }}
            >
              青筆について
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: 32,
              gridTemplateColumns: "minmax(0,1fr)",
            }}
            className="md:grid-cols-2"
          >
            {/* Portrait card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: `2px solid ${C.border}`,
                overflow: "hidden",
                position: "relative",
                minHeight: 300,
                boxShadow: `0 4px 24px rgba(196,90,255,0.1)`,
                display: "flex",
                alignItems: "center",
                padding: "32px",
                gap: "24px",
              }}
            >
              {/* アイコン領域 */}
              <div
                style={{
                  flexShrink: 0,
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #fdf6ff 0%, #ffffff 100%)",
                  border: `2px dashed ${C.purple}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ fontSize: "2rem", marginBottom: 4 }}
                >
                  🎨
                </div>
                <div
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontWeight: 900,
                    color: C.muted,
                    fontSize: "0.65rem",
                  }}
                >
                  鋭意制作中！
                </div>
              </div>

              {/* 自己紹介文領域 */}
              <div style={{ flex: 1, zIndex: 1 }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: C.dark,
                  }}
                >
                  はじめまして、青筆です
                  <br />
                  楽しく絵を描いています
                  <br />
                  キャラクターメインで描いています。背景も描けるよう練習中です
                  <br />
                  アイコンは鋭意制作中・・・
                </p>
              </div>

              {/* Decorative corner */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  background: `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
                  borderRadius: 12,
                  padding: "6px 14px",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                }}
              >
                青筆
              </div>
            </div>

            {/* Info card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: `2px solid ${C.border}`,
                padding: "32px 28px",
                boxShadow: `0 4px 24px rgba(196,90,255,0.08)`,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 2.1,
                  color: C.dark,
                  fontWeight: 500,
                }}
              >
                イラストを描くことが好きです。いつでもご依頼待っております。
              </p>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  {
                    icon: "🖼️",
                    num: `${workCount}+`,
                    label: "作品数",
                  },
                  {
                    icon: "📅",
                    num: "3年以上",
                    label: "活動年数",
                  },
                  {
                    icon: "💻",
                    num: "デジタル",
                    label: "制作スタイル",
                  },
                  {
                    icon: "🖊️",
                    num: "Clip Studio Paint",
                    label: "使用ソフト",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: `linear-gradient(135deg, rgba(196,90,255,0.07), rgba(255,110,180,0.07))`,
                      borderRadius: 14,
                      padding: "14px 16px",
                      border: `1.5px solid rgba(196,90,255,0.15)`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.3rem",
                        marginBottom: 4,
                      }}
                    >
                      {stat.icon}
                    </div>
                    <div
                      style={{
                        fontFamily:
                          "'Zen Maru Gothic', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        color: C.purple,
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.58rem",
                        color: C.muted,
                        letterSpacing: "0.1em",
                        marginTop: 2,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tool badge */}
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: C.muted,
                    marginBottom: 10,
                  }}
                >
                  使用ソフト
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    padding: "7px 16px",
                    borderRadius: 999,
                    boxShadow: `0 4px 14px rgba(196,90,255,0.3)`,
                  }}
                >
                  🖊️ Clip Studio Paint
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICE ===== */}
      <PriceSection />

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        style={{
          padding: "80px 2rem 100px",
          position: "relative",
        }}
      >
        <Bubble
          size={300}
          color="rgba(196,90,255,0.07)"
          style={{ top: -60, right: -80 }}
        />

        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: `rgba(255,229,102,0.25)`,
                border: `1.5px solid rgba(255,200,50,0.4)`,
                borderRadius: 999,
                padding: "4px 14px",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: "#b88a00",
                }}
              >
                CONTACT
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem,5vw,2.8rem)",
                color: C.dark,
              }}
            >
              ご依頼・お問い合わせ 📩
            </h2>
            <p
              style={{
                color: C.muted,
                fontSize: "0.85rem",
                marginTop: 10,
                lineHeight: 1.8,
              }}
            >
              お仕事のご依頼はお気軽にどうぞ！
              <br />
              いつでもお待ちしております✨
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {CONTACT_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.href.startsWith("mailto")
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fff",
                  border: `2px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "16px 20px",
                  textDecoration: "none",
                  boxShadow: `0 2px 12px rgba(196,90,255,0.07)`,
                  transition:
                    "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(196,90,255,0.2)`;
                  e.currentTarget.style.borderColor = C.purple;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = `0 2px 12px rgba(196,90,255,0.07)`;
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      color: C.purple,
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: C.dark,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
                <span
                  style={{
                    color: C.purple,
                    fontSize: "1.1rem",
                    opacity: 0.7,
                  }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          borderTop: `2px solid ${C.border}`,
          padding: "24px 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          background: "#fff",
        }}
      >
        <span
          style={{
            fontFamily: "'Zen Maru Gothic', sans-serif",
            fontWeight: 900,
            fontSize: "1.1rem",
            color: C.dark,
          }}
        >
          青筆
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.16em",
            color: C.muted,
          }}
        >
          © 2026 Aofude Illustration. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

function PriceCard({
  item,
  lang,
}: {
  item: PriceItem;
  lang: "ja" | "en";
}) {
  const [open, setOpen] = useState(false);
  const isNegotiable = !item.options;
  const title = lang === "ja" ? item.title_ja : item.title_en;
  const amount =
    lang === "ja" ? item.amount_ja : item.amount_en;
  const note = lang === "ja" ? item.note_ja : item.note_en;
  const desc = lang === "ja" ? item.desc_ja : item.desc_en;

  return (
    <div
      style={{
        background: "#fff",
        border: `2px solid ${isNegotiable ? "rgba(255,200,50,0.45)" : C.border}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: `0 4px 20px rgba(196,90,255,0.08)`,
      }}
    >
      <button
        onClick={() => !isNegotiable && setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: isNegotiable ? "default" : "pointer",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              fontSize: "1rem",
              color: C.dark,
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              fontSize: "1.25rem",
              background: isNegotiable
                ? `linear-gradient(135deg, #c9a200, #e8c000)`
                : `linear-gradient(135deg, ${C.purple}, ${C.pink})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {amount}
          </span>
        </div>
        {!isNegotiable && (
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: `rgba(196,90,255,0.1)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.purple,
              fontSize: "0.85rem",
              flexShrink: 0,
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.25s",
            }}
          >
            ▾
          </span>
        )}
      </button>

      {isNegotiable && desc && (
        <p
          style={{
            padding: "0 24px 20px",
            fontSize: "0.82rem",
            lineHeight: 1.85,
            color: C.muted,
            letterSpacing: "0.03em",
          }}
        >
          {desc}
        </p>
      )}

      {!isNegotiable && open && item.options && (
        <div style={{ borderTop: `1.5px solid ${C.border}` }}>
          {note && (
            <p
              style={{
                padding: "12px 24px 6px",
                fontSize: "0.7rem",
                color: C.muted,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              {note}
            </p>
          )}
          {item.options.map((opt, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "13px 24px",
                borderBottom:
                  i < item.options!.length - 1
                    ? `1px solid rgba(196,90,255,0.08)`
                    : "none",
                background:
                  i % 2 === 0
                    ? "transparent"
                    : "rgba(196,90,255,0.02)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: C.dark,
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {lang === "ja" ? opt.label_ja : opt.label_en}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                  color: C.purple,
                  whiteSpace: "nowrap",
                  background: "rgba(196,90,255,0.08)",
                  padding: "3px 10px",
                  borderRadius: 999,
                }}
              >
                {lang === "ja" ? opt.price_ja : opt.price_en}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PriceSection() {
  const [lang, setLang] = useState<"ja" | "en">("ja");

  return (
    <section
      id="price"
      style={{ padding: "80px 2rem", position: "relative" }}
    >
      <Bubble
        size={280}
        color="rgba(255,229,102,0.12)"
        style={{ top: 20, left: -80 }}
      />
      <Bubble
        size={180}
        color="rgba(90,240,232,0.1)"
        style={{ bottom: 40, right: -60 }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `rgba(255,229,102,0.22)`,
              border: `1.5px solid rgba(255,200,50,0.4)`,
              borderRadius: 999,
              padding: "4px 14px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                color: "#b88a00",
              }}
            >
              PRICE LIST
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem,5vw,2.8rem)",
              color: C.dark,
            }}
          >
            料金表 💰
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "0.82rem",
              marginTop: 8,
              lineHeight: 1.8,
            }}
          >
            各メニューをクリックすると詳細オプションが表示されます
          </p>

          {/* Language toggle */}
          <div
            style={{
              display: "inline-flex",
              marginTop: 20,
              borderRadius: 999,
              overflow: "hidden",
              border: `2px solid ${C.border}`,
            }}
          >
            {(["ja", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "6px 20px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  background:
                    lang === l
                      ? `linear-gradient(135deg, ${C.purple}, ${C.pink})`
                      : "transparent",
                  color: lang === l ? "#fff" : C.muted,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {l === "ja" ? "日本語" : "English"}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {PRICE_ITEMS.map((item) => (
            <PriceCard
              key={item.title_ja}
              item={item}
              lang={lang}
            />
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 28,
            fontSize: "0.75rem",
            color: C.muted,
            lineHeight: 1.8,
          }}
        >
          {lang === "ja"
            ? "料金はすべて税込表示です。納期・ラフ修正回数などはご相談ください。"
            : "All prices are tax-inclusive. Please contact me to discuss deadlines and revision rounds."}
        </p>
      </div>
    </section>
  );
}