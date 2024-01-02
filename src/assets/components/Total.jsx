// The sole purpose of this Total component is to display the total amount of items on the shopping list.
export default function Total({ total }) {

    return (
        <>
            <p className="text--bold total margin-block-1">Total: {total}</p>
        </>
    )
}