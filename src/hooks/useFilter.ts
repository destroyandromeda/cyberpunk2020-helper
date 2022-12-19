import { ProgramClass, ProgramClassOptions, programs } from "data";
import { useEffect, useState } from "react";

export function useFilter() {
  const [types, setTypes] = useState<ProgramClass[]>([]);
  const [power, setPower] = useState<string[]>([]);
  const [memoryUnits, setMemoryUnits] = useState<string[]>([]);
  const [prog, setProg] = useState(programs);

  useEffect(() => {
    setProg([
      ...programs
        .filter((program) =>
          types.length ? types.includes(program.class) : program
        )
        .filter((program) =>
          power.length
            ? power.map((p) => Number(p)).includes(program.power)
            : program
        )
        .filter((program) =>
          memoryUnits.length
            ? memoryUnits.map((p) => Number(p)).includes(program.memoryUnits)
            : program
        ),
    ]);
  }, [types, power, memoryUnits]);

  const selectTypes = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions =
      event.currentTarget.selectedOptions ?? ([] as typeof ProgramClassOptions);

    const toSetTypes = [];

    for (let i = 0; i < selectedOptions.length; i++) {
      toSetTypes.push(selectedOptions[i].value as ProgramClass);
    }

    setTypes(toSetTypes);
  };

  const selectPower = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions ?? [];

    const toSet = [];

    for (let i = 0; i < selectedOptions.length; i++) {
      toSet.push(selectedOptions[i].value);
    }

    setPower(toSet);
  };
  const selectMemoryUnits = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions ?? [];

    const toSet = [];

    for (let i = 0; i < selectedOptions.length; i++) {
      toSet.push(selectedOptions[i].value);
    }

    setMemoryUnits(toSet);
  };

  return {
    types,
    selectTypes,
    power,
    selectPower,
    memoryUnits,
    selectMemoryUnits,
    prog,
    setProg,
  };
}
