export default function Card({ children, noPadding }) {
    let classes = "mb-5 overflow-hidden";
    
    // Remove padding classes if noPadding is true
    if (!noPadding) {
      classes += ' p-2';
    }
    
    // Add classes to remove margin and make the card touch the edges
    classes += ' mx-0 mt-0';
    
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
  