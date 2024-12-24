import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";


function App() {

    let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }


    const [alertVisible, setAlertVisible] = useState(false);



    return <div>

        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>


        {/*<Alert onClose={() => setAlertVisible(false)}>*/}
        {/*    Hello <span>world!</span>*/}
        {/*</Alert>*/}

        <Button onClick={() => console.log("Clicked")}>My Button</Button>
        <Button color="danger" onClick={() => console.log("Clicked")}>My Button</Button>




        { alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Closable Alert</Alert>}
        <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>

    </div>;
}

export default App;