import { useRef, useState } from 'react';
import { generateRandomName } from '../RandomID';

const useCheckboxes = (id?: string, idPrefix?: string) => {
  const [conditionalBoxes, setConditionalBoxes] = useState<string[]>([]);
  const boxIds = useRef<Record<string, string>>({});
  const boxReferences = useRef<string[]>([]);
  const boxCount = useRef<number>(0);

  const leaseReference = () => {
    const reference = generateRandomName();
    if (boxReferences.current.includes(reference)) {
      return leaseReference();
    }
    boxReferences.current.push(reference);
    return reference;
  };

  const unleaseReference = (reference: string): void => {
    const boxRefIndex = boxReferences.current.findIndex((ref) => ref === reference);
    if (boxRefIndex !== -1) {
      delete boxReferences.current[boxRefIndex];
    }
  };

  const setConditional = (reference: string, hasConditional: boolean) => {
    setConditionalBoxes((boxes) => {
      const currentHasConditional = boxes.includes(reference);
      if (currentHasConditional && !hasConditional) return boxes.filter((ref) => ref !== reference);
      if (!currentHasConditional && hasConditional) return [...boxes, reference];
      return boxes;
    });
  };

  const getBoxId = (reference: string): string => {
    if (reference in boxIds.current) {
      return boxIds.current[reference];
    }
    boxCount.current += 1;
    boxIds.current[reference] = `${idPrefix || id}-${boxCount.current}`;
    return boxIds.current[reference];
  };

  const resetBoxIds = () => {
    boxCount.current = 0;
    boxIds.current = {};
  };

  return {
    conditionalBoxes,
    leaseReference,
    unleaseReference,
    setConditional,
    getBoxId,
    resetBoxIds,
  };
};

export default useCheckboxes;
