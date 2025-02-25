import useFindPosition from './useFindPosition';

/**
 * Custom hook to set fixed position of options depending on parent position on screen.
 * @param { React.useRef } parentRef refers to the parent element.
 * @returns { Object } style document style object
 */
const usePositionFixed = (parentRef) => {
  const parentPosition = useFindPosition(parentRef);

  const maxHeight = 300;
  const style = { position: 'Fixed', maxHeight };

  if (
    parentPosition?.isBottom &&
    !(window.innerHeight - (parentPosition.top + maxHeight) > 0)
  ) {
    // Position the dropdown above the parent
    style.bottom = `${window.innerHeight - parentPosition.top - 195}px`;
  } else {
    // Position the dropdown below the parent
    style.top = `${parentPosition.bottom - 165}px`;
  }

  if (parentPosition?.width) style.width = `${parentPosition?.width}px`;

  return style;
};

export default usePositionFixed;
