import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

// EmptyList component, rendered when there's no items on the shopping list.
export default function EmptyList() {
    return (
        <div className="text-center empty-list padding-block-1">
            <h2 className='title--sm'>Empty list</h2>
            <h3 className='title--sm margin-block-1'><FontAwesomeIcon icon={faNoteSticky} /></h3>
            <p className='text--bold'>Your shopping list is empty. Add a new item to avoid forgetting your groceries!</p>
        </div>
    )
};