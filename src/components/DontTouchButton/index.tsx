"use client";
import { useRef } from "react";
import styles from "./index.module.css";
import CustomCursor from "./cursor.png";
import CursorHandle1 from "./img1.png";
import CursorHandle2 from "./img2.png";
import Image from "next/image";

type DontTouchButtonProps = {
  children: React.ReactNode;
};

const DontTouchButton: React.FC<DontTouchButtonProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const duration = 4000;
    if (
      !containerRef.current ||
      containerRef.current.classList.contains(styles.hideCursorDeep)
    )
      return;

    containerRef.current.classList.add(styles.hideCursorDeep);
    document.body.style.cursor = "none";

    setTimeout(() => {
      if (!containerRef.current) return;
      containerRef.current.classList.add(styles.cursorHandle2Move);
    }, duration / 2);

    setTimeout(() => {
      if (!containerRef.current) return;
      document.body.style.cursor = "auto";
      containerRef.current.classList.remove(
        styles.hideCursorDeep,
        styles.cursorHandle2Move
      );
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      className={styles.dontContainer}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      <div className={styles.customCursor}>
        <Image src={CustomCursor} alt="Custom Cursor" />
      </div>
      <div className={styles.cursorHandle1}>
        <Image src={CursorHandle1} alt="Cursor Handle 1" />
      </div>
      <div className={styles.cursorHandle2}>
        <Image src={CursorHandle2} alt="Cursor Handle 2" />
      </div>
    </div>
  );
};

export default DontTouchButton;
