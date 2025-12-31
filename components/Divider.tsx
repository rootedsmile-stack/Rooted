export default function Divider() {
  return (
    <>
      <div className="divider" />
      <style jsx>{`
        .divider {
          border-top: 1px solid var(--color-body-border);
          opacity: 0.6;
          margin: 0;
        }
      `}</style>
    </>
  );
}
