export default function Card({ children, noPadding }) {
    let classes = " mb-5 overflow-hidden"; // Remove background classes
    if (!noPadding) {
      classes += ' p-2';
    }
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }