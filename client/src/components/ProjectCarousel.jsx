// ProjectCarousel.jsx
// Curved thumbnail carousel for "Technical Consultancy & Advisory Support" -> Projects section.
// Behavior:
//   1st click on a thumbnail  -> makes it active, shows the project title only.
//   2nd click on the SAME (already active) thumbnail -> navigates to that project's page.
//
// LOGO SWAP: for projects that have a brand logo (TNWC, Lemon Value Chain,
// Agro Food Supply, Carrot Value Chain), `image` and `buttonImage` now point
// to the logo file instead of the site photo — the logo IS the hero image
// for these cards. Projects without a logo keep their original site photo.

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ---------------------------------------------------------------------------
// 1. PROJECT DATA — titles pulled from the Technical Consultancy PDF.
// ---------------------------------------------------------------------------
export const PROJECTS = [
    {
        slug: "tamil-nadu-warehousing-corporation",
        label: "Tamil Nadu Warehousing Corporation",
        image: "/images/projects/logos/tnwc-logo.jpeg",
        buttonImage: "/images/projects/logos/tnwc-logo.jpeg",
    },
    {
        slug: "lemon-value-chain",
        label: "Lemon Value Chain",
        image: "/images/projects/logos/lemon-value-chain-logo.png",
        buttonImage: "/images/projects/logos/lemon-value-chain-logo.png",
    },
    {
        slug: "agro-food-supply",
        label: "Agro Food Supply",
        image: "/images/projects/logos/agro-food-supply-logo.png",
        buttonImage: "/images/projects/logos/agro-food-supply-logo.png",
    },
    {
        slug: "carrot-value-chain",
        label: "Carrot Value Chain",
        image: "/images/projects/logos/carrot-value-chain-logo.png",
        buttonImage: "/images/projects/logos/carrot-value-chain-logo.png",
    },
];

const srcOf = (v) => (typeof v === "string" ? v : v?.src || "");

function modIdx(i, n) {
    return ((i % n) + n) % n;
}

function easeCubicInOut(p) {
    return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
}

export default function ProjectCarousel({
    items = PROJECTS,
    cardRadius = 0,
    imageWidth = 320,
    imageHeight = 320,
    buttonCount = 4,
    buttonSize = 46,
    buttonRadius = 23,
    curve = 5,
    gap = 26,
    labelShow = true,
    labelX = 0,
    labelY = 0,
    labelColor = "#1f2933",
    labelFont = {
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: 22,
        lineHeight: "1.3em",
        letterSpacing: "0em",
    },
    backgroundColor = "rgba(255, 255, 255, 0)",
    hint = "Tap again to open this project",
    style,
}) {
    const navigate = useNavigate();
    const location = useLocation();

    const list = items?.length ? items : PROJECTS;
    const M = list.length;

    const posRef = useRef(0);
    const [posDisplay, setPosDisplay] = useState(0);
    const rafRef = useRef(null);
    const animRef = useRef({ startPos: 0, targetPos: 0, startTime: 0 });
    const [dir, setDir] = useState(1);

    const [confirmed, setConfirmed] = useState(false);

    const [naturalSizes, setNaturalSizes] = useState({});

    useEffect(() => {
        let cancelled = false;

        list.forEach((item) => {
            const src = srcOf(item.image);

            if (!src) return;

            const img = new window.Image();

            img.onload = () => {
                if (cancelled) return;

                setNaturalSizes((prev) => {
                    if (prev[src]) return prev;

                    return {
                        ...prev,
                        [src]: {
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    };
                });
            };

            img.src = src;
        });

        return () => {
            cancelled = true;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const active = modIdx(Math.round(posDisplay), M);
    const activeSrc = srcOf(list[active]?.image);

    const imgBox = useMemo(() => {
        const natural = naturalSizes[activeSrc];

        if (!natural || !natural.width || !natural.height) {
            return {
                width: imageWidth,
                height: imageHeight,
            };
        }

        const scale = Math.min(
            imageWidth / natural.width,
            imageHeight / natural.height
        );

        return {
            width: Math.round(natural.width * scale),
            height: Math.round(natural.height * scale),
        };
    }, [naturalSizes, activeSrc, imageWidth, imageHeight]);

    const half = Math.floor(
        Math.min(Math.max(1, buttonCount), M) / 2
    );

    const buffer = half + 1;

    const cardRadiusPx =
        (Math.max(0, Math.min(20, cardRadius)) / 20) *
        (Math.min(imageWidth, imageHeight) / 2);

    const buttonRadiusPx =
        (Math.max(0, Math.min(20, buttonRadius)) / 20) *
        (buttonSize / 2);

    const t = Math.max(0.0001, Math.min(10, curve) / 10);

    const step = buttonSize + gap;

    const dPsi = ((Math.PI * 2) / M) * t;

    const R = step / (2 * Math.sin(dPsi / 2));

    const baseTop = buttonSize * 0.9;

    const fadeInner = Math.max(0, half - 0.4);

    const fadeEnd = half + 0.6;

    const maxPsi = Math.min(Math.PI, fadeEnd * dPsi);

    const stripHeight =
        baseTop +
        R * (1 - Math.cos(maxPsi)) +
        buttonSize / 2 +
        16;

    const goToProject = useCallback(
        (item) => {
            if (!item?.slug) return;

            navigate(`/projects/${item.slug}`, {
                state: {
                    returnTo: `${location.pathname}${location.search}${location.hash}`,
                    returnScrollY: window.scrollY,
                },
            });
        },
        [navigate, location.hash, location.pathname, location.search]
    );

    const select = useCallback(
        (itemIdx) => {
            const currentActive = modIdx(
                Math.round(posRef.current),
                M
            );

            if (itemIdx === currentActive) return;

            let delta =
                itemIdx - Math.round(posRef.current);

            delta = ((delta % M) + M) % M;

            if (delta > M / 2) delta -= M;

            setDir(Math.sign(delta));
            setConfirmed(false);

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            animRef.current = {
                startPos: posRef.current,
                targetPos: posRef.current + delta,
                startTime: performance.now(),
            };

            const DURATION = 320;

            function tick(now) {
                const {
                    startPos,
                    targetPos,
                    startTime,
                } = animRef.current;

                const progress = Math.min(
                    1,
                    (now - startTime) / DURATION
                );

                posRef.current =
                    startPos +
                    (targetPos - startPos) *
                        easeCubicInOut(progress);

                setPosDisplay(posRef.current);

                if (progress < 1) {
                    rafRef.current =
                        requestAnimationFrame(tick);
                } else {
                    posRef.current = targetPos;
                    setPosDisplay(targetPos);
                    rafRef.current = null;
                }
            }

            rafRef.current = requestAnimationFrame(tick);
        },
        [M]
    );

    const handleThumbClick = useCallback(
        (itemIdx) => {
            if (itemIdx === active) {
                if (confirmed) {
                    goToProject(list[itemIdx]);
                } else {
                    setConfirmed(true);
                }
            } else {
                select(itemIdx);
            }
        },
        [active, confirmed, select, goToProject, list]
    );

    useEffect(() => {
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const center = Math.round(posDisplay);

    const renderItems = [];

    const seen = new Set();

    for (let s = -buffer; s <= buffer; s++) {
        const idx = modIdx(center + s, M);

        if (!seen.has(idx)) {
            seen.add(idx);
            renderItems.push(idx);
        }
    }

    function getVisualSlot(itemIdx) {
        let slot = itemIdx - posDisplay;

        slot = slot % M;

        if (slot > M / 2) slot -= M;

        if (slot < -M / 2) slot += M;

        return slot;
    }

    function slotStyle(slot) {
        const angle = slot * dPsi;

        const x = R * Math.sin(angle);

        const y = R * (1 - Math.cos(angle));

        const deg = (angle * 180) / Math.PI;

        const absSlot = Math.abs(slot);

        const depth = Math.max(
            0,
            1 - (0.55 * absSlot) / Math.max(1, half)
        );

        const scale = 0.55 + 0.45 * depth;

        const opacity =
            absSlot <= fadeInner
                ? 1
                : absSlot >= fadeEnd
                ? 0
                : 1 -
                  (absSlot - fadeInner) /
                      (fadeEnd - fadeInner);

        const zIndex =
            Math.round(depth * 100) +
            (absSlot < 0.5 ? 100 : 0);

        return {
            x,
            y,
            deg,
            scale,
            opacity,
            zIndex,
        };
    }

    const imgSweep = 260;
    const imgDip = 150;

    const imageVariants = {
        enter: (d) => ({
            x: d * imgSweep,
            y: imgDip,
            opacity: 0,
            scale: 0.82,
            rotate: d * 8,
        }),

        center: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
        },

        exit: (d) => ({
            x: -d * imgSweep,
            y: imgDip,
            opacity: 0,
            scale: 0.82,
            rotate: -d * 8,
        }),
    };

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                overflow: "hidden",
                boxSizing: "border-box",
                background: backgroundColor,
                ...style,
            }}
        >
            {/* Main image, click to confirm / navigate — glassmorphic frame */}
            <div
                style={{
                    padding: 10,
                    borderRadius: cardRadiusPx + 10,
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: confirmed
                        ? "1px solid rgba(37, 99, 235, 0.55)"
                        : "1px solid rgba(255, 255, 255, 0.45)",
                    boxShadow: confirmed
                        ? "0 8px 32px rgba(37, 99, 235, 0.28), 0 0 0 3px rgba(37, 99, 235, 0.25)"
                        : "0 8px 32px rgba(31, 38, 135, 0.15)",
                    transition:
                        "border 0.35s ease, box-shadow 0.35s ease",
                    flex: "0 0 auto",
                }}
            >
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleThumbClick(active)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleThumbClick(active);
                        }
                    }}
                    style={{
                        position: "relative",
                        width: imgBox.width,
                        height: imgBox.height,
                        borderRadius: cardRadiusPx,
                        overflow: "hidden",
                        background: backgroundColor,
                        cursor: "pointer",
                        outline: "none",
                        transition:
                            "width 0.3s ease, height 0.3s ease",
                    }}
                >
                    <AnimatePresence
                        mode="popLayout"
                        initial={false}
                        custom={dir}
                    >
                        <motion.div
                            key={active}
                            custom={dir}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: backgroundColor,
                            }}
                        >
                            {srcOf(list[active]?.image) && (
                                <img
                                    src={srcOf(list[active]?.image)}
                                    alt={list[active]?.label || ""}
                                    draggable={false}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Glass sheen overlay — subtle diagonal highlight */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0) 60%)",
                            opacity: confirmed ? 1 : 0.6,
                            transition: "opacity 0.35s ease",
                        }}
                    />
                </div>
            </div>

            {/* Title + hint */}
            {labelShow && (
                <AnimatePresence
                    mode="popLayout"
                    initial={false}
                >
                    <motion.div
                        key={`label-${active}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            flex: "0 0 auto",
                            maxWidth: "100%",
                            textAlign: "center",
                            color: labelColor,
                            transform: `translate(${labelX}px, ${labelY}px)`,
                            fontFamily: labelFont?.fontFamily,
                            fontWeight: labelFont?.fontWeight,
                            fontSize: labelFont?.fontSize,
                            fontStyle: labelFont?.fontStyle,
                            letterSpacing: labelFont?.letterSpacing,
                            lineHeight: labelFont?.lineHeight,
                        }}
                    >
                        <div>{list[active]?.label ?? ""}</div>

                        {confirmed && hint && (
                            <div
                                style={{
                                    marginTop: 6,
                                    fontSize: 13,
                                    fontWeight: 400,
                                    opacity: 0.65,
                                }}
                            >
                                {hint}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Curved thumbnail strip */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: stripHeight,
                    overflow: "hidden",
                    flex: "0 0 auto",
                }}
            >
                {renderItems.map((itemIdx) => {
                    const slot = getVisualSlot(itemIdx);

                    const {
                        x,
                        y,
                        deg,
                        scale,
                        opacity,
                        zIndex,
                    } = slotStyle(slot);

                    const isActive = itemIdx === active;

                    const item = list[itemIdx];

                    return (
                        <div
                            key={itemIdx}
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: baseTop,
                                marginLeft: -buttonSize / 2,
                                marginTop: -buttonSize / 2,
                                width: buttonSize,
                                height: buttonSize,
                                transform: `translate(${x}px, ${y}px) rotate(${deg}deg) scale(${scale})`,
                                transformOrigin: "center",
                                opacity,
                                zIndex,
                                willChange:
                                    "transform, opacity",
                            }}
                        >
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label={
                                    isActive && confirmed
                                        ? `Open ${item?.label}`
                                        : `Show ${item?.label}`
                                }
                                onClick={() =>
                                    handleThumbClick(itemIdx)
                                }
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                    ) {
                                        e.preventDefault();
                                        handleThumbClick(itemIdx);
                                    }
                                }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: buttonRadiusPx,
                                    overflow: "hidden",
                                    position: "relative",
                                    transform: `rotate(${-deg}deg)`,
                                    transformOrigin: "center",
                                    background: isActive
                                        ? "rgba(255,255,255,0.65)"
                                        : "rgba(255,255,255,0.55)",
                                    backdropFilter: "blur(6px)",
                                    WebkitBackdropFilter:
                                        "blur(6px)",
                                    boxShadow:
                                        isActive && confirmed
                                            ? "0 4px 16px rgba(37,99,235,0.35), 0 0 0 2px rgba(37,99,235,0.55)"
                                            : isActive
                                            ? "0 4px 14px rgba(31,38,135,0.2), 0 0 0 1px rgba(255,255,255,0.6)"
                                            : "0 1px 4px rgba(0,0,0,0.15)",
                                    cursor: "pointer",
                                    WebkitTapHighlightColor:
                                        "transparent",
                                    outline: "none",
                                }}
                            >
                                {srcOf(item?.buttonImage) && (
                                    <img
                                        src={srcOf(
                                            item?.buttonImage
                                        )}
                                        alt=""
                                        draggable={false}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}