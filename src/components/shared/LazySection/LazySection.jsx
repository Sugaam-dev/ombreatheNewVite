import {
  Suspense,
  useEffect,
  useRef,
  useState,
  memo,
} from "react";

const Loader = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    Loading...
  </div>
);

const LazySection = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {visible && (
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

export default memo(LazySection);