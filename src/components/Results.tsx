interface ResultsProps {
    GrossMonthly: number,
    OvertimeHours: number,
    Bonifications: number,
    Visible: boolean
}

export const Results = (props: ResultsProps) => {
        const afp : number = props.GrossMonthly * 0.0287;
        const sfs : number = props.GrossMonthly * 0.0304;
        const netPreSalary = props.GrossMonthly - afp - sfs;
        const hourlySalary = (props.GrossMonthly / 23.83) / 8

        const isr = () => {
            let taxDetails = {
                netSalary: (netPreSalary + props.OvertimeHours + props.Bonifications) * 12,
                isrDeduction: 0
            }

            let temp = taxDetails.netSalary;

            if (temp >= 867123.01) {
                taxDetails.isrDeduction += 79776 + (temp - 867123.01) * 0.25;
                temp -= temp - 867123.01
            }
            
            if (temp >= 624329.01 && temp < 867123.01) {
                taxDetails.isrDeduction += 31216 + (temp - 624329.01) * 0.20;
                temp -= temp - 624329.01
            }

            if (temp >= 416220.01 && temp < 624329.01) {
                taxDetails.isrDeduction += (temp - 416220.01) * 0.15;
                temp -= temp - 416220.01
            }

            taxDetails.netSalary = (taxDetails.netSalary - taxDetails.isrDeduction) / 12
            taxDetails.isrDeduction /= 12;

            return taxDetails;
        }

  return (
    <div className="resultsContainer" >
        <h2>Pre-Tax Discounts</h2>
        <p>AFP: ${sfs.toFixed(2)}</p>
        <p>SFS: ${afp.toFixed(2)}</p>
        <p>Net Monthly Salary: ${netPreSalary.toFixed(2)}</p>
        <h2>Tax Discounts</h2>
        <p>ISR Retentions: ${isr().isrDeduction.toFixed(2)}</p>
        <p>Monthly Salary after Taxes: ${isr().netSalary.toFixed(2)}</p>
    </div>
  )
}
