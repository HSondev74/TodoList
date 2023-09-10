const [input, setInput] = useState("");
const [isUpdate, setIsUpdate] = useState(false);
const [idUp, setIdUp] = useState("");
const [data, setData] = useState([]);

     const handleSubmit = (e) => {
          e.preventDefault();
          setData([
               ...data,
               {
                    id: new Date().getTime(),
                    todo: input,
                    isComplete: false,
               },
          ]);
          setInput("");
     };
     const handleUpdate = (e) => {
          e.preventDefault();
          setData((prev) => {
               return prev.map((todo) =>
                    todo.id === idUp ? { ...todo, todo: input } : todo
               );
          });
          setIdUp("");
          setIsUpdate(false);
          setInput("");
     };

     const clickCheckUpdate = (todo) => {
          setIsUpdate(!isUpdate);
          setIdUp(todo.id);
          setInput(todo.todo);
     };
     const removeTodo = (id) => {
          setData((prev) => prev.filter((todo) => todo.id !== id));
     };

     const completeHandler = (id) => {
          setData((prev) =>
               prev.map((todo) =>
                    todo.id === id
                         ? { ...todo, isComplete: !todo.isComplete }
                         : todo
               )
          );
     };
