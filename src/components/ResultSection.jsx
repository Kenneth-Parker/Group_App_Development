import React from 'react';
import PantryItemSelector from './PantryItemSelector';
import PantryList from './PantryList';
import EdamamList from './MealApi';

function ResultSection({ numberOfResultsShown, selectedItems, setSelectedItems }) {
  if (numberOfResultsShown === 10) {
    return (
      <div>
        
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={numberOfResultsShown}
        />
      </div>
    );
  } else if (numberOfResultsShown === 20) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 30) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={10}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 40) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 50) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={30}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 60) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={40}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 70) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={50}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 80) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={60}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 90) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={70}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else if (numberOfResultsShown === 100) {
    return (
      <>
        <PantryItemSelector
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <PantryList
          selectedItems={selectedItems}
          numberOfResultsShown={80}
        />
        <EdamamList
          selectedItems={selectedItems}
          numberOfResultsShown={20}
        />
      </>
    );
  } else {
    return null; 
  }
}

export default ResultSection;
