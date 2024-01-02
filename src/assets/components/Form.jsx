import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

// Form component for adding items to the shopping list.
export default function Form(props) {
    // Props are deconstructed for easier readability.
    const { item, onNameChange, onFormSubmit } = props;

    return (
        <>
            <form className='margin-block-1' onSubmit={onFormSubmit} >
                <label htmlFor="item" className='form-label'>Add item:</label>
                <div className="form-input">
                    <input value={item} onChange={onNameChange} type="text" name='item' id='item' />
                    <Button type='submit' variant='btn-add'><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
            </form>
        </>
    )
}