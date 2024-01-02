import Button from './Button';
import { faArrowRight, faArrowLeft, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

// The ListItem component is responsible for displaying an individual list item
// in the ShoppingList component.
export default function ListItem(props) {
    const { item, index, onIncrementClick, onDecrementClick, onCompleteClick } = props;

    const classes = clsx({
        'list-item': true,
        'completed': item.isComplete
    });

    return (
        <>
            <li className={classes}>
                <div className='title-container'>
                    <Button data-index={index} onClick={onCompleteClick} variant='btn-checkbox'>{!item.isComplete ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faX} />}</Button>
                    <span className='text--bold item-title padding-inline-half'>
                        {item.name}
                    </span>
                </div>
                <div className='amount-counter'>
                    <Button variant='btn-left padding-inline-half' data-index={index} onClick={onDecrementClick} disabled={item.isComplete}><FontAwesomeIcon icon={faArrowLeft} /></Button>
                    <div className='counter'>
                        {item.amount}
                    </div>
                    <Button variant='btn-right padding-inline-half' data-index={index} onClick={onIncrementClick} disabled={item.isComplete}><FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </li>
        </>
    )
}