import { FC, useState } from "react";
import { AmountOfInputs, FormInput } from "../../../Types";

interface AddExerciseProps {}

const AddExercise: FC<AddExerciseProps> = ({}) => {
  const [amountOfInputs, setAmountOfInputs] = useState<AmountOfInputs[]>([
    { name: "ExerciseType", type: "text" },
    { name: "Location", type: "text" },
    { name: "Duration", type: "number" },
    { name: "Calories", type: "number" },
    { name: "TimeAndDatee", type: "datetime-local" },
    { name: "Distance", type: "number" },
  ]);

  const [formInput, setFormInput] = useState<FormInput>({
    ExerciseType: "",
    Location: "",
    Duration: "",
    Calories: "",
    TimeAndDate: "",
    Distance: "",
  });

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="">
      <h1 className="text-2xl text-white text-center">Add new exercise</h1>

      <form className="flex flex-col items-center justify-center">
        {amountOfInputs.map((inputType: AmountOfInputs, i: number) => {
          return (
            <div key={i} className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">{inputType.name}</span>
              </label>
              <input
                type={inputType.type}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                required
                name={inputType.name}
                onChange={handleFormInput}
              />
            </div>
          );
        })}
        <button className="bg-white text-[#21445d] font-semibold mt-4 px-8 py-3 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
