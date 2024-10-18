interface ResultsProps {
    GrossMonthly: number,
    OvertimeHours: number,
    Bonifications: number
}

export const Results = (props: ResultsProps) => {
        const {GrossMonthly, OvertimeHours, Bonifications} = props;

        // Convert form input to number.
        const gross : number = Number(GrossMonthly);
        const OT : number = Number(OvertimeHours);
        const bonus : number = Number(Bonifications);

        // Calculate Pre-Tax Discounts.
        const afp : number = gross * 0.0287;
        const sfs : number = gross * 0.0304;
        const netPreSalary : number = gross + OT + bonus - afp - sfs;
        // const hourlySalary = (props.GrossMonthly / 23.83) / 8;

        // Vacations Payment.
        const vacationsPayment : number = (gross / 23.83) * 14;

        // ISR Calculations.
        const isr = (salary : number) => {
            let taxDetails = {
                netSalary: (salary) * 12,
                isrDeduction: 0,
            }

            let temp = taxDetails.netSalary;

            if (temp >= 867123.01) {
                console.log(temp);
                taxDetails.isrDeduction += 79776.00 + (temp - 867123.01) * 0.25;
            }
            
            if (temp >= 624329.01 && temp < 867123.01) {
                taxDetails.isrDeduction += 31216.00 + (temp - 624329.01) * 0.20;
            }

            if (temp >= 416220.01 && temp < 624329.01) {
                taxDetails.isrDeduction += (temp - 416220.01) * 0.15;
            }

            taxDetails.netSalary = (taxDetails.netSalary - taxDetails.isrDeduction) / 12
            taxDetails.isrDeduction /= 12;

            return taxDetails;
        }

  return (
    <div className="resultsContainer">
        <h2>Pre-Tax Discounts</h2>
        <p>AFP: ${afp.toFixed(2)}</p>
        <p>SFS: ${sfs.toFixed(2)}</p>
        <p>Net Monthly Salary: ${netPreSalary.toFixed(2)}</p>

        <h2>Tax Discounts</h2>
        <p>ISR Retentions: ${isr(netPreSalary).isrDeduction.toFixed(2)}</p>
        <p>Monthly Salary after Taxes: ${isr(netPreSalary).netSalary.toFixed(2)}</p>

        <h2>Extras</h2>
        <p>Vacations Payment: ${vacationsPayment.toFixed(2)}</p>
        <p>Monthly Salary + Vacations: ${isr(netPreSalary + vacationsPayment).netSalary.toFixed(2)}</p>
        <p>Monthly Salary + 13th Salary: ${(isr(netPreSalary).netSalary + gross).toFixed(2)}</p>
    </div>
  )
}
