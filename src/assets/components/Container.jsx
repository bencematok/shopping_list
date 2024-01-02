export default function Container({ children }) {

    // Standard container div with max-width to be in line with modern UX standards.
    return (
        <div className="container margin-block-1">
            {children}
        </div>
    )
}