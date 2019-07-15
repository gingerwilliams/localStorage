# Web Storage

Web storage is data stored locally in a user's browser.
*   Local storage: data with no expiration date that will persist after the browser window is closed.
*   Session storage - data that gets cleared after the browser window is closed
*   cookies - ?

## localStorage methods

| Method         | Description                      |
|:--------------:|------------------------------------|
| `setItem()`    | Add key and value to local storage |
| `getItem()`    | Retrieve a value by the key        |
| `removeItem()` | Remove an item by key              | 
| `clear()`      | Clear all storage                  | 

> localStorage // Storage {length: 0}

## Add Data to local Storage

Add data to localStorage by using the setItem() method.
`localStorage.setItem('key', 'value')`

> localStorage.setItem('name', 'ginger');
> localStorage // {name: "ginger", length: 1}

## Retrieve Data from local Storage

Retrieve the value of a particular key from local storage by using the getItem() method.

> localStorage.getItem('name');
> "ginger"

## Remove Data from local Storage
> localStorage.removeItem('name');
> localStorage.getItem('name');
> null 

## Clear Local Storage
> localStorage.clear();

## textContent
`ele.textContent` value is meant to be text only, not HTML
vs 
`ele.innerHTML` value can include tags

## Add `ele.textContent` to localStorage
-   the input value should be added to the localStorage as well as appear on the unordered list
-   also want to loop through all the existing local storage items and display them at the top of the list
-   Last, we want the "Clear All" button to remove all items from local storage

1. Create an empty array to start
2. Create a localStorage key called "items" with the array as a value
    -   localStorage only supports strings as values 
    -   Convert a data array to a string by JSON.stringify(array)
    -   To convert the contents of localStorage back into a data structure use JSON.parse();
3. push any new input value into the array
4. set the localStorage to the new, updated value

<!-- https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ -->



