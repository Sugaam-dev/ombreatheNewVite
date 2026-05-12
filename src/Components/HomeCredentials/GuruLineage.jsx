

import { useState, useLayoutEffect, useEffect, useRef } from "react";
import SectionHeading from "../useFullComponent/SectionHeading";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const GURUS = [
  {
    id: "g0", name: "Adi Yogi Shiva",
    era: "The Origin", role: "First Yogi", symbol: "AY",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop&crop=face",
    detail: "Over 15,000 years ago Adi Yogi transmitted the complete science of yoga to the seven sages at Kantisarovar lake — the primordial source of all yogic knowledge.",
    parents: [],
  },
  {
    id: "g1", name: "The Saptarishis",
    era: "Vedic Era", role: "Seven Sages", symbol: "SR",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=200&h=200&fit=crop&crop=face",
    detail: "The seven sages chosen by Adi Yogi to carry different dimensions of yoga across the world, each representing a unique method of inner knowing.",
    parents: ["g0"],
  },
  {
    id: "g2", name: "Agastya Muni",
    era: "Vedic Era", role: "Siddha Master", symbol: "AM",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face",
    detail: "One of the Saptarishis who carried yogic knowledge to the southern subcontinent. Regarded as the father of Tamil literature and Siddha medicine.",
    parents: ["g0"],
  },
  {
    id: "g3", name: "Maharishi Patanjali",
    era: "Classical Era", role: "Yoga Sutras", symbol: "MP",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    detail: "Codified all classical yoga into 196 sutras forming the philosophical bedrock of Ashtanga yoga. His work remains the definitive text on yogic philosophy.",
    parents: ["g1"],
  },
  {
    id: "g4", name: "Tirumular",
    era: "Siddha Lineage", role: "Tamil Mystic", symbol: "TM",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
    detail: "A disciple of Agastya Muni who composed 3,000 verses in the Tirumantiram, synthesising Shaivism and yoga into a comprehensive spiritual guide.",
    parents: ["g2"],
  },
  {
    id: "g5", name: "Adi Shankaracharya",
    era: "8th Century CE", role: "Advaita Vedanta", symbol: "AS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    detail: "Consolidated Advaita Vedanta and established four sacred mathas across India. Revived Vedic learning at a critical turning point in Indian history.",
    parents: ["g3"],
  },
  {
    id: "g6", name: "T. Krishnamacharya",
    era: "20th Century", role: "Father of Modern Yoga", symbol: "TK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    detail: "Called the Father of Modern Yoga. His students — B.K.S. Iyengar, K. Pattabhi Jois and T.K.V. Desikachar — shaped every major tradition practiced today.",
    parents: ["g3", "g4"],
  },
  {
    id: "g7", name: "Swami Vivekananda",
    era: "1863 – 1902", role: "Global Ambassador", symbol: "SV",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    detail: "Disciple of Sri Ramakrishna. His 1893 Parliament of Religions speech in Chicago introduced yoga and Vedanta to the Western world. Founded the Ramakrishna Mission.",
    parents: ["g5"],
  },
  {
    id: "g8", name: "B.K.S. Iyengar",
    era: "1918 – 2014", role: "Iyengar Yoga", symbol: "BI",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    detail: "Student of Krishnamacharya. Developed Iyengar yoga with emphasis on precision, alignment and therapeutic props. Author of the landmark book 'Light on Yoga.'",
    parents: ["g6"],
  },
  {
    id: "g9", name: "K. Pattabhi Jois",
    era: "1915 – 2009", role: "Ashtanga Vinyasa", symbol: "PJ",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    detail: "Student of Krishnamacharya. Founded the Ashtanga Vinyasa system — a dynamic breath-synchronised series. His Mysore-style teaching influenced modern yoga globally.",
    parents: ["g6"],
  },
];

/* rows: max cards in any row = 3 (last row) */
const ROWS = [
  ["g0"],
  ["g1", "g2"],
  ["g3", "g4"],
  ["g5", "g6"],
  ["g7", "g8", "g9"],
];

const byId = Object.fromEntries(GURUS.map((g) => [g.id, g]));

/* ══════════════════════════════════════════
   TOKENS
══════════════════════════════════════════ */
const C = {
  gold:        "#b5862a",
  goldMid:     "#d4a84b",
  goldLight:   "#f0dba8",
  goldBorder:  "rgba(181,134,42,0.28)",
  ink:         "#1c1409",
  inkMid:      "#5a4520",
  inkFaint:    "#9a8060",
  inkLighter:  "#c8b090",
  card:        "#ffffff",
  cardRoot:    "#fffef9",
  shadow:      "rgba(120,80,20,0.08)",
  shadowHover: "rgba(120,80,20,0.16)",
  shadowSel:   "rgba(181,134,42,0.20)",
  line:        "#c9a84c",
};

/* ══════════════════════════════════════════
   HOOK – tracks container width in real time
══════════════════════════════════════════ */
function useContainerWidth(ref) {
  const [width, setWidth] = useState(360);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(ref.current);
    setWidth(ref.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [ref]);
  return width;
}

/* ══════════════════════════════════════════
   CARD SIZING
   Computes card width so the widest row (3 cards)
   always fits inside the container with gaps.
══════════════════════════════════════════ */
function cardMetrics(containerW) {
  const PAGE_PAD  = 32;           // 16px each side
  const avail     = containerW - PAGE_PAD;
  const MAX_COLS  = 3;            // widest row
  const GAP_MIN   = 10;
  const CARD_MAX  = 160;
  const CARD_MIN  = 88;

  // Try to fit MAX_COLS with natural gap
  let gap  = Math.min(24, Math.floor((avail - MAX_COLS * CARD_MAX) / (MAX_COLS - 1)));
  let cardW = CARD_MAX;

  if (gap < GAP_MIN) {
    // Shrink card width so 3 cards + 2 gaps fit
    gap   = GAP_MIN;
    cardW = Math.max(CARD_MIN, Math.floor((avail - (MAX_COLS - 1) * gap) / MAX_COLS));
  }

  const isSmall  = cardW <= 110;
  const avatarSz = isSmall ? 44 : cardW <= 130 ? 52 : 64;

  return { cardW, gap, avatarSz, isSmall };
}

/* ══════════════════════════════════════════
   CARD
══════════════════════════════════════════ */
function Card({ guru, isRoot, isSelected, onClick, nodeRef, cardW, avatarSz, isSmall }) {
  const [hovered, setHovered] = useState(false);

  const cw  = isRoot ? Math.min(cardW * 1.1, cardW + 16) : cardW;
  const asz = isRoot ? Math.min(avatarSz + 10, avatarSz * 1.15) : avatarSz;

  return (
    <div
      ref={nodeRef}
      onClick={() => onClick(guru)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        cursor: "pointer", userSelect: "none",
        position: "relative", zIndex: 2,
        flexShrink: 0,
        width: cw,
      }}
    >
      {/* TOP anchor */}
      <div
        data-anchor="top"
        style={{
          width: 8, height: 8, borderRadius: "50%",
          flexShrink: 0,
          visibility: isRoot ? "hidden" : "visible",
          background: C.goldLight,
          border: `1.5px solid ${C.goldMid}`,
          marginBottom: isRoot ? 0 : 5,
          position: "relative", zIndex: 3,
        }}
      />

      {/* CARD SHELL */}
      <div
        style={{
          width: "100%",
          background: isRoot ? C.cardRoot : C.card,
          border: `1.5px solid ${
            isSelected ? C.gold : hovered ? C.goldMid : C.goldBorder
          }`,
          borderRadius: isSmall ? 14 : 18,
          padding: isSmall
            ? "10px 8px 10px"
            : isRoot
            ? "18px 14px 16px"
            : "13px 11px 12px",
          position: "relative", overflow: "hidden",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isSelected
            ? `0 0 0 2px ${C.shadowSel}, 0 12px 32px ${C.shadowHover}`
            : hovered
            ? `0 8px 24px ${C.shadowHover}`
            : `0 2px 10px ${C.shadow}`,
          transition: "transform 0.26s ease, box-shadow 0.26s ease, border-color 0.2s",
        }}
      >
        {/* top stripe */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: isRoot
            ? `linear-gradient(90deg,${C.gold},${C.goldLight},${C.gold})`
            : `linear-gradient(90deg,transparent,${C.goldBorder},transparent)`,
          borderRadius: `${isSmall ? 14 : 18}px ${isSmall ? 14 : 18}px 0 0`,
        }} />

        {/* avatar */}
        <div style={{
          width: asz, height: asz, borderRadius: "50%",
          background: `linear-gradient(135deg,${C.gold},${C.goldLight},${C.gold})`,
          padding: 2.5,
          margin: `${isSmall ? 4 : 6}px auto ${isSmall ? 8 : 10}px`,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.28s ease",
          flexShrink: 0,
          boxShadow: isRoot
            ? `0 4px 16px rgba(181,134,42,0.30)`
            : `0 2px 8px rgba(181,134,42,0.16)`,
        }}>
          {guru.image ? (
            <img
              src={guru.image}
              alt={guru.name}
              style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "linear-gradient(145deg,#fff8ec,#fdf2d2)",
            display: guru.image ? "none" : "flex",
            alignItems: "center", justifyContent: "center",
            fontFamily: "'Cinzel',serif",
            fontSize: isSmall ? 10 : isRoot ? 17 : 13,
            fontWeight: 700, color: C.gold, letterSpacing: 0.5,
          }}>
            {guru.symbol}
          </div>
        </div>

        {/* era — hide on very small */}
        {!isSmall && (
          <div style={{
            fontFamily: "'Cinzel',serif", fontSize: 7.5,
            letterSpacing: "2px", textTransform: "uppercase",
            color: C.inkLighter, marginBottom: 4, textAlign: "center",
          }}>
            {guru.era}
          </div>
        )}

        {/* name */}
        <div style={{
          fontFamily: "'Cinzel',serif",
          fontSize: isSmall ? 9 : isRoot ? 12.5 : 10.5,
          fontWeight: 600, color: C.ink,
          lineHeight: 1.3, marginBottom: isSmall ? 0 : 5,
          textAlign: "center", letterSpacing: 0.2,
        }}>
          {guru.name}
        </div>

        {/* rule + role — hide on very small */}
        {!isSmall && (
          <>
            <div style={{
              width: 24, height: 1,
              background: `linear-gradient(90deg,transparent,${C.gold},transparent)`,
              margin: "0 auto 5px",
            }} />
            <div style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 10.5, fontStyle: "italic",
              color: C.inkFaint, lineHeight: 1.4, textAlign: "center",
            }}>
              {guru.role}
            </div>
          </>
        )}

        {/* role only (no divider) on small */}
        {isSmall && (
          <div style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 9, fontStyle: "italic",
            color: C.inkFaint, lineHeight: 1.3, textAlign: "center",
            marginTop: 3,
          }}>
            {guru.role}
          </div>
        )}
      </div>

      {/* BOTTOM anchor */}
      <div
        data-anchor="bottom"
        style={{
          width: isRoot ? 10 : 8, height: isRoot ? 10 : 8,
          borderRadius: "50%", flexShrink: 0,
          background: isRoot ? C.gold : C.goldLight,
          border: `1.5px solid ${C.gold}`,
          marginTop: 5,
          position: "relative", zIndex: 3,
          boxShadow: isRoot ? `0 0 10px rgba(181,134,42,0.48)` : "none",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   CONNECTOR SVG  – orthogonal right-angle paths
   Measured from real DOM anchor dots.
══════════════════════════════════════════ */
function Connectors({ treeRef, nodeRefs, redrawKey }) {
  const [segs, setSegs] = useState([]);

  useLayoutEffect(() => {
    function measure() {
      const tree = treeRef.current;
      if (!tree) return;
      const tRect = tree.getBoundingClientRect();
      const result = [];

      GURUS.forEach((guru) => {
        guru.parents.forEach((pid) => {
          const pEl = nodeRefs.current[pid];
          const cEl = nodeRefs.current[guru.id];
          if (!pEl || !cEl) return;

          const pBot = pEl.querySelector("[data-anchor='bottom']");
          const cTop = cEl.querySelector("[data-anchor='top']");
          if (!pBot || !cTop) return;

          const pr = pBot.getBoundingClientRect();
          const cr = cTop.getBoundingClientRect();

          const x1 = pr.left + pr.width  / 2 - tRect.left;
          const y1 = pr.top  + pr.height / 2 - tRect.top;
          const x2 = cr.left + cr.width  / 2 - tRect.left;
          const y2 = cr.top  + cr.height / 2 - tRect.top;

          // midpoint Y for horizontal bridge
          const midY = (y1 + y2) / 2;
          const d = `M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2}`;

          result.push({ key: `${pid}-${guru.id}`, d });
        });
      });

      setSegs(result);
    }

    const t1 = setTimeout(measure, 60);
    const t2 = setTimeout(measure, 350);

    const ro = new ResizeObserver(measure);
    if (treeRef.current) ro.observe(treeRef.current);
    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [treeRef, nodeRefs, redrawKey]);

  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        overflow: "visible", pointerEvents: "none", zIndex: 1,
      }}
    >
      {segs.map((s) => (
        <path
          key={s.key} d={s.d}
          fill="none"
          stroke={C.line}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════
   DETAIL DRAWER
══════════════════════════════════════════ */
function Drawer({ guru, onClose }) {
  if (!guru) return null;
  return (
    <div style={{
      position: "fixed", bottom: 16, left: "50%",
      transform: "translateX(-50%)",
      width: "min(520px, 94vw)",
      background: C.cardRoot,
      border: `1.5px solid ${C.goldBorder}`,
      borderRadius: 16, padding: "18px 18px 16px",
      zIndex: 300,
      boxShadow: `0 20px 70px rgba(100,70,10,0.16), 0 0 0 1px ${C.goldBorder}`,
      animation: "drawerUp 0.24s cubic-bezier(.22,.8,.38,1) both",
    }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{
          width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg,${C.gold},${C.goldLight})`,
          padding: 2.5,
        }}>
          {guru.image ? (
            <img
              src={guru.image}
              alt={guru.name}
              style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "linear-gradient(145deg,#fff8ec,#fdf2d2)",
            display: guru.image ? "none" : "flex",
            alignItems: "center", justifyContent: "center",
            fontFamily: "'Cinzel',serif", fontSize: 13,
            fontWeight: 700, color: C.gold,
          }}>
            {guru.symbol}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Cinzel',serif", fontSize: 8,
            letterSpacing: "2px", textTransform: "uppercase",
            color: C.inkLighter, marginBottom: 3,
          }}>
            {guru.era} · {guru.role}
          </div>
          <div style={{
            fontFamily: "'Cinzel',serif", fontSize: 14,
            fontWeight: 600, color: C.ink, marginBottom: 8,
          }}>
            {guru.name}
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 13.5, fontStyle: "italic",
            color: C.inkMid, lineHeight: 1.75,
          }}>
            {guru.detail}
          </div>
        </div>

        <button onClick={onClose} style={{
          background: "none", border: "none",
          color: C.inkFaint, fontSize: 20,
          cursor: "pointer", padding: "0 2px",
          lineHeight: 1, flexShrink: 0,
        }}>×</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */
export default function GuruLineage() {
  const [selected, setSelected]   = useState(null);
  const pageRef  = useRef(null);
  const treeRef  = useRef(null);
  const nodeRefs = useRef({});

  /* track container width → recompute card sizes */
  const containerW  = useContainerWidth(pageRef);
  const { cardW, gap, avatarSz, isSmall } = cardMetrics(containerW);

  /* bump to force connector redraw when card size changes */
  const redrawKey = `${cardW}-${gap}`;

  const setNodeRef  = (id) => (el) => { nodeRefs.current[id] = el; };
  const handleClick = (guru) =>
    setSelected((p) => (p?.id === guru.id ? null : guru));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Cinzel:wght@400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .gl-page {
          background: transparent;
          padding: 44px 16px 100px;
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          width: 100%;
        }

        .gl-tree {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .gl-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          z-index: 2;
          animation: rowIn 0.42s ease both;
          width: 100%;
        }

        .gl-gap { flex-shrink: 0; }

        @keyframes rowIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawerUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div className="gl-page" ref={pageRef}>

        {/* heading */}
        {/* <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(8px,2vw,10px)",
            letterSpacing: "4px", textTransform: "uppercase",
            color: C.gold, marginBottom: 10,
          }}>
            Sacred Yogic Tradition
          </div>
          <h1 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(20px,5vw,38px)",
            fontWeight: 700, color: C.ink,
            letterSpacing: "2px", lineHeight: 1.2, marginBottom: 12,
          }}>
            Lineage of Gurus
          </h1>
          <div style={{
            width: 70, height: 1.5, margin: "0 auto 12px",
            background: `linear-gradient(90deg,transparent,${C.gold},transparent)`,
          }} />
          <p style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(13px,3vw,15px)", fontStyle: "italic",
            color: C.inkFaint,
          }}>
            The unbroken transmission of wisdom
          </p>
        </div> */}
 <SectionHeading
  title="Sacred Yogic Tradition"
  highlight="Lineage of Gurus"
  subtitle="The unbroken transmission of wisdom"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"/>
        {/* tree */}
        <div className="gl-tree" ref={treeRef}>
          <Connectors treeRef={treeRef} nodeRefs={nodeRefs} redrawKey={redrawKey} />

          {ROWS.map((row, ri) => (
            <div key={ri} style={{ display: "contents" }}>
              <div
                className="gl-row"
                style={{
                  gap,
                  animationDelay: `${ri * 0.06}s`,
                }}
              >
                {row.map((gid) => (
                  <Card
                    key={gid}
                    guru={byId[gid]}
                    isRoot={ri === 0}
                    isSelected={selected?.id === gid}
                    onClick={handleClick}
                    nodeRef={setNodeRef(gid)}
                    cardW={cardW}
                    avatarSz={avatarSz}
                    isSmall={isSmall}
                  />
                ))}
              </div>
              {ri < ROWS.length - 1 && (
                <div className="gl-gap" style={{ height: isSmall ? 36 : 48 }} />
              )}
            </div>
          ))}
        </div>

        {/* legend */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 20, marginTop: 44, flexWrap: "wrap",
        }}>
          {[
            {
              label: "Origin source",
              icon: <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: C.gold, boxShadow: `0 0 7px rgba(181,134,42,0.5)`,
              }} />,
            },
            {
              label: "Lineage",
              icon: <div style={{
                width: 22, height: 1.5, borderRadius: 2,
                background: C.line, opacity: 0.6,
              }} />,
            },
            {
              label: "Tap to explore",
              icon: <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: C.goldLight, border: `1.5px solid ${C.gold}`,
              }} />,
            },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 7,
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(7px,1.8vw,9px)",
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: C.inkFaint,
            }}>
              {item.icon}{item.label}
            </div>
          ))}
        </div>
      </div>

      <Drawer guru={selected} onClose={() => setSelected(null)} />
    </>
  );
}