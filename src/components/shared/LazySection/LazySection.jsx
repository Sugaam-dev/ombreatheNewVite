import {
  Component,
  Suspense,
  useEffect,
  useRef,
  useState,
  memo,
} from "react";

class SectionErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("LazySection failed to load module chunk:", error);
    // If a chunk fails due to a new deployment, auto-reload once to fetch latest bundle
    if (
      error?.message?.includes("dynamically imported module") ||
      error?.message?.includes("Failed to fetch") ||
      error?.message?.includes("MIME type")
    ) {
      const lastReload = sessionStorage.getItem("chunk_reload_time");
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem("chunk_reload_time", now.toString());
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

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
        <SectionErrorBoundary>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </SectionErrorBoundary>
      )}
    </div>
  );
};

export default memo(LazySection);