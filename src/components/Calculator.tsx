import { useState } from "react";
import { Results } from "./Results";

export const Calculator : React.FC = () => {

    const [GrossMonthly, setGrossMonthly]  = useState(0);
    const [OvertimeHours, setOvertimeHours] = useState(0);
    const [Bonifications, setBonifications] = useState(0);

    const handleSubmit = ( event  : any) => {
        event.preventDefault();
        setGrossMonthly(event.target[0].value);
        setOvertimeHours(event.target[1].value);
        setBonifications(event.target[2].value);
    }

  return (

    <div className="calculatorContainer">
        <form onSubmit={ (event) => handleSubmit(event) }>
            Gross Monthly Salary (In DOP).
            <input 
                type="number"
                placeholder="Gross Monthly Salary (In DOP)."
                required
            /> <br />
            Overtime Hours (In DOP).
            <input 
                type="number"
                placeholder="Overtime Hours (In DOP)."
                required
            /> <br />
            Bonifications (In DOP).
            <input 
                type="number"
                placeholder="Bonifications (In DOP)."
                required
            /> <br />

            <button type="submit">Calculate</button>
        </form>

        <Results GrossMonthly={GrossMonthly} OvertimeHours={OvertimeHours} Bonifications={Bonifications} Visible={true}/>
    </div>

    

  )
}
