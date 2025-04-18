"use client";

import { motion } from "@/lib/motion-wrapper";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";

// Add TypeScript declaration for Vimeo
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

// Video url and disable controls
const videoUrl =
  "https://player.vimeo.com/video/1076686047?background=1&autopause=0&byline=0&title=0&portrait=0";
const fadeCursorAfter = 750;

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControl, setShowControl] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load Vimeo Player API
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.onload = () => initializePlayer();
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const initializePlayer = () => {
    if (!iframeRef.current || !window.Vimeo) return;

    // Create player
    playerRef.current = new window.Vimeo.Player(iframeRef.current);

    // Add event listeners
    playerRef.current.on("play", () => {
      setIsPlaying(true);
      startControlTimeout();
    });

    playerRef.current.on("pause", () => {
      setIsPlaying(false);
      setShowControl(true);
    });
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
      // Show control briefly then fade
      setShowControl(true);
      startControlTimeout();
    }
  };

  const startControlTimeout = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to hide controls after 2 seconds
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControl(false);
      }
    }, fadeCursorAfter);
  };

  const handleMouseMove = () => {
    setShowControl(true);
    if (isPlaying) {
      startControlTimeout();
    }
  };

  return (
    <div
      className="relative pt-[56%] w-full"
      onClick={togglePlay}
      onMouseMove={handleMouseMove}
    >
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full h-full"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{ pointerEvents: "none" }}
      ></iframe>

      {/* Play button overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControl ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          className="w-14 h-14 text-white/75"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {isPlaying ? (
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </div>
    </div>
  );
}

export function VideoSection() {
  const { t } = useTranslation("common");

  return (
    <section
      id="video-section"
      className="section-padding bg-crabbio-secondary relative"
    >
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-crabbio-cream mb-4">{t("video.title")}</h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-xl bg-crabbio-blue/30 backdrop-blur-sm "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VideoPlayer />
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-crabbio-light text-sm">{t("video.description")}</p>
        </motion.div>
      </div>
    </section>
  );
}
