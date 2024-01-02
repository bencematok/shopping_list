import EmptyList from './EmptyList';
import ListItem from './ListItem';

// The ShoppingList component renders the EmptyList component if the shoppingList array's length is 0.
// Otherwise we display a list of the actual shoppingList items.
export default function ShoppingList(props) {
    const { shoppingList, onIncrementClick, onDecrementClick, onCompleteClick } = props;

    return (
        <>
            {shoppingList.length === 0 && <EmptyList />}
            {shoppingList.length !== 0 &&
                <ul>
                    {shoppingList.map((item, index) => <ListItem key={index} index={index} item={item} onIncrementClick={onIncrementClick} onDecrementClick={onDecrementClick} onCompleteClick={onCompleteClick} />)}
                </ul>}
        </>
    )
}