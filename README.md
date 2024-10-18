# Salary Discounts Calculator

Greetings, ATDEV Recruitment Department. In this Repository you'll find the Salary Discounts Calculator technical test. I'll be explaining in a video in the mail how it works and how it was developed. However here you can also find a quick summary of how it works.

Thank you for taking me into consideration and I hope to hear back from y'all!

## Expected Inputs.

### All Values are meant to be given in Dominican Peso (DOP). Positive Integer Inputs.

- **Gross Monthly Salary**: The Salary Discounts Calculator does both the Pre-Taxes (AFP and SFS) and Taxes (ISR) Discounts for you. So there's no need to calculate the Pre-Taxes discounts to get the Taxes Discounts.

- **Overtime Hours**: Overtime Hours are special in that they don't get Pre-Taxes discounts. They only go through the ISR.

- **Bonifications**: Just like Overtime Hours, no Pre-Taxes Discounts, only ISR.

## Outputs.

### Pre-Tax Discounts.
- **AFP**:  AFP (Administradora de Fondos de Pensiones) is a Law Benefit every Dominican Worker has a right to. It consists of a 2.87% monthly discount from **only** the **Gross Monthly Salary** which goes towards a Retirement Fund.
```typescript
const afp : number = gross * 0.0287;
```
- **SFS**: SFS (Seguro Familiar de Salud) is another Law Benefit, which is basically a Health Insurance. It consists of a 3.04% Monthly Discount.
```typescript
const sfs : number = gross * 0.0304;
```
- **Net Monthly Salary**: This is your salary *after* the Law Benefits are discounted from the Gross Monthly Salary which is also the one requested by the DGII (Direccion General de Impuestos Internos) for the purpose of taxations based on income (ISR).
```typescript
const netPreSalary : number = gross + OT + bonus - afp - sfs;
```

### Tax Discounts.
- **ISR Retentions**: ISR (Impuesto Sobre la Renta) is basically an Income Tax. This represents how much of your income is going to be retained by the government. To see how is the ISR paid based on your yearly income you can [Click Here](https://dgii.gov.do/publicacionesOficiales/bibliotecaVirtual/contribuyentes/isr/ISR%20Persona%20Fsica/3-Revista%20Impuesto%20Sobre%20la%20Renta%20(ISR)%20Universitarios.pdf). 
- **Monthly Salary after Taxes**: This is your Salary after the Pre-Tax and Tax Discounts.

### Extras.
#### For any additional details that are not expected to show on *every* paycheck.
- **Vacations Payment**: This is the amount you'd get paid for the 14 vacation days. It consist of your Gross Monthly Salary divided by 23.83 (Converts to Daily Salary) and multiplied by 14
```typescript
const vacationsPayment : number = (gross / 23.83) * 14;
```
- **Monthly Salary + Vacations**: This shows your Net Monthly Salary and Vacations Payment added together and after applying the ISR to the sum.
- **Monthly Salary + 13th Salary**: The 13th Salary is another Law Benefit. The employer is required to pay the sum of all the employee's monthly earnings divided by 12 by the end of a fiscal year. Since this calculator only takes **one** paycheck, the Overtime Hours and Bonifications are not counted for the 13th Salary calculation (However in a Real Life Scenario they are in fact taken into consideration). But for this example it adds your Gross Monthly Salary to your Net Monthly Salary and displays it on the screen.