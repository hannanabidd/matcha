import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
interface IDataProps {
  id?: number;
  answer: string;
}

interface IQuiz {
  data: IDataProps[];
  setData?: Dispatch<SetStateAction<IDataProps[]>>;
}

export const QuizContext = createContext<IQuiz>({
  data: [],
});

interface IProps {
  children: React.ReactNode;
}

const QuizProvider: FC<IProps> = ({ children }) => {
  const [data, setData] = useState<IDataProps[]>([]);
  // console.log("data in context", data);
  return (
    <QuizContext.Provider value={{ data, setData }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
