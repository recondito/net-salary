import { useState } from "react";
import { Results } from "./Results";
import '../styles/App.css';

export const Calculator : React.FC = () => {

    const [GrossMonthly, setGrossMonthly]  = useState(0);
    const [OvertimeHours, setOvertimeHours] = useState(0);
    const [Bonifications, setBonifications] = useState(0);
    const [ShowResults, setShowResults] = useState(false)

    const handleSubmit = ( event  : any) => {
        event.preventDefault();
        setGrossMonthly(event.target[0].value);
        setOvertimeHours(event.target[1].value);
        setBonifications(event.target[2].value);
        setShowResults(true);
        console.log('test');
    }

  return (

    <>
        <div className="calculatorContainer">
        <h1>Salary Discounts Calculator</h1>
            <div className="calculatorForm">
            <form onSubmit={ (event) => handleSubmit(event) }>

                <p>Gross Monthly Salary (In DOP). </p>
                <input 
                    type="number"
                    placeholder="Gross Monthly Salary (In DOP)."
                    required
                /> <br />

                <p>Overtime Hours (In DOP). </p>
                <input 
                    type="number"
                    placeholder="Overtime Hours (In DOP)."
                    required
                /> <br />

                <p>Bonifications (In DOP). </p>
                <input 
                    type="number"
                    placeholder="Bonifications (In DOP)."
                    required
                /> <br />

                <br />

                <button type="submit">Calculate</button>
                
            </form>
            </div>
        </div>
        {ShowResults && <div className="calculatorContainer">
            <Results GrossMonthly={GrossMonthly} OvertimeHours={OvertimeHours} Bonifications={Bonifications}/>
        </div>}
    </>
    

    

  )
}
