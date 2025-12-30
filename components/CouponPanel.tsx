'use client';

export default function CouponPanel() {
  return (
    <div style={{
      backgroundColor: 'var(--color-coupon-bg)',
      color: 'var(--color-coupon-text)',
      padding: 'var(--spacing-md) 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{
          margin: 0,
          fontSize: '0.95rem',
          fontWeight: 500,
          letterSpacing: '0.3px'
        }}>
          🌿 Limited Time: <span style={{ 
            color: 'var(--color-coupon-accent)',
            fontWeight: 600
          }}>Free Shipping</span> on orders over $50
        </p>
      </div>
    </div>
  );
}
