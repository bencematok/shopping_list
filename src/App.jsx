import { useState, useEffect } from 'react'
import Container from './assets/components/Container'
import Form from './assets/components/Form';
import Message from './assets/components/Message';
import ShoppingList from './assets/components/ShoppingList';
import Total from './assets/components/Total';
import './app.css';

// As the shoppingList state needs to be accessed by multiple components, it's defined on the highest level.
// Another solution to provide access to the shoppingList state for the components that need it would be to
// define a context and use that instead.
function App() {
  const [item, setItem] = useState('');
  const [message, setMessage] = useState();
  const [shoppingList, setShoppingList] = useState(() => JSON.parse(localStorage.getItem('shoppingList')) ?? []);
  const [total, setTotal] = useState(0);

  // Changing the item state every time the input field's value changes.
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  // Submitting the form adds the item to the shopping list with a default value of 1.
  // The item field is then reset to an empty string.
  // If the item field is empty, the item isn't added to the list.
  // Similarly, if the item is already on the list, it's not added once again.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!item) {
      setMessage({ success: false, message: 'Item field cannot be empty!' });
    } else if (shoppingList.find(listItem => listItem.name === item)) {
      setMessage({ success: false, message: 'Item is already on the list!' });
    } else {
      setMessage({ success: true, message: `Successfully added ${item} to the list.` });
      setShoppingList([...shoppingList, { name: item, amount: 1, isComplete: false }]);
    };
    setItem('');
  };

  // A reducer function sets the total state to the total amount of items on the list.
  // If the item is completed, its amount value does not count into the total.
  const handleTotalAmount = () => {
    setTotal(shoppingList.reduce((total, current) => {
      if (!current.isComplete) {
        return total + current.amount;
      } else {
        return total;
      };
    }, 0));
  };

  // Saving the shopping list array to the local storage.
  // The array is turned into a string, as arrays, objects cannot be saved otherwise.
  const handleSaveStorage = () => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  };

  // Incrementing individual list item's amount.
  // As map returns a new array, React's rerender function retriggers.
  // If the index of the item is equal to the index contained in the dataset, we modify the item.
  // Otherwise the item is returned.
  // We deconstruct the item to amount and the rest of the key-value pairs, and assign the new
  // value of amount + 1 to the new amount key.
  const handleIncrementClick = (event) => {
    setShoppingList(shoppingList.map(item => {
      if (shoppingList.indexOf(item) === Number.parseInt(event.target.dataset.index)) {
        const { amount, ...rest } = item;
        return { ...rest, amount: amount + 1 };
      } else {
        return item;
      };
    }));
  };

  // Decrementing the individual list item's amount.
  // Works on the same idea as the increment, except the new amount is equal to amount - 1.
  const handleDecrementClick = (event) => {
    if (shoppingList[event.target.dataset.index].amount > 1) {
      setShoppingList(shoppingList.map(item => {
        if (shoppingList.indexOf(item) === Number.parseInt(event.target.dataset.index)) {
          const { amount, ...rest } = item;
          return { ...rest, amount: amount - 1 };
        } else {
          return item;
        };
      }));
    } else {
      setShoppingList(shoppingList.filter(item => shoppingList.indexOf(item) !== Number.parseInt(event.target.dataset.index)));
      setMessage({ success: true, message: 'Item successfully deleted from the list.' });
    };
  };

  // This function changes the isComplete boolean to the opposite, if the dataset index matches
  // the item's index in the shopping list.
  const handleCompleteClick = (event) => {
    setShoppingList(shoppingList.map(item => {
      if (shoppingList.indexOf(item) === Number.parseInt(event.target.dataset.index)) {
        const { isComplete, ...rest } = item;
        return { ...rest, isComplete: !isComplete };
      } else {
        return item;
      };
    }));
  };

  // We call the handleTotalAmount function when the shoppingList state changes.
  useEffect(handleTotalAmount, [shoppingList]);
  // We also call the handleSaveStorage function when the shoppingList state changes.
  useEffect(handleSaveStorage, [shoppingList]);

  return (
    <Container>
      <div className='shopping-list'>
        <h1 className='title text-center margin-block-1'>Shopping List</h1>
        <Form item={item} onNameChange={handleItemChange} onFormSubmit={handleFormSubmit} />
        {message && <Message message={message} />}
        <ShoppingList shoppingList={shoppingList} onIncrementClick={handleIncrementClick} onDecrementClick={handleDecrementClick} onCompleteClick={handleCompleteClick} />
        <Total total={total} />
      </div>
    </Container>
  )
}

export default App
